const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'],
	button = document.querySelector('.btn'),
	color = document.querySelector('.color')

const int = setInterval(() => {
	button.click()
}, 100)


button.addEventListener('click', () => {
	let col = '#'
	for (let i = 0; i < 6; i++) {
		col += hex[randomInt()]

	}
	document.body.style.backgroundColor = col
	color.textContent = col
})
function randomInt() {
	return Math.floor(Math.random() * hex.length)
}