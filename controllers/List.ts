import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

async function Create(req: Request, res: Response) {
  const { listName, userId } = req.body.data;
  const { itemName, date } = req.body.data.items.create;

  try {
    const result = await prisma.lists.create({
      data: {
        listName,
        userId,
        items: {
          create: [
            {
              itemName,
              date
            },
          ],
        },
      },
      include: {
        items: true,
      },
    });
    return res.status(200).json(result);
  } catch (error) {
    console.error("Error creating acciunt:", error);
    res.status(500).json({ message: "Error creating account", error });
  }
}
const ListControl = { Create };

export default ListControl;
