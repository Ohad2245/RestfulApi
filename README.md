##### I was asked to implement a BACKEND API to manage the orders of a certain restaurant.

#### Server Functionality:
○ The API supports the following functionality:
<br>
■ Save a new order
<br>
■ Receive all orders from the last day.
<br>
■ Can update an order.
<br>
■ Can delete an order.

I chose to use NodeJS


# NodeJS

 NodejS is open-source, cross platforms(more than 1 OS), JavaScript runtime environment, that executes JS code outside the web browser.

- Written in C, C++, JavaSscript.

**A website has usually 3 tecnologies:**

1. HTML - what the user sees.
2. CSS - design
3. JavaScript - functionallity. Make the code dynamic.

### JavaScript in the browser:

- v8 engine (google chrome) - parses js to c++
- c++
- Assembler - the closest language to machine code
- machine code(binary) - 0/1

### Why use NodeJS?

> Note: JavaScript is asynconous one-threaded language.

- Event driven, single-threaded using non blocking I/O model.
- Fast, efficient
- Popular
- Both client and server side are using the same language(JavaScript).

### NodeJS best projects

Basically: Anything that is **not** CPU intensive (heavy games, photoshop, premiere).

- REST API's - Application Programming Interface (simple websites to hold data. for example: https://restcountries.com/)
- RTS - real time services (for example: chat)
- CRUD apps - blogs, shopping carts, social networks

### Who uses NodeJS:

- Netflix
- Uber
- Paypal
- Linkedin
- Ebay

### NPM - Node Package Manager

https://www.npmjs.com/

- We can use NPM to install third-party-libraries
- Every time we use NPM - a folder name: `node_modules` will be created and will hold all the data.
- `package.json` - will hold all the dependencies with their versions.

## CORS - 
<b>C</b>ross <b>O</b>rigin <b>R</b>esource <b>S</b>haring.
When a client sends a message to the server, if they are on the same port - the server will gladly accept the request,
The server port will not accept it.
To solve this - the server should return to the client in the response HEADER of
Access-Control-Allow(origin / Headers / Methods).
When he sends it, the browser will happily accept the request.
