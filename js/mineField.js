


let container = document.querySelector(".container-md")
let start = document.getElementById("Start")
let score = document.getElementById("score")




for (let i = 0; i < 100; i++) { 
    let btn = document.createElement("button")
    btn.style.width = "64px"
    btn.style.height = "64px"
    btn.id = ""+i

    //console.log(btn.id)
  
    container.append(btn)
}

let life = 3
score.innerHTML =`Kalan hakkınız ${life}`
let boom = []

for (let i = 0; i < 100; i++) {
    boom[i] = Math.floor(Math.random() * 100)
}
let boomSet = new Set(boom)

for (let i = 0; i < 100; i++) {
    let btn = document.getElementById(`${i}`)
    
        btn.addEventListener("click",()=> {
            if (life>0) {
                for (let bomb of boomSet) {
                    if (btn.id == bomb) {
                        life -=1
                        score.innerHTML =`Kalan hakkınız ${life}`
                        btn.style.backgroundColor = "#9b2226"   
                    }
                }
            }else{
                
                score.innerHTML =`Kalan hakkınız bulunmamaktadır`
                alert("kaybettin")
                btn.disabled =true
                
            }
        })
    
    
}


/*
else{
    
    
    score.innerHTML =`Kalan hakkınız bulunmamaktadır`
    alert("kaybettin")
}*/




