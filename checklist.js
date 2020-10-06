//form
const form = document.querySelector("form");
const list = document.querySelector(".list");
let input = document.querySelector("#field");
let ss = []

document.addEventListener("DOMContentLoaded", function () {
  //load from session stoage if there are items in it
  if(localStorage.getItem("checklist")){
    let datass = localStorage.getItem("checklist");
    let localData = JSON.parse(datass);
    for (let i = 0; i < localData.length; i++) {
      //create paragraph
      let addOn = document.createElement("p");
      addOn.innerText = localData[i];
      list.appendChild(addOn);
    }
  }else{
    form.addEventListener("submit", function (e) {
      console.log(e);
      addItem(form.field.value);
      e.preventDefault();
      form.field.value = ''
    });
  }
//problem
//the items in the session storage load onload
//if we add more item, it overrides the 



//function to add item
function addItem(text) {
 
  //create paragraph
  let addOn = document.createElement("p");
  addOn.innerText = text;
  form.appendChild(addOn);

  // //checkbox
  const input = document.createElement("input");
  //checkbox
  input.setAttribute("type", "checkbox");
  input.setAttribute("name", text);
  input.setAttribute("id", text);
  //
  form.appendChild(input);


//add to array
ss.push(text);
//add to session storage
localStorage.setItem("checklist", JSON.stringify(ss));

}


