import * as express from 'express';
import * as bodyParser from 'body-parser';
import morgan from 'morgan'

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlenconded({ extended: true }));



const PORT = procces.env.PORT || 3000;
app.listen(PORT, () => console.log('App is listnening on port `{PORT}`'));