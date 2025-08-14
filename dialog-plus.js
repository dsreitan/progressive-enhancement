customElements.define("dialog-plus",
  class extends HTMLElement {
    constructor() {
      super();
      const timeElement = document.querySelector("time");
      timeElement.title = timeElement.innerHTML;

      const then = new Date(timeElement.dateTime);
      const now = new Date();
      const seconds = Math.floor((now - then) / 1000);
      const rtf = new Intl.RelativeTimeFormat(timeElement.lang || "en", { numeric: "auto" });
      timeElement.innerHTML = rtf.format(-seconds, "seconds");
    }
  });