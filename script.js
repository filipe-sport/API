 
    const btn = document.querySelector('#send')
    btn.addEventListener("click", function dataSend(e){
      
      e.preventDefault();
      const apresentar = document.querySelector("#apresentar")
      const name = document.querySelector("#name");
      const ul = document.getElementById('nascidos');
      formulario.innerHTML = ''
      const value = name.value;
      apresentar.innerHTML = value
      
      let  url = `https://servicodados.ibge.gov.br/api/v2/censos/nomes/${value}`;
      
      fetch(url)
      .then((resp) => resp.json())
      .then(function(data) {

      let i = 0
      
        while (i< data[0].res.length){
          
      
          let authors = data[0].res[i]
          let periodo = authors.periodo
          let frequencia = authors.frequencia
          let li = document.createElement('li')
          li.innerHTML = (periodo +" nascidos: "+ frequencia+" ]");
          
          ul.appendChild(li)
          i++
        }
    })
    
})
.catch(function(error) {
  console.log(error);
});
