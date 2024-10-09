
let menuActions = [
  dashBoard,
  game,
  chat,
  settings,
  lougout
];

menu[1].addEventListener("click",game)
menu[2].addEventListener("click",chat)
menu[3].addEventListener("click",settings)
menu[4].addEventListener("click",lougout)


function showAndHide(nowContent,showOrHide)
{
  // nowContent = dynamic[0].firstChild
  // console.log(nowContent)
  nowContent.style.marginTop = showOrHide ? '0%' : '120%';
  nowContent.style.opacity = showOrHide ? '1' : '0';
}

function replaceHtml(toReplace,by)
{
  toReplace.innerHTML = ''
  toReplace.innerHTML = by
  // nowContent = dynamic[0].firstChild
  // console.log(nowContent)
}

function addSelection(idx)
{
  for( let i = 0; i < 5;i++ )
  {
    i === idx ? menu[i].classList.add("selected") : menu[i].classList.remove("selected")
    i === idx ? menu[i].removeEventListener("click", menuActions[i]) : menu[i].addEventListener("click", menuActions[i])
  }
}

function dashBoard(){
  setTimeout(() => {
    replaceHtml(dynamic[0],ldb)
    let toShow = document.getElementsByClassName("mainDiv");
    setTimeout(function() {
      showAndHide(toShow[0],1)
      // setupDashboard()
      addSelection(0)
    }, 100);
  }, 100);
}

function helper(classN, idx, comp)
{
  setTimeout(() => {
    replaceHtml(dynamic[0], comp)
    let toShow = document.getElementsByClassName(classN);
    setTimeout(function() {
      addSelection(idx)
      showAndHide(toShow[0],1)
    }, 100);
  }, 100);
}

// Each function Will fetch it's part and delete the old one
// it can be either with fetching from another html
// Or just writing html directly as a string and inject it --- will need to inject the JS or the part TOO

function game() { helper('fakeDiv', 1, gameHtm) }
function chat() { helper('fakeDiv1', 2, chatHtm) }
function settings() { helper('fakeDiv2', 3, settingsHtm) }
function lougout() { helper('fakeDiv3', 4, logoutHtm) }

window.onload = function() {
  // replaceHtml(dynamic[0], dashBoardHtm)
  // showAndHide(dynamic[0].firstElementChild, 1)
  // setupDashboard()
  let ss = document.createElement('link')
  ss.href = 'css/dashBoard.css'
  ss.rel = 'stylesheet'
  
  document.head.appendChild(ss)

  let gg = document.createElement("script")
  gg.src = 'js/dashBoard.js'
  gg.type = 'text/javascript'
  document.getElementById('myscripts').appendChild(gg)


  //here must give each part its event listener on click 
}