import dotenv from 'dotenv'

dotenv.config()
import jwt from "jsonwebtoken";
import { Router } from "express";
import db from "../models";
const router = Router();

const posts = [
    {
      username: 'Kyle',
      title: 'Post 1'
    },
    {
      username: 'Jim',
      title: 'Post 2'
    }
  ]
  
  // router.get('/posts', authenticateToken, (req, res) => {
  //   res.json(posts.filter(post => post.username === req.user.name))
  // })
  
  function authenticateToken(req: { headers: { [x: string]: any; }; user: string | jwt.JwtPayload | undefined; }, res: { sendStatus: (arg0: number) => void; }, next: () => void) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401)
  
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET as string, (err: any, user: string | jwt.JwtPayload | undefined) => {
      console.log(err)
      if (err) return res.sendStatus(403)
      req.user = user
      next()
    })
  }

export default router