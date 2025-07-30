// let minFontSize = 1;
// let maxFontSize = 3;
// let minViewport = 320;
// let maxViewport = 1440;
// let slope = (maxFontSize - minFontSize) / (maxViewport - minViewport);
// console.log(`slope: ${slope}`);
// let yAxisIntersection = -minViewport * slope + minFontSize;
// console.log(`yAxisIntersection: ${yAxisIntersection}`);
// let yAxisIntersectionRem = `${yAxisIntersection}rem`;
// let slopeVW = `${slope * 100}vw`;
// let prefferedValue = `${yAxisIntersectionRem} + ${slopeVW}`;
// console.log(`prefferedValue: ${prefferedValue}`);
// let fontSize = `clamp(${minFontSize}, ${prefferedValue}, ${maxFontSize})`;
// console.log(`fontSize: ${fontSize}`);
//
// const el = document.querySelector(".test_h2");
// console.log(el);
// el.style.fontSize = `${fontSize}`;
let minFontSize = 2.5; // in rem
let maxFontSize = 3; // in rem
let minViewport = 320; // in px
let maxViewport = 840; // in px

// Calculate slope and intersection
let slope = (maxFontSize - minFontSize) / (maxViewport - minViewport);
console.log(`slope: ${slope}`); // Should be ~0.00179

let yAxisIntersection = -minViewport * slope + minFontSize;
console.log(`yAxisIntersection: ${yAxisIntersection}`); // Should be ~0.427

// Convert to CSS units
let yAxisIntersectionRem = `${yAxisIntersection}rem`;
let slopeVW = `${slope * 100}vw`;
console.log(`yAxisIntersectionRem: ${yAxisIntersectionRem}`);
console.log(`slopeVW: ${slopeVW}`);

// Use `calc()` for the preferred value
let preferredValue = `calc(${yAxisIntersectionRem} + ${slopeVW})`;
console.log(`preferredValue: ${preferredValue}`); // Should be "calc(0.427rem + 0.179vw)"

// Construct the clamp() function correctly
let fontSize = `clamp(${minFontSize}rem, ${preferredValue}, ${maxFontSize}rem)`;
console.log(`fontSize: ${fontSize}`); // Should be "clamp(1rem, calc(0.427rem + 0.179vw), 3rem)"

// Apply to the element
const el = document.querySelector(".test_h2");
if (el) {
	el.style.fontSize = fontSize;
	console.log("Font size applied:", el.style.fontSize);
} else {
	console.error("Element not found!");
}
