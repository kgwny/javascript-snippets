window.alert("Hello world!");

for (var i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(j);
    });
}

for (var j = 0; j < 3; j++) {
    setTimeout(function() {
        console.log(j);
    }, 0);
}
