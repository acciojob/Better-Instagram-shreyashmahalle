const parent = document.getElementById('parent');
let dragSrc = null;

// Attach DnD handlers to all tiles
parent.querySelectorAll('.image').forEach((item) => {
  // already draggable in HTML, but harmless to ensure:
  item.setAttribute('draggable', 'true');

  item.addEventListener('dragstart', (e) => {
    dragSrc = item;
    item.classList.add('selected');        // uses your .selected CSS
    e.dataTransfer.effectAllowed = 'move';
    // needed for Firefox
    e.dataTransfer.setData('text/plain', '');
  });

  item.addEventListener('dragend', () => {
    item.classList.remove('selected');
    dragSrc = null;
  });

  item.addEventListener('dragover', (e) => {
    e.preventDefault(); // allow drop
  });

  item.addEventListener('drop', (e) => {
    e.preventDefault();
    const target = item;
    if (dragSrc && dragSrc !== target) {
      swapSiblings(dragSrc, target);
    }
  });
});

// Swap two sibling nodes in their parent (#parent)
function swapSiblings(a, b) {
  const aNext = a.nextSibling === b ? a : a.nextSibling;
  b.parentNode.insertBefore(a, b);
  a.parentNode.insertBefore(b, aNext);
}