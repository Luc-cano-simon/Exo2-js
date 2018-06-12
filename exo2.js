												 /*  Exercice Tableau*/

												/* Exo 1 */

var mois = ['Janvier','Fevrier','Mars','Avril', 'Mai','Juin','Juillet','Aout', 'Septembre', 'Octobre','Novembre','Decembre'];
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
var array = ['Pomme','Cerise','Tomate','Citron', ['Orange','Poivron']];
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

function comp(num1,num2)
{
	var num1 = prompt("Veuillez entrer le 1er Numéro")
	var num2 = prompt("Veuillez entrer le second Numéro")
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