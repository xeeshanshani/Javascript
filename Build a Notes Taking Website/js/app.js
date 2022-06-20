console.log("This is my First App");
// If user adds a note, add it to the localStorage
let addBtn = document.getElementById("addBtn");
showNotes();
addBtn.addEventListener("click", function (e) {
  let addTxt = document.getElementById("addTxt");
  let addTitle = document.getElementById("addTitle");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let myobj = {
    title: addTitle.value,
    text: addTxt.value,
  };
//first array of string now array of objects
  notesObj.push(myobj);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";
  addTitle.value = "";
  //   console.log(notesObj);
  showNotes();
});

// Function to show elements from localStorage
function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach(function (element, index) {
    html += `
            <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">Note ${element.title}</h5>
                        <p class="card-text"> ${element.text}</p>
                        <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                    </div>
                </div>`;
    //Using this.id to get the index of the note to delete
  });
  let notesElm = document.getElementById("notes");
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  }
  else {
    notesElm.innerHTML = `Nothing to show! Please add a note.`;
  }
}
// Function to delete a note
function deleteNote(index) {
  console.log("Delete note ", index);
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}
// Function to search the notes
let search = document.getElementById("searchTxt");
search.addEventListener("input", function () {
  // this is working with search.value & search.value.toLowerCase(); as well as search.value.toUpperCase();
  let inputVal = search.value;
  console.log("Input event fired!", inputVal);
  let noteCards = document.getElementsByClassName("noteCard");
  Array.from(noteCards).forEach(function (element) {
    let cardTxt = element.getElementsByTagName("p")[0].innerText;
    if (cardTxt.includes(inputVal)) {
      element.style.display = "block";
    }
    else
    {
      element.style.display = "none";
    //console.log(cardTxt);
    }
   
});
});
