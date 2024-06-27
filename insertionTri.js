//fonction tri d'insersion
let insertionSort = (Array) =>{
    // Commencer à partir du deuxième élément (index 1) 
    for (let i=1;i<Array.length;i++){
        let carte = Array[i]; //la nouvelle carte à inserer
        let j=i-1;


        while(j>=0 && Array[j]>carte){
            //decalage vers la droite
            Array[j+1]=Array[j];
            j = j-1;
        }
        // Insértion de la "nouvelle carte" à la bonne position
        Array[j+1]=carte
    }
    return Array;
}

console.log(insertionSort([12,6,3,9,1,8,8,10]))