function clickevent(){

    let a = document.getElementById("area").value;
    let k = document.getElementById("totalkm").value;
    let t = document.getElementById("transport").value;
    let p = document.getElementById("person").value;
    let d = document.getElementById("day").value;

    document.getElementById("calcost").onclick;

 
    if( a==0 || t==0|| p==0 || k==0 ||d==0) {
        document.getElementById("lable2").innerHTML='*Please enter value'; 
        document.getElementById("lable1").innerHTML='*Please enter value';
        document.getElementById("lable3").innerHTML='*Please enter value';
        return;
    }
    
    if( a>0 && k>0 && t>0 && p>0 && d>0){

        document.getElementById("lable1").innerHTML='';
        document.getElementById("lable2").innerHTML='';
        document.getElementById("lable3").innerHTML='';
      
        x = (t*k) + (a*p*d)*2500;
        y = x/p;
    
        document.getElementById("totalcost").innerHTML='Rs. '+ x.toFixed(0);
        document.getElementById("ppcost").innerHTML='Rs. '+y.toFixed(0);
        if(x>0 && x<=150000){
            document.getElementById("animation").innerHTML='<img  src="../images/trip.gif" alt="travel gif"></img>';
            return;
            
        }   
        else{
            document.getElementById("animation").innerHTML='Total Cost is more than Rs.150,000'+'<img  src="../images/sad.gif" alt="sad gif"></img>';
            return;
        }
        return;
    }   

    }

    

