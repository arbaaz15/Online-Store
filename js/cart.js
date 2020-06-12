const theparent = document.querySelector("#parentproducts");
theparent.addEventListener("click",loadimage,false);

function loadimage(e){
  if(e.target !== e.currentTarget)
  {
    const clickedItem = e.target.id;
     localStorage.setItem('value',clickedItem);
  }
  e.stopPropagation();
}
