const draggables = document.querySelectorAll(".draggable");

let draggedDiv = null;

draggables.forEach(div => {
  div.addEventListener("dragstart", e => {
    draggedDiv = div;
    e.dataTransfer.setData("text/plain", div.id);
  });

  div.addEventListener("dragover", e => {
    e.preventDefault(); // Allow dropping
  });

  div.addEventListener("drop", e => {
    e.preventDefault();

    const targetDiv = e.currentTarget;

    if (draggedDiv && draggedDiv !== targetDiv) {
      // Swap background images
      const tempBg = draggedDiv.style.backgroundImage;
      draggedDiv.style.backgroundImage = targetDiv.style.backgroundImage;
      targetDiv.style.backgroundImage = tempBg;
    }

    draggedDiv = null;
  });
});
