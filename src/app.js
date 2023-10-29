import express from "express";
import productsRouter from "./routes/products.router.js";
import cartRouter from "./routes/carts.router.js"
import viewsRouter from "./routes/views.router.js"
import { engine } from "express-handlebars";
import { __dirname } from "./utils.js";
import { Server } from "socket.io";
// RealTimeProducts // import { manager as productManager } from "./dao/managersFS/ProductManager.js";
import "./db/configDB.js";
import socketChatServer from "./listeners/socketChatServer.js";

const port = 8080;
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'))

// handlebars 

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', __dirname + '/views')

// routes

app.use("/api/views", viewsRouter);
app.use("/api/products", productsRouter);
app.use("/api/carts", cartRouter);


const httpServer = app.listen(port, () => {
    console.log("Listening on port 8080");
});

const socketServer = new Server(httpServer);
socketChatServer(socketServer);


// Real Time Products //
// socketServer.on("connection", (socket) => {
//     console.log(`Client Connected: ${socket.id}`);

//     socket.on("addProduct", (product) => {
//         try {
//             productManager.addProduct(product.title, product.description, product.price, product.thumbnail, product.code, product.stock);
//             socketServer.emit("productUpdate");
//         } catch (error) {
//             console.log(error);
//         }
//     });

//     socket.on("delById", (id) => {
//         productManager.deleteProduct(id);
//         socketServer.emit("productUpdate");
//     });

//     socket.on("disconnect", () => {
//         console.log("Client disconnected");
//     });

//     socket.on("error", (error) => {
//         console.error("Error WebSocket:", error);
//     });
// });
