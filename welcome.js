firebase.auth().onAuthStateChanged((user)=>{
    if(!user){
        location.replace("index.html")
    }
})


// logout functionality
function logout(){
    firebase.auth().signOut()
    
    }


    document.getElementById("MAINPAGE").onclick = function () {
        location.href = "mainpage.html";
    };

//loader functionality
    setTimeout(function(){
        $('.loader_bg').fadeToggle();
    }, 1500);