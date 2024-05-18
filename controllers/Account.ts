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
      const data = await prisma.account.findMany();
      return res.json(data); 
    } catch (error) {
      console.error('Error fetching data:', error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }

const AccountControl = {Create, Get};

export default AccountControl;