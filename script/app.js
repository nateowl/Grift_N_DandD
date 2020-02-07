(() => {
	// set up the puzzle pieces and boards

	//buttons at the bottom of the page
	const navButton = document.querySelectorAll("#buttonHolder img");
				puzzleBoard = document.querySelector(".puzzle-board");
				puzzlePiece = document.querySelectorAll(".puzzle-pieces img");
				dropZone = document.querySelectorAll(".drop-zone");

				//store the image names here
	const pieces = ["topLeft", "topRight", "bottomLeft", "bottomRight"];

	function changeImageSet(){
		//change the thumbnail images on the left to match the button images
		//make sure you index your images - makes it a lot easier to work with
		pieces.forEach((piece, index) => {
			document.querySelector(".puzzle-pieces").appendChild(puzzlePiece[index]);
			puzzlePiece[index].src=`images/${piece + this.dataset.puzzleindex}.jpg`;
			puzzlePiece[index].id=`${piece + this.dataset.puzzleindex}`;
		});
		//set a background image on the drop xone container
		//style.backgroud to mutate the background
		puzzleBoard.style.backgroundImage =`url(images/backGround${this.dataset.puzzleindex}.jpg)`

	}

	//another loop - adding an event listener to the pulle piece
	function dragStart(event) {
		console.log("started a drag");

		// capture the id of the element we're dragging
		event.dataTransfer.setData("text/plain", this.id);
	}
	function allowDragOver(event) {
		event.preventDefault();
		console.log("You dragged something to me");
	}
	function allowDrop(event) {

		if (!this.hasChildNodes()) {
		console.log("you dropped something on me")
		console.log(this)
		let currentPiece = event.dataTransfer.getData("text/plain");
		event.target.appendChild(document.querySelector(`#${currentPiece}`));
	}
	}


	// add some event handling for the new navButtons
	navButton.forEach(button => button.addEventListener("click", changeImageSet))

	//drag start - when you start to drag
	puzzlePiece.forEach(piece => piece.addEventListener("dragstart", dragStart));
	dropZone.forEach(zone => zone.addEventListener("dragover", allowDragOver));
		dropZone.forEach(zone => zone.addEventListener("drop", allowDrop));
	//set up the drag over event for the drop zone



	//like saying we have clicked on puzzle piece 0 (as it is the defult)
	changeImageSet.call(navButton[0]);
})();
