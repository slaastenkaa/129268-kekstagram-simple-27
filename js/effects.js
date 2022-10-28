// модуль для наложения эффекта на изображения;

// const uploadEffectSlider = document.querySelector('.img-upload__effect-level');
// const effectSlider = uploadEffectSlider.querySelector('.effect-level__slider');
// const effectLevelValue = document.querySelector('.effect-level__value');
const imgUploadPreview = document.querySelector('.img-upload__preview');
const effects = document.querySelector('.effects');

function onImgUploadPreview (evt) {
  imgUploadPreview.classList.add(`effects__preview--${evt.target.value}`);
}

effects.addEventListener('change', onImgUploadPreview);

export { effects };

// effectLevelValue.value = 1;

// noUiSlider.create(effectSlider, {
//   range: {
//     min: 0,
//     max: 1,
//   },
//   start: 1,
//   step: 0.1,
//   connect: 'lower',
// });

// effectSlider.noUiSlider.on('update', () => {
//   effectLevelValue.value = effectLevelValue.noUiSlider.get();
// });

// specialElement.addEventListener('change', (evt) => {
//     if (evt.target.checked) {
//       sliderElement.noUiSlider.updateOptions({
//         range: {
//           min: 1,
//           max: 10,
//         },
//         step: 0.1,
//       });
//     } else {
//       sliderElement.noUiSlider.updateOptions({
//         range: {
//           min: 0,
//           max: 100,
//         },
//         step: 1,
//       });
//     }
//   });
