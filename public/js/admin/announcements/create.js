function uploadImage (file, callback) {
  const formdata = new FormData();
  formdata.append('file', file);

  const xhr = new XMLHttpRequest();
  xhr.open('POST', '/image/upload');
  xhr.send(formdata);

  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.responseText) {
      const res = JSON.parse(xhr.responseText);

      if (!res.success)
        return callback(res.error || 'unknown_error');

      return callback(null, res.url);
    }
  };
}

function createImagePicker (wrapper) {
  const settingsImagePicker = document.createElement('label');
  settingsImagePicker.classList.add('choose-image-input-text');

  const span = document.createElement('span');
  span.innerHTML = 'Bilgisayarınızdan seçmek için tıklayın.';
  settingsImagePicker.appendChild(span);

  const input = document.createElement('input');
  input.classList.add('display-none');
  input.classList.add('image-input');
  input.accept = 'image/*';
  input.type = 'file';

  settingsImagePicker.appendChild(input);

  wrapper.innerHTML = '';
  wrapper.appendChild(settingsImagePicker);
}

function createUploadedImage (url, wrapper) {
  const imageInputWrapper = document.createElement('div');
  imageInputWrapper.classList.add('image-input-wrapper');

  const imageWrapper = document.createElement('div');
  imageWrapper.classList.add('image-input-wrapper-image');
  const image = document.createElement('img');
  image.src = url;
  imageWrapper.appendChild(image);
  imageInputWrapper.appendChild(imageWrapper);

  const i = document.createElement('i');
  i.classList.add('fas');
  i.classList.add('fa-times');
  i.classList.add('delete-image-button');
  imageInputWrapper.appendChild(i);

  wrapper.innerHTML = '';
  wrapper.appendChild(imageInputWrapper);
}

window.addEventListener('load', () => {
  document.addEventListener('change', event => {
    if (event.target.classList.contains('image-input')) {
      const file = event.target.files[0];

      event.target.parentNode.style.cursor = 'progress';
      event.target.parentNode.childNodes[0].innerHTML = 'Yükleniyor...';
      event.target.parentNode.childNodes[1].type = 'text';

      uploadImage(file, (err, url) => {
        if (err)
          return throwError(err);

        createUploadedImage(url, event.target.parentNode.parentNode);
      });
    }
  });

  document.addEventListener('click', event => {
    if (event.target.classList.contains('delete-image-button')) {
      const wrapper = event.target.parentNode.parentNode;
      const url = event.target.parentNode.childNodes[0].childNodes[0].src;

      serverRequest(`/image/delete?url=${url}`, 'GET', {}, res => {
        if (!res.success) return throwError(res.error);

        createImagePicker(wrapper);
      });
    }

    if (event.target.id == 'new-announcement-back-button') {
      createConfirm({
        title: 'Çıkış yapmak istediğinize emin misiniz?',
        text: 'Sayfa kaydedilmedi, girdiğiniz bilgiler silinecektir.',
        accept: 'Sayfadan Çık',
        reject: 'İptal'
      }, res => {
        if (res) history.back();
      })
    }

    if (event.target.id == 'new-announcement-create-button') {
      const error = document.getElementById('new-announcement-form-error');
      const imageWrapper = document.getElementById('image-input-wrapper');

      error.innerHTML = '';

      if (!imageWrapper.querySelector('img') || !imageWrapper.querySelector('img').src)
        return error.innerHTML = 'Lütfen bir resim seçin.';

      const announcement = {
        image: imageWrapper.querySelector('img').src,
        title: document.getElementById('title-input').value,
        text: document.getElementById('text-input').value
      };

      if (!announcement.title || !announcement.title.length)
        return error.innerHTML = 'Lütfen duyuru başlığını yazın.';

      if (!announcement.text || !announcement.text.length)
        return error.innerHTML = 'Lütfen duyuru metnini yazın.';

      serverRequest('/admin/announcements/create', 'POST', announcement, res => {
        if (res.success)
          return window.location = '/admin';

        return throwError(res.error);
      });
    }
  });
})
