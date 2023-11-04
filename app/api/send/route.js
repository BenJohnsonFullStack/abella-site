import { Resend } from "resend";
import { Test } from "@/emails";

export async function POST(req) {
  // get subscriber and format name for email
  const subscriber = await req.json();
  const formattedName =
    subscriber.first_name.charAt(0).toUpperCase() +
    subscriber.first_name.slice(1);

  try {
    // Resend instance
    const htmlEmail = new Resend(process.env.RESEND_API_KEY);

    const data = await htmlEmail.emails.send({
      from: "Abella Total Health <contact@abella-health.com>",
      to: `${subscriber.email}`,
      subject: `Welcome, ${formattedName}`,
      react: <Test first_name={formattedName} />,
    });

    const confirmationEmail = new Resend(process.env.RESEND_API_KEY);

    await confirmationEmail.emails.send({
      from: "Abella Admin <contact@abella-health.com>",
      to: "sherri.johnston3626@gmail.com",
      subject: "New Member Sign-Up",
      html: `
      First Name: ${subscriber.first_name}<br />
      Last Name: ${subscriber.last_name}<br />
      Email: ${subscriber.email}<br />
      Phone Number: ${subscriber.phone}<br />
      Street Address: ${subscriber.street_address}<br />
      City: ${subscriber.city}<br />
      State: ${subscriber.state}<br />
      Zip Code: ${subscriber.zip_code}<br />
      Date of Birth: ${subscriber.date_of_birth}
      `,
    });

    return new Response(JSON.stringify(data), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify(error.message), { status: 500 });
  }
}
