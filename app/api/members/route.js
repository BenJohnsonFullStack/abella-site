import { Subscriber } from "@/models";

export const POST = async (req, res) => {
  try {
    const newSubscriber = req.body();
    await Subscriber.addSubscriber(newSubscriber);
    res.status(201).json({
      message:
        "Thanks for your submission! Someone from our team will reach out to you as soon as possible.",
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
