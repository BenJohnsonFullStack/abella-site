export const GET = (req, res) => {
  try {
    res.status(200).json({
      message:
        "Thanks for your submission! Someone from our team will reach out to you as soon as possible.",
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
