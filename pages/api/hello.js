// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import db from "../../db"

export default async function handler(req, res) {
  const result = await db.query('SELECT NOW()')
  console.log(result.rows);
  res.status(200).json({ name: 'John Doe' })
}
