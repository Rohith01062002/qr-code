let content = document.getElementById("content");
let form = document.querySelector(".qrform")
let qrCodeDiv = document.querySelector(".qrcode");
let qrCode;


function generateQRCode(content) {
    return new QRCode(qrCodeDiv, {
        text: content,
        width: 256,
        height: 256,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });
}







form.addEventListener("submit", function(event) {
    event.preventDefault();
    let val = content.value;
    if (qrCode == null) {
        qrCode = generateQRCode(val);

    } else {
        qrCode.makeCode(val);
        qrCodeDiv.removeChild(qrCodeDiv.lastChild);
    }

    let download = document.createElement("button");
    download.setAttribute("id", "download");
    qrCodeDiv.appendChild(download);

    let download_link = document.createElement("a");
    download_link.setAttribute("download", "qr_code_link.png");
    download_link.innerText = "Download";

    download.appendChild(download_link);

    if (document.querySelector(".qrcode img").getAttribute("src") == null) {
        setTimeout(() => {
            download_link.setAttribute("href", `${document.querySelector("canvas").toDataURL()}`);
        }, 300);
    } else {
        setTimeout(() => {
            download_link.setAttribute("href", `${document.querySelector('.qrcode img').getAttribute("src")}`);
        }, 300);
    }

})