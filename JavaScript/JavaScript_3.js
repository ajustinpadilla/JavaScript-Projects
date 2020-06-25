function Display(Character) {
    var characterType = Character.getAttribute("data-Character-type");
    alert("You chose the character " + characterType + ". They are the " + Character.getAttribute("id")+ " of the family.");
}