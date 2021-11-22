let container = document.querySelector("#cards")

let btnObjects = []
let count = 0;
let revere = true
let score = 0
let rdmImages = []

let btns = []
let selectedBtns = []
let scoreText = document.getElementById("score")
// Her bir buton tıklandığında arkaplanı değişmeli
// ikinci bir buton tıklanana kadar tekrar arkaplan değişmesin
// ikinci tıklanan buton ile aynı arka plana sahipse  tıklanamasın.
// isreversible false olan hiçbir buton arka planı değiştiremesin
// count 2 olursa eğer cartlar aynı ise arka planı değiştirme 
// kartlar farklı ise arkasını çevir
// score ise her iki kart eşleştiğinde score 1 artacak

for (let i = 0; i < 2; i++) {
    let row = document.createElement("div");
    row.className = "row"
    for (let k = 0; k < 4; k++) {
        let col = document.createElement("div")
        col.className = "col"
        let btn = document.createElement("button")
        btn.style.width = "250px"
        btn.style.height = "250px"
        btn.style.background = "white"
        btn.id = "" + i + "" + k
        btn.style.marginTop = "20px"
        back = "white"
        let face;
        btns.push(btn)

        col.append(btn)
        row.append(col)

    }
    container.append(row)
}
console.log("---------------")
console.log(btns)
console.log("---------------")
randomImageGenerator()
randomBtnSelector()
startGame()



// butonların resmini değiştir
function startGame() {
    let turned = 0
    let clicked = []
    let btn1;
    let btn2;
    for (let i = 0; i < btnObjects.length; i++) {

        let obj = btnObjects[i].btn
        let backImage = btnObjects[i].back
        obj.addEventListener("click", function () {
            console.log("tıklandı" + obj.id)
            if (turned < 2) {
                obj.style.background = backImage
                clicked.push({ "id": obj.id, "btn": obj, "img": backImage })
                console.log(clicked)
                turned += 1;
                console.log(turned)


            } if (clicked.length == 2) {
                if (clicked[0].img == clicked[1].img) {
                    clicked[0].btn.disabled = true
                    clicked[1].btn.disabled = true
                    console.log("eşleşti" + turned)
                    score += 1
                    turned = 0
                    scoreText.innerHTML = `Kalan hakkınız ${score}`
                    if (score == 4) {
                        alert("Kazandın")
                    }

                } else {
                    console.log("eşleşmedi" + turned)
                    btn1 = document.getElementById(clicked[1].id)
                    btn2 = document.getElementById(clicked[0].id)
                    setTimeout(() => {

                        btn1.style.background = "white"
                        btn2.style.background = "white"
                    }, 500);
                    clicked[0].btn.disabled = false
                    obj.disabled = false

                    turned = 0

                }
                clicked = []
            }

        })


    }

}


// Chose buttons randomly
function randomBtnSelector() {

    let rdm;

    for (let i = 0; i < 4; i++) {
        let count = 0;
        while (count < 2) {
            rdm = Math.floor(Math.random() * 8)
            if (selectedBtns.indexOf(btns[rdm]) == -1) {
                selectedBtns.push(btns[rdm])
                count += 1;
            }
        };



    }
    imageAssigner()
}


// asign images to buttons and add them into btnObjects array
function imageAssigner() {
    for (let i = 0; i < rdmImages.length; i++) {

        btnObjects.push({
            "btn": selectedBtns[i],
            "back": rdmImages[i],
            "face": "white"
        })
        //selectedBtns[i].style.background = rdmImages[i]

    }
    for (let i = 4; i < rdmImages.length + 4; i++) {
        // selectedBtns[i].style.background = rdmImages[i-4]
        btnObjects.push({
            "btn": selectedBtns[i],
            "back": rdmImages[i - 4],
            "face": "white"
        })

    }
}


// create images randomly
function randomImageGenerator() {
    let count = 0;
    let rdm;
    while (count < 4) {
        rdm = Math.floor(Math.random() * 4) + 1
        let imgLocation = "url(" + "'images/0" + `${rdm}` + ".png') no-repeat center"
        rdm = Math.floor(Math.random() * 4) + 1
        let imgLocation2 = "url(" + "'images/1" + `${rdm}` + ".png') no-repeat center"
        if (rdmImages.indexOf(imgLocation) == -1) {
            rdmImages.push(imgLocation)
            count += 1;
        } else if (rdmImages.indexOf(imgLocation2) == -1) {
            rdmImages.push(imgLocation2)
            count += 1;
        }

    }
}



function setİmage(btn) {
    if (btn.id[0] == 0) {
        for (let i = 0; i < 2; i++) {
            let rdm = Math.floor(Math.random() * 4) + 1
            let imgLocation = "url(" + "'images/0" + `${rdm}` + ".png') no-repeat center"
            btn.style.background = imgLocation

        }
    }

    else {
        for (let i = 0; i < 2; i++) {
            let rdm = Math.floor(Math.random() * 4) + 1
            let imgLocation = "url(" + "'images/1" + `${rdm}` + ".png') no-repeat center"
            btn.style.background = imgLocation
        }
    }


}



