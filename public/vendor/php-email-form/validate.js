(function () {
  "use strict";

  const fields = document.querySelectorAll("[required]");
  const fieldFile = document.querySelector('input[name="imagesEvent"]');

  let imageContainer = document.getElementById("images");
  let numOfFiles = document.getElementById("num-of-files");
  let language = "en-US";

  const budget = document.querySelector("#budget");

  document.querySelectorAll(".dropdown ul li a").forEach((item) => {
    item.addEventListener("click", (event) => {
      const valueSelected = event.target.textContent.trim();

      language = valueSelected;
    });
  });

  window.onload = function () {
    document.getElementById("telephone").onkeyup = function () {
      this.value = mascaraTelefone(this.value);
    };
  };

  function mascaraTelefone(valor) {
    if (language == "en-US") {
      valor = valor.replace(/\D/g, ""); //Remove tudo o que não é dígito
      valor = valor.replace(/^(\d{3})(\d)/g, "($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
      valor = valor.replace(/(\d)(\d{4})$/, "$1-$2"); //Coloca hífen entre o quarto e o quinto dígitos
    } else {
      valor = valor.replace(/\D/g, ""); //Remove tudo o que não é dígito
      valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
      valor = valor.replace(/(\d)(\d{4})$/, "$1-$2"); //Coloca hífen entre o quarto e o quinto dígitos
    }
    return valor;
  }

  budget.addEventListener("input", (e) => {
    let value = e.target.value;
    value = value.replace(/[\D\s\._\-]+/g, "");
    value = value ? parseInt(value, 10) : 0;
    e.target.value = (function (value) {
      return value === 0
        ? ""
        : new Intl.NumberFormat(language, {
            style: "currency",
            currency: language == "en-US" ? "USD" : "BRL",
          }).format(value / 100);
    })(value);
  });

  function preview() {
    let MAX_IMAGES = 5;

    if (fieldFile.files.length > 5) {
      showToast(`You can upload up to ${MAX_IMAGES} files.`);
      fieldFile.value = "";
      return;
    }

    imageContainer.innerHTML = "";
    numOfFiles.textContent = `${fieldFile.files.length} Files Selected`;

    for (const i of fieldFile.files) {
      let reader = new FileReader();
      let figure = document.createElement("figure");
      let figCap = document.createElement("figcaption");

      figCap.innerText = i.name;
      figure.appendChild(figCap);
      reader.onload = () => {
        let img = document.createElement("img");
        img.setAttribute("src", reader.result);
        figure.insertBefore(img, figCap);
      };
      imageContainer.appendChild(figure);
      reader.readAsDataURL(i);
    }
  }

  function showToast(message, isValid) {
    var toast = document.getElementById("toast");
    toast.className = "toast show";
    toast.innerText = message;
    if (isValid) {
      toast.style.backgroundColor = "#18d26e";
      toast.style.color = "#000";
    } else {
      toast.style.backgroundColor = "red";
      toast.style.color = "#fff";
    }

    setTimeout(function () {
      toast.className = toast.className.replace("show", "");
    }, 3000);
  }

  function limparCampoDeArquivo() {
    var input = document.getElementById("imagesEvent");

    input.value = ""; // Define o valor como uma string vazia
  }

  function validateField(field, language) {
    function verifyErrors() {
      let foundError = false;

      for (let error in field.validity) {
        if (field.validity[error] && !field.validity.valid) {
          foundError = error;
        }
      }

      return foundError;
    }

    function customMessage(typeError) {
      const messages = {
        "en-US": {
          text: {
            valueMissing: "Please fill out this field",
          },
          email: {
            valueMissing: "Email is required",
            typeMismatch: "Please enter a valid email",
          },
          date: {
            valueMissing: "Please enter the event date",
          },
        },

        "pt-BR": {
          text: {
            valueMissing: "Por favor, preencha este campo",
          },
          email: {
            valueMissing: "Email é obrigatório",
            typeMismatch: "Por favor, preencha um email válido",
          },
          date: {
            valueMissing: "Por favor, Insira a data do Evento",
          },
        },
      };

      return messages[language][field.type][typeError];
    }

    function setCustomMessage(message) {
      const spanError = field.parentNode.querySelector("span.input-error");

      if (message) {
        spanError.classList.add("active");
        spanError.innerHTML = message;
      } else {
        spanError.classList.remove("active");
        spanError.innerHTML = "";
      }
    }

    return function () {
      const error = verifyErrors();

      if (error) {
        const message = customMessage(error);

        field.style.borderColor = "red";
        setCustomMessage(message);
      } else {
        field.style.borderColor = "green";
        setCustomMessage();
      }
    };
  }

  function customValidation(event) {
    const field = event.target;

    const validation = validateField(field, language);

    validation();

    // const error = validateField(field);
  }

  async function uploadTypeFile() {
    const MAX_IMAGES = 10;
    let imagesBase64 = [];

    if (fieldFile.files.length > 0) {
      let validFiles = Array.from(fieldFile.files).filter((file) =>
        file.type.startsWith("image/")
      );

      if (validFiles.length !== fieldFile.files.length) {
        showToast("Please select images only.");
        limparCampoDeArquivo();
        return false;
      }

      if (validFiles.length > MAX_IMAGES) {
        showToast(`You can upload up to ${MAX_IMAGES} files.`);
        fieldFile.value = "";
        return false;
      }

      await Promise.all(validFiles.map((file) => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onloadend = function () {
            imagesBase64.push({
              name: file.name,
              base64: reader.result,
            });
            resolve();
          };
          reader.onerror = reject;
          reader.readAsDataURL(file);
        });
      }));
    }

    const inputValues = Array.from(document.querySelectorAll("input")).reduce(
      (acc, input) => {
        acc[input.name] = input.value;
        return acc;
      },
      {}
    );
    const selectValues = Array.from(document.querySelectorAll("select")).reduce(
      (acc, select) => {
        acc[select.name] = select.value;
        return acc;
      },
      {}
    );

    inputValues.budget = inputValues.budget.replace(/[^\d.-]/g, "");

    const request = {
      telephone: inputValues.telephone,
      eventName: inputValues.event,
      eventDate: inputValues.dateEvent,
      name: inputValues.name,
      email: inputValues.email,
      eventPlace: inputValues.place,
      standSize: inputValues.size,
      budget: parseFloat(inputValues.budget),
      quantityCounter: parseInt(inputValues.quantityCounter),
      tableQuantity: parseInt(inputValues.tableQuantity),
      quantityChair: parseInt(inputValues.quantityChair),
      typeFloor: parseInt(selectValues.typeFloor),
      quantityTv: parseInt(inputValues.quantityTv),
      isNeededGraph: Boolean(selectValues.isNeededGraph),
      images: imagesBase64,
    };

    try {
      const response = await fetch(
        "https://newconceptexhibitionbackend-66416bddc5c6.herokuapp.com/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(request),
        }
      );

      const data = await response.json();

      if (response.ok) {
        showToast("Submitting form", true);
        console.log("Response ok", data);
      } else {
        showToast("Error submitting form", false);
        console.log("Error data", data);
      }
    } catch (err) {
      showToast("Erro na requisição");
      console.error(err);
    }

    return true;
  }

  for (let field of fields) {
    field.addEventListener("invalid", (event) => {
      //eliminar o bubble
      event.preventDefault();
      customValidation(event);
    });
    field.addEventListener("blur", customValidation);
  }

  fieldFile.addEventListener("change", preview);

  document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();

    if (uploadTypeFile()) {
      showToast("Submitting form", true);
      setTimeout(() => {
        location.reload();
      }, 3000);
      showToast("Sent with success", true);
    } else {
      showToast("Fill in the required fields", false);
    }
  });
})();
