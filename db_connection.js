var mongoose = require('mongoose');
var db_url = "mongodb://localhost:27017/library";
mongoose.connect(db_url);

console.log('connecting to MongoDB');

mongoose.connection.on('connected', function(error) {
    if (error)
        console.log(error);
    else
        console.log('Mongoose connected to ' + db_url);
});
