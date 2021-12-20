const refs = {
    input: document.querySelector("#name-input"),
    span: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", (e) => {
    if (refs.input.value !== "") {
        refs.span.textContent = refs.input.value;
    } else {
        refs.span.textContent = "Anonymous";
    }
});
