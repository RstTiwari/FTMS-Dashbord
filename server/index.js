import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import helmet from "helmet";
import morgan from "morgan";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import clientRoutes from "./routes/client.js";
import salesRoutes from "./routes/sales.js";
import generalRoutes from "./routes/general.js";
import managmentRoutes from "./routes/managment.js";
import auth from "./routes/auth.js";
import appRoutes from "./routes/appRoutes.js";

/**
 * Configration
 */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());


// app.use(
//     cors({
//         origin: process.env.myfac8ryFronendUrl,
//     })
// );

app.use(cookieParser());

/**
 * Configratrions of Routes
 */

app.use("/auth", auth);
app.use("/app", appRoutes);

app.use("/client", clientRoutes);
app.use("/sales", salesRoutes);
app.use("/mangament", managmentRoutes);
app.use("/general", generalRoutes);

const Port = process.env.PORT || 5001;



mongoose
    .connect(process.env.MDURL, {
        useUnifiedTopology: true,
    })
    .then(() => {
        app.listen(Port, () => {
            console.log(` Server is running on the port ${Port}`);
        });

    })
    .catch((e) => {
        console.log("Data base connection failed" + e);
    });
