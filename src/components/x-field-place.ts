import {bindable} from "aurelia";

export class XFieldPlace {
  @bindable
  field;

  get labelText() {
    if (!this.field) {
      return undefined;
    }
    return this.field.label;
  }

}
