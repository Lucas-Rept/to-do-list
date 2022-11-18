let addButton = document.getElementById("addButton");
addButton.addEventListener("click", add);
let addInput = document.getElementById("addInput");
let list = document.getElementById("list");


function check(input) {
    if (input.value == "") {
        return false;
    }
    else {
        return true;
    }
}

function conclude(event){
    let item = event.target;
    if(item.classList.contains("conclude") == false){
        item.classList.add("conclude");
        item.parentElement.classList.add("conclude");
        item.parentElement.nextElementSibling.classList.add("line");
    }
    else{
        item.classList.remove("conclude");
        item.parentElement.classList.remove("conclude");
        item.parentElement.nextElementSibling.classList.remove("line");
    }
    
}

function remove(event){
    event.target.parentElement.remove();
}

function add() {
    if (check(addInput) == false) {
        return;
    }

    list.innerHTML += `<li class="listItem">
    <div class="border">
        <div class="circle"></div>
    </div>
    <p class="appointment">`+ addInput.value + `</p>
    <img src="./images/minus.png" alt="removeIcon" class="button2">
</li>`

    addInput.value = "";

    let buttons = document.getElementsByClassName("circle");
    for(var button of buttons){
        button.addEventListener("click", conclude);
    }

    let removeButtons = document.getElementsByClassName("button2");
    for(var removeButton of removeButtons){
        removeButton.addEventListener("click", remove);
    } 


}