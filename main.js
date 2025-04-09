document.addEventListener('DOMContentLoaded',()=>{
    let nome = document.querySelector('.nome')
    let idade = document.querySelector('.idade')
    let genero = document.querySelector('.genero')
    let btn= document.querySelector('.btn')
    infos = document.querySelector('.infos')
    let arr = []

    btn.addEventListener('click',()=>{
        const pessoa = {
            nome:nome.value,
            idade:idade.value,
            genero:genero.value

        }

        arr.push(pessoa)

        infos.innerHTML = ``
        arr.forEach((elemento,index)=>{
            infos.innerHTML +=`
            <p>chegada: ${index+1}º</p>
            <p>Nome: ${elemento.nome}</p>
            <p>Idade: ${elemento.idade}</p>
            <p>Genero: ${elemento.genero}</p>
             <hr>`

        })

    })

})

