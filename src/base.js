const elements = {
	content: document.querySelector(".content"),

	header: document.createElement("header"),
  sliderInner: document.createElement("div"),
  sliderContent: document.createElement("div"),

};

const base = (() => {
	// HEADER
	elements.header.classList.add("slider");
  elements.sliderInner.classList.add("slider_inner");
  elements.sliderContent.classList.add("slider_content");
  elements.sliderContent.classList.add("slider_help");
  elements.sliderContent.classList.add("type1");
  elements.sliderContent.innerHTML = `
      <h1>Exquisite Dishes</br> From Che</h1>
      <h4>Far far away, behind the word mountains, far from the
        countries Vokalia</br> and Consonantia, there live the blind texts.</h4>
  `;

	elements.content.appendChild(elements.header);
  elements.header.appendChild(elements.sliderInner);
  elements.header.appendChild(elements.sliderContent);


})();

export { elements, base };
