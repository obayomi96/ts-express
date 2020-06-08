import express, {Application, Request, Response, NextFunction} from 'express'

const app: Application = express()

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome User')
});

app.listen(5000, () => console.log('running on port 5000'))
