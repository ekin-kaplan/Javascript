let dolphins = [];
let koalas = [];
let i = 0;
let traveller = 0;
let lastElement = 0;
function handle() {
    for (traveller = 0; traveller <= 10; traveller++) {
        if (dolphins[traveller] == null || koalas[traveller] == null) {
            lastElement = traveller;
            dolphins[lastElement] = document.getElementById("dolphins").value;
            koalas[lastElement] = document.getElementById("koalas").value;
            console.log(dolphins);
            console.log(koalas);

            displayDolphins();
            displayKoalas();

            break;
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