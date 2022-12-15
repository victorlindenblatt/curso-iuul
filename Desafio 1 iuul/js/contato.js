var arr = [];
 
function addItem(){
   if (localStorage.meuArr){             
      arr = JSON.parse(localStorage.getItem('meuArr')); 
   }
   
   let novoItem = document.getElementById("emaill").value;
   arr.push(novoItem);
   document.getElementById("emaill").value = "";
   localStorage.meuArr = JSON.stringify(arr);

    let novoNome = document.getElementById("namee").value;
    arr.push(novoNome);
    document.getElementById("namee").value = "";
    localStorage.meuArr = JSON.stringify(arr);

    let novaMsg = document.getElementById("mensagem").value;
    arr.push(novaMsg);
    document.getElementById("mensagem").value = "";
    localStorage.meuArr = JSON.stringify(arr);
   
}

function showItems(){
   let resultDIV = document.getElementById('localstorage');
   resultDIV.innerHTML = "";
   if (localStorage.meuArr){             
      arr = JSON.parse(localStorage.getItem('meuArr')); 
   }
   
   for(var i in arr){
      let p = document.createElement("p");
      p.innerHTML = arr[i];
      resultDIV.append(p);
   }
}

const dados = document.querySelector('#dados')

function openInNewTab(dados) {
    const win = window.open('#dados')
}

dados.addEventListener('click', () => {
    openInNewTab (dados)
})


function clearItems(){
   arr = [];
   localStorage.meuArr = JSON.stringify(arr);   
}