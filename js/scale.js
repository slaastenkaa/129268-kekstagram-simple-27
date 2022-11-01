// модуль для редактирования масштаба изображения;
const uploadScale = document.querySelector('.img-upload__scale');
const uploadPreview = document.querySelector('.img-upload__preview img');
const scaleSmaller = uploadScale.querySelector('.scale__control--smaller');
const scaleBigger = uploadScale.querySelector('.scale__control--bigger');
const scaleValue = uploadScale.querySelector('.scale__control--value');

const SCALE_MIN = 25;
const SCALE_MAX = 100;
const SCALE_STEP = 25;
let SCALE = 100;

scaleValue.value = `${SCALE_MAX}%`;

const getScalePreview = () => {
  scaleValue.value = `${SCALE}%`;
  uploadPreview.style.transform = `scale(${SCALE / 100})`;
};

const onControlSmaller = () => {
  if (SCALE > SCALE_MIN) {
    SCALE -= SCALE_STEP;
  }

  getScalePreview();
};

const onControlBigger = () => {
  if (SCALE < SCALE_MAX) {
    SCALE += SCALE_STEP;
  }

  getScalePreview();
};

scaleSmaller.addEventListener('click', onControlSmaller);
scaleBigger.addEventListener('click', onControlBigger);

const resetScale = () => {
  scaleValue.value = `${SCALE_MAX}%`;
  uploadPreview.style.transform = `scale(${SCALE_MAX / 100})`;
};

export { resetScale };
