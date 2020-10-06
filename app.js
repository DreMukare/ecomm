const firstName = document.querySelector("fname")
const lastName = document.querySelector("lname")
const jobTile = document.querySelector("title")
const form = document.querySelector("#json");


form.addEventListener("submit", function(e){
    const myData = {}
    e.preventDefault();
    const formFields = form.querySelectorAll("input[type='text']");
    //console.log(formFields);
    for(let i = 0; i < formFields.length;i++){
        let value = formFields[i].value
        let name = formFields[i].name
        myData[name] = value;
    }
    console.log(myData);
    //JSON.stringify(myData);
    //create a empty job
    //loop throught each field
    //for(let i = 0; i < 
     //get their name and store in it variable
     //get their value and store in it variable
     //make the key of object name and value as its value
    console.log(`sending JSON data  ${JSON.stringify(myData)}`)
    console.log(typeof(JSON.stringify(myData)))
})

