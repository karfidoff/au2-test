import Aurelia from 'aurelia';
import {MyApp} from './my-app';

import {XForm} from "./components/x-form";
import {XFieldPlace} from "./components/x-field-place";
import {XTextfield} from "./components/x-textfield";
import {XCheckbox} from "./components/x-checkbox";

Aurelia.register(XForm, XFieldPlace, XTextfield, XCheckbox)
    .app(MyApp)
    .start();
