$(document).ready(function(){
  fetch("./sidenav.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector(".sidenav").innerHTML = data;
  });
});
  