
function pesquisacep(cep){

   
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(resolve => resolve.json())
    .then(data => {
      
      
        const rua = document.querySelector('#rua')
        const bairro = document.querySelector('#bairro')
        const cidade = document.querySelector('#cidade')
        const estado = document.querySelector('#uf')
        const span = document.querySelector('.hide')

            if(data.erro !== true){
            

              rua.value = data.logradouro
    
              bairro.value = data.bairro
              
              cidade.value = data.localidade
        
              estado.value = data.uf
              
              span.classList.remove('visible')
              
            
            }
            else{
              span.classList.add('visible')
              
              const rua = document.querySelector('#rua').value=''
              const bairro = document.querySelector('#bairro').value =''
              const cidade = document.querySelector('#cidade').value =''
              const estado = document.querySelector('#uf').value=''
              
            }
    })
    .catch(erro => {


      const span = document.querySelector('.hide')

      span.classList.add('visible')
      
      
      const rua = document.querySelector('#rua').value= ''
      const bairro = document.querySelector('#bairro').value = ''
      const cidade = document.querySelector('#cidade').value =''
      const estado = document.querySelector('#uf').value =''
      
      
    })
  }

  

