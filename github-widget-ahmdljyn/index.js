/*
var click = document.querySelector(".btn")
var btnClicking= click.addEventListener("click")
const user = async function userFetching(username) {
    var c = `https://api.github.com/users/${username}/repos`
    await fetch(c) 
        .then(
            function(response) {
              // response.preventDefault()
              if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' +
                  response.status);
                return;
              }
              response.json().then(function(data) {
                console.log(data);
              });
            }
          )
          .catch(function(err) {
            console.log('Fetch Error :-S', err);
          });     
}
user("ahmdljyn");
*/
