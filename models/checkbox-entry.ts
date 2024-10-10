export default class CheckboxEntry {
  text: string;
  isChecked: boolean;

  constructor(text: string) {
    this.text = text;
    this.isChecked = false;
  }
}
