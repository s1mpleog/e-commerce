import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs";

export const addUserToDb = async () => {
  try {
    const user = await currentUser();
    if (!user) return null;

    await db.user.create({
      data: {
        email: user?.emailAddresses[0].emailAddress,
        firstName: user?.firstName || "",
        lastName: user?.lastName,
        id: user.id,
        imageUrl: user?.imageUrl,
      },
    });
  } catch (error) {
    return { message: "Something went wrong" };
  }
};
