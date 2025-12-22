import dotenv from 'dotenv';
import connectDB from './db/db.connect.js';
import { app } from './app.js';

dotenv.config({
    path: "./.env"
});

const PORT = process.env.PORT || 4000;

connectDB()
.then(
    () => {
        app.listen(PORT, (req,res) => {
            console.log(`App runnign on the port ${PORT}`);
        });
        app.on("error", (error) => {
            console.log(error);
        });
    }
)
.catch((error) => {
    console.log("Post connection promise object error : ", error);
})

