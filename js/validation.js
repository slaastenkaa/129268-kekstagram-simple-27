// модуль для валидации текста;
const uploadForm = document.querySelector('.img-upload__form');
const uploadText = uploadForm.querySelector('.img-upload__text');
const uploadSubmit = uploadForm.querySelector('#upload-submit');
const textDescription = uploadForm.querySelector('.text__description');

const MIN_STR = 20;
const MAX_STR = 140;

function getMaxSting(str) {
  return MIN_STR < str.length && str.length < MAX_STR;
}

const pristine = new Pristine(uploadText, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text'
});

const upload = textDescription.addEventListener('input', () => {
  if (textDescription.value.length >= MIN_STR && textDescription.value.length <= MAX_STR) {
    uploadSubmit.removeAttribute('disabled');
  }
  else {
    uploadSubmit.setAttribute('disabled', 'disabled');
  }
});


pristine.addValidator(uploadText.querySelector('.text__description'), getMaxSting, 'Длина комментария от 20 до 140 символов');

uploadForm.addEventListener('submit', (evt) => {
  upload();
  evt.preventDefault();
  pristine.validate();
});
