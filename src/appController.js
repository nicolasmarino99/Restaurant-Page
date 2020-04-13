// eslint-disable-next-line func-names
const appController = (function () {
  const content = document.querySelector('.content');
  const insertPage = (node) => {
    content.insertAdjacentHTML('afterbegin', node);
  };
  const clearContent = () => {
    content.innerHTML = '';
  };
  const redirectTo = (btn, linkPage) => {
    btn.addEventListener('click', () => {
      clearContent();
      insertPage(linkPage);
    });
  };

  const changeNavScrolled = () => {
    const option1 = document.querySelector('.option1');
    const trigger = document.querySelector('.trigger');

    const triggerOptions = {};

    const triggerObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // eslint-disable-next-line no-unused-expressions
        !entry.isIntersecting ? option1.classList.add('scrolled-nav') : option1.classList.remove('scrolled-nav');
      });
    }, triggerOptions);

    triggerObserver.observe(trigger);
  };
  return { redirectTo, changeNavScrolled, insertPage };
}());
export default appController;
