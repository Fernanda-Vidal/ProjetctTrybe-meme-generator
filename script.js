const container = document.getElementById('meme-image-container');
const input = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');

const addText = () => {
  // memeText.id = 'meme-text';
  memeText.innerHTML = input.value;
  // container.appendChild(memeText);
};
// addText();

input.addEventListener('input', addText);
