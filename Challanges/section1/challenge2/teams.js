let dolphins = [];
let koalas = [];
let i = 0;
let traveller = 0;
let lastElement = 0;
function handle() {
    for (let traveller = 0; traveller <= 10; traveller++) {
        if (dolphins[traveller] == null || koalas[traveller] == null) {
            let lastElement = traveller;
            let inputDolphinElement = document.getElementById("dolphins");
            let inputKoalaElement = document.getElementById("koalas");
            let inputDolphin;
            let inputKoala;

            inputDolphin = inputDolphinElement.value;
            inputKoala = inputKoalaElement.value;



            if (control(inputDolphin, inputKoala)) {
                dolphins[lastElement] = inputDolphin;
                koalas[lastElement] = inputKoala;

                console.log(dolphins);
                console.log(koalas);

                displayDolphins();
                displayKoalas();

                average(dolphins, koalas);

                // Clear the input fields
                inputDolphinElement.value = '';
                inputKoalaElement.value = '';

                break;
            } else {
                inputDolphinElement.value = '';
                inputKoalaElement.value = '';
                break;
            }

        }
    }

    function displayDolphins() {
        let container = document.getElementById("dolphinsContainer");
        container.innerHTML = "";  // Clear previous content

        dolphins.forEach((score, index) => {
            let element = document.createElement("div");
            element.textContent = `Dolphin ${index + 1}: ${score}`;
            container.appendChild(element);
        });
    }

    function displayKoalas() {
        let container = document.getElementById("koalasContainer");
        container.innerHTML = "";  // Clear previous content

        koalas.forEach((score, index) => {
            let element = document.createElement("div");
            element.textContent = `Koalas ${index + 1}: ${score}`;
            container.appendChild(element);
        });
    }
}

function average(dolphins, koalas) {
    let totalD = 0;
    let totalK = 0;
    let countD = 0;
    let countK = 0;

    dolphins.forEach(score => {
        totalD += parseFloat(score); // Ensure the score is treated as a number
        countD++;
    });
    koalas.forEach(score => {
        totalK += parseFloat(score); // Ensure the score is treated as a number
        countK++;
    });

    let avgD = totalD / countD;
    let avgK = totalK / countK;

    let container = document.getElementById('avg');
    container.innerHTML = '';

    let avgElement = document.createElement("div");
    avgElement.innerHTML = `Averages :<br> Dolphins : ${avgD} <br> Koalas : ${avgK}`; // Changed line
    container.appendChild(avgElement);

    comparison(avgD, avgK);
}

function comparison(avg1, avg2) {
    let container = document.getElementById('comparison');
    container.innerHTML = '';
    let result = document.createElement("div");

    if (avg1 > avg2) {
        result.innerHTML = `dolphins Win !!`;
    } else if (avg1 == avg2) {
        result.innerHTML = `draw`;
    } else {
        result.innerHTML = `koalas Win !!`
    }

    container.appendChild(result);
}

function control(input1, input2) {

    if (input1 >= 100 && input2 >= 100) {
        return true;
    } else {
        alert('scores must be greater than 100 or equal to 100 !!');
        return false
    }

}