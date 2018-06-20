												 /*  Exercice Tableau*/

												/* Exo 1 */

//var mois = ['Janvier','Fevrier','Mars','Avril', 'Mai','Juin','Juillet','Aout', 'Septembre', 'Octobre','Novembre','Decembre'];
/*alert(mois); */

												/* Exo 2,3,4 */

/*document.write(mois[2]+ "<br/>" + "<br/>");  affiche la valeur " MARS " (la première valeur = à O) */
/*document.write(mois[4]+ "<br/>" + "<br/>"); affiche la valeur " MAI " (la première valeur = à O) */
/*document.write(mois[10]+ "<br/>" + "<br/>");/* affiche la valeur " Novembre " (la première valeur = à O) */


/*
mois[7] = "Aôut" /* création d'une variable 
alert("le moi d " +(mois[7])+ " vient d'être modifier"); /* alert de modification 
*/

/* mois[7]= "aôut";
document.write(mois); 
*/
											
											/* EXO 8 */
/*var array = ['Pomme','Cerise','Tomate','Citron', ['Orange','Poivron']]; */
/*
array.push('courgette')
document.write(array) ; 
*/

										/*

										Exo 9

var Citron = array[4].push('Citron');
document.write(array);                  

										*/

										/* Exo 10
var array = ['Pomme','Cerise','Tomate','Citron', ['Orange','Poivron']];
array.splice(1, 1,);
document.write(array)
*/

										/*

var array = ['Pomme','Cerise','Tomate','Citron', ['Orange','Poivron']];
array.splice(2, 0, 'poire');
document.write(array)

*/
											/* Exercice Fonction */
											/* 			Exo 1     


var a = 3
var b = 2

function vrai()
{
	if (a > b)
	{
		return true;
	}
	else
	{
		return false;
	}
}

alert(vrai());
*/
											/* exo 2 

var str= "une chaine";

function chaine(){
return str;
} ;
document.write(chaine());
*/

											/* exo 3

var str1 = "Ma première chaine"
var str2 = "Ma deuxième chaine"
function conc(){
	var resultat = str1+str2 ;
	return resultat ;
} ;

document.write(conc());
*/

											// EXO 4  

/*

var num1 = prompt("Veuillez entrer le 1er Numéro") // Variable hors fonction à ne pas inclure dans les valeurs de la fonction
var num2 = prompt("Veuillez entrer le second Numéro")  // Variabele dans une fonction il faut indiquer les valeurs

function comp()
{
	
	if (num1>num2)
	{
		alert("Le premier Numéro est plus grand")
		return "Le premier Numéro est plus grand";
	}
		
		else if(num1<num2)
		{
			alert("Le premier Numéro est plus petit")
			return "Le premier Numéro est plus petit";
		}
			else 
			{
				alert("Les deux Numéro sont identiques")
				return "Les deux Numéro sont identiques";
			}
}
document.write(comp());

*/

													//Exo 5
						
/*						
	var nbr =prompt("Choisissez un nombre");
	var mot =prompt("choisissez un mot");


function conc() {
	
	var res =nbr + mot;
		alert(res);
		return res;
}

(conc());

*/

												// Exo 6

/*

var nom= prompt("Votre nom ?");
var prenom=prompt("Votre prénom ?");
var age=prompt("Votre age ?");

function iden (){

	var res=" Bonjour " + nom + prenom + " ,tu as " + age +  " ans"
	alert(res)
	return(res)
}

(iden());

*/

													//	Exo 7

/*

var genre =prompt("Vous êtes un homme ou une femme");
var age =prompt("Quel age as tu");



	if(age >= 18 && genre == "homme")
	{
		alert("vous êtes un homme et vous êtes majeur ");

	}
	else if (age < 18 && genre == "homme")
	{
		alert("vous êtes un homme et vous êtes mineur");
	}
	else if (age >= 18 && genre == "femme")
	{
		alert("Vous êtes une femme et vous êtes majeur");
	}
	else {
		alert("vous êtes une femme et vous êtes mineur");

	
		
*/

											// Exo 8

/*

var a=prompt("Entrez votre 1er numéro à additionner" ) ;
var b=prompt("Entrez votre 2eme numéro à additionner") ;
var c=prompt("Entrez votre 3eme Numéro à additionner") ;

function calc(){
	
	var r=  parseInt(a) + parseInt(b) + parseInt(c) ;
	alert(r);
	return(r);
}

(calc())

*/ 

										//	EXERCICE = Les loops

												//	EXO 1


/*

var number = 0;


while (number < 10) 
{

    number++;
    alert(number);

}
*/

											// EXO 2 

/*
var nbr1 = 0 ;
var nbr2 = 100 ;
	while (nbr1 <= 20) 
{
	var res = nbr1 * nbr2 ;

    alert(res);
    nbr1++

}
*/

										//Exo 3

/*
var nbr1 = 100 ;
var nbr2 = 30 ;
	while (nbr1 >= 10) 
{
	var res = nbr1 * nbr2 ;

    document.write(res+ '<br />') ;
    nbr1--
}
*/ 

										// Exo 4 

/*
var a = 1
while (a<10)
{
	document.write("<br>a = "+a)
	a = a + a/2
}
*/

										// exo 5

/*
document.write("<br />"+"<br />");

for (i=1; i <16; i++)
{
	document.write(i+"  "+'On y arrive presque.'+'<br />');
}

*/

										// Exo 6

/*

document.write("<br />"+"<br />");

for (i=20; i >= 0 ; i--) 
{ 
	document.write(i+"  "+"C'est presque bon."+'<br />');
}

*/

									// exo 7

/*

document.write("<br />"+"<br />");

for (i=1; i < 101 ; i+= 15) 
{ 
	document.write(i+" "+"On tient le bon bout."+'<br />');
}

*/


									// Exo 8

/*

document.write("<br />"+"<br />");

for (i=200; i >= 0 ; i-= 12) 
{ 
	document.write(i+" "+"Enfin !!!!"+"<br />");
}

*/