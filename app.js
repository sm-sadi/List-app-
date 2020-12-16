
// elements from hmtl 

const addTolist =document.getElementById("addtolist");
const valueFromInput  = document.getElementById("valuefrominput");
const listParent = document.getElementById("dynamic")


// event listen for creating list 
    addTolist.addEventListener("click" , createElement);
    
// create element function 
function createElement(){
      // create list item 
      let vl =valueFromInput.value;
      const listItem = document.createElement("li") 
      // listItem.innerHTML = vl;
              listItem.classList.add("list-group-item");
              listItem.classList.add("d-flex");
              listItem.classList.add("justify-content-between");
      listParent.appendChild(listItem)
      //  creating span for text 
          const spanForText = document.createElement("span");
          spanForText.innerHTML = vl;
          listItem.appendChild(spanForText);
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
     
}

// clear input field 
function clearInput (){
    valueFromInput.value = "";
}

// function for editing element 
function editElement(){
    const update = prompt("Edit the list")
   // console.log(this.parentElement.parentElement.firstChild.innerHTML);
    this.parentElement.parentElement.firstChild.innerHTML = update;
}

// function  for deleteling element 
function detelefunction(){
    this.parentElement.parentElement.remove();
}





















