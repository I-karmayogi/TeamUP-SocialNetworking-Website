//to prevent index.html? on submission
document.getElementById("loginForm").addEventListener("submit",(event)=>{
    event.preventDefault()
})

//changing the webpage on authorization
firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        location.replace("welcome.html")
    }
})

//Login function
function login(){
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    firebase.auth().signInWithEmailAndPassword(email, password)
    .catch((error)=>{
        document.getElementById("error").innerHTML = error.message
    })

}


document.getElementById("Signup-page").onclick = function () {
    location.href = "Signup.html";
};


// function to get new password on forgetting old password
function forgotPass(){
    const email = document.getElementById("email").value
    firebase.auth().sendPasswordResetEmail(email)
  .then(() => {
    alert("reset link sent to your email id")
  })
  .catch((error) => {
    document.getElementById("error").innerHTML = error.message
  });
}



