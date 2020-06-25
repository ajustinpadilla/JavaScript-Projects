function validation() {
    let x = document.forms["Contact"]["Name"].value;
    let y = document.forms["Contact"]["Email"].value;
    if(x === "" || x === "Name" ) {
        alert("Name Required");
        return false;
    }
    else if(y === "" || y === "Your@email.com") {
        alert("Email Address Required")
        return false
    }
}