const colors = ['green', 'red', '#f15025', '	#ffa500', '#008000', '#800080'],
	btn = document.querySelector('.btn'),
	color = document.querySelector('.color')

const int = setInterval(() => {
	btn.click()
}, 100)


btn.addEventListener('click', () => {
	const randomNumber = getRandomNumber()
	document.body.style.backgroundColor = colors[randomNumber]
	color.textContent = colors[randomNumber]
})

function getRandomNumber() {

	return Math.floor(Math.random() * colors.length)
}
