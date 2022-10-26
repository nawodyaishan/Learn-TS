"use strict";
exports.__esModule = true;
var express_1 = require("express");
var helmet_1 = require("helmet");
var app = express_1["default"]();
app.use(helmet_1["default"]());
app.use(express_1["default"].json());
app.get("/", function (req, res) {
    return res.sendStatus(200);
});
// Error Handling ...!
// const middleware = ({name}: { name: string }) =>
//     (req: Request, res: Response, next: NextFunction) => {
//         //@ts-ignore
//         req.name = name;
//
//         next();
//     };
// app.use(middleware({name: "SanoDoesTech"}));
// app.get(
//     "/api/books/:bookId/:authorId",
//     (req: Request, res: Response, next: NextFunction) => {
//         //@ts-ignore
//         console.log(req.name);
//         //@ts-ignore
//         res.send(req.name);
//     }
// );
//
// async function throwError() {
//     throw new Error("Boom!");
// }
//
// app.get("/error", async (req, res) => {
//     try {
//         await throwError();
//         res.sendStatus(200);
//     } catch (e) {
//         res.status(400).send("Something bad happened");
//     }
// });
// Request and Response Generics...!
// const middleware = ({name}: { name: string }) =>
//     (req: Request, res: Response, next: NextFunction) => {
//         res.locals.name = name;
//
//         next();
//     }
//
// app.use(middleware({name: "SanoDoesTech"}));
//
// app.get(
//     "/api/books/:bookId/:authorId",
//     middleware,
//     (req: Request<{ bookId: 'string', authorId: string }, {}, { name: string }, {}>, res: Response, next: NextFunction) => {
//         req.body.name
//         req.params.authorId
//         req.params.bookId
//         console.log(res.locals.name);
//
//         res.send(res.locals.name);
//     }
// );
//if you want to create customizable piece of middleware -- Currying...!
// const middleware = ({name}: { name: string }) =>
//     (req: Request, res: Response, next: NextFunction) => {
//         res.locals.name = name;
//
//         next();
//     }
//
// app.use(middleware({name: "SanoDoesTech"}));
//
// app.get(
//     "/api/books/:bookId/:authorId",
//     middleware,
//     (req: Request, res: Response, next: NextFunction) => {
//         console.log(res.locals.name);
//
//         res.send(res.locals.name);
//     }
// );
//Middleware...!
// function middleware(req: Request, res: Response, next: NextFunction) {
//     // @ts-ignore
//     req.name = "Sano";
//
//     next();
// }
//
// app.use(middleware);
//
// app.get(
//     "/api/books/:bookId/:authorId",
//     middleware,
//     (req: Request, res: Response, next: NextFunction) => {
//         // @ts-ignore
//         console.log(req.name);
//         // @ts-ignore
//         res.send(req.name);
//     }
// );
// Route Handlers...!
// function handleGetBookOne(req: Request, res: Response, next: NextFunction) {
//     console.log(req.params);
//
//     next();
// }
//
// function handleGetBookTwo(req: Request, res: Response, next: NextFunction) {
//     console.log("Second handler");
//
//     return res.send(req.params);
// }
//
// //app.get("/api/books/:bookId/:authorId", [handleGetBookOne, handleGetBookTwo]);
//or
// app.get("/api/books/:bookId/:authorId", function (req: Request, res: Response, next: NextFunction) {
//         next()
//     }, function (req: Request, res: Response, next: NextFunction) {
//         return res.send(req.params);
//     }
// );
// app.get("/api/books/:bookId/:authorId", (req: Request, res: Response) => {
//     console.log(req.params);
//
//     return res.send(req.params);
// });
//Route Paths...!
// app.get("/health", (req, res) => res.sendStatus(200));
// app.get("/ab*cd", (req, res) => res.send("/ab*cd"));
// app.get(/abc/, (req, res) => res.send("abc"));
//Chaining Request...!
// app
//     .route("/")
//     .get((req: Request, res:Response) => {
//         return res.send("You make a GET request");
//     })
//     .post((req: Request, res:Response) => {
//         return res.send("You make a POST request");
//     })
//     .put((req: Request, res:Response) => {
//         return res.send("You make a PUT request");
//     })
//     .delete((req: Request, res:Response) => {
//         return res.send("You make a DELETE request");
//     })
// app.get("/", (req:Request, res:Response) => {
//     // return res.json({
//     //     success: true,
//     //     name: "Sano",
//     // });
//     return res.redirect('http://example.com')
// });
//
// app.post("/api/data", (req:Request, res:Response) => {
//     console.log(req.body);
//
//     return res.sendStatus(200);
// });
//
// app.all("/api/all", (req:Request, res:Response) => {
//     return res.sendStatus(200);
// });
app.listen(3000, function () {
    console.log("Application listening at http://localhost:3000");
});
