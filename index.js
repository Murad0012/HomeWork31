let Az = document.getElementById("Az");
let Rus = document.getElementById("Rus");
let words = document.querySelectorAll("a");
let input = document.getElementById("search");

let Lang = sessionStorage.getItem("Lang") ?? "aze";


let arrayAz = ["Hədiyyə kartları","Birbank kartı əldə edin","Korporativ satışlar","Mağazalarımız","Kampaniyalar","SEVIMLILƏRİM","SƏBƏTİM","HESABIM"]
let arrayRus = ["Подарочные карты","Приобрести карту Birbank","Корпоративные продажи","Магазины","Акции","Избранные","Корзина","Мой счет"]

let i = 0;

setLanguage(Lang)

Rus.onclick = function(){
    setLanguage("rus")
}   

Az.onclick = function(){
    setLanguage("aze")
}

function setLanguage(lang){
    switch (lang) {
        case "aze":
          Lang = "rus";
          sessionStorage.setItem("Lang", lang);
          break;
        case "rus":
          Lang = "aze";
          sessionStorage.setItem("Lang", lang);
          break;
        default:
          Lang = "aze";
          sessionStorage.setItem("Lang", lang);
          break;
    }
    paint()
}

function paint(){
    switch (Lang) {
        case "aze":
            Az.style.color = "white";
            Rus.style.color = "gray";
            for (let a of words) {
            a.innerHTML = arrayRus[i];
            i++
            }
            input.placeholder = "Введите продукт, который вы ищете"
            i = 0;
          break;
        case "rus":
            Rus.style.color = "white";
            Az.style.color = "gray";
            for (let a of words) {
            a.innerHTML = arrayAz[i]
            i++
            }
            input.placeholder = "Axtardığnız məhsulu yazın"
            i = 0;
          break;
        default:
          break;
    }
}
