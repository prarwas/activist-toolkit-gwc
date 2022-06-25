var mylist = document.getElementById("my-list");
if (mylist) {mylist.addEventListener("click", checkoffitem)}
function checkoffitem(clicked) {  
  if (clicked.target.tagName == "LI")      
  clicked.target.classList.toggle ("all-done")}
