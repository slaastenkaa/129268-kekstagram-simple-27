// модуль для валидации текста;
const MIN_STR = 20;
const MAX_STR = 140;

const uploadFormElement = document.querySelector('.img-upload__form');
const uploadTextElement = uploadFormElement.querySelector('.img-upload__text');
const uploadSubmitElement = uploadFormElement.querySelector('#upload-submit');
const textDescriptionElement = uploadFormElement.querySelector('.text__description');

function getMaxSting(str) {
  return MIN_STR <= str.length && str.length <= MAX_STR;
}

const pristine = new Pristine(uploadTextElement, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text'
});

const upload = textDescriptionElement.addEventListener('input', () => {
  if (textDescriptionElement.value.length >= MIN_STR && textDescriptionElement.value.length <= MAX_STR) {
    uploadSubmitElement.disabled = false;
  }
  else {
    uploadSubmitElement.disabled = true;
  }
});

pristine.addValidator(uploadTextElement.querySelector('.text__description'), getMaxSting, upload);

uploadFormElement.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});

const resetTextDescription = () => {
  pristine.reset();
  textDescriptionElement.innerHTML = '';
};

export { pristine, resetTextDescription };
