import { Client } from 'pg'
const { username, host, dbname, password, port } = JSON.parse(process.env.NEXTJSCOPILOTCLUSTER_SECRET)

const db = new Client({
  user: username,
  host: host,
  database: dbname,
  password: password,
  port: port
})
db.connect()

export default db 