  var enterButton = document.getElementById("painike");
  var input = document.getElementById("syotto");
  var ul = document.querySelector("ul");
  var item = document.getElementsByTagName("li");
  enterButton.addEventListener("click",addListAfterClick);
  input.addEventListener("keypress", addListAfterKeypress);
  createListElement();

function inputLength(){
	return input.value.length;
}

function listLength(){
	return item.length;
}

function createListElement() {
	var li = document.createElement("li"); // luo "li" elementin
  if(input.value != '')
  {
    li.appendChild(document.createTextNode(input.value)); //lisää li-elementtiin tekstin, joka on laatikossa
  	ul.appendChild(li); //lisää li-elementin ul-elementtiin
  	input.value = ""; // Tyhjentää syöttökentän
  }

	//START STRIKETHROUGH
	// because it's in the function, it only adds it for new items
	function crossOut() {
		li.classList.toggle("done");
	}
  // Kutsutaan ylläolevaa funktiota
	li.addEventListener("click",crossOut);
	//END STRIKETHROUGH


	// START ADD DELETE BUTTON
	var dBtn = document.createElement("button");
	dBtn.appendChild(document.createTextNode("X"));
	li.appendChild(dBtn);
	dBtn.addEventListener("click", deleteListItem);
	// END ADD DELETE BUTTON


	//ADD CLASS DELETE (DISPLAY: NONE)
	function deleteListItem(){
		li.classList.add("delete")
	}
	//END ADD CLASS DELETE
}


function addListAfterClick(){
	if (inputLength() > 0) { //makes sure that an empty input field doesn't create a li
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.which ===13) { //this now looks to see if you hit "enter"/"return"
		//the 13 is the enter key's keycode, this could also be display by event.keyCode === 13
		createListElement();
	}
}
