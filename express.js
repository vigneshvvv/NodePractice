const express = require('express');
const http = require('http');
const server = express();
const cookieParser = require('cookie-parser');

const routes = require('./Router/MainRoute');
const app = require('body-parser');
const productroute = require('./Router/ProductRoutes');
const strategy = require ('passport-local');
const passport = require('passport');
const session = require('express-session');
server.use(app.json());
server.use(app.urlencoded());
const users = [
    {id:1, user_name: "Vignesh", password: "Vignesh"},
      {id:2, user_name: "Kumar", password: "kumar"}
]

server.use(session({
    secret: "decoding",
    saveUninitialized: false,
    resave: false,
    cookie:{maxAge: 60000*60}
}))
server.use(passport.initialize());
server.use(passport.session());
passport.use(new strategy ((username, password, done) => {
    const user  = users.find((user) => user.user_name == username);
    if(!user){
        return done(null, false, {message: "Invalid username and username not found"})
    }
    if(user.password != password){
        return done(null, false,{message : "The Entered password is incorrect please enter correct password"} );
    }
    return done(null, user);
}));
passport.serializeUser((user, done) =>{
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
    const user = users.find((e) => e.id === id);
    done(null, user|| false);
})

server.post("/loginPage", (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
        if(err) {
            return next (err);
        }
        if(!user){
            return res.status(404).send("Login Failed user not found");
        }
        req.logIn(user, (err) => {
            if(err){
                return next(err);
            }
            return res.send("login Successfull");
        });
    })(req, res, next);
})


server.use(cookieParser('my-app'));
server.use(routes);
server.use("/admin/api", productroute);



server.get("/session", (req, res, next) => {
    console.log(req.session.id);
    req.sessionStore.get(req.session.id, (err, session) => {
        if(err){
            console.log("error thrown session not found");
        }else{
            console.log(session);
        }
    })
    res.send("Session created successfully");
} )

server.get("/sessionCreation", (req, res, next) => {
    req.session.visited = true;
    res.send("session creation happened");
})

server.use((req, res, next) => {
    res.status(404).send("404 Page Not found Please Enter correct url");
})



server.listen(8080);