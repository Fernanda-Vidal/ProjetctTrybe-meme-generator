const memeImageContainer = document.getElementById('meme-image-container');
const textoInput = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');
const memeInsert = document.getElementById('meme-insert');
const memeImage = document.getElementById('meme-image');
const buttonFire = document.getElementById('fire');
const buttonWater = document.getElementById('water');
const buttonEarth = document.getElementById('earth');

const addText = () => {
  memeText.innerHTML = textoInput.value;
};
// addText();

const addImageContainer = (event) => {
  memeImage.src = URL.createObjectURL(event.target.files[0]);
// https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded
};

const fire = () => {
  memeImageContainer.style.border = '3px dashed red';
};

const water = () => {
  memeImageContainer.style.border = '5px double blue';
};

const earth = () => {
  memeImageContainer.style.border = '6px groove green';
};

textoInput.addEventListener('input', addText);
memeInsert.addEventListener('input', addImageContainer);
buttonFire.addEventListener('click', fire);
buttonWater.addEventListener('click', water);
buttonEarth.addEventListener('click', earth);
