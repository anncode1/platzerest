//MODAL 1
// Get the modal
var modal = document.getElementById('modal-1');
function openModal() {
	
	modal.style.display = "block";
}


var span = document.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

