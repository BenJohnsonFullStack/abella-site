const db = require("@/data/db-config");

const getSubscribers = async () => {
  return db("subscribers");
};

const addSubscriber = async (newSubscriber) => {
  const result = await db("subscribers").insert(newSubscriber);
  return result;
};

module.exports = {
  getSubscribers,
  addSubscriber,
};
