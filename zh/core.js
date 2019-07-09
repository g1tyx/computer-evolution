//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Capacity': '容量',
    'Computer Evolution': '计算机进化',
    'Cores': '核心',
    'Play': '开始',
    'English': '中文',
    'Each investor increases app revenue by': '每个投资者增加应用收入',
    'Export/Import save': '导出/导入存档',
    'Format': '格式',
    'Hard Drive': '硬盘',
    'Import': '导入',
    'Import/Export': '导入/导出',
    'Click on the box above to see the apps you can install': '单击上面的框以查看可以安装的应用程序',
    'Install apps': '安装应用',
    'Investors': '投资者',
    'Investors: 0(': '投资者: 0(',
    'Supported OS': '支持操作系统',
    'Sound': '声音',
    'Speed': '速度',
    'Social Networks': '社交网络',
    'RAM': '内存',
    'RAM is where the data that is needed to run an app is stored.': '内存是需要运行一个应用程序的数据的存储位置。',
    'Português': '葡萄牙语',
    'Per second: 0.20$': '每秒: 0.20$',
    'Motherboard': '主板',
    'Lx Games': 'Lx游戏',
    'Upgrade': '升级',
    'UPGRADE': '升级',
    'Apps': '应用',
    'Click here to go to skip tutorial': '点击这里跳过教程',
    'Balance': '余额',
    'Next format you will earn 0 investors to your computer': '下一种格式，您将获得0投资者到您的计算机',
    'Quantity': '数量',
    'Settings': '设置',
    'The CPU is the brain of the computer.': 'CPU是计算机的大脑。',
    'The hard drive is where all data (billions of 1\'s and 0\'s) are stored.': '硬盘驱动器是存储所有数据（由数字1和0组成）的地方。',
    'The Motherboard is the control center,': '主板是控制中心，',
    'To export, click the text above and copy (ctrl-c). To import, click the text, paste (ctrl-v) your exported data and click on import.': '要导出，请单击上面的文本并复制（ctrl-c）。 要导入，请单击文本，粘贴（ctrl-v）导出的数据，然后单击导入。',
    'where all the components of the computer are connected.': '计算机的所有组件都连接在一起。',
    'Games in development': '游戏已停止开发',
    'It does the math operations and logical problems.': '它的数学操作和逻辑问题。',
    'Lx Games CEO': 'Lx游戏CEO',
    'Are you sure you want to format your computer?': '你确定你想要格式化你的电脑吗?',
    'Only the software will restart.The components of the computer will keep like before.': '只有软件会重新启动。计算机的组件将保持不变。',
    'No': '取消',
    'Yes': '确定',
    '.txt Editor': '.txt文本编辑器',
    'App info': '应用信息',
    'Click on the box above to install that app': '单击上面的框以安装该应用程序',
    'Install new app': '安装新应用',
    'Terminal': '终端',
    'Upgrade OS to unlock more apps': '升级操作系统解锁更多的应用程序',
    'You need to upgrade Motherboard to install this Operating System': '您需要升级主板才能安装此操作系统',
    'Tip: Upgrade Hard Drive': '提示：升级硬盘',
    'Uninstall': '卸载',
    'Your computer need more memory to install this app': '您的计算机需要更多内存来安装此应用程序',
    'Idle run': '放置运行',
    'loseRar': '压缩包',
    'Landy Crush': '兰迪粉碎',
    'Limon Tools': '利蒙工具',
    'Max idle level achieved for this app': '此应用程序达到的最大放置级别',
    'Mcoffee AntiVirus': '麦考菲杀毒软件',
    'Pung': '钱包',
    'Wurd': '单词',
    'Idle': '空闲',
    'Internet Errorer': '网络错误',
    'Painte': '画图',
    'Exel': '表格',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',

    //原样
    'Qetris': 'Qetris',
    'Sixtem': 'Sixtem',
    'Windoors XD': 'Windoors XD',
    'PitTorret': 'PitTorret',
    'CPU': 'CPU',
    'TIFA': 'TIFA',
    'CS': 'CS',
    'lx-games.com': 'lx-games.com',
    'HacMan': 'HacMan',
    'Hot Mheels': 'Hot Mheels',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',

}

//需处理的前缀
var cnPrefix = {
    "(-": "(-",
    "(+": "(+",
    "(": "(",
    "-": "-",
    "+": "+",
    " ": " ",
    ": ": "： ",
}

//需处理的后缀
var cnPostfix = {
    ":": "：",
    "：": "：",
    ": ": "： ",
    "： ": "： ",
    " ": "",
    "/s)": "/s)",
    "/s": "/s",
    ")": ")",
    "%": "%",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^x?\d+(\.\d+)?[A-Za-z%]{0,2}(\s.C)?\s*$/, //12.34K,23.4 °C
    /^x?\d+(\.\d+)?(e[+\-]?\d+)?\s*$/, //12.34e+4
    /^\s*$/, //纯空格
    /^\d+(\.\d+)?[A-Za-z]{0,2}.?\(?([+\-]?(\d+(\.\d+)?[A-Za-z]{0,2})?)?$/, //12.34M (+34.34K
    /^(\d+(\.\d+)?[A-Za-z]{0,2}\/s)?.?\(?([+\-]?\d+(\.\d+)?[A-Za-z]{0,2})?\/s\stot$/, //2.74M/s (112.4K/s tot
    /^\d+(\.\d+)?(e[+\-]?\d+)?.?\(?([+\-]?(\d+(\.\d+)?(e[+\-]?\d+)?)?)?$/, //2.177e+6 (+4.01+4
    /^(\d+(\.\d+)?(e[+\-]?\d+)?\/s)?.?\(?([+\-]?(\d+(\.\d+)?(e[+\-]?\d+)?)?)?\/s\stot$/, //2.177e+6/s (+4.01+4/s tot
];
var cnExcludePostfix = [
    /:?\s*x?\d+(\.\d+)?(e[+\-]?\d+)?\s*$/, //12.34e+4
    /:?\s*x?\d+(\.\d+)?[A-Za-z]{0,2}$/, //: 12.34K, x1.5
]

//正则替换，带数字的固定格式句子
var cnRegReplace = new Map([
	[/^Tutorial (\d+)\/$/, '教程 $1/'],
	[/^You stayed out (\d+) seconds and won ([\d\.]+)\$$/, '你离开了$1秒，得到了$2 \$'],
	[/^You stayed out (\d+) seconds and won ([\d\.]+)M\$$/, '你离开了$1秒，得到了$2M \$'],
	[/^You stayed out (\d+) minutes and (\d+) seconds and won ([\d\.]+)M\$$/, '你离开了$1分$2秒，得到了$3M美元'],
	[/^You stayed out (\d+) hours (\d+) minutes and (\d+) seconds and won ([\d\.]+)\$$/, '你离开了$1小时$2分$3秒，得到了$4M \$'],
	[/^(\d+)kB free of$/, '$1kB 空闲/'],
    [/^([\d\.]+)GB free of$/, '$1GkB 空闲/'],
    [/^(\d+)kHz free of (\d+)kHz$/, '$1kHz 空闲 / $2kHz'],
    [/^([\d\.]+)GHz free of ([\d\.]+)GHz$/, '$1GHz 空闲 / $2GHz'],
	[/^On average ([\d\.]+)\$ per second$/, '平均每秒\$ $1'],
	[/^([\d\.]+)\$ per run$/, '\$ $1 每次运行'],
    [/^([\d\.]+)K\$ per run$/, '\$ $1K 每次运行'],
    [/^([\d\.]+)M\$ per run$/, '\$ $1M 每次运行'],
	[/^Average:([\d\.]+)\$$/, '平均:\$ $1'],
	[/^Per second: ([\d\.]+)K\$$/, '每秒: $1K\$'],
    [/^Average:([\d\.]+)K\$$/, '平均:\$ $1K'],
	[/^On average ([\d\.]+)M\$ per second$/, '平均每秒\$ $1M'],
	[/^On average ([\d\.]+)K\$ per second$/, '平均每秒\$ $1K'],
	[/^(\d+) runs to next idle level$/, '还有$1次运行到下一个放置等级'],
	[/^Next format you will earn (\d+) investors to your computer$/, '下一种格式，您将获得$1位投资者到您的计算机'],

]);

//2.采集新词
//20190320@JAR

var cnItem = function () {

    //传参是否非空字串
    if (!arguments[0]) return;

    //检验传参是否对象
    let text = arguments[0],
        s = '';
    if (typeof (text) != "string")
        return text;
    else
        s = arguments[0].charCodeAt();

    //检验传参是否英文
    // if (
    //     s < 65 || (s > 90 && s < 97) || (s > 122)
    //
    // ) return text;

    //处理前缀
    let text_prefix = "";
    for (let prefix in cnPrefix) {
        if (text.substr(0, prefix.length) === prefix) {
            text_prefix = cnPrefix[prefix];
            text = text.substr(prefix.length);
        }
    }
    //处理后缀
    let text_postfix = "";
    for (let postfix in cnPostfix) {
        if (text.substr(-postfix.length) === postfix) {
            text_postfix = cnPostfix[postfix];
            text = text.substr(0, text.length - postfix.length);
        }
    }
    //处理正则后缀
    let text_reg_exclude_postfix = "";
    for (let reg of cnExcludePostfix) {
        let result = text.match(reg);
        if (result) {
            text_reg_exclude_postfix = result[0];
            text = text.substr(0, text.length - text_reg_exclude_postfix.length);
        }
    }

    //检验字典是否可存
    if (!cnItems._OTHER_) cnItems._OTHER_ = [];

    //检查是否排除
    for (let reg of cnExcludeWhole) {
        if (reg.test(text)) {
            return arguments[0];
        }
    }

    //尝试正则替换
    for (let [key, value] of cnRegReplace.entries()) {
        if (key.test(text)) {
            return text_prefix + text.replace(key, value) + text_reg_exclude_postfix + text_postfix;
        }
    }

    //遍历尝试匹配
    for (let i in cnItems) {
        //字典已有词汇或译文、且译文不为空，则返回译文
        if (
            text == i || text == cnItems[i] &&
            cnItems[i] != ''
        )
            return text_prefix + cnItems[i] + text_reg_exclude_postfix + text_postfix;
    }

    //调整收录的词条，0=收录原文，1=收录去除前后缀的文本
    let save_cfg = 1;
    let save_text = save_cfg ? text : arguments[0]
    //遍历生词表是否收录
    for (
        let i = 0; i < cnItems._OTHER_.length; i++
    ) {
        //已收录则直接返回
        if (save_text == cnItems._OTHER_[i])
            return arguments[0];
    }

    if (cnItems._OTHER_.length < 500) {
        //未收录则保存
        cnItems._OTHER_.push(save_text);
        cnItems._OTHER_.sort(
            function (a, b) {
                return a.localeCompare(b)
            }
        );
    }

    /*
        //开启生词打印
        //console.log(
            '有需要汉化的英文：', text
        );
    */

    //返回生词字串
    return arguments[0];
};

transTaskMgr = {
    tasks: [],
    addTask: function (node, attr, text) {
        this.tasks.push({
            node,
            attr,
            text
        })
    },
    doTask: function () {
        let task = null;
        while (task = this.tasks.pop())
            task.node[task.attr] = task.text;
    },
}

function TransSubTextNode(node) {
    if (node.childNodes.length > 0) {
        for (let subnode of node.childNodes) {
            if (subnode.nodeName === "#text") {
                let text = subnode.textContent;
                let cnText = cnItem(text);
                cnText !== text && transTaskMgr.addTask(subnode, 'textContent', cnText);
                //console.log(subnode);
            } else if (subnode.nodeName !== "SCRIPT" && subnode.nodeName !== "TEXTAREA" && subnode.innerHTML && subnode.innerText) {
                if (subnode.innerHTML === subnode.innerText) {
                    let text = subnode.innerText;
                    let cnText = cnItem(text);
                    cnText !== text && transTaskMgr.addTask(subnode, 'innerText', cnText);
                    //console.log(subnode);
                } else {
                    TransSubTextNode(subnode);
                }
            } else {
                // do nothing;
            }
        }
    }
}

! function () {
    console.log("加载汉化模块");

    let observer_config = {
        attributes: false,
        characterData: true,
        childList: true,
        subtree: true
    };
    let targetNode = document.body;
    //汉化静态页面内容
    TransSubTextNode(targetNode);
    transTaskMgr.doTask();
    //监听页面变化并汉化动态内容
    let observer = new MutationObserver(function (e) {
        //window.beforeTransTime = performance.now();
        observer.disconnect();
        for (let mutation of e) {
            if (mutation.target.nodeName === "SCRIPT" || mutation.target.nodeName === "TEXTAREA") continue;
            if (mutation.target.innerHTML && mutation.target.innerText && mutation.target.innerHTML === mutation.target.innerText) {
                mutation.target.innerText = cnItem(mutation.target.innerText);
            } else if (mutation.target.nodeName === "#text") {
                mutation.target.textContent = cnItem(mutation.target.textContent);
            } else if (mutation.addedNodes.length > 0) {
                for (let node of mutation.addedNodes) {
                    if (node.nodeName === "#text") {
                        node.textContent = cnItem(node.textContent);
                        //console.log(node);
                    } else if (node.nodeName !== "SCRIPT" && node.nodeName !== "TEXTAREA" && node.innerHTML && node.innerText) {
                        if (node.innerHTML === node.innerText) {
                            node.innerText = cnItem(node.innerText);
                        } else {
                            TransSubTextNode(node);
                            transTaskMgr.doTask();
                        }
                    }
                }
            }
        }
        observer.observe(targetNode, observer_config);
        //window.afterTransTime = performance.now();
        //console.log("捕获到页面变化并执行汉化，耗时" + (afterTransTime - beforeTransTime) + "毫秒");
    });
    observer.observe(targetNode, observer_config);
}();
