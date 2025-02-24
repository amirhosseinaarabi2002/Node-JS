const http = require("http");

const server = http.createServer((req, res) => {
  // console.log(req.method);
  // console.log(req.url);
  // res.write("Hello, world!");
  // res.end();

  if (req.method === "GET" && req.url === "/") {
    // res.writeHead(200, { 'Content-Type': 'text/plain' });
    // res.writeHead(200, { 'Content-Type': 'text/html' });
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(
      JSON.stringify([
        {
          userId: 1,
          id: 1,
          title:
            "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
          body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        },
        {
          userId: 2,
          id: 2,
          title: "qui est esse",
          body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
        },
        {
          userId: 3,
          id: 3,
          title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
          body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
        },
      ])
    );
    res.end();
  } else if (req.method === "GET" && req.url === "/user") {
    res.write("User information");
    res.end();
  } else {
    res.write("Invalid method");
    res.end();
  }
});

server.listen(3000, () => {
  console.log("server running");
});

////////////////////////////////////////////////////////////////

// http server methods 
// CRUD => {create, read, update, delete} === {POST, GET, PUT, DELETE}