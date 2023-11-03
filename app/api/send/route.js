import { Resend } from "resend";
import { Test } from "@/emails";

export async function POST(req) {
  const { first_name, email } = await req.json();
  const formattedName =
    first_name.charAt(0).toUpperCase() + first_name.slice(1);

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    const data = await resend.emails.send({
      from: "Abella Total Health <contact@abella-health.com>",
      to: `${email}`,
      subject: `Welcome, ${formattedName}`,
      react: <Test first_name={formattedName} />,
    });

    return new Response(JSON.stringify(data), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify(error.message), { status: 500 });
  }
}
