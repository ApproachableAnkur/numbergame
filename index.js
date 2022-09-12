let no;
const gen_num=()=>{
  let n1 = Math.random();
  let n2  = n1*10;
   n2 = Math.trunc(n2);
        n2=(n2%6)+1;
        no=n2;
        console.log(no);
}
const gen_num_btn=()=>{
    
     document.getElementById("section1").style.display="none";
     document.getElementById("section2").style.display="none";
     document.getElementById("section3").style.display="block";
   // document.querySelector("#section2").style.display="none";
  //  document.querySelector("#section3").style.display="block";
    setTimeout(()=>{
        gen_num();
        document.getElementById("field").value=" ";
        document.getElementById("section1").style.display="none";
        document.getElementById("section2").style.display="block";
        document.getElementById("section3").style.display="none";
     //   document.querySelector("#section1").style.display="none";
     //   document.querySelector("#section2").style.display="block";
     //   document.querySelector("#section3").style.display="none";
    },3000);
}
const check_num=()=>{
   let val= document.getElementById("field").value;
   if(val==no)
   {
    alert("Congrates,You won the Game .")
   }
   else{
    alert("OPPS !! Your Guess is wrong .")
   }
   gen_num_btn();
}