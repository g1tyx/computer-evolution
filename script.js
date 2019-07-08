var bitcoins=10,totalbitcoins=10,bitcoinsanim=false,sound=true,fps=50,tutorial = 1,investors=0, resetinfotimer=2,average=[];
var lang = "eng";

function confirmation(text,funct){

        var confirmationdiv = document.createElement("div");
        confirmationdiv.className="confirmationbox";
        confirmationdiv.id="confirmationbox1";
        document.getElementsByClassName('content')[0].appendChild(confirmationdiv);
      var texth4 = document.createElement("h4");
      texth4.innerHTML = text;
      texth4.className = "texth4";
      confirmationdiv.appendChild(texth4);


      var divbuts = document.createElement("div");
      divbuts.id="divbuts";
      confirmationdiv.appendChild(divbuts);
      var buttonYes = document.createElement("button");
      buttonYes.id = "yesbutton";
      buttonYes.innerHTML = retLangCorrect("Yes","Sim");
      buttonYes.setAttribute("onclick", "document.getElementById('confirmationbox1').remove(),"+funct);
      divbuts.appendChild(buttonYes);

      var buttonNo = document.createElement("button");
      buttonNo.id = "nobutton";
      buttonNo.innerHTML = retLangCorrect("No","Não");
      buttonNo.setAttribute("onclick", "document.getElementById('confirmationbox1').remove()");
      divbuts.appendChild(buttonNo);

}


function info(text,tip){
  if(document.getElementsByClassName("info")[0] == undefined){
      var infodiv = document.createElement("div");
      infodiv.className="info";
      infodiv.id="infoid";
      document.getElementsByClassName('content')[0].appendChild(infodiv);
      var texth4 = document.createElement("h4");
      texth4.innerHTML = text;
      texth4.className = "texth4";
      infodiv.appendChild(texth4);
      infodiv.setAttribute("onclick","this.remove();")
      infodiv.style.cursor = "pointer";
      if(tip != null){
      var texth4tip = document.createElement("h4");
      texth4tip.innerHTML = retLangCorrect("Tip","Dica")+ ": " +tip;
      texth4tip.className = "texth4tip";
      infodiv.appendChild(texth4tip);
}
var left = (parseFloat($("#content").css("width")) - parseFloat($("#infoid" ).css("width")))/2;
var top = (parseFloat($("#content").css("height")) - parseFloat($("#infoid" ).css("height")))/2;
infodiv.style.left= left + "px";
infodiv.style.top= (top-100) + "px";
      setTimeout(function(){
          infodiv.style.opacity=0;
          setTimeout(function(){
            infodiv.remove();
          },400)
      },8000)
 }
}

function volume(){
  if(!sound){
  document.getElementById('volume').className ="fa fa-volume-up";
  document.getElementById('volume').style.margin ="0";
  sound=true;

}
  else{
  document.getElementById('volume').className ="fa fa-volume-off";
  document.getElementById('volume').style.margin ="0 7px 0 0";
  sound=false;
  }
}
function openConfiguration(){
  if(parseFloat(document.getElementById('config').style.right) != 0)
  document.getElementById('config').style.right = 0;
  else
  document.getElementById('config').style.right = "130%";
}
function play(){
  document.getElementById('intro').style.left = "130%";
  start();
}

function averageFunc(){
  average.push(totalbitcoins);
  var averageNum = 0;
  var time = 100;


  if(average.length>1){
  averageNum = (average[average.length-1]-average[0])/((time/1000)*(average.length-1));
}
  document.getElementById('average').innerHTML = retLangCorrect("On average " + toMoney(averageNum) + " per second","Em média " + toMoney(averageNum) + " por segundo");

  setTimeout(function(){
    averageFunc();
        },time);
  if(average.length==100)
  average.splice(0,1);
}

function arrendEsquerda(quantosNums, num){
  //returna o num com a qtd de algarismos significativos igual a quantosNums
  var a = num, v = 0;
while(a>=1){
a/=10;
v++;
}
a=num;
var add=v-quantosNums;
while(v>quantosNums){
a/=10;
v--;
}
return Math.round(a)*Math.pow(10,add);
}
function toMoney(value){
  var grandeza = 0, string="";
  while (value>=1000) {
    grandeza++;
    value/=1000;
  }
  if(value%1<0.01)
  var tofixed = 1;
  else
  var tofixed = 2;
  switch (grandeza) {
    case 0:
      string =  value.toFixed(tofixed);
      break;
    case 1:
      string =  value.toFixed(tofixed) + "K";
      break;
    case 2:
      string =  value.toFixed(tofixed) + "M";
      break;
    case 3:
      string =  value.toFixed(tofixed) + "B";
      break;
    case 4:
      string =  value.toFixed(tofixed) + "T";
      break;
    case 5:
      string =  value.toFixed(tofixed) + "q";
      break;
    case 6:
      string =  value.toFixed(tofixed) + "Q";
      break;
    case 7:
      string =  value.toFixed(tofixed) + "s";
      break;
    case 8:
      string =  value.toFixed(tofixed) + "S";
      break;
    case 9:
      string =  value.toFixed(tofixed) + "O";
      break;
    case 10:
      string =  value.toFixed(tofixed) + "N";
      break;

    default:
    string = value.toFixed(0);
      break;


  }
  return string + "$";
}
function toBytes(value,type){
var grandeza = 0, string="";
  if(value!=null){
  while (value>=1000) {
    grandeza++;
    value/=1000;
  }
  if(value%1<0.01)
  var toFixed = 0;
  else if(value%1<=0.11)
  var tofixed = 1;
  else
  var tofixed = 2;
  switch (grandeza) {
    case 1:
      string =  value.toFixed(tofixed) + "k";
      break;
    case 2:
      string =  value.toFixed(tofixed) + "M";
      break;
    case 3:
      string =  value.toFixed(tofixed) + "G";
      break;
    case 4:
      string =  value.toFixed(tofixed) + "T";
      break;
    case 5:
      string =  value.toFixed(tofixed) + "P";
      break;
    case 6:
      string =  value.toFixed(tofixed) + "E";
      break;
    case 7:
      string =  value.toFixed(tofixed) + "Z";
      break;
    case 8:
      string =  value.toFixed(tofixed) + "Y";
      break;

    default:
      string =  value.toFixed(tofixed);
      break;

  }
  if(type=="persec" )
    string = string + "B/s";
  else if(type=="memory" )
      string = string + "B";
  else if(type=="speed" )
        string = string + "Hz";
  }
    return string;
}

function retLangCorrect(eng,pt){
  var ret = "";
  if(lang=="eng")
  ret=eng;
  else
  ret=pt;
  return ret;
}

function tutorialfunc(){
  var text="";
  if(tutorial == 1)
  text=retLangCorrect("Click on the box above to see the apps you can install","Clique na caixa em cima para ver as apps que pode instalar");
  else if(tutorial == 2)
  text=retLangCorrect("Click on the box above to install that app","Clique na caixa em cima para instalar esta app");
  else if(tutorial == 3)
  text=retLangCorrect("Click on the app above to run","Clique na caixa em cima para executar");
  else if(tutorial == 4)
  text=retLangCorrect("Click again on the app above to run","Clique na caixa em cima outra vez para executar");
  else if(tutorial == 5)
  text=retLangCorrect("Click on the box above to upgrade RAM capacity","Clique na caixa em cima para melhorar a capacidade da RAM");
  else if(tutorial == 7)
  text=retLangCorrect("Click on the box above to upgrade Operating System","Clique na caixa em cima para melhorar o Sistema Operativo");
  if(document.getElementsByClassName("tutorial")[0] == undefined && text != ""){
      var tutorialdiv = document.createElement("div");
      tutorialdiv.className="tutorial";
      tutorialdiv.id="tutorial"+tutorial;
      document.getElementsByClassName('content')[0].appendChild(tutorialdiv);
      var texth2 = document.createElement("h2");
      texth2.className = "texth2";
      texth2.innerHTML = "Tutorial " + tutorial + "/7";
      var texth4 = document.createElement("h4");
      texth4.className = "texth4";
      texth4.innerHTML = text;
      var next = document.createElement("h3");
      next.className = "next";
      next.innerHTML = "Click here to go to skip tutorial";
      next.setAttribute("onclick","document.getElementById('tutorial"+tutorial+"').remove(),tutorial=0");
      tutorialdiv.appendChild(texth2);
      tutorialdiv.appendChild(texth4);
      tutorialdiv.appendChild(next);
      next.style.cursor = "pointer";
      if(tutorial==3)
      tutorialdiv.style.zIndex="1";
 }


}
function nextTutStep(step){
  if(step==tutorial || step==7){
  if(document.getElementById('tutorial'+tutorial)!= undefined)
    document.getElementById('tutorial'+tutorial).remove();
    tutorial++;
    tutorialfunc();
  }
}

function retInvestors(){
  var fakeinvestors = 0;
  if(totalbitcoins>5e5){
    fakeinvestors = Math.ceil(Math.pow((totalbitcoins-5e5)/5e5,0.5));
  }
  return fakeinvestors;
}
var d = new Date();
var date = d.getTime();
var secondsout=0;

var computerCycle = function() {
    var color = "white";
    if(bitcoinsanim)
    color = "red";
    document.getElementById('balance').innerHTML = retLangCorrect("Balance:","Balanço:")+ "<span id='bitcoins' style= 'color:" + color +" '>" + toMoney(bitcoins) + "</span>";
    document.getElementById('investor').innerHTML =retLangCorrect("Next format you will earn "+retInvestors()+" investors to your computer<br>Each investor increases app revenue by 0.1%","Na próxima formatação vais ganhar "+retInvestors()+" investidores para o teu computador<br>Cada investidor aumentar os ganhos das tuas apps em 0.1%")
    app.runall();
    var d = new Date();
    date1 = d.getTime();
    if(Math.abs(date1-date)>800){
    secondsout++;
      date=d.getTime();
    }
    else if(secondsout>=1){
      stayedOut(secondsout,2);
      secondsout=0;
    }
    else{
      date=d.getTime();
    }
    setTimeout(function(){
      computerCycle();
    },10);
};


function start(){
  InitializeAllApps();
  CreateOSs();
  load();
  createApps();
  updateHard();
  for (var i = 0; i < app.name.length; i++) {
    if(app.installed[i])
  app.updateInfoApp(i);
  }
  app.averages();
  os.updateSoft();
  setInterval(function(){
      os.pay();
    },1000/fps);
  setInterval(function(){
          save();
      },2000);
  functionidle();
  tutorialfunc();
  computerCycle();
  averageFunc();
}

function save() {

    if (typeof(Storage) !== "undefined") {
        localStorage.setItem("a", bitcoins);
        localStorage.setItem("a2", totalbitcoins);
        localStorage.setItem("c", os.level);
        localStorage.setItem("d", motherBoard.level);
        localStorage.setItem("e", tutorial);
        localStorage.setItem("f", investors);
        localStorage.setItem("g", sound);

        for (var i = 0; i < app.name.length; i++)
              localStorage.setItem("apphelp" + i, app.helperLvl[i]);
        for (var i = 0; i < app.name.length; i++)
              localStorage.setItem("appins" + i, JSON.stringify(app.installed[i])); //para true e falses eh necessario usar json
        for (var i = 0; i < hardDrive.level.length; i++)
              localStorage.setItem("hard" + i, hardDrive.level[i]);
        for (var i = 0; i < cpu.level.length; i++)
              localStorage.setItem("cpu" + i, cpu.level[i]);
        for (var i = 0; i < ram.level.length; i++)
              localStorage.setItem("ram" + i, ram.level[i]);


        var d = new Date();
        d = d.getTime();
        localStorage.setItem("z", d);
    } else {
        console.log("Sorry, your browser does not support Web Storage...");
    }
//    kongregate.stats.submit('OS level', os.level);
//    kongregate.stats.submit('Total Bitcoins(Billions)', Math.floor(totalbitcoins/1e9));
//    kongregate.stats.submit('Investors', investors);
//    kongregate.stats.submit('Apps installed', app.returnTotalInstalled());
}

function changeInvestorsTop(){
    document.getElementById('topinvestors').innerHTML = retLangCorrect("Investors: "+toBytes(investors)+"("+(investors*0.1).toFixed(1)+"%)","Investidores: "+toBytes(investors)+"("+(investors*0.1).toFixed(1)+"%)");
}

function functionidle() {
      changeInvestorsTop();
    if (localStorage.getItem("z")) {
        date = Number(localStorage.getItem("z"));
        var d = new Date();
        d = d.getTime();
        var idleTime = Math.floor((d - date) / 1000);
        stayedOut(idleTime,1);
    }
}
function stayedOut(seconds,type){
var idleTime = seconds;
var gains = 0;
var cpuSpeedFree = (cpu.speed * cpu.cores) - cpuSpeedUsed;
var ramCapacityFree = (ram.capacity * ram.qtd) - ramCapacityUsed;
for(var i = 0;i<app.name.length;i++){
  if(app.installed[i]){
    var cpuEf = cpuSpeedFree / app.returnCpuNeed(i);
    var ramEf = ramCapacityFree / app.returnRamNeed(i);
    var test = cpuEf > 0 && ramEf > 0;
    if(test){
      var r = 1;
      var x = app.helperLvl[i];
      while (app.funcHelp(r)<=x) {
        r++
      }
      r--;
      var limitante = Math.pow(Math.min(ramEf, cpuEf),0.8);
      gains += (r*0.01*limitante*app.returnCoinsPR(i));
    }
  }
}
gains+=os.persec;
gains = Math.floor(gains*idleTime);
if(gains>=1){
bitcoins += gains,totalbitcoins+=gains;

if(type==1){
var seconds = idleTime%60;
var minutes = idleTime/60;
var hours = idleTime/3600;

if (idleTime <= 60)
    var string = idleTime % 60 + retLangCorrect(" seconds"," segundos");
else if (idleTime > 60 && idleTime < 3600)
    var string = Math.floor(idleTime / 60) + retLangCorrect(" minutes and "," minutos e ") + idleTime %
        60 + retLangCorrect(" seconds"," segundos");
else if (idleTime >= 3600)
    var string = Math.floor(idleTime / 3600) + retLangCorrect(" hours "," horas ") + Math.floor((
            idleTime % 3600) / 60) + retLangCorrect(" minutes and "," minutos e ") + idleTime % 60 +
        retLangCorrect(" seconds"," segundos");
        if(idleTime>5)
info(retLangCorrect("You stayed out ","Estiveste fora ") + string + retLangCorrect(" and won "," e ganhaste ") +toMoney(gains));

  }
}
}
function load() {

    if (localStorage.getItem("a"))
        bitcoins = Number(localStorage.getItem("a"));
    else
        bitcoins = 10;
    if (localStorage.getItem("a2"))
        totalbitcoins = Number(localStorage.getItem("a2"));
    if (localStorage.getItem("c"))
        os.level = Number(localStorage.getItem("c"));
    if (localStorage.getItem("d"))
        motherBoard.level = Number(localStorage.getItem("d"));
    if (localStorage.getItem("e"))
        tutorial = Number(localStorage.getItem("e"));
    if (localStorage.getItem("f"))
        investors = Number(localStorage.getItem("f"));
    if (localStorage.getItem("g"))
        sound = Number(localStorage.getItem("g"));

    if(!sound){
      sound=true;
      volume();
    }



    for (var i = 0; i < app.name.length; i++){
    if (localStorage.getItem("apphelp"+i)) {
            app.helperLvl[i] = localStorage.getItem("apphelp" + i);
          }
    }

      for (var i = 0; i < app.name.length; i++){
      if (localStorage.getItem("appins"+i)) {
      app.installed[i] = JSON.parse(localStorage.getItem("appins" + i)) ;
        }
      }
      for (var i = 0; i < hardDrive.level.length; i++){
      if (localStorage.getItem("hard"+i)) {
              hardDrive.level[i] = localStorage.getItem("hard" + i);
            }
      }
      for (var i = 0; i < cpu.level.length; i++){
      if (localStorage.getItem("cpu"+i)) {
              cpu.level[i] = localStorage.getItem("cpu" + i);
            }
      }
      for (var i = 0; i < ram.level.length; i++){
      if (localStorage.getItem("ram"+i)) {
              ram.level[i] = localStorage.getItem("ram" + i);
            }
      }
}
function reset(){


for (var i = 0; i < app.name.length; i++) {
  if(app.installed[i])
  app.uninstall(i);
}

  for (var i = 0; i < app.name.length; i++) {
    app.installed[i] = false;
    app.helperLvl[i] = 0;
    app.runPerc[i] = 0;
  }/*
  for (var i = 0; i < cpu.level.length; i++) {
    cpu.level[i]=1
  }
  for (var i = 0; i < ram.level.length; i++) {
    ram.level[i]=1
  }
  for (var i = 0; i < hardDrive.level.length; i++) {
    hardDrive.level[i]=1
  }*/
  ramCapacityUsed = 0;
  cpuSpeedUsed = 0;
  storageUsed = 0;
  os.ramUsageCapacity = null;
  os.cpuUsageSpeed = null;
//  motherBoard.level= 1;
  os.level = 1;
  os.atualValues();
  os.updateSoft();
  atualValuesHard();
  atualizaHardPerc();
  updateHard();
  investors += retInvestors();
  changeInvestorsTop();
  bitcoins = 10;
  totalbitcoins = 10;
  average=[];
  save();
}
function createSound(type) {
        insertSound = document.createElement("audio");
        insertSound.setAttribute("src", "style/sound/" + type + ".wav");
        insertSound.setAttribute("preload", "auto");
        insertSound.setAttribute("controls", "none");
        insertSound.volume = 0.1;
        insertSound.style.display = "none";
        for (var a = 1; a != 0; a++) {
          var str = type + a;
            if (document.getElementById(str) == null)
                insertSound.setAttribute("id", type + a), a = -1;

        }
        document.body.appendChild(insertSound);
    }
function soundVerifier(string){

if(sound){

  for(var a = 1;a!=0;a++){
  if(document.getElementById(string+a) != null){
  if(document.getElementById(string+a).paused)
    document.getElementById(string+a).play(),a=-1;
  }
  else{
  createSound(string);
  document.getElementById(string+a).play();
  a=-1;
  }
  }
    }
  }
function language(a){
if(lang=="eng" && a==2){
  document.getElementById('pt').className ="lang active";
  document.getElementById('pt1').className ="lang active";
  document.getElementById('eng').className ="lang inactive";
  document.getElementById('eng1').className ="lang inactive";
  lang="pt";changeLanguage();
}
else if(lang=="pt" && a==1){
    document.getElementById('pt').className ="lang inactive";
    document.getElementById('pt1').className ="lang inactive";
    document.getElementById('eng').className ="lang active";
    document.getElementById('eng1').className ="lang active";
    lang="eng";changeLanguage();
}
app.updateAllInfoApp();
atualizaHardPerc();
}
function changeLanguage(){
  if(lang=="eng"){
    document.getElementById('content').getElementsByTagName('h3')[0].innerHTML = "Play";
    document.getElementById('config').getElementsByTagName('h3')[0].innerHTML = "Technology points reduce the requirements(OS and apps)";
    document.getElementById('osup').getElementsByTagName('h4')[0].innerHTML = "UPGRADE";
    document.getElementById('reset').innerHTML = "Format";
      document.getElementsByTagName('li')[0].innerHTML = "Quantity";
      document.getElementsByTagName('li')[4].innerHTML = "Capacity";
      document.getElementsByTagName('li')[8].innerHTML = "Supported OS";
      document.getElementsByTagName('li')[12].innerHTML = "Cores";
      document.getElementsByTagName('li')[16].innerHTML = "Speed";
      document.getElementsByTagName('li')[20].innerHTML = "Quantity";
      document.getElementsByTagName('li')[24].innerHTML = "Capacity";

      document.getElementsByTagName('li')[3].innerHTML = "Upgrade";
      document.getElementsByTagName('li')[7].innerHTML = "Upgrade";
      document.getElementsByTagName('li')[11].innerHTML = "Upgrade";
      document.getElementsByTagName('li')[15].innerHTML = "Upgrade";
      document.getElementsByTagName('li')[19].innerHTML = "Upgrade";
      document.getElementsByTagName('li')[23].innerHTML = "Upgrade";
      document.getElementsByTagName('li')[27].innerHTML = "Upgrade";
      if(document.getElementById('infounins')!=null)
      document.getElementById('infounins').innerHTML = "Uninstall";
      if(document.getElementById('install')!=null)
      document.getElementById('install').innerHTML = "Install";
      for(var i = 0; i<=app.name.length;i++){
        if(app.installed[i])
      document.getElementById('unins'+i).setAttribute("onclick", "confirmation('Do you really want to uninstall " + app.name[i] + "?','app.uninstall(" + i + ")' ),app.correctRun(" + i + ");");
      }

      document.getElementById('expimpdiv').getElementsByTagName('h4')[0].innerHTML = "To export, click the text above and copy (ctrl-c). To import, click the text, paste (ctrl-v) your exported data and click on import.";
      document.getElementById('socialsbut').innerHTML = "Social Networks";
      document.getElementById('expimpbut').innerHTML = "Export/Import save";
      document.getElementById('cpuinfo').innerHTML = "The CPU is the brain of the computer.<br>It does the math operations and logical problems.";
      document.getElementById('raminfo').innerHTML = "RAM is where the data that is needed to run an app is stored.";
      document.getElementById('hardinfo').innerHTML = "The hard drive is where all data (billions of 1's and 0's) are stored.";
      document.getElementById('motherinfo').innerHTML = "The Motherboard is the control center,<br>where all the components of the computer are connected.";
      document.getElementById('moregames').getElementsByTagName('h2')[0].innerHTML ="Games in development<br><a href='http://www.lx-games.com'>lx-games.com</a>";
  }
  else if(lang=="pt"){
    document.getElementById('content').getElementsByTagName('h3')[0].innerHTML = "Jogar";
    document.getElementById('osup').getElementsByTagName('h4')[0].innerHTML = "MELHORAR";
    document.getElementById('reset').innerHTML = "Formatar";
      document.getElementsByTagName('li')[0].innerHTML = "Quantidade";
      document.getElementsByTagName('li')[4].innerHTML = "Capacidade";
      document.getElementsByTagName('li')[8].innerHTML = "SO suportado";
      document.getElementsByTagName('li')[12].innerHTML = "Núcleos";
      document.getElementsByTagName('li')[16].innerHTML = "Velocidade";
      document.getElementsByTagName('li')[20].innerHTML = "Quantidade";
      document.getElementsByTagName('li')[24].innerHTML = "Capacidade";

      document.getElementsByTagName('li')[3].innerHTML = "Melhorar";
      document.getElementsByTagName('li')[7].innerHTML = "Melhorar";
      document.getElementsByTagName('li')[11].innerHTML = "Melhorar";
      document.getElementsByTagName('li')[15].innerHTML = "Melhorar";
      document.getElementsByTagName('li')[19].innerHTML = "Melhorar";
      document.getElementsByTagName('li')[23].innerHTML = "Melhorar";
      document.getElementsByTagName('li')[27].innerHTML = "Melhorar";
      if(document.getElementById('infounins')!=null)
      document.getElementById('infounins').innerHTML = "Desinstalar";
      if(document.getElementById('install')!=null)
      document.getElementById('install').innerHTML = "Instalar";
      for(var i = 0; i<=app.name.length;i++){
        if(app.installed[i])
      document.getElementById('unins'+i).setAttribute("onclick", "confirmation('Tem a certeza que deseja desinstalar " + app.name[i] + "?','app.uninstall(" + i + ")' ),app.correctRun(" + i + ");");
      }
      document.getElementById('expimpdiv').getElementsByTagName('h4')[0].innerHTML = "Para exportar, clica em cima do texto e copia (ctrl-c). Para importar, clica no texto, cola (ctrl-v) o teu save exportado e clica em importar.";
      document.getElementById('socialsbut').innerHTML = "Redes Sociais";
      document.getElementById('expimpbut').innerHTML = "Exporta/Importa save";
      document.getElementById('cpuinfo').innerHTML = "O CPU é o cerebro do computador.<br>Ele faz as operações matematicas e problemas lógicos.";
      document.getElementById('raminfo').innerHTML = "A RAM é onde estão guardados os dados que são necessários para a execução de uma app.";
      document.getElementById('hardinfo').innerHTML = "O disco rígido é onde todos os dados (bilhões de 1's e 0's) são armazenados.";
      document.getElementById('motherinfo').innerHTML = "A Motherboard é o centro de controle,<br>onde estão conectados todos os componentes do computador.";
      document.getElementById('moregames').getElementsByTagName('h2')[0].innerHTML ="Jogos em desenvolvimento<br><a href='http://www.lx-games.com'>lx-games.com</a>";
  }
  changeInvestorsTop();
}
function criptSave(){
 var string= "";
 var str=[
          "os.level="+os.level,
          "motherBoard.level="+motherBoard.level,
          "hardDrive.level=["+hardDrive.level+"]",
          "cpu.level=["+cpu.level+"]",
          "ram.level=["+ram.level+"]",
          "investors="+investors,
          "app.helperLvl=["+app.helperLvl+"]",
          "app.installed=["+app.installed+"]",
          "bitcoins="+bitcoins,
          "totalbitcoins="+totalbitcoins
        ]
    string = JSON.stringify(str);
    var encriptado = Encripta(string);
  document.getElementById("savetext").value = encriptado;
  cript = encriptado;
}
var cript="";
function aplicaCriptCode(){
  str = Descripta(document.getElementById("savetext").value);
  str = JSON.parse(str);//para dar para o eval executar
  for(var i = 0;i<str.length;i++)
  eval(str[i]);

    ramCapacityUsed = 0;
    cpuSpeedUsed = 0;
    storageUsed = 0;
    os.ramUsageCapacity = null;
    os.cpuUsageSpeed = null;
    os.atualValues();
    os.updateSoft();
    atualValuesHard();
    atualizaHardPerc();
    updateHard();
    changeInvestorsTop()
    for(var i = 0; i < app.name.length; i++){
      if(app.installed[i] && document.getElementById('app'+(i+1)) == undefined)
      app.createApp(i);
      if(!app.installed[i] && document.getElementById('app'+(i+1)) != undefined)
        document.getElementById('app'+(i+1)).remove();
    }
    fixInstall();
    for(var i = 0; i < average.length; i++){
      average[i]=0;
    }
}
