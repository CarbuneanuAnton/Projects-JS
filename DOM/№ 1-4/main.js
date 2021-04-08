// 1
document.body.style.background = 'red';


// 2
setTimeout(() => {
    document.body.style.background = 'green';
}, 3000);


// 3
let button = document.createElement('button');
button.innerHTML = 'Orange';
button.style.padding = '7px 20px';
button.addEventListener('click', () => {
    document.body.style.background = 'orange';
});
document.body.append(button);

// 4
let list = document.createElement('ol');
let addElement = () => {
    let elementOfList = [];
    let i = 0;
    let timer = setInterval(() => {
        i++;
        elementOfList = document.createElement('li');
        elementOfList.innerHTML = `Element ${i}`;

        if (i % 2 == 0) {
            elementOfList.style.background = 'violet';
        } else {
            elementOfList.style.background = 'green';
        }
        list.append(elementOfList);
    }, 2000);

    setTimeout(() => {
        clearInterval(timer);
    }, 40000);
}

document.body.append(list);
addElement();
