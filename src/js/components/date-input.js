import $ from 'jquery';
import Inputmask from "inputmask";

function dateInput() {
  let input =  $('#dateInput');
  let mask = new Inputmask('99.99.9999', { 'placeholder': 'dd.mm.yyyy' });
  mask.mask(input);
}
dateInput();