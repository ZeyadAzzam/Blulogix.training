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

       app.controller('ParentController', function($scope, $http) {
        
       
         function fetchData() {
           $http.get('http://localhost:3000/getParents').then(
             function(response) {
               $scope.parents = response.data;
               console.log(response.data);
             },
             function(error) {
               console.error('Error fetching parents:', error);
             }
           );
         }
       
         // Fetch data when the page loads
         fetchData();
       
         $scope.addParent = function() {
           var parent = {
             firstName: $scope.firstName,
             lastName: $scope.lastName,
             phoneNumber: $scope.phoneNumber,
             address: $scope.address,
           };
       
           $http.post('http://localhost:3000/addParent', parent).then(
             function(response) {
              console.log(response);
               // After adding the parent to the database, fetch the newly inserted parent
               fetchData();
             
      
       
               console.log('Parent added successfully!');
             },
             function(error) {
               console.error('Error adding parent:', error);
             }
           );
       
           $scope.firstName = '';
           $scope.lastName = '';
           $scope.phoneNumber = '';
           $scope.address = '';
         };
       
         $scope.deleteParent = function(index) {
           var parent = $scope.parents[index];
       
           // Send a DELETE request to the server to delete the parent from the database
           $http.delete('http://localhost:3000/deleteParent/' + parent.Id).then(
             function(response) {
               // Remove the parent from the array only if the deletion request is successful
               $scope.parents.splice(index, 1);
               console.log('Parent deleted successfully!');
             },
             function(error) {
               console.error('Error deleting parent:', error);
             }
           );
         };
       });       
      // ====================================================
      // add student
      app.controller('StudentController', function($scope, $http) {
        $scope.students = [];
      
        function fetchStudents() {
          $http.get('http://localhost:3000/getStudents').then(
            function(response) {
              $scope.students = response.data;
            },
            function(error) {
              console.error('Error fetching students:', error);
            }
          );
        }
      
        // Fetch data when the page loads
        fetchStudents();
      
        $scope.addStudent = function() {
          var student = {
            firstName: $scope.firstName,
            lastName: $scope.lastName,
            email: $scope.email,
            address: $scope.address,
            phone_Number: $scope.phoneNumber
          };
      
          $http.post('http://localhost:3000/addStudent', student).then(
            function(response) {
              fetchStudents();
              console.log('Student added successfully!');
              $scope.firstName = '';
              $scope.lastName = '';
              $scope.email = '';
              $scope.address = '';
              $scope.phoneNumber = '';
            },
            function(error) {
              console.error('Error adding student:', error);
            }
          );
        };
      
        $scope.deleteStudent = function(index) {
          var student = $scope.students[index];
      
          $http.delete('http://localhost:3000/deleteStudent/' + student.Id).then(
            function(response) {
              $scope.students.splice(index, 1);
              console.log('Student deleted successfully!');
            },
            function(error) {
              console.error('Error deleting student:', error);
            }
          );
        };
      });

      
 //Add admin =====================================================

 app.controller('AdminController', function ($scope, $http) {
  $scope.admins = [];

  function fetchAdmin() {
    $http.get('http://localhost:3000/getAdmin').then(
      function(response) {
        $scope.admins = response.data;
      },
      function(error) {
        console.error('Error fetching admins:', error);
      }
    );
  }

  // Fetch data when the page loads
  fetchAdmin();

  $scope.addAdmin = function () {
    var admin = {
      First_Name: $scope.newAdmin.firstName,
      Last_Name: $scope.newAdmin.lastName,
      Phone_Number: $scope.newAdmin.phoneNumber,
      Email: $scope.newAdmin.email,
      Address: $scope.newAdmin.Address,
      User_Name: $scope.newAdmin.userName,
      password: $scope.newAdmin.password,
      confirm_password: $scope.newAdmin.confirmPassword
    };

    $http.post('http://localhost:3000/addAdmin', admin).then(
      function(response) {
        fetchAdmin();
        console.log('Admin added successfully!');
        $scope.newAdmin.firstName = '';
        $scope.newAdmin.lastName = '';
        $scope.newAdmin.phoneNumber = '';
        $scope.newAdmin.email = '';
        $scope.newAdmin.Address = '';
        $scope.newAdmin.userName='';
        $scope.newAdmin.password = '';
        $scope.newAdmin.confirmPassword='';


      },
      function(error) {
        console.error('Error adding admin:', error);
      }
    );
  };

  $scope.deleteAdmin = function(index) {
    var admin = $scope.admins[index];

    $http.delete('http://localhost:3000/deleteAdmin/' + admin.Id).then(
      function(response) {
        $scope.admins.splice(index, 1);
        console.log('Admin deleted successfully!');
      },
      function(error) {
        console.error('Error deleting admin:', error);
      }
    );
  };
});

  
// add  teachers ===============================================
app.controller('teacherController', function ($scope, $http) {
  $scope.teachers = [];
  

  function fetchTeachers() {
    $http.get('http://localhost:3000/getTeachers').then(
      function(response) {
        $scope.teachers = response.data;
      },
      function(error) {
        console.error('Error fetching teachers:', error);
      }
    );
  }

  // Fetch data when the page loads
  fetchTeachers();

  $scope.addTeacher = function () {
    var teacher = {
      firstName: $scope.newTeacher.firstName,
      lastName: $scope.newTeacher.lastName,
      phoneNumber: $scope.newTeacher.phoneNumber,
      email: $scope.newTeacher.email,
      class: $scope.newTeacher.class,
      Meterial: $scope.newTeacher.material,
      address: $scope.newTeacher.address
    };

    $http.post('http://localhost:3000/addTeacher', teacher).then(
      function(response) {
        console.log(response);
        

        fetchTeachers();

        console.log('Teacher added successfully!');
      },
      function(error) {
        console.error('Error adding teacher:', error);
      }
    );

  };

  $scope.deleteTeacher = function (index) {
    var teacher = $scope.teachers[index];

    $http.delete('http://localhost:3000/deleteTeacher/' + teacher.Id).then(
      function(response) {
        // Remove the teacher from the array only if the deletion request is successful
        $scope.teachers.splice(index, 1);
        console.log('Teacher deleted successfully!');
      },
      function(error) {
        console.error('Error deleting teacher:', error);
      }
    );
  };
});