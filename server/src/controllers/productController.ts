import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getProducts = async (
  req: Request,
  res: Response
): Promise<void> => {
  try{
        const search = req.query.search?.toString();
        const products = await prisma.products.findMany({
            where: {
                name: {
                    contains: search
                }
            }
        })
  }
  catch (error) {
    res.status(500).json({ message: "Error retrieving products" });
  }
};