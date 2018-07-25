module.exports = function(app){

    app.use("/data/:name",(req,res) => {
        // attempt to get google reviews fo the business name
        res.send("login");
    });
}