import app from "./app";
import connectDB from "./database";

const start = () => {
    app.listen(app.get("port"), () => console.log("Server running at port", app.get("port")));
    connectDB();
}

start();