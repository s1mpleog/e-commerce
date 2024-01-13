// // Import necessary modules and dependencies
// const { PrismaClient } = require("@prisma/client");
// const prisma = new PrismaClient();

// // Function to seed the database with product data
// async function seed() {
//   // Dummy user ID for testing
//   const dummyUserId2 = "dummyUserId2";
//   // Product 2
//   await prisma.product.create({
//     data: {
//       userId: dummyUserId2,
//       title: "PlayStation 5 Console - Marvel’s Spider-Man 2 Bundle (slim)",
//       price: 499.0,
//       description:
//         "Bundle includes Marvel’s Spider-Man 2 full game digital voucher...",
//       imageUrl: [
//         "https://example.com/image3.jpg",
//         "https://example.com/image4.jpg",
//       ],
//       category: "Electronics",
//     },
//   });
//   // Close the Prisma client connection
//   await prisma.$disconnect();
// }

// // Call the seed function
// seed();
