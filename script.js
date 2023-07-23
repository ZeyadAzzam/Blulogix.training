// active page 
let currentPageUrl = window.location.href;

let links = document.querySelectorAll('.navbar a');

for (let i = 0; i < links.length; i++) {
   let link = links[i];
   if (link.href === currentPageUrl) {
      link.classList.add('active');
      break; 
   }
}

function showAdmin() {

    document.getElementById("add-admin").style.display = "block"; 

   }


   function showParent() {
    document.getElementById("add-parent").style.display = "block";
 
   
   }

   function showTeacher() {

  document.getElementById("add-Teacher").style.display ="block";

   
   }

   function showStudent() {

      document.getElementById("add-Student").style.display ="block";
    
       
       }

       var app = angular.module('myApp', []);


app.controller('ParentController', function($scope) {

  $scope.parents = [];
  $scope.idCounter = 8;

  $scope.addParent = function() {

    var parent = {
      id: $scope.idCounter,
      firstName: $scope.firstName,
      lastName: $scope.lastName,
      phoneNumber: $scope.phoneNumber,
      address: $scope.address
    };


    $scope.parents.push(parent);

    $scope.firstName = '';
    $scope.lastName = '';
    $scope.phoneNumber = '';
    $scope.address = '';

   $scope.idCounter++;

  };

  // Function to delete a parent
  $scope.deleteParent = function(index) {
    // Remove the parent from the array based on its index
    $scope.parents.splice(index, 1);
  };
});

app.controller('StudentController', function($scope) {
   $scope.students = [];
   $scope.idCounter = 1000;
 
   // Function to add a new student
   $scope.addStudent = function() {
     // Get the input values from the form
     var student = {
       id: $scope.idCounter,
       firstName: $scope.firstName,
       lastName: $scope.lastName,
       email: $scope.email,
       address: $scope.address,
       phoneNumber: $scope.phoneNumber
     };
 
     $scope.students.push(student);
 
     $scope.firstName = '';
     $scope.lastName = '';
     $scope.email = '';
     $scope.address = '';
     $scope.phoneNumber = '';
 
     $scope.idCounter++;
   };
 
   $scope.deleteStudent = function(index) {

     $scope.students.splice(index, 1);
   };
 });

 app.controller('AdminController', function ($scope) {
  $scope.admins = [];
  $scope.idCounter = 776;

  $scope.addAdmin = function () {
    var admin = {
      id: $scope.idCounter,
      firstName: $scope.newAdmin.firstName,
      lastName: $scope.newAdmin.lastName,
      phoneNumber: $scope.newAdmin.phoneNumber,
      email: $scope.newAdmin.email,
      address: $scope.newAdmin.Address,
      userName: $scope.newAdmin.userName
    };

    $scope.admins.push(admin);

    $scope.newAdmin.firstName ='';
    $scope.newAdmin.lastName = '';
     $scope.newAdmin.phoneNumber = '';
     $scope.newAdmin.email = '';
      $scope.newAdmin.Address = '';
      $scope.newAdmin.userName = '';




    $scope.idCounter++;
  };

  $scope.deleteAdmin = function (index) {
    $scope.admins.splice(index, 1);
  };

});

app.controller('teacherController', function ($scope) {
  $scope.teachers = [];
  $scope.idCounter = 9;

  $scope.addTeacher = function () {

    var teacher = {
      id: $scope.idCounter,
      firstName: $scope.newTeacher.firstName,
      lastName: $scope.newTeacher.lastName,
      phoneNumber: $scope.newTeacher.phoneNumber,
      email: $scope.newTeacher.email,
      class: $scope.newTeacher.class,
      material: $scope.newTeacher.material,
      address: $scope.newTeacher.address
    };

    $scope.teachers.push(teacher);


    $scope.idCounter++;
  };

  $scope.deleteTeacher = function (index) {
    $scope.teachers.splice(index, 1);
  };
});

 