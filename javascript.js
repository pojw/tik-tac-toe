

//player object
function Player(name, marker){
    this.name=name;
    this.marker=marker
}


// Game Object 
//Start would be creating the board 
// Middle would be checking each turn to see if any win conditons
//End might be deleted, but resets the board and adds the score
board= []

const Game= {
    Start : function (){
        container=document.getElementById("container")
        container.innerHTML = `
        <div class="top_row">
            <div class="box">x</div>
            <div class="box">o</div>
            <div class="box">o</div>

        </div>
        <div class="Middle_row">
            <div class="box">x</div>
            <div class="box">0</div>
            <div class="box">x</div>

        </div>
        <div class="Bottom_row">
            <div class="box">x</div>
            <div class="box">0</div>
            <div class="box">0</div>

        </div>
        <button onclick="Game.Start()">test</button>d

        `
//the way it will check if id middle left 
// and right innerhtml is equal, then its a win of content aka x or 0

    },
    Middle : function(){
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

        //row checking 
       if(top_left.innerHTML==top_middle.innerHTML && top_left.innerHTML==top_right.innerHTML){
        console.log("row1")
       }
       if(middle_left.innerHTML==middle_middle.innerHTML && middle_left.innerHTML==middle_right.innerHTML){
        console.log("row2")
       }
       if(bottom_left.innerHTML==bottom_middle.innerHTML && bottom_left.innerHTML==bottom_right.innerHTML){
        console.log("row3")
       }
       //column checking 
       if(top_left.innerHTML==middle_left.innerHTML && top_left.innerHTML==bottom_left.innerHTML){
        console.log("left colum win")
       }
       if(top_middle.innerHTML==middle_middle.innerHTML && top_middle.innerHTML==bottom_middle.innerHTML){
        console.log("middle colum win")
       }
       if(top_right.innerHTML==middle_right.innerHTML && top_right.innerHTML==bottom_right.innerHTML){
        console.log("right colum win")
       }

       //cross checking 
       if(top_left.innerHTML==middle_middle.innerHTML && top_left.innerHTML==bottom_right.innerHTML){
        console.log("cross 1 win")
       }
       if(top_right.innerHTML==middle_middle.innerHTML && top_right.innerHTML==bottom_left.innerHTML){
        console.log("cross 2 win")
       }

       console.log("working")
    },
    End : function (){
        pass
    },
}

function testing(){alert(3)}

