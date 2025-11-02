const boxes = document.querySelectorAll('.image-box');
let draggedDiv = null;

boxes.forEach(box => {
  // When dragging starts
  box.addEventListener('dragstart', function (e) {
    draggedDiv = this;
    e.dataTransfer.setData('text/plain', this.id);
    setTimeout(() => {
      this.style.opacity = '0.5';
    }, 0);
  });

  // When dragging ends
  box.addEventListener('dragend', function () {
    this.style.opacity = '1';
  });

  // Allow dropping
  box.addEventListener('dragover', function (e) {
    e.preventDefault();
  });

  // When the dragged item enters another box
  box.addEventListener('dragenter', function () {
    this.style.borderColor = '#007bff';
  });

  // When dragged item leaves the box
  box.addEventListener('dragleave', function () {
    this.style.borderColor = '#ccc';
  });

  // Handle drop event
  box.addEventListener('drop', function (e) {
    e.preventDefault();
    this.style.borderColor = '#ccc';

    const droppedDiv = this;

    // Swap background images
    const temp = draggedDiv.style.backgroundImage;
    draggedDiv.style.backgroundImage = droppedDiv.style.backgroundImage;
    droppedDiv.style.backgroundImage = temp;
  });
});
