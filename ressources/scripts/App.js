// coded by geek néo coolman
// script principale du projet
// ===============================

// initialisation des variables


const addNewTask = document.querySelector(".add-task-box");
const addBtn = document.querySelector(".btn");
const clsAddBoxbtn = document.querySelector(".close-btn");
const dateInputValue = document.querySelector(".date");
const pushTaskBtn = document.querySelector(".push-tsk-btn")
const editZone = document.querySelector(".edit-zone");


let defaultDate = new Date().toLocaleDateString("fr");

/// les fonctions
// =================
// =================

// start box add new task function 
let start_add_box = (e) => {
    addNewTask.style.display = "flex";
    addNewTask.style.scale = "1";
}
// close box new tastk add function 
let close_box = (e) => {
    addNewTask.style.display = "none";
    addNewTask.style.scale = "0";
}

// fonction for pushing new task in the liste 
let push_new_stask = (e) => {
    let tskvalue = editZone.value;
    let userInputDate = dateInputValue.value;

    if (userInputDate === "") {
        userInputDate = defaultDate;
    }
    if (tskvalue == "") {
        e.preventDefault();
        editZone.style.backgroundColor = "red";
    } else {
        editZone.style.backgroundColor = "red";
        console.log("Date : ", userInputDate, " \nContent: ", tskvalue);
    }

}
// the reset function

const reset_inputs = () => {
    dateInputValue.value = "";
    editZone.value = "";
}

// ##########################################
/// les écouteur ici
addBtn.addEventListener("click", start_add_box); // écouteur d'affiche de zone de entre des nouvelle tâche
clsAddBoxbtn.addEventListener("click", close_box);  // l'écouteur de fermet de zone d'ajout d'une novuelle tâche 
pushTaskBtn.addEventListener("click", push_new_stask); // cette button permet d'ajouter une nouvelle tâche dans la liste de tâches présente