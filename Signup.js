
// modal add
const addModal = document.querySelector('.add-modal');

const btnAdd = document.querySelector('.btn-add');

const tableUsers = document.querySelector('.carousel-inner');

const addModalForm = document.querySelector('.formcard')



// click submit in add modal form
addModalForm.addEventListener('submit', e => {
    e.preventDefault();
    const email = document.getElementById("email").value;
   const password = document.getElementById("password").value;
   firebase
     .auth()
     .createUserWithEmailAndPassword(email, password)


    db.collection('users').add({
        username: addModalForm.userName.value,
        email: addModalForm.email.value,
        about: addModalForm.inputAbout.value,
        github: addModalForm.inputgithub.value,
        linkedin: addModalForm.inputlinkedIn.value,
        phone: addModalForm.inputPhone.value,
        college: addModalForm.inputcollege.value,
        yos: addModalForm.inputstudy.value,
    });



});

// changing the webpage on authorization
 firebase.auth().onAuthStateChanged((user) => {
   if (user) {
     location.replace("welcome.html");
   }
 })

// loader functionality
 setTimeout(function(){
  $('.loader_bg').fadeToggle();
}, 1500);
