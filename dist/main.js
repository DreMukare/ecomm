//getting the reference to elements
const row = document.querySelector("#search");
const grid = document.querySelector("#grid");

document.addEventListener("DOMContentLoaded",function(){
    const div = document.createElement("div");
    const formGroup = div.classList.add("form-group");
    div.innerHTML = `
    <div class="col-12">
    <label for="searchField">Search</label>
    <input type="text" class="form-control" id="searchField" placeholder="Type in what your looking for">
    </div>
    `
    row.appendChild(div);

    //fetchData()

        //get the reference to input field
        const input = document.getElementById("searchField");
        //add a event to listen on key up
        input.addEventListener("keyup", function(){
            //get value of user typed item
           let search = input.value; 
           //start fetch async 
           fetch('https://fakestoreapi.com/products/')
           //convert the response to JSON
            .then(res => res.json())
            //use the data to filter if it matches or display all
            .then(data => {
                data.forEach(el => {
                    if(el.title.includes(search)){
                        generateHTML(el,"block")
                    }else{
                        generateHTML(el,"hidden")
                    }
                })
            })
        })

    })

function generateHTML(el,toggleClass){
    const div = document.createElement("div");
    const card = div.classList.add("card","col-sm-2", "col-md-3", "col-lg-3", "m-2",toggleClass);
    div.innerHTML = `
        <a href='#' class="products"> 
        <img src="${el.image}" class="card-img-top rounded" alt="${el.title}">
         <div class="card-body">
             <h5 class="card-title">${(slicer(el.title))}</h5>
         </div>
         </a>
    `
    grid.appendChild(div);
}

    function slicer(str){
        return str.slice(0, 10);
    }