import {formValidation} from "./validacion.js"
import { darkButton, darkMode } from "./dark_mode.js"

document.addEventListener("DOMContentLoaded", (e) => {
  darkButton();
  darkMode();
  formValidation()
});