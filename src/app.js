import * as express from 'express';
import * as bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlenconded({ extended: true }));



const PORT = procces.env.PORT || 3000;
app.listen(PORT, () => console.log('App is listnening on port `{PORT}`'));