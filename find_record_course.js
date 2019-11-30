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

var schema = mongoose.schema;
var Course = new Schema({
    request : String,
    time : Number
},
{
    collection : 'CourseInfo'
}
);

var Student = mongoose.model('courses', Course);


CourseInfo.find({
    'department' : 'MCA'
}, function (error, student)
{
    if (error) {
        console.log(error);
    }else {
        console.log('Course name is %s', course_title);
    } 
}
);
    
    
    
   
