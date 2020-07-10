window.addEventListener('load', () => {
    const dl_button = document.getElementById('dl_button');
    dl_button.addEventListener('click', dl_button_clicked);
});

function dl_button_clicked(event) {
    event.preventDefault();
    const blob = new Blob(["Hello, World!"], {type: 'text/plain'});
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    document.body.appendChild(anchor);
    anchor.download = 'sample.txt';
    anchor.href = url;
    anchor.click();
    anchor.remove();
    URL.revokeObjectURL(url);
}
