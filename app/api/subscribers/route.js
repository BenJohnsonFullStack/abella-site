// import PrismaClient instance
import { prisma } from "@/lib/prisma";

export const POST = async (req) => {
  try {
    // store newSubscriber in variable
    const newSubscriber = await req.json();

    // access Subscriber model
    const subscriber = await prisma.Subscriber.upsert({
      // check if email exists
      where: {
        email: newSubscriber.email,
      },
      // if exists, do nothing
      update: {},
      // otherwise, create newSubscriber in database
      create: newSubscriber,
    });
    // return newSubscriber and status
    return new Response(JSON.stringify(subscriber), { status: 201 });
  } catch (err) {
    return new Response(JSON.stringify(err.message), {
      status: 500,
    });
  }
};
