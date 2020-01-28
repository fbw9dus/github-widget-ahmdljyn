

/* HALLO 



const findRepo = async ()  =>{

  let input = document.querySelector('#input')

  let name = input.value

  let ul = document.querySelector('#ul')

  await  fetch('https://api.github.com/users/'+`${name}`+'/repos')

  .then(data => data.json())
  .then(item =>{
  console.log(item)


  ul.innerHTML = ''
  for(x of item){
      var dt = new Date(x.created_at);
     

     
      var list = `
      <li class="list-group-item">
           ${x.name} <br>
        
          ${dt}
      </li>
      `
      ul.insertAdjacentHTML('beforeend',list)
  }   
});

  await fetch('https://api.github.com/users/'+`${name}`)
  .then(data => data.json())
  .then(item => {

      console.log(item,'avatar')
      
          var list = `
          <img src="${item.avatar_url} "  alt="..." width="100%" height="100%">
     
        
          `
        ul.insertAdjacentHTML('afterbegin',list)
       
  })
}   


*/

