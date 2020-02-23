import nouislider from "nouislider";

const priceSlider = document.querySelector(".filter__price-range");

nouislider.create(priceSlider, {
	start: [3000, 7000],
	connect: true,
	range: {
		"min": 0,
		"max": 15000
	}
});

const inputNumberStart = document.querySelector(".filter__price-input--start");
const inputNumberEnd = document.querySelector(".filter__price-input--end");

priceSlider.noUiSlider.on("update", function (values, handle) {
	let value = values[handle];

	if (handle) {
		inputNumberEnd.value = Math.round(value);
	} else {
		inputNumberStart.value = Math.round(value);
	}
});

inputNumberStart.addEventListener("change", function () {
	priceSlider.noUiSlider.set([this.value, null]);
});

inputNumberEnd.addEventListener("change", function () {
	priceSlider.noUiSlider.set([null, this.value]);
});