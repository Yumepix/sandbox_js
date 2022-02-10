
// le slice permet d’ajouter ou de supprimer un élément en place à un indice donné
let tableau = [5,2,4,1,3];
tableau.splice(1,3)
// supprime 3 éléments à partir de l'index 1
console.log(tableau)
// [5,3]


tableau = [5,2,4,1,3];
tableau.splice(1,0,7,3)
// ajoute les éléments 7 et 3 à partir de l'index 1 et n'en supprime aucun
console.log(tableau)
// [5,7,3,2,4,1,3]
