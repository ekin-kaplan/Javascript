let dolphins = [];
let koalas = [];
let i = 0;
let traveller = 0;
let lastElement = 0;
function handle() {
    for (traveller = 0; traveller <= 10; traveller++) {
        if (dolphins[traveller] == null) {
            lastElement = traveller;
            dolphins[lastElement] = document.getElementById("dolphins").value;
            console.log(dolphins);

            displayDolphins();
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

}