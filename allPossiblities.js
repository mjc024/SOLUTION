function Possibilities(){ 
    var num = ["1"], combos;
    for(var i = 2; i <= 9; i++){
      combos = [];
      num.forEach(function(x){
        combos.push(x + i, x + " +" + i, x + " -" + i);
      });
      num = combos;
    }
    file= combos.filter((x)=>eval(x)==100)
    console.log(file)
   
}

Possibilities()