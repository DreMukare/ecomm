const form = document.getElementById("form");

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
        location.href = '/dashboard.html'
    })
})
