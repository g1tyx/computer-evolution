var hardDrive = {
  level:[1,1]
}
motherBoard = {
  level:1
},
ram = {
  level:[1,1]
},
cpu = {
  level:[1,1]
}

function atualValuesHard(){ // hardware
  hardDrive.qtd = hardDrive.level[0];

  hardDrive.capacity = arrendEsquerda(2, Math.pow(1.18,hardDrive.level[1]-1)*1e6);
  // de 1e6 a 5e11 em 50 niveis

  //
  if(cpu.level[0]>2)
  cpu.cores = (cpu.level[0]*2)-2;
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
  //
  motherBoard.supportedOS = motherBoard.level;

}

function updateHard(){
  atualValuesHard();
  changeValuesHard();
}
