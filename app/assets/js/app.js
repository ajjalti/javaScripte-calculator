///////////////////
//fonction calcul :
//////////////////
function calcul(s){
  ch="+/%*-";
  var data;
  var res;
  for (let i of ch){
    for (let j of s){
      if(i==j && s[0]!=j){
        data = s.split(i);
        /////////////////////
        //  partie addition :
        ////////////////////
        if(i=="+"){
          res=0;
          for (let n in data){
            res+=toNumber(data[n]);
          }
        }
        ///////////////////////////////////////////////////////////////////
        //  partie substraction : => { cas du premier nombre pas négatif !}
        ///////////////////////////////////////////////////////////////////
        if(i=="-"){
          res=toNumber(data[0]);
          for (let n in data){
            if (toNumber(data[n])==res && n==0){
              continue;
            }else{
              res-=toNumber(data[n]);}
            }
        }
        /////////////////////////
        // partie multiplication:
        /////////////////////////
        if(i=="*"){
          res=1;
          for (let n in data){
            res*=toNumber(data[n]);
          }
        }
        ///////////////////////
        /// partie division :
        //////////////////////
        if(i=="/"){
          res=toNumber(data[0]);
          for (let n in data){
            if(toNumber(data[n])==res && n==0){
              continue;
            }else{
              res/=toNumber(data[n]);}
            }
        }
        //////////////////
        // partie modulo :
        //////////////////
        if(i=="%"){
          res=toNumber(data[0])%toNumber(data[1]);
        }
      }
      ////////////////////////////////////////////////////////////////////
      // partie substraction : => { cas ou le premier nombre est négatif }
      ////////////////////////////////////////////////////////////////////
      if(i=="-" && s[0]=="-"){
        data=s.slice(1);
        data=data.split(i);
        res=toNumber("-"+data[0]);
        for (let n in data){
          if (toNumber("-"+data[n])==res && n==0){
            continue;
          }else{
            res-=toNumber(data[n]);
          }
        }
      }
      ////////////////////////////////////////////////////////////////////
      // partie multiplication : => { cas ou le premier nombre est négatif }
      ////////////////////////////////////////////////////////////////////
      if(i=="*" && s[0]=="-"){
        data=s.slice(1);
        data=data.split(i);
        res=1;
        for (let n in data){
            res*=toNumber(data[n]);
        }res=toNumber("-"+res);
        document.getElementById('output').value = `${res}`;
        return;
      }
      ////////////////////////////////////////////////////////////////////
      // partie division : => { cas ou le premier nombre est négatif }
      ////////////////////////////////////////////////////////////////////
      if(i=="/" && s[0]=="-"){
        data=s.slice(1);
        data=data.split(i);
        res=toNumber(data[0]);
        for (let n in data){
          if(toNumber(data[n])==res && n==0){
            continue;
          }else{
            res/=toNumber(data[n]);
          }
        }
        res=toNumber("-"+res);
        document.getElementById('output').value = `${res}`;
        return;
      }
      x=res;
    }
  document.getElementById('output').value = `${x}`;
  }
}
//////////////////////////////////////
// fonction qui s'occupe d'affectation :
//////////////////////////////////////
function aff(n){
  if(n=='c'){
    x="";
    document.getElementById('output').value = `${x}`;
    return;
  }
  if(x=="00"){
    x="";
  }
  x+=`${n}`;
  document.getElementById('output').value = `${x}`;
}
/////////////////////////////////////////////////
// fonction qui change le sign du premier nombre:
/////////////////////////////////////////////////
function sign(){
  if (x[0]=="-"){
    x=x.replace("-","");
    document.getElementById('output').value = `${x}`;
  }else if(x[0]!='-'){
    x='-'+x;
    document.getElementById('output').value = `${x}`;
  }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// fonction qui transforme les nombre avec vergule en numbre float et les nombre sans vergule en nombres entier:
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function toNumber(n){
  for (i of n ){
    if(i=="."){
    return parseFloat(n);
    }
  }return parseInt(n);
}

