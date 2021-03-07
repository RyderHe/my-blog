:white_check_mark: `npx create-react-app`

:white_check_mark: `npm i -s react-router-dom`

:white_check_mark: `npm i -s whatwg-fetch` -> fetch api is built-in excepyt IE -> this allows fetch api usable in IE

## Before Deploying

:small_blue_diamond: **Frontend**: Fix `public/index.html` & `public/manifest.json`. Then, run `npm run build`. Copy new `build` folder (contains the compiled source code of react app) to the backend (into `src` directory).

:small_blue_diamond: **Backend**: In `server.js`, add the following:

```node
import path from "path";

const app= express();

// tell the serb\ver where is the static files
app.use(express.static(path.join(__dirname, "/build")));

/****************************
api.post("/", (req, res) => {
    ....
})

A lot of api routes here...

****************************/

// this needs to be after the last api route 
//   -> all reqs that aren't caught by api routes should be passed onto frontend app 
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/build/index.html"));
})

app.listen(8000, () => console.log("Listening on port 8000"));
```

Now, the whole app could run on the port of backend with all functionalities. Our app is **running on a single server** instaed of  two seperate server.

