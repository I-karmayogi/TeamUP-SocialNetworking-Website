// modal add
const addModal = document.querySelector('.add-modal');

const btnAdd = document.querySelector('.btn-add');

const tableUsers = document.querySelector('.carousel-inner');

const addModalForm = document.querySelector('.formcard')

//create element and render users
const renderUser = doc => {

  const request = new XMLHttpRequest()

  // Open a new connection, using the GET request on the URL endpoint
  request.open('GET', `https://api.github.com/users/${doc.data().github}/repos`, true)
  
  request.onload = function () {
      // begin accessing JSON data here
      var data = JSON.parse(this.response);
  
  
  var statusHTML = '';
  $.each(data, function(i, status){

    statusHTML += '<tr>';
    statusHTML += '<td>'+status.id+'</td>';
    statusHTML += '<td>'+status.name+'</td>';
    statusHTML += '<td>'+status.html_url+'</td>';
    statusHTML += '<td>'+status.language+'</td>';
    statusHTML += '<td>'+status.stargazers_count+'</td>';
    statusHTML += '<td>'+status.forks_count+'</td>';                 
    statusHTML += '</tr>';
});

const tr = `
    
<div class="carousel-item">
<div class="card">
<center><img src="https://avatars.githubusercontent.com/${doc.data().github}" width="200" height="200" alt="resources/brown boy.jpg" style="border-radius: 100%; margin-top: 4%;"></center>
  <div class="card-body">
    <h5 class="card-title">${doc.data().username}</h5>
    <p class="card-text">${doc.data().about}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item item2"><b>College:</b> ${doc.data().college}</li>
    <li class="list-group-item item3"><b>Year Of Study:</b> ${doc.data().yos}</li>
    <li class="list-group-item item4"><b>LinkedIn:</b> ${doc.data().linkedin}</li>
    <li class="list-group-item itme6"><b>GitHub ID:</b> ${doc.data().github}</li>
    <li class="list-group-item item7"><b>Email:</b> ${doc.data().email}</li>
    <li class="list-group-item itme8"><b>Contact No:</b> ${doc.data().phone}</li>
  </ul>


<div style="overflow-x:auto;"> 
<table class="table card-body table-bordered">
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Name</th>
        <th scope="col">URL</th>
        <th scope="col">Language</th>
        <th scope="col">Stars count</th>
        <th scope="col">Forks count</th>
      </tr>
    </thead>
    <tbody>
     ${statusHTML}
    </tbody>
  </table>
  </div>



</div>                   
</div>
`;
tableUsers.insertAdjacentHTML('beforeend', tr)


}

request.send();
   
}



//get all users
db.collection('users').get().then(querySnapshot => {
    querySnapshot.forEach(doc => {
        renderUser(doc);
    })
});


//loader functionality
setTimeout(function(){
  $('.loader_bg').fadeToggle();
}, 1600);



