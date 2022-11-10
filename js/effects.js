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

const effectSliderElement = document.querySelector('.effect-level__slider');
const effectLevelValueElement = document.querySelector('.effect-level__value');
const imgUploadPreviewElement = document.querySelector('.img-upload__preview img');
const effectsElement = document.querySelector('.effects');

const resetEffects = () => {
  imgUploadPreviewElement.className = '';
  imgUploadPreviewElement.style.filter = 'none';
  effectSliderElement.classList.add('hidden');
};

const getEffects = (evt) => {
  const currentFilters = evt.target.value;
  effectSliderElement.classList.remove('hidden');

  if (currentFilters === 'none') {
    resetEffects();
  }

  //  Удаление слайдера при переключении вкладок
  if (effectSliderElement.noUiSlider) {
    effectSliderElement.noUiSlider.destroy();
  }

  // Создание слайдера используя метод глобального объекта noUiSlider с добавлением текущего фильтра
  noUiSlider.create(effectSliderElement, EFFECTS[currentFilters]);
  // Добавление класса с эффектом
  imgUploadPreviewElement.className = `effects__preview--${currentFilters}`;

  // Изменение уровня интенсивности эффекта
  effectSliderElement.noUiSlider.on('update', (element) => {
    imgUploadPreviewElement.style.filter = `${EFFECTS[currentFilters].filter}(${element}${EFFECTS[currentFilters].unit})`;
    // Записываем округленное значение в input
    effectLevelValueElement.value = parseFloat(element);
  });
};

effectsElement.addEventListener('change', getEffects);

export { resetEffects };
