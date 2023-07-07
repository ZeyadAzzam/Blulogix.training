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
    


  