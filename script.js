//your JS code here. If required.
const colorSelect = document.getElementById("colorSelect");
const removeButton = document.getElementsByTagName("input")[0];

removeButton.addEventListener("click", function () {
	const selectedValue = colorSelect.options[colorSelect.selectedIndex];
	colorSelect.removeChild(selectedValue);
});
