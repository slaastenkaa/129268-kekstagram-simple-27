// модуль для редактирования масштаба изображения;
const SCALE_MIN = 25;
const SCALE_MAX = 100;
const SCALE_STEP = 25;
let scale = 100;

const uploadScaleElement = document.querySelector('.img-upload__scale');
const uploadPreviewElement = document.querySelector('.img-upload__preview img');
const scaleSmallerElement = uploadScaleElement.querySelector('.scale__control--smaller');
const scaleBiggerElement = uploadScaleElement.querySelector('.scale__control--bigger');
const scaleValueElement = uploadScaleElement.querySelector('.scale__control--value');

scaleValueElement.value = `${SCALE_MAX}%`;

const getScalePreview = () => {
  scaleValueElement.value = `${scale}%`;
  uploadPreviewElement.style.transform = `scale(${scale / SCALE_MAX})`;
};

const onControlSmaller = () => {
  if (scale > SCALE_MIN) {
    scale -= SCALE_STEP;
  }
  getScalePreview();
};

const onControlBigger = () => {
  if (scale < SCALE_MAX) {
    scale += SCALE_STEP;
  }
  getScalePreview();
};

scaleSmallerElement.addEventListener('click', onControlSmaller);
scaleBiggerElement.addEventListener('click', onControlBigger);

const resetScale = () => {
  scaleValueElement.value = `${SCALE_MAX}%`;
  uploadPreviewElement.style.transform = `scale(${SCALE_MAX / SCALE_MAX})`;
};

export { resetScale };
