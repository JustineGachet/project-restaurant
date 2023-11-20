const express = require("express");
const restoRoutes = require ('./src/restaurant/routes');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors({
    origin: 'http://localhost:4200',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
}));
app.use(express.json());


app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use("/api/v1/restaurant", restoRoutes);

app.listen(port, () => console.log(`app listening on port ${port}`));
