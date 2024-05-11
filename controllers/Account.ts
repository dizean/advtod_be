import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

async function Create(req: Request, res: Response) {
    const account = req.body
    try{    
            const result = await prisma.account.create({
                data: {
                    username: account.username,
                    password: account.password
                },
            });
            return result;
        res.status(200).json(result);
    }
    catch(error){
        console.error('Error creating acciunt:', error);
        res.status(500).json({ message: 'Error creating account', error });
    }
}


const AccountControl = {Create};

export default AccountControl;