// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import db from "../../db"

export default function handler(req, res) {
  db.query('SELECT NOW()', (err, res) => {
    console.log(err, res)
    client.end()
  })
  res.status(200).json({ name: 'John Doe' })
}
