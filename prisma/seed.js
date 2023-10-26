const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  //check if subscriber exists by email
  const user = await prisma.Subscriber.upsert({
    where: {
      email: "test@test.com",
    },
    //if exists, do nothing
    update: {},
    //else, create this new subscriber
    create: {
      first_name: "Ben",
      last_name: "Johnson",
      email: "test@test.com",
      phone: "4783945229",
      street_address: "889 Peachtree Dr",
      city: "Columbus",
      state: "GA",
      zip_code: "31906",
      date_of_birth: "09-08-1987",
    },
  });
  console.log({ user });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })

  .catch(async (e) => {
    console.error(e);

    await prisma.$disconnect();

    process.exit(1);
  });
