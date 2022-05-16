const enviar = document.getElementById('enviar')
const getcreature = async() =>{ 
    try{
        const img = document.getElementById('animal')
        const name =document.getElementById('name')
        const url =`http://localhost:3000/v1/creature/${name.value.toLocaleLowerCase()}`
        const res= await fetch(url)
        const data =await res.json()
        console.log(data[0].URL)

        const animalimg=document.getElementById('animalimg')
        animalimg.src= data[0].URL
    }catch(error){
        console.log(error)
    }
}

enviar.onclick= getcreature