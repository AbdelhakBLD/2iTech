let liste = [
    { text: "javascript dans le navigateur sert à dynamiser une page...", id: "first" },
    { text: "php est un langage de script backend un peu vieillot", class: "important" },
    { text: "html décrit la structure sémantique d'une page web" },
]

const nouvelleListe = document.createElement('ul');

liste.forEach(elem => {
    //création du noeud DOM
    const li = document.createElement('li');
    //remplissage de l'intérieur de la balise
    //li.innerHTML = elem.text
    //remplir le texte entre les balises
    li.textContent = elem.text;
    //changement de la liste des classes
    li.classList = elem.class;
    //changement de l'id
    li.id = elem.id;
    //on attache le noeud DOM li au noeud DOM nouvelleListe
    nouvelleListe.appendChild(li);
})
//et on attache la nouvelle liste à la div avec l'id nouvelleListe
document.querySelector('#nouvelleListe').appendChild(nouvelleListe);

function corriger() {
    const ancienneListe = document.querySelector('#ancienneListe');
    //retirer un élément DOM
    document.querySelector("main").removeChild(ancienneListe);
}

//nouvelle façon de déclarer une fonction (depuis ES6, depuis 2015)
const coucou = (nom = "monde") => {
    alert('Bonjour ' + nom);
    //template literale
    alert(`Bonjour ${nom}`)
}

const helloButton = document.querySelector("button#hello");

//afficher dans l'alert box l'objet de l'évenement click
helloButton.addEventListener('click',coucou);

//afficher dans la console l'objet de l'évenement click
helloButton.addEventListener('click',(event) => {
    console.log(event);
    coucou();
});

window.addEventListener('load', ()=>{
    //affichage  en console d'un message
    console.log("Page charger !");
    //affichage de variable
    console.log(liste);
    //mise en forme de tableau
    console.table(liste);
    //affichage d'un avertissement (warning)
    console.warn('Attention !');
    //affichage d'une erreur
    console.error('Erreur !');
});

//démmarage du chrono
console.time('loop');
for (let index = 0; index < 10000000; index++) {
}
//arret du chrono et affichage du temps
console.timeEnd('loop');
