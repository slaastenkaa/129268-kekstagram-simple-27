//модуль отрисовки миниатюр;
const pictures = document.querySelector('.pictures');

const templatePicture = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const newFragmentPicture = document.createDocumentFragment();

const renderDatePhoto = (renderPhotos) => {

  renderPhotos.forEach((renderPhoto) => {
    const photoElement = templatePicture.cloneNode(true);
    photoElement.querySelector('.picture__img').src = renderPhoto.url;
    photoElement.querySelector('.picture__comments').textContent = renderPhoto.comments;
    photoElement.querySelector('.picture__likes').textContent = renderPhoto.likes;
    newFragmentPicture.appendChild(photoElement);
  });
  pictures.appendChild(newFragmentPicture);
};

export { renderDatePhoto };
