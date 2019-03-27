
function CreateOSs(){
  CreateOS("Sixtem", "#00ff7b", "-puzzle-piece", "#2d2f34");
  CreateOS("Sixtem 2.0", "#00ff7b", "-shield", "#342d31");
  CreateOS("Sixtem 3.0", "#00ff7b", "-paw", "#322938");

  CreateOS("Windoors 95", "#ff7b00", "-globe", "#ded1ce");
  CreateOS("Windoors 98", "#ff7b00", "-bank", "#c1c7dc");
  CreateOS("Windoors MI", "#ff7b00", "-anchor", "#dcdcc1");

  CreateOS("Windoors XD", "#8226d9", "-eye", "#79888b");
  CreateOS("Windoors Cista", "#8226d9", "-diamond", "#86798b");
  CreateOS("Windoors 7", "#8226d9", "-bug", "#798b7e");
  CreateOS("Windoors 8", "#8226d9", "-asterisk", "#798b7e");

  CreateOS("Windoors 8.999", "#2682d9", "-sliders", "#8a8b79");
  CreateOS("Windoors 10", "#2682d9", "-gavel", "#8b7979");
  CreateOS("Windoors RJ", "#2682d9", "-fighter-jet", "#8b7988");
  CreateOS("Windoors X", "#2682d9", "-heart", "#828b79");

  CreateOS("Windoors Xs", "#d92650", "-american-sign-language-interpreting", "#d3c5e7");
  CreateOS("MetalStar S", "#d92650", "-beer", "#d3c5e7");
  CreateOS("MetalStar M", "#d92650", "-hashtag", "#d3c5e7");
  CreateOS("MetalStar X", "#d92650", "-hashtag", "#d3c5e7");
  CreateOS("MSBeastModeON", "#a61111", "-arrows-h", "#130014");

}
function CreateOS(name, backcolor, fa, facolor) {
    os.name.push(name);
    os.color.push(backcolor);
    os.fa.push(fa);
    os.facolor.push(facolor);
}
var os = {
        name:[],
        color:[],
        fa:[],
        facolor:[],
        level: 1,

        pay: function() { //pagamento em bitcoins do os
           var add= os.persec/fps;
            bitcoins += add;
            totalbitcoins += add;
        },
        returnCpuNeed: function(a){
          if(a==null)
          return Math.pow(1.969, os.level - 1) * 4e5 ;
          else
          return Math.pow(1.969, a - 1) * 4e5 ;
        }
        ,
        returnRamNeed: function(a){
          if(a==null)
          return Math.pow(2.064, os.level - 1) * 2.5e5 ;
          else
          return Math.pow(2.064, a - 1) * 2.5e5 ;
        }
        ,
        returnHardNeed: function(a){
          if(a==null)
          return Math.pow(2.157, os.level - 1) * 8e5 ;
          else
          return Math.pow(2.157, a - 1) * 8e5 ;
        }
        ,
        atualValues:function () { //atualiza os valores do os baseados no nivel
            if (os.ramUsageCapacity != null || os.cpuUsageSpeed != null) {
                ramCapacityUsed -= os.ramUsageCapacity;
                cpuSpeedUsed -= os.cpuUsageSpeed;
                storageUsed -= os.memoryUsed;
            }
            os.atualName = os.name[os.level - 1];
            os.ramUsageCapacity = os.returnRamNeed();
            os.cpuUsageSpeed = os.returnCpuNeed();
            os.memoryUsed = os.returnHardNeed();
            os.persec = Math.pow(8, os.level - 1) * 0.2;
            ramCapacityUsed += os.ramUsageCapacity;
            cpuSpeedUsed += os.cpuUsageSpeed;
            storageUsed += os.memoryUsed;
            atualizaHardPerc();

        },
        upgradeOS:function() {
            var testCpu = (cpuSpeedUsed - os.returnCpuNeed() + os.returnCpuNeed(os.level+1)) < (cpu.speed*cpu.cores);
            var testRam = (ramCapacityUsed - os.returnRamNeed() + os.returnRamNeed(os.level+1)) < (ram.capacity*ram.qtd);
            var testHard = (storageUsed - os.returnHardNeed() + os.returnHardNeed(os.level+1)) < (hardDrive.capacity*hardDrive.qtd);
            var test = testCpu && testRam  && testHard ;
            if (test && os.level < motherBoard.level && os.level < os.name.length) {
              if(os.level==1)
              nextTutStep(7);
                os.level++;

                if(os.level==os.name.length){
                  info(retLangCorrect(
                  	"Congratulations, you have acquired the best existing OS<br>Now you can install the most valuable app",
                  	"Parabéns, adquiriste o melhor OS existente<br>Agora podes instalar o aplicativo mais valioso",
                  	"恭喜你，你已经获得了最好的现有操作系统<br>现在你可以安装最有价值的应用程序了"
                  	))
                }
                os.updateSoft();
            }
            else if(os.level >= motherBoard.level){
              info(retLangCorrect(
              	"You need to upgrade Motherboard to install this Operating System",
              	"Precisas de melhorar a Motherboard para instalar este Sistema Operativo",
              	"你需要升级主板才能安装这个操作系统"
              	))
            }
            else if(testCpu && testRam && !testHard){
              var what = retLangCorrect("","o ","") + "Hard Drive"
            }
            else if(testCpu && !testRam && testHard){
              var what = retLangCorrect("","a ","") +"RAM"
            }
            else if(!testCpu && testRam && testHard){
              var what = retLangCorrect("","o ","") +"CPU"
            }
            else if(!testCpu && testRam && !testHard){
              var what = retLangCorrect("","o ","") +"CPU " +retLangCorrect("and","e o","") +" Hard Drive"
            }
            else if(testCpu && !testRam && !testHard){
              var what = retLangCorrect("","a ","") +"RAM " +retLangCorrect("and","e o","") +" Hard Drive"
            }
            else if(!testCpu && !testRam && testHard){
              var what = retLangCorrect("","o ","") +"CPU " +retLangCorrect("and","e a","") +" RAM"
            }
            else if(!test){
              var what = retLangCorrect("","o ","") +"CPU, "+retLangCorrect("","a ","") +"RAM " +retLangCorrect("and","e o","") +" Hard Drive";
            }
            if(what != undefined)
            info(retLangCorrect(
            	"You need to upgrade " + what + " to install this Operating System",
            	"Precisas de melhorar " + what + " para instalar este Sistema Operativo",
            	"你需要升级" + what + "才能安装这个操作系统"
            	));
        },

            updateSoft:function() {
                document.getElementById('osup').style.background = os.color[os.level-1];
                document.getElementById('topbar').style.background = os.color[os.level-1];
                var icon =document.getElementById('osi');
                icon.className = "iconapp fa fa" +os.fa[os.level-1];
                icon.style.fontSize = "40px";
                var top = (parseFloat($("#osup").css("height")) - parseFloat($("#osi").css("height")))/2;
                var left = (parseFloat($("#osup").css("width")) - parseFloat($("#osi").css("width")))/2;
                icon.style.top = top+ "px";
                icon.style.left = left+"px";
                icon.style.zIndex = "1";
                document.getElementById('osi').style.color = os.facolor[os.level-1];
                os.atualValues();
                changeValuesSoft();
            }

    }

    ramCapacityUsed = 0;
cpuSpeedUsed = 0;
storageUsed = 0;


function atualizaHardPerc() { //atualiza as percentagens de uso dos componentes e atualiza o texto no topbar
    var stoper = (storageUsed / (hardDrive.capacity * hardDrive.qtd)) ;
    var cpuper = (cpuSpeedUsed / (cpu.speed * cpu.cores)) ;
    var ramper = (ramCapacityUsed / (ram.capacity * ram.qtd)) ;

    document.getElementById('usagetext1').innerHTML = (stoper*100).toFixed(0) + "%";
    document.getElementById('usagetext2').innerHTML = (cpuper*100).toFixed(0) + "%";
    document.getElementById('usagetext3').innerHTML = (ramper*100).toFixed(0) + "%";
    document.getElementById('free1').innerHTML = toBytes((hardDrive.capacity * hardDrive.qtd)-storageUsed,"memory") + retLangCorrect(" free of "," livre de "," / ") + toBytes(hardDrive.capacity * hardDrive.qtd,"memory");
    document.getElementById('free2').innerHTML = toBytes((cpu.speed * cpu.cores)-cpuSpeedUsed,"speed") + retLangCorrect(" free of "," livre de "," / ") + toBytes(cpu.speed * cpu.cores,"speed");
    document.getElementById('free3').innerHTML = toBytes((ram.capacity * ram.qtd)-ramCapacityUsed,"memory") + retLangCorrect(" free of "," livre de "," / ") + toBytes(ram.capacity * ram.qtd,"memory");


    document.getElementById('usage1').style.width  = ( (stoper) * parseFloat($(".hardbar").css("width")) ) + "px";
    document.getElementById('usage2').style.width  = ( (cpuper) * parseFloat($(".hardbar").css("width")) ) + "px";
    document.getElementById('usage3').style.width  = ( (ramper) * parseFloat($(".hardbar").css("width")) ) + "px";


var yel = 0.35,re = 0.7;
    if (cpuper >= re)
        $("#usage2").css("background", "#e60000");
    else if (cpuper >= yel && cpuper < re)
        $("#usage2").css("background", "#ffd000");
    else
        $("#usage2").css("background", "#00ff19");

    if (stoper >= re)
        $("#usage1").css("background", "#e60000");
    else if (stoper >= yel && stoper < re)
        $("#usage1").css("background", "#ffd000");
    else
        $("#usage1").css("background", "#00ff19");

    if (ramper >= re)
        $("#usage3").css("background", "#e60000");
    else if (ramper >= yel && ramper < re)
        $("#usage3").css("background", "#ffd000");
    else
        $("#usage3").css("background", "#00ff19");
}


function CreateApp(name, cpuNeed, ramNeed, memoryNeed, coins, price, minOS, backcolor, fa, facolor, appNameColor) {
    app.name.push(name);
    var need = [cpuNeed, ramNeed, memoryNeed]
    app.needs.push(need);
    app.helperLvl.push(0);
    app.installed.push(false);
    app.coinsPerRun.push(coins);
    app.price.push(price);
    app.running.push(false);
    app.runPerc.push(0);
    app.minOS.push(minOS);
    app.color.push(backcolor);
    app.appNameColor.push(appNameColor);
    app.fa.push(fa);
    app.facolor.push(facolor);
}

function InitializeAllApps() {
    //CreateApp(name              ,cpuNeed,ramNeed,memoryNeed          ,coinsPerRun,price,minOS         ,backcolor,fa,facolor,appNameColor);
    CreateApp("Terminal"          , 2.5e5, 2.2e5, 1e5                 , 5,  1e1, 1                                  , "black", "-terminal", "white", "white");
    CreateApp(".txt Editor"        , 6.4e5, 9.4e5, 8e5                , 25,  1e2, 1                                 , "#52c2ff", "-sticky-note", "white", "black" );

    CreateApp("Pung"              , 7.2e6, 4.4e6, 3.1e6               , 1e2,  2e3, 2                                 , "white", "-circle", "black", "black");
    CreateApp("HacMan"            , 1.3e7, 9.6e6, 5.3e6               , 2.5e2,  4.5e3, 2                                    , "yellow", "-hand-lizard-o", "black", "black");

    CreateApp("Painte"            , 2.2e7, 4.3e7, 1.6e7               , 7.5e2,  1.5e4, 3                                   , "#69ff52", "-paint-brush", "white", "black");
    CreateApp("Qetris"          , 5.1e7, 2.6e7, 2.8e7                 , 1.4e3,  4.3e4, 3                                    , "black", "-cubes", "#9d00ff", "white");

    CreateApp("Internet Errorer" , 5.4e7, 6.3e7, 4.5e7                , 500,  9e4, 4                                   , "#52a8ff", "-internet-explorer", "white", "black");
    CreateApp("Wurd"             , 1.7e8, 2.5e8, 5.4e7                , 2.5e3,  3.1e5, 4                                    , "#528eff", "-file-word-o", "white", "black");
    CreateApp("Exel"             , 6.2e8, 3.2e8, 9.1e7                , 4e3,  4.5e5, 4                                    , "#6fff52", "-file-excel-o", "white", "black");

    CreateApp("PitTorret"         , 2.5e8, 4e8, 2e8                   , 5e4,  1e7, 5                                    , "white", "-download", "#24ff27", "black");
    CreateApp("Limon Tools"       , 6e8, 3e8, 1.6e8                   , 7.5e4,  1.5e7, 5                                    , "#52baff", "-lemon-o", "white", "black");
    CreateApp("CS 1.65"           , 1.2e9, 1e9, 4e8                   , 1.2e5,  3e7, 5                                    , "black", "-hand-o-right", "white", "white");
    CreateApp("TIFA 98"           , 2e9, 1.5e9, 8e8                   , 1.5e5,  7.5e7, 5                                    , "white", "-futbol-o", "red", "black");

    CreateApp("Hot Mheels"        , 3e9, 2e9, 2e9                     , 3e5,  5e8, 6                                    , "#52ff5a", "-automobile", "white", "black");
    CreateApp("E-mulle"           , 1.2e9, 1e9, 3e9                   , 2e5,  6.7e8, 6                                    , "yellow", "-paw", "#ff5252", "black");
    CreateApp("Moto PG"           , 4e9, 1.8e9, 5e9                   , 7e5,  1e9, 6                                    , "#527dff", "-motorcycle", "#ff5252", "black");

    CreateApp("The Mims 2"        , 5e9, 4e9, 12e9                    , 1e6,  5e9, 7                                    , "white", "-child", "#52ff5a", "black");
    CreateApp("NFS underwater 2"  , 4e9, 3e9, 15e9                    , 1.3e6,  7.5e9, 7                                   , "black", "-road", "white", "black");
    CreateApp("MTA Vice Andreas"  , 7e9, 4e9, 20e9                    , 2e6,  1e10, 7                                    , "orange", "-space-shuttle", "white", "black");


    //CreateApp(name              ,cpuNeed,ramNeed,memoryNeed     ,coinsPerRun,price,minOS         ,backcolor,fa,facolor,appNameColor);


    CreateApp("Twinder"           , 8e9, 4e9, 2.3e10                   , 5e6,  5e10, 8                                    , "white", "-heartbeat", "#ff52c5", "black");
    CreateApp("House Fighter X"  , 10e9, 4e9, 4e10                    , 7.5e6,  8e10, 8                                    , "#ff5252", "-hand-grab-o", "black", "white");
    CreateApp("Cteam"            , 5e9, 2e9, 1.8e10                     , 9e6,  1e11, 8                                    , "black", "-steam-square", "white", "black");

    CreateApp("Neincraft"        , 4e9, 5e9, 2e10                     , 1.5e7,  2e11, 9                                    , "#ff2424", "-cube", "white", "black");
    CreateApp("FatFlix"          , 1.5e9, 1e9, 1e10                   , 6.8e6,  4.5e11, 9                                    , "black", "-tv", "#ff1a1a", "white");
    CreateApp("Kill's Cread"     , 1.2e10, 6e9, 5e10                  , 2e7,  8e11, 9                                    , "black", "-spoon", "gray", "white");

    CreateApp("Glogle Crome"     , 4e9, 8e9, 1e10                     , 2e7, 5e12, 10                                    , "#ff5252", "-chrome", "#fcff52", "black");
    CreateApp("Flyrim"           , 1.5e10, 1.2e10, 7e10             , 5e7, 9e12, 10                                    , "black", "-male", "gray", "white");
    CreateApp("LOUL"             , 1.2e10, 8e9, 2e10                    , 4e7, 6e12, 10                                    , "#fb00ff", "-magic", "#00ffb3", "white");

    CreateApp("PES X"            , 1.3e10, 1e10, 1e11                  , 3.5e7, 1e13, 11                                    , "white", "-futbol-o", "red", "black");
    CreateApp("Left 4 Portal"    , 1.8e10, 1.4e10, 6e11                , 9e7, 3e13, 11                                    , "black", "-circle-o", "#00fffb", "white");

    CreateApp("Google VR"        , 2.1e10, 3e10, 9e11               , 1e8, 8e13, 12                                    , "white", "-binoculars", "#2bff00", "black");
    CreateApp("Pocket League"    , 2.5e10, 2.4e10, 1e12                 , 2.3e8, 3e14, 12                                    , "#ff4000", "-cab", "black", "white");
    CreateApp("TIFA 23"          , 3.4e10, 6e10, 1.2e12                , 4e8, 5e14, 12                                     , "#00ff62", "-futbol-o", "white", "black");


    CreateApp("The last of Was"  , 4e10, 5e10, 4e12                , 5e8, 2e15, 13                                    , "#08ff00", "-universal-access", "black", "preto");
    CreateApp("VR VVVVE 18"      , 3.6e10, 3.4e11, 2e12            , 7e8, 7e15, 13                                    , "black", "-android", "#26ff00", "white");
    CreateApp("ZoneKill"         , 5e10, 8e10, 5e12                , 1.2e9, 4e15, 13                                    , "black", "-user-secret", "#07f", "white");


    CreateApp("Skating 4"        , 5.5e10, 1e11, 1e13              , 3e9, 8e15, 14                                   , "#7f00ff", "-shopping-cart", "white", "black");
    CreateApp("Bad Resident VII" , 6.7e10, 9e10, 4e13              , 4.8e9, 2e16, 14                                   , "white", "-exclamation-triangle", "#00ff6a", "black");

    CreateApp("Força Horizone"   , 7e10, 2.4e11, 6e12              , 8e9, 3.4e15, 15              , "white", "-truck", "#fe0", "black");
    CreateApp("Streeem"          , 7.9e10, 1.9e11, 4e14            , 1.2e10, 3e17, 15             , "black", "-tv", "#80f", "white");
    CreateApp("UsTube"           , 8e10, 3.2e11, 7e14            , 3e10, 7e17, 15             , "#ff5252", "-group", "black", "black");

    CreateApp("Auto Programmer"  , 1e11, 2.1e11, 6e13           , 5e10, 5e18, 16        , "#0051ff", "-code", "white", "black");
    CreateApp("Mirror's Corners" , 1.6e11, 2.3e11, 9e14           , 6e10, 3e18, 16        , "white", "-female", "red", "white");

    CreateApp("BattleCod 1 Warfare", 1.8e11, 2.9e11, 2e15             , 8e10, 2e19, 17              , "#f60", "-crosshairs", "black", "white");
    CreateApp("Watch Cats"         , 1.5e11, 3.2e11, 6e15           , 9e10, 5e19, 17        , "#54009e", "-eye", "white", "black");
    CreateApp("Overlook"           , 1.9e11, 4e11, 5e15           , 1.2e11, 8e19, 17        , "white", "-street-view", "#80f", "black");

    CreateApp("MTA XI"             , 2.1e11, 4.6e11, 6.7e15           , 1.5e11, 1.3e20, 18        , "#00ffa6", "-taxi", "white", "black");
    CreateApp("Pc Clicker"         , 2.2e11, 5.7e11, 8e15           , 4e11, 4e20, 18        , "#333", "-mouse-pointer", "white", "black");

    CreateApp("Matrix"             , 2.4e11, 7e11, 6e16           , 1e12, 1e21, 19        , "black", "-user-secret", "#00c20d", "white");
    // novas apps tem de ser inseridas aqui por baixo*/
    //CreateApp("Terminal"          , 2.5e5, 2.2e5, 1e5                 , 5,  1e1, 1                                  , "black", "-terminal", "white", "white");
    //CreateApp(".txt Editor"        , 6.4e5, 9.4e5, 8e5                , 25,  1e2, 1                                 , "#52c2ff", "-sticky-note", "white", "black" );
    CreateApp("loseRar"             , 2.1e6, 1.9e6, 1.5e6                , 55,  5e2, 1                                 , "white", "-book", "#f600ff", "black");

    //CreateApp("Pung"              , 7.2e6, 4.4e6, 3.1e6               , 1e2,  2e3, 2                                 , "white", "-circle", "black", "black");
    //CreateApp("HacMan"            , 1.3e7, 9.6e6, 5.3e6               , 2.5e2,  4.5e3, 2                                    , "yellow", "-hand-lizard-o", "black", "black");
    CreateApp("Landy Crush"            , 1.3e7, 9.6e6, 5.3e6               , 2.5e2,  4.5e3, 2                                    , "ff0026", "-puzzle-piece", "black", "white");

    //CreateApp("Painte"            , 2.2e7, 4.3e7, 1.6e7               , 7.5e2,  1.5e4, 3                                   , "#69ff52", "-paint-brush", "white", "black");
    //CreateApp("Qetris"          , 5.1e7, 2.6e7, 2.8e7                 , 1.4e3,  4.3e4, 3                                    , "black", "-cubes", "#9d00ff", "white");
    CreateApp("Mcoffee AntiVirus"     , 7.6e7, 3.3e7, 3.4e7              , 2e3,  6e4, 3                                    , "white", "-maxcdn", "#c7001e", "black");

    //CreateApp("Internet Errorer" , 5.4e7, 6.3e7, 4.5e7                , 500,  9e4, 4                                   , "#52a8ff", "-internet-explorer", "white", "black");
    //CreateApp("Wurd"             , 1.7e8, 2.5e8, 5.4e7                , 2.5e3,  3.1e5, 4                                    , "#528eff", "-file-word-o", "white", "black");
    //CreateApp("Exel"             , 6.2e8, 3.2e8, 9.1e7                , 4e3,  4.5e5, 4                                    , "#6fff52", "-file-excel-o", "white", "black");

    //CreateApp("PitTorret"         , 2.5e8, 4e8, 2e8                   , 5e4,  1e7, 5                                    , "white", "-download", "#24ff27", "black");
    //CreateApp("Limon Tools"       , 6e8, 3e8, 1.6e8                   , 7.5e4,  1.5e7, 5                                    , "#52baff", "-lemon-o", "white", "black");
    //CreateApp("CS 1.65"           , 1.2e9, 1e9, 4e8                   , 1.2e5,  3e7, 5                                    , "black", "-hand-o-right", "white", "white");
    //CreateApp("TIFA 98"           , 2e9, 1.5e9, 8e8                   , 1.5e5,  7.5e7, 5                                    , "white", "-futbol-o", "red", "black");

    //CreateApp("Hot Mheels"        , 3e9, 2e9, 2e9                     , 3e5,  5e8, 6                                    , "#52ff5a", "-automobile", "white", "black");
    //CreateApp("E-mulle"           , 1.2e9, 1e9, 3e9                   , 2e5,  6.7e8, 6                                    , "yellow", "-paw", "#ff5252", "black");
    //CreateApp("Moto PG"           , 4e9, 1.8e9, 5e9                   , 7e5,  1e9, 6                                    , "#527dff", "-motorcycle", "#ff5252", "black");

    //CreateApp("The Mims 2"        , 5e9, 4e9, 12e9                    , 1e6,  5e9, 7                                    , "white", "-child", "#52ff5a", "black");
    //CreateApp("NFS underwater 2"  , 4e9, 3e9, 15e9                    , 1.3e6,  7.5e9, 7                                   , "black", "-road", "white", "black");
    //CreateApp("MTA Vice Andreas"  , 7e9, 4e9, 20e9                    , 2e6,  1e10, 7                                    , "orange", "-space-shuttle", "white", "black");


    //CreateApp(name              ,cpuNeed,ramNeed,memoryNeed     ,coinsPerRun,price,minOS         ,backcolor,fa,facolor,appNameColor);


    //CreateApp("Twinder"           , 8e9, 4e9, 2.3e10                   , 5e6,  5e10, 8                                    , "white", "-heartbeat", "#ff52c5", "black");
    //CreateApp("House Fighter X"  , 10e9, 4e9, 4e10                    , 7.5e6,  8e10, 8                                    , "#ff5252", "-hand-grab-o", "black", "white");
    //CreateApp("Cteam"            , 5e9, 2e9, 1.8e10                     , 9e6,  1e11, 8                                    , "black", "-steam-square", "white", "black");

    //CreateApp("Neincraft"        , 4e9, 5e9, 2e10                     , 1.5e7,  2e11, 9                                    , "#ff2424", "-cube", "white", "black");
    //CreateApp("FatFlix"          , 1.5e9, 1e9, 1e10                   , 6.8e6,  4.5e11, 9                                    , "black", "-tv", "#ff1a1a", "white");
    //CreateApp("Kill's Cread"     , 1.2e10, 6e9, 5e10                  , 2e7,  8e11, 9                                    , "black", "-spoon", "gray", "white");

    //CreateApp("Glogle Crome"     , 4e9, 8e9, 1e10                     , 2e7, 5e12, 10                                    , "#ff5252", "-chrome", "#fcff52", "black");
    //CreateApp("Flyrim"           , 1.5e10, 1.2e10, 7e10             , 5e7, 9e12, 10                                    , "black", "-male", "gray", "white");
    //CreateApp("LOUL"             , 1.2e10, 8e9, 2e10                    , 4e7, 6e12, 10                                    , "#fb00ff", "-magic", "#00ffb3", "white");

    //CreateApp("PES X"            , 1.3e10, 1e10, 1e11                  , 3.5e7, 1e13, 11                                    , "white", "-futbol-o", "red", "black");
    //CreateApp("Left 4 Portal"    , 1.8e10, 1.4e10, 6e11                , 9e7, 3e13, 11                                    , "black", "-circle-o", "#00fffb", "white");
    CreateApp("InstaRAM"           , 1.7e10, 1.2e10, 6e11                , 9e7, 5.4e13, 11                                    , "white", "-camera-retro", "#8400ff", "black");

    //CreateApp("Google VR"        , 2.1e10, 3e10, 9e11               , 1e8, 8e13, 12                                    , "white", "-binoculars", "#2bff00", "black");
    //CreateApp("Pocket League"    , 2.5e10, 2.4e10, 1e12                 , 2.3e8, 3e14, 12                                    , "#ff4000", "-cab", "black", "white");
    //CreateApp("TIFA 23"          , 3.4e10, 6e10, 1.2e12                , 4e8, 5e14, 12                                     , "#00ff62", "-futbol-o", "white", "black");


    //CreateApp("The last of Was"  , 4e10, 5e10, 4e12                , 5e8, 2e15, 13                                    , "#08ff00", "-universal-access", "black", "preto");
    //CreateApp("VR VVVVE 18"      , 3.6e10, 3.4e11, 2e12            , 7e8, 7e15, 13                                    , "black", "-android", "#26ff00", "white");
    //CreateApp("ZoneKill"         , 5e10, 8e10, 5e12                , 1.2e9, 4e15, 13                                    , "black", "-user-secret", "#07f", "white");


    //CreateApp("Skating 4"        , 5.5e10, 1e11, 1e13              , 3e9, 8e15, 14                                   , "#7f00ff", "-shopping-cart", "white", "black");
    //CreateApp("Bad Resident VII" , 6.7e10, 9e10, 4e13              , 4.8e9, 2e16, 14                                   , "white", "-exclamation-triangle", "#00ff6a", "black");

    //CreateApp("Força Horizone"   , 7e10, 2.4e11, 6e12              , 8e9, 3.4e15, 15              , "white", "-truck", "#fe0", "black");
    //CreateApp("Streeem"          , 7.9e10, 1.9e11, 4e14            , 1.2e10, 3e17, 15             , "black", "-tv", "#80f", "white");
    //CreateApp("UsTube"           , 8e10, 3.2e11, 7e14            , 3e10, 7e17, 15             , "#ff5252", "-group", "black", "black");

    //CreateApp("Auto Programmer"  , 1e11, 2.1e11, 6e13           , 5e10, 5e18, 16        , "#0051ff", "-code", "white", "black");
    //CreateApp("Mirror's Corners" , 1.6e11, 2.3e11, 9e14           , 6e10, 3e18, 16        , "white", "-female", "red", "white");

    //CreateApp("BattleCod 1 Warfare", 1.8e11, 2.9e11, 2e15             , 8e10, 2e19, 17              , "#f60", "-crosshairs", "black", "white");
    //CreateApp("Watch Cats"         , 1.5e11, 3.2e11, 6e15           , 9e10, 5e19, 17        , "#54009e", "-eye", "white", "black");
    //CreateApp("Overlook"           , 1.9e11, 4e11, 5e15           , 1.2e11, 8e19, 17        , "white", "-street-view", "#80f", "black");

    //CreateApp("MTA XI"             , 2.1e11, 4.6e11, 6.7e15           , 1.5e11, 1.3e20, 18        , "#00ffa6", "-taxi", "white", "black");
    //CreateApp("Pc Clicker"         , 2.2e11, 5.7e11, 8e15           , 4e11, 4e20, 18        , "#333", "-mouse-pointer", "white", "black");

    //CreateApp("Matrix"             , 2.4e11, 7e11, 6e16           , 1e12, 1e21, 19        , "black", "-user-secret", "#00c20d", "white");
}
var app = {
    name: [], //nome das apps
    color: [], //nome das apps
    appNameColor: [], //nome das apps
    fa: [], //nome das apps
    facolor: [], //nome das apps
    needs: [ /*[cpu,ram,capacity],*/ ],
    installed: [], //indica se esta instalada esta app
    coinsPerRun: [],
    running: [], //indica se esta a rodar
    runPerc: [],
    price: [], //app price
    minOS: [], //nivel de OS minimo para instalar esta app
    donotrun: [], //usado para indicar que a app nao deve rodar
    // devido a um erro no html
    ativeInfo: [],
    helperLvl: [],
    returnTotalInstalled(){
      var ret = 0;
      for (var i = 0; i < app.name.length; i++) {
        if(app.installed[i])
        ret++;
      }
      return ret;
    },
    uninstall: function(i) {
        this.installed[i] = false;
        storageUsed -= app.returnStorageNeed(i);
        atualizaHardPerc();
        document.getElementById("app" + (i + 1)).remove();
    },
    //3 funcs seguintes returnam app.needs com efeito da versao
    returnCpuNeed: function(i) {
            return app.needs[i][0];
    },
    returnRamNeed: function(i) {
            return app.needs[i][1];
    },
    returnStorageNeed: function(i) {
            return app.needs[i][2];
    },
    returnCoinsPR: function(i) {
        return app.coinsPerRun[i]+(app.coinsPerRun[i]*0.001*investors);
    },
    updateAllInfoApp: function() {
        for (var i = 0; i < app.name.length; i++) {
            if (app.installed[i]) {
                app.updateInfoApp(i);
            }
        }
    },
    updateInfoApp: function(i) { //atualiza informacoes da app
        var div = document.getElementById("appinfo" + (i + 1));
        var perCpu = (app.returnCpuNeed(i) / (cpu.speed * cpu.cores)) * 100;
        var perRam = (app.returnRamNeed(i) / (ram.capacity * ram.qtd)) * 100;
        div.getElementsByTagName("li")[1].innerHTML = "<img src='png/cpu.png' height='12'> " + toBytes(app.returnCpuNeed(i), "speed") + "(" + perCpu.toFixed(0) + "%)";
        div.getElementsByTagName("li")[2].innerHTML = "<img src='png/ram.png' height='12'> " + toBytes(app.returnRamNeed(i), "memory") + "(" + perRam.toFixed(0) + "%)";
        div.getElementsByTagName("li")[3].innerHTML = "<img src='png/hard-drive.png' height='12'> " + toBytes(app.returnStorageNeed(i), "memory");
        div.getElementsByTagName("li")[4].innerHTML =  toMoney(app.returnCoinsPR(i)) + " " + retLangCorrect("per run","por exec");
        document.getElementById("app" + (i + 1)).getElementsByTagName("h4")[0].innerHTML = app.name[i];

        var top = (parseFloat($("#app" + (i + 1)).css("height")) - parseFloat($("#appname"+i).css("height")))/2;
        document.getElementById("app" + (i + 1)).getElementsByTagName("h4")[0].style.margin = top+"px 0 0 0";
        document.getElementById("app" + (i + 1)).getElementsByTagName("h4")[0].style.color = app.appNameColor[i];
        var shadow = "black";
        if (app.appNameColor[i] == "black")
            shadow = "white";
        document.getElementById("app" + (i + 1)).getElementsByTagName("h4")[0].style.textShadow = "1px 1px " + shadow;

    },
    funcHelp: function(a){
      return 10*Math.pow(a,2);
    },
    runall: function() {
        var cpuSpeedFree = (cpu.speed * cpu.cores) - cpuSpeedUsed;
        var ramCapacityFree = (ram.capacity * ram.qtd) - ramCapacityUsed;
        for (var i = 0; i < app.name.length; i++) {
            if (app.installed[i] ) {
              var cpuEf = cpuSpeedFree / app.returnCpuNeed(i);
              var ramEf = ramCapacityFree / app.returnRamNeed(i);
              var test = cpuEf > 0 && ramEf > 0;
              if (test) {
                var limitante = Math.pow(Math.min(ramEf, cpuEf),0.8);
                var r = 1;
                var x = app.helperLvl[i];
                while (app.funcHelp(r)<=x) {
                  r++
                }
                r--;
                var nxt = r+1;


                  var div = document.getElementById("helperinfo" + (i + 1));

                  if(r<=50){
                  div.getElementsByTagName("li")[0].innerHTML = "Idle run: " +r+"%";
                  div.getElementsByTagName("li")[1].innerHTML = retLangCorrect(
                  	toBytes(app.funcHelp(nxt)-app.helperLvl[i]) +" runs to next idle level", 
                  	toBytes(app.funcHelp(nxt)-app.helperLvl[i]) +" ciclos para o prox. nivel de idle",
                  	toBytes(app.funcHelp(nxt)-app.helperLvl[i]) +" 运行来升到下一时序等级"
                  	);
                  var widthHelper = ((x-app.funcHelp(r))/(app.funcHelp(nxt)-app.funcHelp(r)))*100;
                  document.getElementById('helper'+(i+1)).style.width = widthHelper + "%";
                }else{
                  r=50;
                  div.getElementsByTagName("li")[0].innerHTML = "Idle: " +r+"%";
                  div.getElementsByTagName("li")[1].innerHTML = "Max idle level achieved for this app";
                  document.getElementById('helper'+(i+1)).style.width = "100%";
                }
                  add = (0.01 * limitante);

              app.runPerc[i] += add*r*0.01;

              if(app.run[i]){

                    app.runPerc[i] += add;

                    if (app.runPerc[i] >= 1) {
                        cpuSpeedUsed -= app.returnCpuNeed(i);
                        ramCapacityUsed -= app.returnRamNeed(i);
                        bitcoins += app.returnCoinsPR(i);
                        totalbitcoins += app.returnCoinsPR(i);
                        app.helperLvl[i]++;
                        soundVerifier("finished");
                        finishAnim(i+1);
                        app.run[i] = false;
                        app.runPerc[i] = 0;
                        if(i==0){
                        if(app.helperLvl[0]== 1)
                          nextTutStep(3);
                        if( app.helperLvl[0]==2)
                          nextTutStep(4);
                        }

                        atualizaHardPerc();
                    }
                }
                else if (app.runPerc[i] >= 1) {
                        bitcoins += app.returnCoinsPR(i);
                        totalbitcoins += app.returnCoinsPR(i);
                        app.helperLvl[i]++;
                        app.runPerc[i] = 0;
                                    }
                  if(add*r*0.01>=1 )
                                        document.getElementById('running' + (i + 1)).style.width = 100 + "%";
                                        else
                                        document.getElementById('running' + (i + 1)).style.width = (app.runPerc[i] * 100) + "%";

              }
            }
        }

    },
    run: function(i) {
        var cpuSpeedFree = cpu.speed*cpu.cores - cpuSpeedUsed;
        var ramCapacityFree = ram.capacity*ram.qtd - ramCapacityUsed;
        if (!app.run[i] && !app.donotrun[i] && (cpuSpeedFree / app.returnCpuNeed(i)) > 1 && (ramCapacityFree / app.returnRamNeed(i)) > 1) {
            app.run[i] = true;
              clickAnim();
            cpuSpeedUsed += app.returnCpuNeed(i);
            ramCapacityUsed += app.returnRamNeed(i);
            atualizaHardPerc();
        } else if (app.donotrun[i]) { // necessario para quando se clicar no update nao rodar a app
            app.donotrun[i] = false;
        } else if (app.run[i]) { //impulso dado pelo jogador
            var cpuEf = cpuSpeedFree/app.returnCpuNeed(i);
            var ramEf = ramCapacityFree/app.returnRamNeed(i);
            var test = cpuEf >= 0 && ramEf >= 0;
              if(test){
                var limitante = Math.min(cpuEf,ramEf);
                app.runPerc[i] += limitante*0.08;
                  clickAnim();
              }
        } else if(((cpuSpeedFree / app.returnCpuNeed(i)) > 1) && ((ramCapacityFree / app.returnRamNeed(i)) <= 1) ){
            info(retLangCorrect("You can't run this app","Não podes executar esta app"), retLangCorrect("Upgrade RAM","Melhora a RAM","升级内存"));
        }else if(((cpuSpeedFree / app.returnCpuNeed(i)) <= 1) && ((ramCapacityFree / app.returnRamNeed(i)) <= 1) ){
            info(retLangCorrect("You can't run this app","Não podes executar esta app"), retLangCorrect("Upgrade RAM and CPU","Melhora a RAM e o CPU","升级内存和处理器"));
        }else if(((cpuSpeedFree / app.returnCpuNeed(i)) <= 1) && ((ramCapacityFree / app.returnRamNeed(i)) > 1) ){
            info(retLangCorrect("You can't run this app","Não podes executar esta app"), retLangCorrect("Upgrade CPU","Melhora o CPU","升级处理器"));
        }
    },
    correctRun: function(i) { // necessario para quando se clicar em alguns icons nao rodar a app
        app.donotrun[i] = true;
    },
    ativateInfo: function(i) {
        if (!app.ativeInfo[i])
            app.ativeInfo[i] = true;
        else
            app.ativeInfo[i] = false;
    },
    testInstall: function(i) {
        var test = storageUsed + app.returnStorageNeed(i);
        if (test <= (hardDrive.capacity * hardDrive.qtd) && bitcoins >= app.price[i]) {
            bitcoins -= app.price[i];
            document.getElementById("app" + (i + 1)).remove();
            app.createApp(i);
            fixInstall();
        } else if (test > (hardDrive.capacity * hardDrive.qtd)) {
            info(retLangCorrect("Your computer need more memory to install this app","Precisas de mais memoria para instalar esta app","你的电脑需要更多的空间来安装这个应用"), retLangCorrect("Upgrade Hard Drive","Melhora o Hard Drive","升级硬盘"));
        } else if (bitcoins < app.price[i]) {
            info(retLangCorrect("You need more","Precisas de mais","你需要更多的钱") +" $");
        }
    },
    createApp: function(i) {

        var appdiv = document.createElement("div");
        appdiv.className = "program";
        appdiv.id = "app" + (i + 1);
        document.getElementById("programs").appendChild(appdiv);

        var icon = document.createElement("i");
        icon.className = "iconapp fa fa" + app.fa[i];
        icon.style.color = app.facolor[i];
        icon.id = app.fa[i];
        icon.style.fontSize = "40px";
        appdiv.appendChild(icon);
        var top = (parseFloat($("#app"+(i+1)).css("height")) - parseFloat($("#" +app.fa[i] ).css("height")))/2;
        var left = (parseFloat($("#app"+(i+1)).css("width")) - parseFloat($("#" +app.fa[i] ).css("width")))/2;
        icon.style.top = top +"px";
        icon.style.left = left + "px";
        appdiv.style.background = app.color[i];
        app.installed[i] = true;
        storageUsed += app.returnStorageNeed(i);
        atualizaHardPerc();



        appdiv.setAttribute("onclick", "app.run(" + i + ")");

        var rundiv = document.createElement('div');
        rundiv.className = "running";
        rundiv.id = "running" + (i + 1);
        rundiv.style.background = app.facolor[i];
        document.getElementById("app" + (i + 1)).appendChild(rundiv);


        var helpdiv = document.createElement('div');
        helpdiv.className = "helper";
        helpdiv.id = "helper" + (i + 1);
        document.getElementById("app" + (i + 1)).appendChild(helpdiv);


        var helpinfodiv = document.createElement('div');
        helpinfodiv.className = "programinfo";
        helpinfodiv.id = "helperinfo" + (i + 1);
        document.getElementById("app" + (i + 1)).appendChild(helpinfodiv);

        var tabelhelp = document.createElement("ul");
        helpinfodiv.appendChild(tabelhelp);
        var li1 = document.createElement("li");
        var li2 = document.createElement("li");
        var li3 = document.createElement("li");
        var li4 = document.createElement("li");
        var li5 = document.createElement("li");
        tabelhelp.appendChild(li1);
        tabelhelp.appendChild(li2);
        tabelhelp.appendChild(li3);
        tabelhelp.appendChild(li4);
        tabelhelp.appendChild(li5);



        var appName = document.createElement("h4");
        appName.id="appname"+i;
        appdiv.appendChild(appName);
        var top = (parseFloat($("#app" + (i + 1)).css("height")) - parseFloat($("#appname"+i).css("height")))/2;
        appName.style.margin = top+"px 0 0 0";

        var info = document.createElement("div");
        info.className = "programinfo";
        info.id = "appinfo" + (i + 1);
        appdiv.appendChild(info);


        var tabel = document.createElement("ul");
        info.appendChild(tabel);
        var li1 = document.createElement("li");
        var li2 = document.createElement("li");
        var li3 = document.createElement("li");
        var li4 = document.createElement("li");
        var li5 = document.createElement("li");
        tabel.appendChild(li1);
        tabel.appendChild(li2);
        tabel.appendChild(li3);
        tabel.appendChild(li4);
        tabel.appendChild(li5);
        app.updateInfoApp(i);

        /*helper icon*/
        var iconhelp = document.createElement("i");
        iconhelp.className = "fa fa-clock-o top";
        iconhelp.style.right = "19px"
        appdiv.appendChild(iconhelp);
        iconhelp.setAttribute("onclick", "app.correctRun(" + i + ")")
        iconhelp.setAttribute("onmousemove", "showHelp(" + (i + 1) + ",true)");
        iconhelp.setAttribute("onmouseout", "showHelp(" + (i + 1) + ")");



        /*info app*/
        var iconinfo = document.createElement("i");
        iconinfo.className = "fa fa-info-circle top";
        iconinfo.style.right = "1px"
        appdiv.appendChild(iconinfo);
        iconinfo.setAttribute("onclick", "app.correctRun(" + i + "),app.ativateInfo(" + i + ")")


                if(document.getElementById('iconinfobox') == null){
        var iconinfobox = document.createElement("div");
        iconinfobox.className = "infoboxnear";
        iconinfobox.id = "iconinfobox";
        iconinfobox.innerHTML = "App info";
        document.getElementsByClassName('content')[0].appendChild(iconinfobox);
      }
        iconinfo.setAttribute("onmousemove", "infobox(" + document.getElementById('iconinfobox').id + ",-35,'left'),showinfo(" + (i + 1) + ",true)");
        iconinfo.setAttribute("onmouseout", "document.getElementById('" + document.getElementById('iconinfobox').id + "').style.display='none',showinfo(" + (i + 1) + ")");



        /*uninstall*/
        var iconunins = document.createElement("i");
        iconunins.className = "fa fa-remove top";
        iconunins.id = "unins"+i;
        iconunins.style.right = "37px";
        iconunins.setAttribute("onclick", "app.uninstall(" + i + ")");
        iconunins.setAttribute("onclick", "confirmation('"+retLangCorrect("Do you really want to uninstall","Tem a certeza que deseja desinstalar","你真的想要卸载") + " " +app.name[i] + "?','app.uninstall(" + i + ")' ),app.correctRun(" + i + ");");
        appdiv.appendChild(iconunins);

                        if(document.getElementById('infounins') == null){
        var infounins = document.createElement("div");
        infounins.className = "infoboxnear";
        infounins.id = "infounins" ;
        infounins.innerHTML = retLangCorrect("Uninstall","Desinstalar","卸载");
        document.getElementsByClassName('content')[0].appendChild(infounins);
      }
        iconunins.setAttribute("onmousemove", "infobox(" + document.getElementById('infounins').id + ",-35,'left')");
        iconunins.setAttribute("onmouseout", "document.getElementById('" + document.getElementById('infounins').id + "').style.display='none'");


        var animback = document.createElement("div");
        animback.className="animback";
        animback.id="animback"+i;
        document.getElementById("app" + (i + 1)).appendChild(animback);


        if (app.color[i] == "black") {
            iconinfo.style.color = "white";
            iconunins.style.color = "white";
            iconhelp.style.color = "white";
        }
    }

}

function infobox(id, addtop,side) {
    document.getElementById(id.id).style.display = "block";
    document.getElementById(id.id).style.top = (mousey + addtop) + "px";
    if(side=="left"){
    document.getElementById(id.id).style.right = (parseFloat($("#content").css("width"))-mousex-10) + "px";
    document.getElementById(id.id).style.left = "none";
    }
    else{
      document.getElementById(id.id).style.left = (mousex+10) + "px";
      document.getElementById(id.id).style.right = "none";
    }
}

function createApps() {
  for(var op = 1;op<os.name.length;op++){
    for (var i = 0; i < app.name.length; i++) {
        if (app.installed[i] && app.minOS[i]==op) {
            app.createApp(i);
        }
    }
  }
    createInstall();

}

function createInstall() {
    var appdiv = document.createElement("div");
    appdiv.className = "program";
    appdiv.id = "installdiv";
    document.getElementById("programs").appendChild(appdiv);
    var appName = document.createElement("h4");
    appName.innerHTML = retLangCorrect("Install apps","Instalar apps","应用市场");
    appName.id = "install";

    appdiv.setAttribute("onclick", "installapps(),nextTutStep(1)");
    appdiv.appendChild(appName);
    var top = (parseFloat($("#installdiv").css("height")) - parseFloat($("#install").css("height")))/2;
    appName.style.margin = top+"px 0 0 0";
}

function fixInstall() {
    document.getElementById("installdiv").remove();
    createInstall();
}

function installapps() {
    var newappsdiv = document.createElement("div");
    newappsdiv.id = "newappsdiv";
    document.getElementsByClassName('content')[0].appendChild(newappsdiv);
    var newappsdiv2 = document.createElement("div");
    newappsdiv2.id = "newappsdiv2";
    var title = document.createElement("h2");
    title.innerHTML = retLangCorrect("Install new app","Instala uma app nova","安装新应用");
    newappsdiv.appendChild(title);
    var close = document.createElement("i");
    close.className = "fa fa-times-circle close";
    close.setAttribute("onclick", "document.getElementById('newappsdiv').remove();")
    newappsdiv.appendChild(close);
    newappsdiv.appendChild(newappsdiv2);


  for(var op = 1;op<=os.level;op++){
    for (var i = 0; i < app.name.length; i++) {
        if (!app.installed[i] && app.minOS[i] == op) {
            //

            var appdiv = document.createElement("div");
            appdiv.className = "program";
            appdiv.id = "app" + (i + 1);
            if(i==0)
            appdiv.setAttribute("onclick", "app.testInstall(" + i + "),nextTutStep(2)");
            else
            appdiv.setAttribute("onclick", "app.testInstall(" + i + ")");
            document.getElementById("newappsdiv2").appendChild(appdiv);


            var appName = document.createElement("h4");
            appName.id="appname"+i;
            appName.innerHTML = app.name[i] + "<br><span>" + toMoney(app.price[i]) + " / " + toBytes(app.returnStorageNeed(i), "memory") + " </span>";
            appdiv.appendChild(appName);
            var top = (parseFloat($("#app" + (i + 1)).css("height")) - parseFloat($("#appname"+i).css("height")))/2;
            appName.style.margin = top+"px 0 0 0";


            var info = document.createElement("div");
            info.className = "programinfo";
            info.id = "appinfo" + (i + 1);
            appdiv.appendChild(info);

            var tabel = document.createElement("ul");
            info.appendChild(tabel);
            var li1 = document.createElement("li");
            var li2 = document.createElement("li");
            var li3 = document.createElement("li");
            var li4 = document.createElement("li");
            var li5 = document.createElement("li");
            li2.innerHTML = "<img src='png/cpu.png' height='12'> " + toBytes(app.returnCpuNeed(i), "speed");
            li3.innerHTML = "<img src='png/ram.png' height='12'> " + toBytes(app.returnRamNeed(i), "memory");
            li4.innerHTML = "<img src='png/hard-drive.png' height='12'> " + toBytes(app.returnStorageNeed(i), "memory");
            li5.innerHTML = toMoney(app.returnCoinsPR(i)) + " "+retLangCorrect("per run","por exec","每次运行");
            tabel.appendChild(li1);
            tabel.appendChild(li2);
            tabel.appendChild(li3);
            tabel.appendChild(li4);
            tabel.appendChild(li5);


            var iconinfo = document.createElement("i");
            iconinfo.className = "fa fa-info-circle top";
            iconinfo.style.right = "1px"
            appdiv.appendChild(iconinfo);

            var iconinfobox = document.createElement("div");
            iconinfobox.className = "infoboxnear";
            iconinfobox.id = "iconinfobox2" + i;
            iconinfobox.innerHTML = "App info";
            document.getElementsByClassName('content')[0].appendChild(iconinfobox);
            iconinfo.setAttribute("onmousemove", "showinfo(" + (i + 1) + ",true)");
            iconinfo.setAttribute("onmouseout", "showinfo(" + (i + 1) + ")");
            //
        }
    }
  }
        var uposdiv = document.createElement("div");
        uposdiv.className = "program";
        uposdiv.id = "uposdiv";
        document.getElementById("newappsdiv2").appendChild(uposdiv);
        var appName = document.createElement("h3");
        appName.innerHTML = retLangCorrect("Upgrade OS to unlock more apps","Melhora o SO para desbloqueares mais apps","升级系统来解锁更多应用");
        appName.id = "uposdivname";
        uposdiv.appendChild(appName);
        var top = (parseFloat($("#uposdiv").css("height")) - parseFloat($("#uposdivname").css("height")))/2;
        appName.style.margin = top+"px 0 0 0";
        uposdiv.style.cursor = "default"
}

function finishAnim(a){
    document.getElementById("app"+a).className = "program on";
    setTimeout(function(){
        document.getElementById("app"+a).className = "program";
    },200);
  }
