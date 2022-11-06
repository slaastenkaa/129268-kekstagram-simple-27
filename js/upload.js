// предпросмотр новой выбранной пользователем фотографии;
const imgUpload = document.querySelector('#upload-file');
const imgPreview = document.querySelector('.img-upload__preview img');

const FILE_TYPES = ['jpg', 'jpeg', 'png'];

imgUpload.addEventListener('change', () => {
  const file = imgUpload.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));
  if (matches) {
    imgPreview.src = URL.createObjectURL(file);
  }
});
