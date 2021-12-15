//Example 1

console.log("app js file");
var cl = console.log;

const image = document.getElementById('img');
const all = Array.from(document.querySelectorAll(".all"));

const onImagechangeHandler = (event =>{
    let getImage = event.target.value;
    cl(getImage);

    all.forEach(eve => {
        eve.style.display = "none";
    });

    let getClass = "." + getImage;
    cl(getClass);
    let getimg = Array.from(document.querySelectorAll(getClass));
    cl(getimg);
    getimg.forEach((eve) =>{
        eve.style.display = "block";
    })
})

image.addEventListener('change', onImagechangeHandler);


