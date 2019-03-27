
function upgradeHard1(a){//hardDrive
  if(bitcoins>=returnCost1(a)){
  bitcoins-=returnCost1(a);
  hardDrive.level[a-1]++;
  soundVerifier("upgrade");
  updateHard();
  atualizaHardPerc();
  app.updateAllInfoApp();
  }
  else {
    soundVerifier("fail");
    needBitAnim();
  }
}
function upgradeHard2(){//mother
  if(bitcoins >= returnCost2() && motherBoard.level < os.name.length){
  bitcoins-=returnCost2();
  if(motherBoard.level==1)
  nextTutStep(6);
  motherBoard.level++;
  soundVerifier("upgrade");
  updateHard();
  app.updateAllInfoApp();
  }
  else {
    soundVerifier("fail");
    needBitAnim();
  }
}
function upgradeHard3(a){//cpu
  if(bitcoins>=returnCost3(a)){
  bitcoins-=returnCost3(a);
  cpu.level[a-1]++;
  soundVerifier("upgrade");
  updateHard();
  atualizaHardPerc();
  app.updateAllInfoApp();
  }
  else {
    soundVerifier("fail");
    needBitAnim();
  }
}
function upgradeHard4(a){//ram
  if(bitcoins>=returnCost4(a)){
  bitcoins-=returnCost4(a);
  if(a==2)
  nextTutStep(5);
  ram.level[a-1]++;
  soundVerifier("upgrade");
  updateHard();
  atualizaHardPerc();
  app.updateAllInfoApp();
  }
  else {
    soundVerifier("fail");
    needBitAnim();
  }
}
var anim;
function needBitAnim(){
  if(bitcoinsanim)
  clearTimeout(anim);
  bitcoinsanim = true;

  anim = setTimeout(function(){
    bitcoinsanim = false;
    clearTimeout(anim);
  },500);
}

function returnCost1(a){
  if(a==1){
    return Math.pow(20,hardDrive.level[0]-1)*2.5e9;
  }
  else{
    return arrendEsquerda(2,Math.pow(1.42,hardDrive.level[1]-1)*10);
  }
}
function returnCost2(){
    return Math.pow(11.5,motherBoard.level-1)*1e3;
}
function returnCost3(a){
  if(a==1){
    return Math.pow(30,cpu.level[0]-1)*5e7;
  }
  else{
    return arrendEsquerda(2,Math.pow(1.38,cpu.level[1]-1)*10);
  }
}
function returnCost4(a){
  if(a==1){
    return Math.pow(25,ram.level[0]-1)*5e7;
  }
  else{
    return arrendEsquerda(2,Math.pow(1.4,ram.level[1]-1)*10);
  }
}
