

//player object
function Player(name, marker,wins){
    this.name=name;
    this.marker=marker;
    this.wins=wins

}

const player1 = new Player("Player 1", "X",0)
const player2 = new Player("Player 2", "O",0)
let current_player= new Player("name","O",0)


// Game Object 
//Start would be creating the board 
// Middle would be checking each turn to see if any win conditons
//End might be deleted, but resets the board and adds the score
board= []

const Game= {
    Start : function (){
        container=document.querySelector(".middle")
        container.innerHTML = 
        `
               <div class="middle">


        <div class="gameboard">
            <div class="top_row">
                <div class="box" id="top_left" onclick="Game.adder('top_left')"></div>
                <div class="box" id="top_middle" onclick="Game.adder('top_middle')"></div>
                <div class="box" id="top_right" onclick="Game.adder('top_right')"></div>

            </div>
            <div class="Middle_row">
                <div class="box" id="middle_left" onclick="Game.adder('middle_left')"></div>
                <div class="box" id="middle_middle" onclick="Game.adder('middle_middle')"></div>
                <div class="box" id="middle_right" onclick="Game.adder('middle_right')"></div>

            </div>
            <div class="Bottom_row">
                <div class="box" id="bottom_left" onclick="Game.adder('bottom_left')"></div>
                <div class="box" id="bottom_middle" onclick="Game.adder('bottom_middle')"></div>
                <div class="box" id="bottom_right"onclick="Game.adder('bottom_right')"></div>

            </div>

         </div>
         <div class="botton">  
            <button  onclick="Game.Start()">Restart</button>
       </div>

         <div id="results">

         </div>
        </div>    
    

        `
        board=[]
//the way it will check if id middle left 
// and right innerhtml is equal, then its a win of content aka x or 0

    },
    checker : function(){
       //winning solutions 
       //top row
       top_left=document.querySelector("#top_left")
       top_middle=document.querySelector("#top_middle")
       top_right=document.querySelector("#top_right")

        //middle row 
       middle_left=document.querySelector("#middle_left")
       middle_middle=document.querySelector("#middle_middle")
       middle_right=document.querySelector("#middle_right")

       //bottom row 
       bottom_left=document.querySelector("#bottom_left")
       bottom_middle=document.querySelector("#bottom_middle")
       bottom_right=document.querySelector("#bottom_right")
        if(board.length<9){
        //row checking 
       if(top_left.innerHTML==top_middle.innerHTML && top_left.innerHTML==top_right.innerHTML && top_right.innerHTML!=""){
        Game.End()
       }
       if(middle_left.innerHTML==middle_middle.innerHTML && middle_left.innerHTML==middle_right.innerHTML && middle_right.innerHTML!=""){
        Game.End()
       }
       if(bottom_left.innerHTML==bottom_middle.innerHTML && bottom_left.innerHTML==bottom_right.innerHTML &&bottom_right.innerHTML!=""){
        Game.End()
       }
       //column checking 
       if(top_left.innerHTML==middle_left.innerHTML && top_left.innerHTML==bottom_left.innerHTML&& top_left.innerHTML!=""){
        Game.End()
       }
       if(top_middle.innerHTML==middle_middle.innerHTML && top_middle.innerHTML==bottom_middle.innerHTML&&middle_middle.innerHTML!=""){
        Game.End()
       }
       if(top_right.innerHTML==middle_right.innerHTML && top_right.innerHTML==bottom_right.innerHTML&&top_right.innerHTML!=""){
        Game.End()

       }

       //cross checking 
       if(top_left.innerHTML==middle_middle.innerHTML && top_left.innerHTML==bottom_right.innerHTML && top_left.innerHTML!=""){
        Game.End()
       }
       if(top_right.innerHTML==middle_middle.innerHTML && top_right.innerHTML==bottom_left.innerHTML &&top_right.innerHTML!=""){
        Game.End()
       }
    }
       if(board.length==9){

           if(top_left.innerHTML==top_middle.innerHTML && top_left.innerHTML==top_right.innerHTML && top_right.innerHTML!=""){
            Game.End()
           }
           else if(middle_left.innerHTML==middle_middle.innerHTML && middle_left.innerHTML==middle_right.innerHTML && middle_right.innerHTML!=""){
            Game.End()
           }
           else if(bottom_left.innerHTML==bottom_middle.innerHTML && bottom_left.innerHTML==bottom_right.innerHTML &&bottom_right.innerHTML!=""){
            Game.End()
           }
           //column checking 
           else if(top_left.innerHTML==middle_left.innerHTML && top_left.innerHTML==bottom_left.innerHTML&& top_left.innerHTML!=""){
            Game.End()
           }
           else if(top_middle.innerHTML==middle_middle.innerHTML && top_middle.innerHTML==bottom_middle.innerHTML&&middle_middle.innerHTML!=""){
            Game.End()
           }
           else if(top_right.innerHTML==middle_right.innerHTML && top_right.innerHTML==bottom_right.innerHTML&&top_right.innerHTML!=""){
            Game.End()
    
           }
    
           //cross checking 
           else if(top_left.innerHTML==middle_middle.innerHTML && top_left.innerHTML==bottom_right.innerHTML && top_left.innerHTML!=""){
            Game.End()
           }
           else if(top_right.innerHTML==middle_middle.innerHTML && top_right.innerHTML==bottom_left.innerHTML &&top_right.innerHTML!=""){
            Game.End()
           }
           
           else{
            Game.End("Tie")
           }
       }
       
    },
    End : function (Tie){
        results=document.querySelector("#results")

      
        // turns off the funcacitllaty 
        top_right.onclick=null
        top_middle.onclick=null
        top_left.onclick=null

        bottom_right.onclick=null
        bottom_middle.onclick=null
        bottom_left.onclick=null

        middle_right.onclick=null
        middle_middle.onclick=null
        middle_left.onclick=null
        if(Tie=="Tie"){
            results.innerHTML="It is A TIEEE"
           console.log("TIE")
        }
        else{

        if(current_player==player1){
            player1.wins+=1
            win=document.querySelector(".player_1_wins")
            win.innerHTML=" Win:" +player1.wins
            results.innerHTML=player1.name+" Is The WINNNERR"

        }

        else{
            player2.wins+=1
            win=document.querySelector(".player_2_wins")
            win.innerHTML=" Win:" +player2.wins

            results.innerHTML=player2.name+" Is The WINNNERR"
        }
        }

    },

    adder : function(location){
        const box=document.querySelector(`#${location}`)

        if(board.includes(location)){
            box.onclick=null
        }
        else{
            board.push(location)
            if(current_player.marker==player2.marker){
                current_player=player1

            }
            else{
                current_player=player2
            }
    
            box.innerHTML=current_player.marker 
            Game.checker()   
        }
        }



}

function testing(){alert(3)}

