import {XField} from "./x-field";

export class XForm extends XField {

  beforeBind() {
    if (!this.data) {
      this.data = {};
    }
    console.log(this.data);
  }

}