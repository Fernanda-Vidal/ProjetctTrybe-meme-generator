// const memeImageContainer = document.getElementById('meme-image-container');
const textInput = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');
const memeInsert = document.getElementById('meme-insert');
const memeImage = document.getElementById('meme-image');

const addText = () => {
  memeText.innerHTML = textInput.value;
};
// addText();

const addImageContainer = (event) => {
  memeImage.src = URL.createObjectURL(event.target.files[0]);
// Para esta solução, pesquisei: https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded
};

textInput.addEventListener('input', addText);
memeInsert.addEventListener('input', addImageContainer);
