window.addEventListener('load', () => {

  document.querySelector('.all-content-outer-wrapper').addEventListener('scroll', event => {
    document.querySelector('.all-header-wrapper').style.backgroundColor = `rgba(137, 28, 29, ${Math.min(event.target.scrollTop, window.innerHeight) / window.innerHeight})`;
    document.querySelector('.all-header-wrapper').style.boxShadow = `0 0 8px rgba(5, 5, 5, ${Math.min(event.target.scrollTop, window.innerHeight) / window.innerHeight * 0.4})`;
  });
});
