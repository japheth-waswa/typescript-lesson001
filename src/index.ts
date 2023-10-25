import debug from 'debug';
import express from 'express';
//debug
// debug.formatters.O = (v) => utilInspection(v);
const debugx = debug("tutorial001:index");

const app = express();

app.listen(4000, () => {
    debugx({ name: "peter", location: 'panningxxx' })
    console.log(`Server running on port:- ${process.env.APP_PORT}`)
})