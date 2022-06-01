import express from 'express'
import cors from 'cors'

const app = express()
const port = 3001

app.use(cors())

app.get('/', (req, res) => res.send('Express + TypeScript Server!'))

app.listen(port, () => console.log(`⚡️[server]: Server is running at http://localhost:${port}`))
