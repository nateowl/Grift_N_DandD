(() => {
	// set up the puzzle pieces and boards
	// buttons at the bottom of the page
	const navbuttons = document.querySelectorAll('#buttonHolder img'),
			gamePieces = document.querySelectorAll('.puzzle-image'),
			puzzleBoard = document.querySelector('.puzzle-board');


	const pieces = ["topLeft", "topRight", "bottomLeft", "bottomRight"]

	function changeImageSet() {

		const id = this.dataset.puzzleindex;

		pieces.forEach((piece, index) => gamePieces[index].src = `images/${piece + id}.jpg`);

		//Change the avalable pieces and the background of dropzone.
		puzzleBoard.style.backgroundImage = `url(images/backGround${id}.jpg)`;
	}

	navbuttons.forEach(button => button.addEventListener('click', changeImageSet));
})();
