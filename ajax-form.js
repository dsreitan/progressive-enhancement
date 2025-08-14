customElements.define("ajax-form",
  class extends HTMLElement {
    constructor() {
      super();

      const form = document.querySelector("form");
      if (!form) {
        console.warn("no form detected");
        return;
      }

      form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const formData = new FormData(form);
        const response = await fetch(form.action, {
          method: form.method,
          body: formData,
        });

        // TODO: take function param to do something with the response
        const html = await response.text();
        form.innerHTML = html;
        form.style = "white-space: pre";
      });
    }
  }
);
