// get the button, icon and li elements from DOM
const btn = document.querySelector('.btn');
const icon = document.querySelector('#icon');
const li = document.querySelectorAll('.nav-li');

// attach onClick event on button i.e only visible in mobile view
btn.addEventListener('click', (e) => {
  e.preventDefault();
  try {
    // check if line icon is displayed
    if (icon.classList.contains('fa-align-justify')) {
      setStyles('fa-align-justify', 'fa-times', 'block');
    } else {
      setStyles('fa-times', 'fa-align-justify', 'none');
    }
  } catch (error) {
    console.log('error occured during execution that ' + error);
  }
});

const setStyles = (classRemove, classAdd, style) => {
  icon.classList.remove(classRemove);
  icon.classList.add(classAdd);

  li.forEach((item) => {
    item.style.display = style;
  });
};
