firebase.auth().onAuthStateChanged((user)=>{
    if(!user){
        location.replace("index.html")
    }
})

function logout(){
    firebase.auth().signOut()
    
    }


    document.getElementById("MAINPAGE").onclick = function () {
        location.href = "mainpage.html";
    };