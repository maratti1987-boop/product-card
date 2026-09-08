export class Form {
  constructor (id) {
    this.id = id;
    this.form = document.getElementById(this.id);

     if (!this.form) {
      throw new Error(`Form with id "${id}" not found`);
    }
  }

  getValues () {
    const formData = new FormData(this.form);
    const values = {};
    for (const [key, value] of formData.entries()) {
      values[key] = value;
    }
    return values;
  }

  isValid () {
    return this.form.checkValidity();
  }

  reset () {
    this.form.reset();
  }
}
