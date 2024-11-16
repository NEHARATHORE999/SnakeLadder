p1sum = 0;
p2sum = 0;
let tog = 1;


function play (tog,num){
    if(tog==1){
        p1sum = p1sum+num;
        if(p1sum>=100){
            alert("red win!!!!");
            p1sum=0;
            p2sum=0;
            tog=1;
            console.log("red win");
        }
        
        if(p1sum==1){p1sum=38;}
        if(p1sum==4){p1sum=14;}
        if(p1sum==8){p1sum=30;}
        if(p1sum==21){p1sum=42;}
        if(p1sum==28){p1sum=76;}
        if(p1sum==32){p1sum=10;}
        if(p1sum==36){p1sum=6;}
        if(p1sum==48){p1sum=26;}
        if(p1sum==50){p1sum=67;}
        if(p1sum==62){p1sum=18;}
        if(p1sum==71){p1sum=92;}
        if(p1sum==80){p1sum=99;}
        if(p1sum==88){p1sum=24;}
        if(p1sum==95){p1sum=56;}
        if(p1sum==97){p1sum=78;}
        if(p1sum==1){p1sum=38;}
        console.log(p1sum);
        let name = `b${p1sum}`
        document.getElementById("p1").style.transition = `linear all .5s`;
        document.querySelector(`#${name}`).append(document.querySelector("#p1"));

    }
    else if(tog==0){
        p2sum = p2sum+num;
        if(p2sum>=100){
            console.log("yellow win");
            alert("yellow win!!!!");
            p1sum=0;
            p2sum=0;
            tog=1;
        }
        if(p2sum==1){p2sum=38;}
        if(p2sum==4){p2sum=14;}
        if(p2sum==8){p2sum=30;}
        if(p2sum==21){p2sum=42;}
        if(p2sum==28){p2sum=76;}
        if(p2sum==32){p2sum=10;}
        if(p2sum==36){p2sum=6;}
        if(p2sum==48){p2sum=26;}
        if(p2sum==50){p2sum=67;}
        if(p2sum==62){p2sum=18;}
        if(p2sum==71){p2sum=92;}
        if(p2sum==80){p2sum=99;}
        if(p2sum==88){p2sum=24;}
        if(p2sum==95){p2sum=56;}
        if(p2sum==97){p2sum=78;}
        if(p2sum==1){p2sum=38;}
        console.log(p2sum);
    }


        let name = `b${p2sum}`
        document.querySelector("#p2").style.transition = `linear all .5s`;
        document.querySelector(`#${name}`).append(document.querySelector("#p2"));
    

};






// main function 

document.querySelector("#diceBtn").addEventListener("click",()=>{
   let num = Math.floor(Math.random()*(6-1+1)+1);
    document.querySelector("#dice").innerText = num;

// call a function called play to move the ball
    if(tog==0){
        tog=1;
        document.querySelector("#tog").innerText="Yellow's Turn";
        play(tog,num);
        
    }

    else if(tog==1){
        tog=0;
        document.querySelector("#tog").innerText = "Red's Turn";
        play(tog,num);
        
    }
})



// let x = document.querySelector("#p1");
// const name_it = `b${90}`;
// console.log(name_it);
// document.querySelector(`#${name_it}`).append(x);
