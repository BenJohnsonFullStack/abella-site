// import { Subscriber } from "@/models";
import { prisma } from "@/lib/prisma";

export const POST = async (req, res) => {
  const member = await prisma.Subscriber.findFirst({
    where: {
      email: "test@test.com",
    },
  });
  return new Response(JSON.stringify(member), { status: 201 });
  // console.log(member);
  //   try {
  //     const newSubscriber = req.body();
  //     // await Subscriber.addSubscriber(newSubscriber);
  //     res.status(201).json({
  //       message:
  //         "Thanks for your submission! Someone from our team will reach out to you as soon as possible.",
  //     });
  //   } catch (err) {
  //     res.status(500).json({ message: err.message });
  //   }
};
