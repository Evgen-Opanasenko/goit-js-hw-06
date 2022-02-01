const refs = {
  form: document.querySelector(".login-form"),
  login: document.querySelector("input")[0],
  password: document.querySelector("input")[1],
  btn: document.querySelector("button"),
};
function log(event) {
  event.preventDefault();
  const { email, password } = refs.form.elements;
  if (email.value === "" || password.value === "") {
    alert("WARNING! Все поля должны быть заполнены");
    return;
  }
  console.log(`email: ${email.value}, password: ${password.value}`);
  event.currentTarget.reset();
}

refs.form.addEventListener("submit", log);
