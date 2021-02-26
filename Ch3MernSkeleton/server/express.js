import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import compress from 'compression'
import cors from 'cors'
import helmet from 'helmet'

const app = express()
/* configure express */
export default app

/* configure express app with body-parser */
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
/* configuring express app with cookieParser */
app.use(cookieParser())
/* configuring express app with compress */
app.use(compress())
/*configuring express app with helmet */
app.use(helmet())
/* configuring express app with cors */
app.use(cors())