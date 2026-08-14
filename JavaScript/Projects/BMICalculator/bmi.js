const form = document.querySelector('form')

form.addEventListener('submit',(e)=>{
    e.preventDefault()

    let height = parseInt(document.querySelector("#height").value)
    let weight = parseInt(document.querySelector("#weight").value)
    let results = document.querySelector("#results")
    
    if(height==="" || height===null || isNaN(height)){
        results.innerHTML = `Please Give A Valid Height ${height}`
    }
    else if(weight==="" || weight===null || isNaN(weight)){
        results.innerHTML = `Please Give A Valid Weight ${weight}`
    }
    else{
        const bmi=(weight/((height*height))*1000).toFixed(2)
        results.innerHTML=`<span>${bmi}</span>`
    }
})