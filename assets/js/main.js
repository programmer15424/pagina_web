const forms = document.querySelectorAll(".needs-validation");

forms.forEach((form) => {
  const successMessage = form.querySelector("#mensajeExito");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (form.checkValidity()) {
      form.classList.remove("was-validated");
      form.reset();

      if (successMessage) {
        successMessage.classList.remove("d-none");
        successMessage.focus?.();
      }

      return;
    }

    form.classList.add("was-validated");

    const firstInvalidField = form.querySelector(":invalid");

    if (firstInvalidField) {
      firstInvalidField.focus();
    }

    if (successMessage) {
      successMessage.classList.add("d-none");
    }
  });
});
