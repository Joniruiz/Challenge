
    let inputSearch = document.querySelector('#selectFilter')

    let productSearch = Array.from(document.querySelectorAll('.aca'))
    console.log('aca estan todas las cards',productSearch)

    inputSearch.addEventListener('click',(e)=>{
        if(e.target.value == inputSearch.value){
            if(e.key === "Escape"){
                e.target.value ="";
            }
            productSearch.forEach(element =>{
                console.log(element)
                if(element.textContent.toLocaleLowerCase().includes(e.target.value)){
                    element.style.display = "block"
                }else{
                    element.style.display = "none"
                }
            })
        }
    })
