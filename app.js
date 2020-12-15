
// elements from hmtl 

const addTolist =document.getElementById("addtolist");
const valueFromInput  = document.getElementById("valuefrominput");
const listParent = document.getElementById("dynamic")


// creating list elements 
    addTolist.addEventListener("click" , function(){
        // create list item 
        const listItem = document.createElement("li") 
        listItem.innerHTML =valueFromInput.value;
                listItem.classList.add("list-group-item");
                listItem.classList.add("d-flex");
                listItem.classList.add("justify-content-between");
        listParent.appendChild(listItem)
        
            // creating span
            const spanForStyle = document.createElement("span");
            listItem.appendChild(spanForStyle);
            

        // create edit btn 

        const editBtn = document.createElement("button");
                editBtn.innerHTML = "edit"
                editBtn.classList.add("btn");
                editBtn.classList.add("btn-success");
                editBtn.classList.add("mx-1");
                editBtn.classList.add("edit");
        spanForStyle.appendChild(editBtn);
            // even for edit 
            editBtn.onclick  = editElement;


        // create delete btn 

        const deleteBtn = document.createElement("button");
                deleteBtn.innerHTML = "✖";
                deleteBtn.classList.add("btn");
                deleteBtn.classList.add("btn-danger");
                deleteBtn.classList.add("delet");
        spanForStyle.appendChild(deleteBtn)
    //    event listener for delete btn  
        deleteBtn.onclick= detelefunction;

    
        
        clearInput()

})




function clearInput (){
    valueFromInput.value = "";
}

// function  for deleteling element 

// function for editing element 

function editElement(){
    const update = prompt("Edit the list")
     console.log(this.parentElement.parentElement);
   // this.parentElement.parentElement.innerText = update;

    // create list item 
    // const listItem = document.createElement("li") 
    // listItem.innerHTML =update;
    //         listItem.classList.add("list-group-item");
    //         listItem.classList.add("d-flex");
    //         listItem.classList.add("justify-content-between");
    // listParent.appendChild(listItem)
    
        // creating span
        console.log(this.parentElement.parentElement);
        
        const spanForStyle = document.createElement("span");
        this.parentElement.parentElement.appendChild(spanForStyle);
        

    // create edit btn 

    const editBtn = document.createElement("button");
            editBtn.innerHTML = "edit"
            editBtn.classList.add("btn");
            editBtn.classList.add("btn-success");
            editBtn.classList.add("mx-1");
            editBtn.classList.add("edit");
    spanForStyle.appendChild(editBtn);
        // even for edit 
        editBtn.onclick  = editElement;


    // create delete btn 

    const deleteBtn = document.createElement("button");
            deleteBtn.innerHTML = "✖";
            deleteBtn.classList.add("btn");
            deleteBtn.classList.add("btn-danger");
            deleteBtn.classList.add("delet");
    spanForStyle.appendChild(deleteBtn)
//    event listener for delete btn  
    deleteBtn.onclick= detelefunction;


    
    clearInput()
    
}

function detelefunction(){
    this.parentElement.parentElement.remove();
}





















