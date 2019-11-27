var validation = document.getElementById('submit');
validation.addEventListener('click', f_valid);
function f_valid() {
// Déclaration des variables
var age = document.getElementById('age').value;
// on compare l'âge : s'il est supérieur ou égal à 18 ans, alors le visiteur est majeur
if(age >= 18)
   alert('Vous êtes majeur');
else
   alert('T\'es mineur');
}
