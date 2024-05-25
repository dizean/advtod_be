import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

async function Create(req: Request, res: Response) {
    const {username,password} = req.body.data
    try{    
            const result = await prisma.account.create({
                data: {
                    username,
                    password
                },
            });
        return res.status(200).json(result);
    }
    catch(error){
        console.error('Error creating acciunt:', error);
        res.status(500).json({ message: 'Error creating account', error });
    }
}
async function Get(req: Request, res: Response) {
    try {
      const result = await prisma.account.findMany();
      return res.json(result);
    } catch (error) {
      console.error('Error fetching data:', error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }

// async function Login(req: Request, res: Response) {
//   const { username, password } = req.body.data;
//   const result = await prisma.account.findFirst({
//     where: {
//       username,
//       password,
//     },
//   });
//   if (!result) {
//     return res.json({ message: "No account found" });
//   } else {
//     return res.json({ message: "Well well well" });
//   }
// }
async function Login(req: Request, res: Response) {
  return res.json({ message: 'Hello sir uwu' });
}



async function Test(req: Request, res: Response) {
    return res.json({ message: 'Hello sir uwu' });
  }
const AccountControl = {Create, Get, Test, Login};

export default AccountControl;