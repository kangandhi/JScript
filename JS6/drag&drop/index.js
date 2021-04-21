console.log("This is drag & drop utility");

const imgBox = document.querySelector('.imgBox');
const whiteBoxes = document.getElementsByClassName('whiteBox');

// Event listeners for draggable element imgBox
// jab event pakada

imgBox.addEventListener("dragstart", (e) => {
  console.log("DragStart has been triggered");
  e.target.className += "hold";
  setTimeout(() => {
    e.target.className = "hide";
  },0);
});

// jab choda
imgBox.addEventListener("dragend", (e) => {
  console.log("DragEnd has been triggered");
  e.target.className = "imgBox";
});

for (whiteBox of whiteBoxes) {
  whiteBox.addEventListener('dragover', (e) => {
    e.preventDefault();
    console.log('DragOver has been triggered');
  });

  whiteBox.addEventListener('dragenter', (e) => {
    console.log('DragEnter has been triggered');
    e.target.className += 'dashed';
  });

  whiteBox.addEventListener('dragleave', (e) => {
    console.log('DragLeave has been triggered');
    e.target.className = 'whiteBox';
  });

  whiteBox.addEventListener('drop', (e) => {
    console.log('Drop has been triggered');
    e.target.append(imgBox);
  });
}
