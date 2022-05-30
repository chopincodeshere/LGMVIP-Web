let operatorObj = {
    plus: false,
    minus: false,
    multiply: false,
    divide: false,
    percent: false
};

let number_1, number_2, answer, currentElement, signed = false;

let buttons = document.getElementsByClassName('item');
Array.from(buttons).forEach(element => {
    element.addEventListener('click', () => {
        if (element.classList.contains('numerals')) {
            document.getElementById('screen').innerHTML += element.innerHTML;
        }
        else if (element.classList.contains('clear')) {
            window.location.reload();
        }
        else if (element.classList.contains('operator')) {
            switch (element.innerHTML) {
                case '+':
                    if (answer == undefined) {
                        number_1 = parseFloat(document.getElementById('screen').innerHTML);
                    }
                    else {
                        number_1 = answer;
                    }
                    currentElement = element;
                    document.getElementById('screen').innerHTML = null;
                    element.style.background = '#fff';
                    element.style.color = '#000';
                    operatorObj.plus = true; 
                    break;

                case '-':
                    if (answer == undefined) {
                        number_1 = parseFloat(document.getElementById('screen').innerHTML);
                    }
                    else {
                        number_1 = answer;
                    }

                    currentElement = element;
                    document.getElementById('screen').innerHTML = null;
                    element.style.background = '#fff';
                    element.style.color = '#000';
                    operatorObj.minus = true;  
                    break;

                case 'x':
                    if (answer == undefined) {
                        number_1 = parseFloat(document.getElementById('screen').innerHTML);
                    }
                    else {
                        number_1 = answer;
                    }

                    currentElement = element;
                    document.getElementById('screen').innerHTML = null;
                    element.style.background = '#fff';
                    element.style.color = '#000';
                    operatorObj.multiply = true; 
                    break;

                case '÷':
                    if (answer == undefined) {
                        number_1 = parseFloat(document.getElementById('screen').innerHTML);
                    }
                    else {
                        number_1 = answer;
                    }

                    currentElement = element;
                    document.getElementById('screen').innerHTML = null;
                    element.style.background = '#fff';
                    element.style.color = '#000';
                    operatorObj.divide = true;
                    break;

                case '%':
                    if (answer == undefined) {
                        number_1 = parseFloat(document.getElementById('screen').innerHTML);
                    }
                    else {
                        number_1 = answer;
                    }

                    currentElement = element;
                    answer = number_1 / 100;
                    document.getElementById('screen').innerHTML = answer;
                    operatorObj['percent'] = false;
                    element.style.background = '#fff';
                    element.style.color = '#000';
                    break;
            }
        }
        else if (element.classList.contains('sign')) {
            let tempNum = parseFloat(document.getElementById('screen').innerHTML);
            document.getElementById('screen').innerHTML = null;
            if (signed) {
                document.getElementById('screen').innerHTML = Math.abs(tempNum);
                signed = false;
            }
            else {
                document.getElementById('screen').innerHTML = `-${tempNum}`;
                signed = true;
            }
        }
        else if (element.classList.contains('equals')) {
            number_2 = parseFloat(document.getElementById('screen').innerHTML);
            element.style.background = '#fff';
            element.style.color = '#000';
            document.getElementById('screen').innerHTML = number_2;
            for (let key in operatorObj) {
                if (operatorObj['plus']) {
                    answer = number_1 + number_2;
                    document.getElementById('screen').innerHTML = answer;
                    operatorObj['plus'] = false;
                }
                else if (operatorObj['minus']) {
                    answer = number_1 - number_2;
                    document.getElementById('screen').innerHTML = answer;
                    operatorObj['minus'] = false;

                }
                else if (operatorObj['multiply']) {
                    answer = number_1 * number_2;
                    document.getElementById('screen').innerHTML = answer;
                    operatorObj['multiply'] = false;
                }
                else if (operatorObj['divide']) {
                    answer = number_1 / number_2;
                    document.getElementById('screen').innerHTML = answer;
                    operatorObj['divide'] = false;
                }

                currentElement.style.background = 'rgb(196, 127, 0)';
                currentElement.style.color = '#fff';
            }
        }
    });
});

