import './styles/tabs.css';

class Tabs {
  constructor(container) {
    this.tabs = container.querySelectorAll('.trigger');
    this.contents;

    const allContents = container.querySelectorAll('.content');
    allContents.forEach(c => {
      contents[c.id] = c;
    });
  }

  init() {
    this.tabs.forEach(tab => {
      tab.addEventListener('click', e => {
        this.toggleTabs(e);
        this.toggleContent(e);
      })
    });
  }

  toggleTabs(e) {
    this.tabs.forEach(tab => tab.classList.remove('active'));
    e.target.classList.add('active');
  }

  toggleContent(e) {
    this.contents.forEach(content => content.classList.remove('active'));
    contents[`${e.target.dataset.target}`].classList.add('active');
  }
}

export default Tabs;