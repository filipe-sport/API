 const btn = document.querySelector('#send')

  
    btn.addEventListener("click", function dataSend(e){
      
      e.preventDefault();
      
      const apresentar = document.querySelector("#apresentar")
      const name = document.querySelector("#name");
      const ul = document.getElementById("nascidos");
      const value = name.value;
      apresentar.innerHTML = value
      
      let  url = `https://servicodados.ibge.gov.br/api/v2/censos/nomes/${value}`;
      
      fetch(url1)
      .then((resp) => resp.json())
      .then(function(data) {
          for (let i = 0; i < data[0].res.length; i++) {
                let element = data[0].res[i];                  
                let periodo = element.periodo
                let frequencia = element.frequencia
                let li = document.createElement('li')
                li.innerHTML = (periodo +" nascidos: "+ frequencia+" ]");                
                ul.appendChild(li)
          }
                      
      })
              
      .catch(function(error) {
        console.log(error);
      })
      ul.innerHTML = ""
    })
    


