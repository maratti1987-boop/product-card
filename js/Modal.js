export class Modal {
  constructor(id) {
    this.id = id;
    this.modal = document.getElementById(this.id);

    if (!this.modal) {
      throw new Error(`Modal with id "${id}" not found`);
    }

    this.#initCloseListener();
  }

  open() {
    this.modal.classList.add('modal-showed');
  }

  close() {
    this.modal.classList.remove('modal-showed');
  }

  isOpen() {
    return this.modal.classList.contains('modal-showed');
  }

  #initCloseListener() {
    const closeButton = this.modal.querySelector('.close-modal-btn');
    if (closeButton) {
      closeButton.addEventListener('click', () => {
        this.close();
      });
    }
  }
}
