#Ce que vous visez
Implémentation du tri d'insertion à l'aide de JavaScript :
Le tri par insertion est un algorithme de tri simple qui fonctionne de la façon dont nous trions les cartes à jouer entre nos mains. Chaque fois que nous prenons une nouvelle carte, nous la mettons au bon endroit dans notre main.


#explication :
1)Initialisation :
On commence à partir du deuxième élément (i = 1) car le premier élément (Array[0]) est déjà trié.

2)Sélection de la "nouvelle carte" :
carte représente la "nouvelle carte" (élément Array[i]) que l'on veut insérer dans la séquence triée.

3)Décalage des éléments plus grands que carte :
  On compare carte avec les éléments précédents (Array[j]).
  Si Array[j] est plus grand que carte, on le décale vers la droite pour faire de la place à carte.
  
4)Insertion de la "nouvelle carte" :
Quand on trouve la bonne position pour carte (c'est-à-dire quand Array[j] n'est plus supérieur à carte), on insère key à arr[j + 1].
