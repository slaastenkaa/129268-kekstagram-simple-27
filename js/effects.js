// модуль для наложения эффекта на изображения;
const EFFECTS = {
  none: {
    filter: 'none',
    range: {
      min: 0,
      max: 1,
    },
    step: 1,
    start: 1,
    unit: '',
  },
  chrome: {
    filter: 'grayscale',
    range: {
      min: 0,
      max: 1,
    },
    step: 0.1,
    start: 1,
    unit: '',
    connect: 'lower',
  },
  sepia: {
    filter: 'sepia',
    range: {
      min: 0,
      max: 1,
    },
    step: 0.1,
    start: 1,
    unit: '',
    connect: 'lower',
  },
  marvin: {
    filter: 'invert',
    range: {
      min: 0,
      max: 100,
    },
    step: 1,
    start: 100,
    unit : '%',
    connect: 'lower',
  },
  phobos: {
    filter: 'blur',
    range: {
      min: 0,
      max: 3,
    },
    step: 0.1,
    start: 3,
    unit : 'px',
    connect: 'lower',
  },
  heat: {
    filter: 'brightness',
    range: {
      min: 1,
      max: 3,
    },
    step: 0.1,
    start: 3,
    unit: '',
    connect: 'lower',
  },
};

const effectSlider = document.querySelector('.effect-level__slider');
const effectLevelValue = document.querySelector('.effect-level__value');
const imgUploadPreview = document.querySelector('.img-upload__preview img');
const effects = document.querySelector('.effects');

const resetEffects = () => {
  imgUploadPreview.className = '';
  imgUploadPreview.style.filter = 'none';
  effectSlider.classList.add('hidden');
};

const getEffects = (evt) => {
  const currentFilters = evt.target.value;
  effectSlider.classList.remove('hidden');

  if (currentFilters === 'none') {
    resetEffects();
  }

  //  Удаление слайдера при переключении вкладок
  if (effectSlider.noUiSlider) {
    effectSlider.noUiSlider.destroy();
  }

  // Создание слайдера используя метод глобального объекта noUiSlider с добавлением текущего фильтра
  noUiSlider.create(effectSlider, EFFECTS[currentFilters]);
  // Добавление класса с эффектом
  imgUploadPreview.className = `effects__preview--${currentFilters}`;

  // Изменение уровня интенсивности эффекта
  effectSlider.noUiSlider.on('update', (element) => {
    imgUploadPreview.style.filter = `${EFFECTS[currentFilters].filter}(${element}${EFFECTS[currentFilters].unit})`;
    // Записываем округленное значение в input
    effectLevelValue.value = parseFloat(element);
  });
};

effects.addEventListener('change', getEffects);

// Применение эффекта для изображения
// function onImgUploadPreview (evt) {
//   if (evt.target.value === 'none') {
//     imgUploadPreview.className = '';
//   }
//   else {
//     imgUploadPreview.classList.add(`effects__preview--${evt.target.value}`);
//   }
// }
// effects.addEventListener('change', onImgUploadPreview);

export { resetEffects };
