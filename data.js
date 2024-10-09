let dynamic = document.getElementsByClassName("dynamic")
let nowContent = dynamic[0].firstElementChild
let menu = document.getElementsByClassName("menuBtn")


// menu[0].addEventListener("click",dashBoard)
// menu[1].addEventListener("click",game)
// menu[2].addEventListener("click",chat)
// menu[3].addEventListener("click",settings)
// menu[4].addEventListener("click",lougout)

let ldb = `
<div class="mainDiv" id="mainDiv">
<div class="mainSide">
    <div class="mainSideTop">
    <div class="png">
        <img class="pngImg pngleft" src="assets/pngPlayer2.png" alt="">
    </div>
        <div class="middleMST">
            <h1>PLANET PONG</h1>
            <p id="parag">Welcome to Pong Arena, where the classic game comes to life!
    Get ready to dive into fast-paced, retro-style fun as you challenge
    friends or play solo. Whether you're here to relive memories 
    or discover a timeless favorite,
    you're in for an exciting ride. Let the games begin!</p>
            <button class="shadBtn" id="btnMST" onclick="game()">JOIN A GAME</button>
        </div>
    <div class="png">
        <img class="pngImg pngright" src="assets/pngPlayer1.png" alt="">
    </div>
    </div>
    <div class="mainSideBottom">
        <div></div>
        <div></div>
    </div>
</div>
</div>
`;
let dashBoardHtm = `
<div class="mainDiv" id="mainDiv">
<div class="mainSide">
    <div class="mainSideTop">
    <div class="png">
    <img class="pngImg" src="assets/pngPlayer2.png" alt="">
    </div>
        <div class="middleMST">
            <h1>PLANET PONG</h1>
            <p id="parag"></p>
            <button class="shadBtn" id="btnMST" onclick="game()">JOIN A GAME</button>
        </div>
    <div class="png">
        <img class="pngImg" src="assets/pngPlayer1.png" alt="">
    </div>
    </div>
    <div class="mainSideBottom">
        <div></div>
        <div></div>
    </div>
</div>
</div>
`
let gameHtm = `<div class="ticTacGame">
                <div class="leftDivTicTac">
                  <div class="latestGames">
                    <h2>Latest Tic-Tac-Toe Games</h2>
                    <div class="listOfLG">
                        
                    </div>
                  </div>
                  <div class="gameDescription">
                    <h4>Tic-Tac-Toe Game OverView</h4>
                    <p>In this Tic Tac Toe game, play against
                       a random opponent or invite a friend. Customize your challenge:
                       be the first to reach 3, 5, or 7 points to win.
                    </p>
                  </div>
                  <div class="playGround">
                    <div id="rMatch">
                      <h3>Random Match</h3>
                      <div id="btnHolder">
                        <h2>First To</h2>
                        <div class="btns">
                          <button>1</button>
                          <button>3</button>
                          <button>5</button>
                          <button>7</button>
                        </div>
                      </div>
                    </div>
                    <div id="invFriend">
                      <h3>Invite Friend</h3>
                      <div class="friendList">
                        <div class="unitFriend">
                          <div class="picUF"></div>
                          <h4 class="nameUF">Reda</h4>
                        </div>
                        <div class="unitFriend">
                          <div class="picUF"></div>
                          <h4 class="nameUF">Reda</h4>
                        </div>
                        <div class="unitFriend">
                          <div class="picUF"></div>
                          <h4 class="nameUF">Reda</h4>
                        </div>
                        
                       
                      </div>
                    </div>
                  </div>
                </div>
                <div class="rightDivTicTac">
                  <div class="lclGameDiv">
                    <div class="boardlcl">
                      <div class="bSlot"></div>
                      <div class="bSlot"></div>
                      <div class="bSlot">o</div>
                      <div class="bSlot"></div>
                      <div class="bSlot"></div>
                      <div class="bSlot"></div>
                      <div class="bSlot">x</div>
                      <div class="bSlot"></div>
                      <div class="bSlot"></div>
                    </div>
                    <div class="animWinLose">
                      <h1 class="vertical-text">START</h1>
                    </div>
                    <div class="dashBlcl">
                      <div class="stats"><h4>X WINS</h4><h1>0</h1></div>
                      <div class="stats"><h4>DRAWS</h4><h1>0</h1></div>
                      <div class="stats"><h4>O WINS</h4><h1>0</h1></div>
                      <div class="reset">Reset</div>
                    </div>
                  </div>
                  <div class="menuBtnLcl">
                    <input type="radio" id="rb1p" name="playerMode" value="1" checked>
                    <label for="rb1p" class="radio-div">1 Player</label>

                    <input type="radio" id="rb2p" name="playerMode" value="2">
                    <label for="rb2p" class="radio-div">2 Players</label>
                  </div>
                </div>
              </div>`
let chatHtm = `<div class="fakeDiv1"></div>`
let settingsHtm = `<div class="fakeDiv2"></div>`
let logoutHtm = `<div class="fakeDiv3"></div>`