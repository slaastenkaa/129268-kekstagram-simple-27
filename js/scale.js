// модуль для редактирования масштаба изображения;
const uploadScale = document.querySelector('.img-upload__scale');
const uploadPreview = document.querySelector('.img-upload__preview img');
const scaleSmaller = uploadScale.querySelector('.scale__control--smaller');
const scaleBigger = uploadScale.querySelector('.scale__control--bigger');
const scaleValue = uploadScale.querySelector('.scale__control--value');

const SCALE_MIN = 25;
const SCALE_MAX = 100;
const SCALE_STEP = 25;
let SCALE = SCALE_MAX;

scaleValue.value = `${SCALE_MAX}%`;

const getScalePreview = () => {
  scaleValue.value = `${SCALE}%`;
  uploadPreview.style.transform = `scale(${SCALE / 100})`;
};

const getControlSmaller = () => {
  if (SCALE > SCALE_MIN) {
    SCALE -= SCALE_STEP;
  }

  getScalePreview();
};

const getControlBigger = () => {
  if (SCALE < SCALE_MAX) {
    SCALE += SCALE_STEP;
  }

  getScalePreview();
};

scaleSmaller.addEventListener('click', () => {
  getControlSmaller();
});

scaleBigger.addEventListener('click', () => {
  getControlBigger();
});

export { getScalePreview };
