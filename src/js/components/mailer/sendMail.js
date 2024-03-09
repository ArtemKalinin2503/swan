import $ from 'jquery';

import successMessage from "./successMessage.js";
import errorMessage from "./errorMessage.js";

export default function sendMail(selector) {
  function getValues() {
    const checkboxes = [];
    const inputs = $('input:checked')
    for (const input of inputs) {
      checkboxes.push(input.value);
    }
    return checkboxes;
  }

  let formData = new FormData($(selector).get(0));
  let data = JSON.stringify(getValues()).replace('[', '').replace(']', '').replace(',', ', ');
  if (data) {
    formData.append('checkboxes', data);
  }
  return fetch('/assets/files/mail.php', {
    method: 'POST',
    body: formData
  }).then(function(response) {
    if (response.ok == false) {
      errorMessage('popup-alert-error');
    } else {
      successMessage('popup-alert-success');
    }
  })
};