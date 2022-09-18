require("./model/registration-model");
require("./model/user-model");
const mongoose = require("mongoose");

mongoose.connect(process.env.DB_URL,{useNewUrlParser: true},{useUnifiedTopology:true});

mongoose.connection.on("connected", function(){
    console.log("Mongoose Connected to DB: ",process.env.DB_NAME);

});
mongoose.connection.on("disconnected", function(){

    console.log("Mongoose Disconnected");
})
mongoose.connection.on("error", function(err){
    console.log("Mongoose connection error: ",err);
});

process.on("SIGINT", function(){
    mongoose.connection.close(function(){
        console.log(process.env.SIGNINT_MESSAGE);
        process.exit(0);
    });
});

process.on("SIGTERM", function(){
    mongoose.connection.close(function(){
        console.log(process.env.SIGTERM_MESSAGE);
        process.exit(0);
    });
});

process.once("SIGUSR2", function(){
    mongoose.connection.close(function(){
        console.log(process.env.SIGUSR2_MESSAGE);
        process.kill(process.pid,"SIGUSR2");
    })
})
