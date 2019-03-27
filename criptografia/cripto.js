
function codigoValido(){
	var str = ""
	for (var i = 0; i < 100; i++) {
		str += Chr(Math.floor(Math.random()*60) + 33)
	}
	console.log(str);
}

function Encripta(dados){
	var mensx="";
	var l;
	var i;
	var j=0;
	var ch;
	ch = "H19TP#YD8P,*,0[X@LDI$X52%4TV1!KY7E0&W9@L70BX($O-?86O[++-FYLS2?KC*.)W&-V)S>05+(KE/S@7>[Z,T;T;&$!TK>";
	for (i=0;i<dados.length; i++){
		j++;
		var a =Asc(dados.substr(i,1));
		var b =Asc(ch.substr(j,1));
		l=(a + b);
		if (j==(ch.length-1)){
			j=1;
		}
		if (l>=126){
			l-=94;
		}
		mensx+=(Chr(l));
	}
	return mensx;
}
function Descripta(dados){
	var mensx="";
	var l;
	var i;
	var j=0;
	var ch;
	ch = "H19TP#YD8P,*,0[X@LDI$X52%4TV1!KY7E0&W9@L70BX($O-?86O[++-FYLS2?KC*.)W&-V)S>05+(KE/S@7>[Z,T;T;&$!TK>";
	for (i=0; i<dados.length;i++){
		j++;
		l=(Asc(dados.substr(i,1))-(Asc(ch.substr(j,1))));
		if (j==ch.length-1){
			j=1;
		}
		if (l<32){
			l+=94;
		}
		mensx+=(Chr(l));
	}
	return mensx;
}
function Asc(String){
	return String.charCodeAt(0);
}

function Chr(AsciiNum){
	return String.fromCharCode(AsciiNum)
}
