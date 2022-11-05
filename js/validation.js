// модуль для валидации текста;
const uploadForm = document.querySelector('.img-upload__form');
const uploadText = uploadForm.querySelector('.img-upload__text');
const uploadSubmit = uploadForm.querySelector('#upload-submit');
const textDescription = uploadForm.querySelector('.text__description');

const MIN_STR = 20;
const MAX_STR = 140;

function getMaxSting(str) {
  return MIN_STR <= str.length && str.length <= MAX_STR;
}

const pristine = new Pristine(uploadText, {
  classTo: 'img-upload__text',
  // errorClass: ,
  errorTextParent: 'img-upload__text'
});

const upload = textDescription.addEventListener('input', () => {
  if (textDescription.value.length >= MIN_STR && textDescription.value.length <= MAX_STR) {
    uploadSubmit.disabled = false;
  }
  else {
    uploadSubmit.disabled = true;
  }
});


pristine.addValidator(uploadText.querySelector('.text__description'), getMaxSting, upload);

uploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});

const resetTextDescription = () => {
  pristine.reset();
  textDescription.innerHTML = '';
};

export { pristine, resetTextDescription };
