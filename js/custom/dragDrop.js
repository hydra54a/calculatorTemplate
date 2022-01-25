let onDragStart = (event) =>{
  event
  .dataTransfer
  .setData('text/plain', event.target.id);
}

let onDragOver = (event) => {
  event.preventDefault();
}

let onDrop = (event) => {
  const id = event.dataTransfer.getData('text');
  const draggableElement = document.getElementById(id);
  const dropzone = event.target;
  dropzone.appendChild(draggableElement);
  event.dataTransfer.clearData();
}
