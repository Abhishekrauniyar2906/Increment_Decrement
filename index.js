const countValue = document.querySelector('#counter');

const increment = () => {
    // get the value from UI
    let value = parseInt(countValue.innerText);
    value = value + 1;
    // Set the value onto UI
    countValue.innerText = value;
};

const decrement = () => {
    // get the value from UI
    let value = parseInt(countValue.innerText);
    value = value - 1;
    // Set the value onto UI
    countValue.innerText = value;
};
