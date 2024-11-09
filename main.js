function helloworld(name) {
    alert(`Hello, ${name}!`);
}

function contentview() {
    alert(`흥미롭네요!`);
}

helloworld("GDG on Campus Sogang");
const userName = document.getElementById("helloName");
const helloBtn = document.getElementById("helloBtn");
const content = document.getElementById("contents");
const contentsBtn = document.getElementById("contentsBtn");


helloBtn.addEventListener('click', ()=> {
   helloworld(userName.value);
});


contentsBtn.addEventListener('click', ()=> {
    contentview();
 });
 