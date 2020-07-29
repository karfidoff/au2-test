import { bindable, customElement, Controller, inject } from "aurelia";

@customElement({name: "x-field"})
@inject(Controller)
export class XField {

  @bindable
  data;
  @bindable
  name;
  @bindable
  value;
  @bindable
  label;

  @bindable
  required:boolean = false;

  private controller;

  constructor(controller) {
    this.controller = controller;
  }

  beforeBind() {
    //TODO redo it's dirty :(
    this.data = this["$controller"].parent.bindingContext["data"];
  }

  valueChanged(newValue, oldValue) {
    if (this.name && this.data) {
      this.data[this.name] = newValue;
    }
    console.log(this.data);
  }

}