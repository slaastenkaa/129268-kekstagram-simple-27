// предпросмотр новой выбранной пользователем фотографии;
const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const imgUpload = document.querySelector('#upload-file');
const imgPreview = document.querySelector('.img-upload__preview img');

imgUpload.addEventListener('change', () => {
  const file = imgUpload.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));
  if (matches) {
    imgPreview.src = URL.createObjectURL(file);
  }
});
