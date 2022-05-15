$('.btn').on('click',function(){

    navigator.clipboard.writeText('copiado');
    console.log(window.getSelection().toString())
    //copia para area de transferencia
})

    var btnPaste = document.querySelector('.btn2')
    btnPaste.addEventListener('click', async (e) => {
          e.preventDefault();     
        
     })

     document.oncopy = function(e) {
        alert('prestes a copiar: ' + window.getSelection().toString());
        console.log(window.getSelection().toString())
        //Quando copia ativa
    }

   /* navigator.permissions.query({ name: "clipboard-read" }).then((result) => {
        // If permission to read the clipboard is granted or if the user will
        // be prompted to allow it, we proceed.
    
        if (result.state == "granted" || result.state == "prompt") {
           
          navigator.clipboard.read().then((data) => {
              console.log(data)
            for (let i = 0; i < data.length; i++) {
              if (!data[i].types.includes("image/png")) {
                alert("Clipboard contains non-image data. Unable to access it.");
              } else {
                  alert('f')
                data[i].getType("image/png").then((blob) => {
                  alert('imagem')

                });
              }
            }
          });
        }
      });*/

      navigator.permissions.query({ name: "clipboard-read" }).then((result) => {
        // If permission to read the clipboard is granted or if the user will
        // be prompted to allow it, we proceed.
    
        if (result.state == "granted" || result.state == "prompt") {
           
          navigator.clipboard.read().then((data) => {
            if (result.state == "granted" || result.state == "prompt") {
                if(data.length > 0){
                    alert('A dados')
                }else{
                    alert('Sem dados')
                }
              }
          });
        }
      });


  

    
   


