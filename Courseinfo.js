var mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
var CourseInfo = new Schema({
    categoryId  : ObjectId, // a product references a category _id with type ObjectId
    title       : String
});
var Category = mongoose.model('Course');
var category = new Category();
category.title = "course";
category.sortIndex = "8";

category.save(function(err) {
  if (err) { throw err; }
  console.log('saved');
  mongoose.disconnect();     
});
var db_url = "mongodb://localhost:27017/library";
mongoose.connect(db_url);
var Schema = mongoose.Schema;


var CourseInfo = new Schema({
    course_title : {
        type : String,
        required : true,
        index : true
        
    },
    id : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        unique : true
    },

    course_code: {
        type : String,
        unique : true,
        required :true,
        trim : true,
        validate : [
            function (course_code){
                return course_code.location = 9 ;
            }, 'course_code must be of nine Characters'
         ]
    },
    acronym :{
        type : String,
        unique : true,
        required :true,
        trim : true
    },
    category : {
        type : String,
        trim : true,
    },

    branch_name : {
        type : String,
        required :true
    },
    

    credits : {
        type :  String
        
    },
     
    contact_hours : {
        type : Number
    },
    year : {
        type: Date,  
        default : '01-08-2019'
    }


});

    var Course = mongoose.model('Course', CourseInfo)

    var Course_record = new Course({
    course_title : 'Full Stack Development',
    id : 1,
    course_code : '17ECAE902',
    acronym : 'FSE',
    category :'PSE',
    branch_name: 'MCA',
    credits : 'L-T-P:3-0-1',
    contact_hours :4,
    Year :'01-08-2019'},
    {
    course_title : 'Big Data Analytics',
    id : 2,
    course_code : '17ECAC901',
    acronym  : 'BDA',
    category : 'PSC',
    branch_name:'MCA',
    credits : 'L-T-P:3-0-1',
    contact_hours:4,
    Year :'01-08-2019'},
    {
        course_title : 'Advanced Java Programming',
        id : 3,
        course_code : '16ECAC902',
        acronym  : 'AJP',
        category : 'PSC',
        branch_name:'MCA',
        credits : 'L-T-P:2-1-0',
        contact_hours:3,
        Year :'01-08-2019'
    },
    {
        course_title : 'Mobile Application Development',
        id : 4,
        course_code : '16ECAC903',
        acronym  : 'MAD',
        category : 'PSC',
        branch_name:'MCA',
        credits : 'L-T-P:3-0-1',
        contact_hours:4,
        Year :'01-08-2019'
    },
    {
        course_title : 'Machine Learning',
        id : 5,
        course_code : '16ECAE906',
        acronym  : 'ML',
        category : 'PSE',
        branch_name:'MCA',
        credits : 'L-T-P:3-0-1',
        contact_hours:4,
        Year :'01-08-2019'
    },
    {
        course_title : 'ASP.Net Lab',
        id : 6,
        course_code : '17ECAP901',
        acronym  : 'ASPL',
        category : 'PSC',
        branch_name:'MCA',
        credits : 'L-T-P:0-0-1',
        contact_hours:1,
        Year :'01-08-2019'
    },
    {
        course_title : 'Advance Java Programming Lab',
        id : 7,
        course_code : '15ECAP902',
        acronym  : 'AJPL',
        category : 'PSC',
        branch_name:'MCA',
        credits : 'L-T-P:0-0-1',
        contact_hours:1,
        Year :'01-08-2019'
    },
    {
        course_title : 'MiniProject-4',
        id : 8,
        course_code : '17ECAP902',
        acronym  : 'MP-4',
        category : 'PSC',
        branch_name:'MCA',
        credits : 'L-T-P:0-0-2',
        contact_hours:2,
        Year :'01-08-2019'
    
    

});


Course_record.save(function (error){
    if(error){
        console.log(error);
    }else {
        console.log('Course Record Saved Successfully!');
    }
});
        
     