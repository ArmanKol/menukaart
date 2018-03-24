function opslaan(){
  var naamvalue = localStorage.getItem("naamKey");
  var ingredientenvalue = localStorage.getItem("ingredientenKey");

  alert(naamvalue + " met de ingrediënten: " + ingredientenvalue + " is succesvol toegevoegd.");
  window.location.href= "../../index.html";
}

function verwijderen(){
  var naamGerecht = localStorage.getItem("naamKey");
  var naamIngredient = localStorage.getItem("ingredientenKey");
  var naamVerwijderen = localStorage.getItem("naamverwijderenKey");

  naamGerechtConvert = naamGerecht.toLowerCase();
  naamVerwijderenConvert = naamVerwijderen.toLowerCase();

  if(naamGerecht == naamVerwijderen){
    localStorage.removeItem("naamverwijderenKey");
    localStorage.removeItem("naamKey");
    localStorage.removeItem("ingredientenKey");

    alert("Het gerecht is succesvol verwijderd");
    location.reload();
  }else{
    alert("De naam van het gerecht klopt niet");
  }
}

function wijzigenNaamcheck(){
  var naamInput = localStorage.getItem("naamcheckwijzigenKey");
  var naamStored = localStorage.getItem("naamKey");

  naamInputConvert = naamInput.toLowerCase();
  naamStoredConvert = naamStored.toLowerCase();
  if(naamInputConvert != naamStoredConvert){
    alert("Naam klopt niet");
  }else{
    window.location.href = "../../eigenschappenWijzigen_volgende.html";
  }
}

function nieuwegegevensOpslaan(){
  var nieuwnaamInput = localStorage.getItem("nieuwenaamKey");
  var nieuwingredientInput = localStorage.getItem("nieuweingredientKey");

  localStorage.setItem("naamKey", nieuwnaamInput);
  localStorage.setItem("ingredientenKey", nieuwingredientInput);

  localStorage.removeItem("naamcheckwijzigenKey");

  alert("De gegevens zijn succesvol opgeslagen");
  window.location.href= "../../index.html";

}
