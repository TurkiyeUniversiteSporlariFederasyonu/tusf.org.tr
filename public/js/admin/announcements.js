window.addEventListener('load', () => {
  document.addEventListener('click', event => {
    if (event.target.classList.contains('each-announcement-delete-button')) {
      return createConfirm({
        title: 'Bu duyuruyu silmek istediğinize emin misiniz?',
        text: 'Bu işlemi geri alamazsınız.',
        accept: 'Sil',
        reject: 'Geri'
      }, res => {
        if (res) {
          serverRequest('/admin/announcements/delete?id=' + event.target.parentNode.id, 'GET', {}, res => {
            if (!res.success) return throwError(res.error);

            event.target.parentNode.remove();
          });
        }
      });
    }
  })
});
