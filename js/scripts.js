// Start -- All the required functions
function getRandomNo() {
    const randomNumber = Math.floor(1000 + Math.random() * 9000);
    getElement('randomNo').value = randomNumber;
}

function getElement(id) {
    const value = document.getElementById(id);
    return value;
}

function appendNumber(number) {
    const verifyNo = getElement('randomNoVerify').value.toString() + number.toString();
    getElement('randomNoVerify').value = verifyNo;
}

function deleteNo() {
    const verifyNo = getElement('randomNoVerify').value.toString().slice(0, -1);
    getElement('randomNoVerify').value = verifyNo;
}

function clear() {
    getElement('randomNoVerify').value = '';
}

function verification() {
    const randomNoText = getElement('randomNo').value;
    const randomNoVerifyText = getElement('randomNoVerify').value;
    let countTry = parseInt(getElement('tryCount').innerText);
    console.log(countTry)
    if (countTry >= 1 && countTry <= 3) {
        if (randomNoText === '')
            return;
        if (randomNoText === randomNoVerifyText) {
            section[0].style.display = 'none';
            section[1].style.display = 'inline-block';
        }
        else {
            section[0].style.display = 'inline-block';
            section[1].style.display = 'none';
            countTry = countTry - 1;
            getElement('tryCount').innerText = countTry;
        }
    }
    else if (countTry === 0) {
        subBtn.disabled = true;
        section[0].innerText = '❌ Sorry You are out of reach your 3 chance';
    }
}

// End -- All the required functions


// Start -- Variables
const numberBtn = document.querySelectorAll('[data-number]');
const deleteBtn = document.querySelector('[data-del]');
const clearBtn = document.querySelector('[data-clear]');
const subBtn = getElement('submitBtn');
const section = document.getElementsByClassName('notify');

// End -- Variables


// Start -- EventListeners
numberBtn.forEach(button => {
    button.addEventListener('click', () => {
        appendNumber(button.innerText);
    })
})

deleteBtn.addEventListener('click', () => {
    deleteNo();
})

clearBtn.addEventListener('click', button => {
    clear();
})

subBtn.addEventListener('click', () => {
    verification();
})
// End -- EventListeners