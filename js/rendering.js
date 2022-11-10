//модуль отрисовки миниатюр;
const picturesElement = document.querySelector('.pictures');
const templatePictureElement = document.querySelector('#picture').content.querySelector('.picture');
const newFragmentPictureElement = document.createDocumentFragment();

const renderDatePhoto = (renderPhotos) => {
  renderPhotos.forEach((renderPhoto) => {
    const photoElement = templatePictureElement.cloneNode(true);
    photoElement.querySelector('.picture__img').src = renderPhoto.url;
    photoElement.querySelector('.picture__comments').textContent = renderPhoto.comments;
    photoElement.querySelector('.picture__likes').textContent = renderPhoto.likes;
    newFragmentPictureElement.appendChild(photoElement);
  });
  picturesElement.appendChild(newFragmentPictureElement);
};

export { renderDatePhoto };
