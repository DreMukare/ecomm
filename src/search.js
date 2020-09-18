//getting the reference to elements
const row = document.querySelector("#search");
const grid = document.querySelector("#grid");

document.addEventListener("DOMContentLoaded", function () {

    const div = document.createElement("div");
    const formGroup = div.classList.add("form-group");
    div.innerHTML = `        
        <div class="alert alert-primary">
            <label for="searchField">Search</label>
            <input type="text" class="form-control" id="searchField" placeholder="Type in what your looking for">
        </div>
        `;
    row.appendChild(div);

    //fetchData()

    //get the reference to form
    var input = '';
    const myInput = document.getElementById("searchField");
    myInput.addEventListener("keyup", function (e) {
        input = myInput.value;
        console.log(input);
        fetch('https://fakestoreapi.com/products/')
            //convert the response to JSON
            .then(res => res.json())
            //use the data to filter if it matches or display all
            .then(data => {
                grid.innerHTML = '';
                data.forEach(el => {
                    if (el.title.toLowerCase().includes(input.toLowerCase())) {
                        generateHTML(el, "block")
                    }else{
                        //do something if not found
                    }
                })
            })
    });
    //get the reference to input
    //const input = form.searchField.value.trim();
    //add a event to listen on key up
})


function generateHTML(el, toggleClass) {
    const div = document.createElement("div");
    const card = div.classList.add("card", "col-sm-6", "col-md-6", "col-lg-3", "m-2", toggleClass);
    div.innerHTML = `
        <a href='#' class="products"> 
            <img src="${el.image}" class="card-img-top rounded" alt="${el.title}" width="100" height="auto">
            <div class="card-body">
                <h5 class="card-title">${(slicer(el.title))}</h5>
            </div>
        </a>
        `;
    grid.appendChild(div);
}

function slicer(str) {
    return str.slice(0, 10);
}