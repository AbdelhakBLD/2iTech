const input = document.querySelector('input#input');
const colorPicker = document.querySelector('input#bg');
const answer = document.querySelector('p#answer')

input.addEventListener('keyup', () => {
    console.log(input.value)
    answer.innerHTML = input.value
})

const changeBgColor = (event) => {
    let color = colorPicker.value
    document.querySelector('body').style.backgroundColor = color;
}

colorPicker.addEventListener('input', changeBgColor);