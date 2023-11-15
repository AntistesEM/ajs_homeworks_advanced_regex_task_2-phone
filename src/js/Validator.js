export default class Validator {
  constructor(phone) {
    this.phone = phone;
  }

  validatePhone() {
    this.phone = this.phone.replace(/[()-\s]/g, '');

    if (/^8/.test(this.phone)) {
      this.phone = this.phone.replace('8', '+7');
    }

    return this.phone;
  }
}
