document.getElementById("loginForm").addEventListener("submit",(event)=>{
    event.preventDefault()
})

firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        location.replace("welcome.html")
    }
})


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