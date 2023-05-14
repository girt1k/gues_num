const input = document.querySelector("input"),
    guess = document.querySelector(".guess"),
    checkbutton = document.querySelector("button"),
    remeainChances = document.querySelector(".chances");

input.focus();

let randomNum = Math.floor(Math.random() * 100)
chance = 10;

checkbutton.addEventListener("click" , () => {
    chance--;
    let inputValue = input.value;

    if(inputValue == randomNum){
        [guess.textContent, input.disabled] = ["Поздравляем!", true];
        [checkbutton.textContent, guess.style.color] = ["Переиграть!", "#41ac38"]
    } else if(inputValue > randomNum && inputValue < 100){
        [guess.textContent, remeainChances.textContent] = ["Загаданное число меньше вашего", chance];
        guess.style.color = "#333";
    } else if(inputValue < randomNum && inputValue > 0){
        [guess.textContent, remeainChances.textContent] = ["Загаданное число больше вашего", chance];
        guess.style.color = "#333";
    }else {
        [guess.textContent, remeainChances.textContent] = ["Загаданное число недействительное", chance];
        guess.style.color = "#DE0611";
    }

    if(chance == 0){
        [checkbutton.textContent, input.disabled, inputValue] = ["Переиграть", true, ""]
        [guess.textContent, guess.style.color] = ["Вы проиграли!", "#DE0611"];
    }
    if(chance == 0){
        window.location.reload();
    }
});