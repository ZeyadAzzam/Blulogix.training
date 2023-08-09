var express = require('express');
var bodyParser = require('body-parser');
var db = require('mysql');
var cors = require('cors')


var app = express();
var port = 3000;

// database connection

var con = db.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'blulogix',
});

con.connect(function(err) {
  if (err) throw err;
  console.log('Connected to database!');
});

app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//  ada parent
app.post('/addParent', function(req, res) {
  var parentData = req.body;

  con.query('INSERT INTO parents SET ?', parentData, function(err, result) {
    if (err) {
      console.error('Error inserting parent into database:', err);
     
    } else {
      console.log('Parent inserted into the database :)');
    }
  });
});

//  get parents from the database
app.get('/getParents', function(req, res) {
  con.query('SELECT * FROM parents', function(err, result) {

  
    if (err) {
      console.error('Error fetching parents from database:', err);

    } else {
      res.status(200).json(result); 
    }
  });
});

// delete parents from database
app.delete('/deleteParent/:Id', function(req, res) {
  var parentId = req.params.Id;

  con.query('DELETE FROM parents WHERE Id = ?', parentId, function(err, result) {
    if (err) {
      console.error('Error deleting parent from database:', err);
      res.status(500).send('Error deleting parent from database');
    } else {
      console.log('Parent deleted from the database successfully!');
      res.status(200).send('Parent deleted from the database successfully!');
    }
  });
});


//  add teacher to the database ============================================

app.post('/addTeacher', function(req, res) {
  var teacherData = req.body;

  con.query('INSERT INTO teachers SET ?', teacherData, function(err, result) {
    if (err) {
      console.error('Error inserting teacher into database:', err);
      // Handle the error response here
    } else {
      console.log('Teacher inserted into the database :)');
      // Handle the successful response here
    }
  });
});


app.get('/getTeachers', function(req, res) {
  con.query('SELECT * FROM teachers', function(err, result) {
    if (err) {
      console.error('Error fetching teachers from database:', err);
      
      res.status(500).send('Error fetching teachers from database');
    } else {
      res.status(200).json(result);
    }
  });
});

app.delete('/deleteTeacher/:Id', function(req, res) {
  var teacherId = req.params.Id;

  con.query('DELETE FROM teachers WHERE Id = ?', teacherId, function(err, result) {
    if (err) {
      console.error('Error deleting teacher from database:', err);
      res.status(500).send('Error deleting teacher from database');
    } else {
      console.log('Teacher deleted from the database successfully!');
      res.status(200).send('Teacher deleted from the database successfully');
    }
  });
});


// add student  =================================================================
app.post('/addStudent', function(req, res) {
  var studentData = req.body;

  con.query('INSERT INTO students SET ?', studentData, function(err, result) {
    if (err) {
      console.error('Error inserting student into database:', err);
      // Handle the error response here
      res.status(500).send('Error inserting student into database');
    } else {
      console.log('Student inserted into the database :)');
      // Handle the successful response here
      res.status(200).send('Student inserted into the database');
    }
  });
});

app.get('/getStudents', function(req, res) {
  con.query('SELECT * FROM students', function(err, result) {
    if (err) {
      console.error('Error fetching students from database:', err);
      res.status(500).send('Error fetching students from database');
    } else {
      res.status(200).json(result);
    }
  });
});

app.delete('/deleteStudent/:Id', function(req, res) {
  var studentId = req.params.Id;

  con.query('DELETE FROM students WHERE Id = ?', studentId, function(err, result) {
    if (err) {
      console.error('Error deleting student from database:', err);
      res.status(500).send('Error deleting student from database');
    } else {
      console.log('Student deleted from the database successfully!');
      res.status(200).send('Student deleted from the database');
    }
  });
});

// add admin  =================================================================

app.post('/addAdmin', function(req, res) {
  var adminData = req.body;

  con.query('INSERT INTO admins SET ?', adminData, function(err, result) {
    if (err) {
      console.error('Error inserting admin into database:', err);
      res.status(500).send('Error adding admin to database');
    } else {
      console.log('Admin added to the database successfully!');
      res.status(200).send('Admin added to the database successfully');
    }
  });
});

// Get all admins from the database
app.get('/getAdmin', function(req, res) {
  con.query('SELECT * FROM admins', function(err, result) {
    if (err) {
      console.error('Error fetching admins from database:', err);
      res.status(500).send('Error fetching admins from database');
    } else {
      res.status(200).json(result);
    }
  });
});

// Delete an admin from the database
app.delete('/deleteAdmin/:Id', function(req, res) {
  var adminId = req.params.Id;

  con.query('DELETE FROM admins WHERE Id = ?', adminId, function(err, result) {
    if (err) {
      console.error('Error deleting admin from database:', err);
      res.status(500).send('Error deleting admin from database');
    } else {
      console.log('Admin deleted from the database successfully!');
      res.status(200).send('Admin deleted from the database successfully');
    }
  });
});


app.listen(port, function() {
  console.log('Server listening on port ' + port);
});