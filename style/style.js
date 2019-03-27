function showinfo(a,b){
  var div= document.getElementById("appinfo"+a);
  if(b){
          div.style.opacity = "0.92";
          div.getElementsByTagName("li")[0].style.opacity = "0.92";
          div.getElementsByTagName("li")[1].style.opacity = "0.92";
          div.getElementsByTagName("li")[2].style.opacity = "0.92";
          div.getElementsByTagName("li")[3].style.opacity = "0.92";
          div.getElementsByTagName("li")[4].style.opacity = "0.92";
  }
  else{
    if(!app.ativeInfo[a-1]){
        div.style.opacity = "0";
        div.getElementsByTagName("li")[0].style.opacity = "0";
        div.getElementsByTagName("li")[1].style.opacity = "0";
        div.getElementsByTagName("li")[2].style.opacity = "0";
        div.getElementsByTagName("li")[3].style.opacity = "0";
        div.getElementsByTagName("li")[4].style.opacity = "0";
        }
      }
}

function showHelp(a,b){
  var div= document.getElementById("helperinfo"+a);
  if(b){
          div.style.opacity = "0.92";
          div.getElementsByTagName("li")[0].style.opacity = "0.92";
          div.getElementsByTagName("li")[1].style.opacity = "0.92";
          div.getElementsByTagName("li")[2].style.opacity = "0.92";
          div.getElementsByTagName("li")[3].style.opacity = "0.92";
          div.getElementsByTagName("li")[4].style.opacity = "0.92";

  }
  else {
          div.style.opacity = "0";
          div.getElementsByTagName("li")[0].style.opacity = "0";
          div.getElementsByTagName("li")[1].style.opacity = "0";
          div.getElementsByTagName("li")[2].style.opacity = "0";
          div.getElementsByTagName("li")[3].style.opacity = "0";
          div.getElementsByTagName("li")[4].style.opacity = "0";
  }


}

function changeValuesHard(){
  //hard drive
    document.getElementsByTagName('li')[1].innerHTML = hardDrive.qtd;
    document.getElementsByTagName('li')[2].innerHTML = toMoney(returnCost1(1)) ;
    document.getElementsByTagName('li')[5].innerHTML = toBytes(hardDrive.capacity,"memory");
    document.getElementsByTagName('li')[6].innerHTML = toMoney(returnCost1(2)) ;

  //motherBoard
    document.getElementsByTagName('li')[9].innerHTML = os.name[motherBoard.level-1];
    if(motherBoard.level<os.name.length)
    document.getElementsByTagName('li')[10].innerHTML = toMoney(returnCost2());
    else
    document.getElementsByTagName('li')[10].innerHTML = "-";
    // price

  //cpu
    document.getElementsByTagName('li')[13].innerHTML = cpu.cores;
    document.getElementsByTagName('li')[14].innerHTML = toMoney(returnCost3(1));
    // price
    document.getElementsByTagName('li')[17].innerHTML = toBytes(cpu.speed,"speed");
    document.getElementsByTagName('li')[18].innerHTML = toMoney(returnCost3(2));
    // price
 //ram
   document.getElementsByTagName('li')[21].innerHTML = ram.qtd;
   document.getElementsByTagName('li')[22].innerHTML = toMoney(returnCost4(1));
   // price
   document.getElementsByTagName('li')[25].innerHTML = toBytes(ram.capacity,"memory");
   document.getElementsByTagName('li')[26].innerHTML = toMoney(returnCost4(2));
   // price


}

function changeValuesOS(){
  var divOS = document.getElementById("OS");
  if(lang == "eng"){divOS.getElementsByTagName('h3')[0].innerHTML = "Per second: " + toMoney(os.persec);}
  if(lang == "pt"){divOS.getElementsByTagName('h3')[0].innerHTML = "Por segundo: " + toMoney(os.persec);}
  if(lang == "cn"){divOS.getElementsByTagName('h3')[0].innerHTML = "每秒: " + toMoney(os.persec);}
  divOS.getElementsByTagName('h3')[1].innerHTML ="<img class='powerrequired' src='png/ram.png' /> " + toBytes(os.ramUsageCapacity,'memory');
  divOS.getElementsByTagName('h3')[2].innerHTML ="<img class='powerrequired' src='png/cpu.png' /> " +  toBytes(os.cpuUsageSpeed,'speed')+" ";
  divOS.getElementsByTagName('h3')[3].innerHTML ="<img class='powerrequired' src='png/hard-drive.png' /> " + toBytes(os.memoryUsed,"memory")+" ";
  document.getElementById('OSname').innerHTML = os.atualName;
}
function changeValuesSoft(){
  changeValuesOS();
}

function nextUp(num,val){
/*// hardware
  hardDrive.qtd = hardDrive.level[0];

  hardDrive.capacity = arrendEsquerda(2, Math.pow(1.18,hardDrive.level[1]-1)*1e6);
  // de 1e6 a 5e11 em 50 niveis

  //
  if(cpu.level[0]>2)
  cpu.cores = cpu.level[0]*2;
  else
  cpu.cores = cpu.level[0];
  if(cpu.level[1]<=50){
  cpu.speed = arrendEsquerda(2, Math.pow(1.182,cpu.level[1]-1)*7e5);
  // de 7e5 a 3e9 em 50 niveis
}else{
    cpu.speed = arrendEsquerda(2,3e9+Math.pow(cpu.level[1]-50,0.9)*1e8);
}


  ram.qtd = ram.level[0];
  if(ram.level[1]<=50){
  ram.capacity = arrendEsquerda(2, Math.pow(1.197,ram.level[1]-1)*5e5);
  // de 5e5 a 4e9 em 50 niveis
}
else{
    ram.capacity = arrendEsquerda(2,3.4e9+Math.pow(ram.level[1]-50,0.95)*5e8);
}
*/
    var cor = os.color[os.level-1];
  if(val){
    if(num==1){
       document.getElementsByTagName('li')[3].style.background = cor;
    document.getElementsByTagName('li')[1].innerHTML = "<span style="+"color:"+cor +" >"+(Number(hardDrive.qtd)+1) +"</span>";
    }
    else if(num==2){
       document.getElementsByTagName('li')[7].style.background = cor;
      document.getElementsByTagName('li')[5].innerHTML = "<span style="+"color:"+cor +">"+toBytes(arrendEsquerda(2, Math.pow(1.18,hardDrive.level[1])*1e6),"memory")+"</span>";
    }
    else if(num==3 ){
       document.getElementsByTagName('li')[11].style.background = cor;
      if(os.name[Number(motherBoard.level)] != undefined)
        document.getElementsByTagName('li')[9].innerHTML = "<span style="+"color:"+cor +">"+os.name[Number(motherBoard.level)]+"</span>";
        else{
            document.getElementsByTagName('li')[9].innerHTML = "<span style="+"color:"+cor +">"+retLangCorrect("Better OS","Melhor SO")+"</span>";
        }
    }
    else if(num==4){
       document.getElementsByTagName('li')[15].style.background = cor;

      if(cpu.level[0]>1)
      document.getElementsByTagName('li')[13].innerHTML = "<span style="+"color:"+cor +">"+(((Number(cpu.level[0])+1)*2)-2)+"</span>";
      else
      document.getElementsByTagName('li')[13].innerHTML = "<span style="+"color:"+cor +">"+(Number(cpu.level[0])+1)+"</span>";
    }
    else if(num==5){
       document.getElementsByTagName('li')[19].style.background = cor;
      if(cpu.level[1]<=50)
        document.getElementsByTagName('li')[17].innerHTML = "<span style="+"color:"+cor +">"+toBytes(arrendEsquerda(2, Math.pow(1.182,cpu.level[1])*7e5),"speed")+"</span>";
      else
        document.getElementsByTagName('li')[17].innerHTML = "<span style="+"color:"+cor +">"+toBytes( arrendEsquerda(2,3e9+Math.pow(cpu.level[1]-49,0.9)*1e8),"speed")+"</span>";
      }
    else if(num==6){
       document.getElementsByTagName('li')[23].style.background = cor;
       document.getElementsByTagName('li')[21].innerHTML = "<span style="+"color:"+cor +">"+(Number(ram.level[0])+1)+"</span>";
     }
    else if(num==7){
      document.getElementsByTagName('li')[27].style.background = cor;
      if(ram.level[1]<=50)
        document.getElementsByTagName('li')[25].innerHTML = "<span style="+"color:"+cor +">"+toBytes(arrendEsquerda(2, Math.pow(1.197,ram.level[1])*5e5),"memory")+"</span>";
      else
        document.getElementsByTagName('li')[25].innerHTML = "<span style="+"color:"+cor +">"+toBytes(arrendEsquerda(2,3.4e9+Math.pow(ram.level[1]-49,0.95)*5e8),"memory")+"</span>";
      }
  }else{
    if(num==1)
    document.getElementsByTagName('li')[1].innerHTML = hardDrive.qtd,document.getElementsByTagName('li')[3].style.background = "#f2f2f2";
    else if(num==2)
    document.getElementsByTagName('li')[5].innerHTML = toBytes(hardDrive.capacity,"memory"),document.getElementsByTagName('li')[7].style.background = "#f2f2f2";
    else if(num==3)
      document.getElementsByTagName('li')[9].innerHTML = os.name[motherBoard.level-1],document.getElementsByTagName('li')[11].style.background = "#f2f2f2";
    else if(num==4)
        document.getElementsByTagName('li')[13].innerHTML = cpu.cores,document.getElementsByTagName('li')[15].style.background = "#f2f2f2";
    else if(num==5)
        document.getElementsByTagName('li')[17].innerHTML = toBytes(cpu.speed,"speed"),document.getElementsByTagName('li')[19].style.background = "#f2f2f2";
    else if(num==6)
       document.getElementsByTagName('li')[21].innerHTML = ram.qtd,document.getElementsByTagName('li')[23].style.background = "#f2f2f2";
    else if(num==7)
          document.getElementsByTagName('li')[25].innerHTML = toBytes(ram.capacity,"memory"),document.getElementsByTagName('li')[27].style.background = "#f2f2f2";

  }

}

$(document).ready(function(){
    $(".fa-info-circle").click(function(){
      soundVerifier("menu");
    });
    $(".upgrade").click(function(){
      soundVerifier("menu");
    });
});

function clickAnim(){
  var anim = document.createElement("div");
  var width = 30;
  var finalWidth = 70;
  anim.className = "animclick";
  //anim.id = "animclick";
  document.getElementById('content').appendChild(anim);
  var x = (mousex - (width/2));
  var y = (mousey - (width/2));
  anim.style.left = x + "px";
  anim.style.top = y + "px";
  setTimeout(function(){
  anim.style.width = finalWidth + "px";
  anim.style.height = finalWidth + "px";
  anim.style.opacity = "0";
  anim.style.left = (x-((finalWidth-width)/2)) + "px";
  anim.style.top = (y-((finalWidth-width)/2)) + "px";
},10)
setTimeout(function(){
  anim.remove();
},1000)

}
