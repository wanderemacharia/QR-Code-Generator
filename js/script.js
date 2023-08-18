const form = document.getElementById("generate-form"); 
const qr = document.getElementById("qrcode");

function onGenerateSubmit(e) {
    e.preventDefault();

    const url = document.getElementById('url').value;
    const size = document.getElementById('size').value;

    if (url === "") {
        alert("Please enter a URL");
    } else {
        showSpinner();
    }

    console.log(url, size);
}

function showSpinner() {
    document.getElementById("spinner").style.display = "block";
};

function hideSpinner() {
    document.getElementById("spinner").style.display = "none";
};

hideSpinner();

form.addEventListener("submit", onGenerateSubmit());