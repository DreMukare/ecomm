const form = document.getElementById("form");
const row = document.querySelector(".row");

form.addEventListener("submit", function(e){
    e.preventDefault();
    fetch("https://reqres.in/api/login", {
        method: 'POST',
        headers : {"Content-Type": "application/json"} ,
        body: JSON.stringify({
            "email":"eve.holt@reqres.in",
            "password":"cityslicka"
        })
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
                location.href = '/dist/dashboard.html'
    })
})
