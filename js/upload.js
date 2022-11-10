// предпросмотр новой выбранной пользователем фотографии;
const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const imgUploadElement = document.querySelector('#upload-file');
const imgPreviewElement = document.querySelector('.img-upload__preview img');

imgUploadElement.addEventListener('change', () => {
  const file = imgUploadElement.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));
  if (matches) {
    imgPreviewElement.src = URL.createObjectURL(file);
  }
});
