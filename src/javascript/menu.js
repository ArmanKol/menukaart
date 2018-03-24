function opslaan(){
  var list = [];
  var naam = localStorage.getItem("naamKey");
  var ingredienten = localStorage.getItem("ingredientenKey");
  list.push(naam);
  list.push(ingredienten);
  alert(list)
  return list;
}

function verwijderen(){
  var naamGerecht = localStorage.getItem("naamKey");
  var naamIngredient = localStorage.getItem("ingredientenKey");
  var naamVerwijderen = localStorage.getItem("naamverwijderenKey");

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
