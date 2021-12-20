const input = document.querySelector("input")
console.log(input.dataset.length);

input.addEventListener("blur", (e) => { 
    input.classList.remove("valid", "invalid")
    if (input.value.length === + (input.dataset.length)) {
        input.classList.add("valid")
    } else { 
        input.classList.add("invalid")
    }
    console.log(+(input.dataset.length))
})