//职位类别
var catelist = [
    {category: "生活 | 服务业", cates: [
        {name: "餐饮", dsid: "13915", listname: "zplvyoujiudian"},
        {name: "家政保洁/安保", dsid: "13931", listname: "jiazhengbaojiexin"},
        {name: "美容/美发", dsid: "13933", listname: "meirongjianshen"},
        {name: "酒店/旅游", dsid: "38674", listname: "zpjiudian"},
        {name: "娱乐/休闲", dsid: "13924", listname: "zpwentiyingshi"},
        {name: "保健按摩", dsid: "38679", listname: "zpanmo"},
        {name: "运动健身", dsid: "38680", listname: "zpjianshen"}
    ]
    },
    {
        category: "人力 | 行政 | 管理", cates: [
        {name: "人事/行政/后勤", dsid: "13906", listname: "renli"},
        {name: "司机", dsid: "13928", listname: "siji"},
        {name: "高级管理", dsid: "13893", listname: "zpguanli"}
    ]
    }
    ,
    {
        category: "销售 | 客服 | 采购 | 淘宝", cates: [
        {name: "销售", dsid: "13901", listname: "yewu"},
        {name: "客服", dsid: "13902", listname: "kefu"},
        {name: "贸易/采购", dsid: "13912", listname: "zpshangwumaoyi"},
        {name: "超市/百货/零售", dsid: "13802", listname: "chaoshishangye"},
        {name: "淘宝职位", dsid: "38658", listname: "zptaobao"},
        {name: "房产中介", dsid: "38673", listname: "zpfangchan"}
    ]
    }
    ,
    {
        category: "市场 | 媒介 | 广告 | 设计", cates: [
        {name: "市场/媒介/公关", dsid: "13905", listname: "shichang"},
        {name: "广告/会展/咨询", dsid: "13918", listname: "zpguanggao"},
        {name: "美术/设计/创意", dsid: "38676", listname: "zpmeishu"}
    ]
    }
    ,
    {
        category: "生产 | 物流 | 质控 | 汽车", cates: [
        {name: "普工/技工", dsid: "13916", listname: "zpshengchankaifa"},
        {name: "生产管理/研发", dsid: "38675", listname: "zpshengchan"},
        {name: "物流/仓储", dsid: "13913", listname: "zpwuliucangchu"},
        {name: "服装/纺织/食品", dsid: "24580", listname: "xiaofeipin"},
        {name: "质控/安防", dsid: "24570", listname: "zhikonganfang"},
        {name: "汽车制造/服务", dsid: "13923", listname: "zpqiche"}
    ]
    }
    ,
    {
        category: "网络 | 通信 | 电子", cates: [
        {name: "计算机/互联网/通信", dsid: "13909", listname: "tech"},
        {name: "电子/电气", dsid: "13922", listname: "zpjixieyiqi"},
        {name: "机械/仪器仪表", dsid: "38678", listname: "zpjixie"}
    ]
    }
    ,
    {
        category: "法律 | 教育 | 翻译 | 出版", cates: [
        {name: "法律", dsid: "13908", listname: "zpfalvzixun"},
        {name: "教育培训", dsid: "13926", listname: "zhuanye"},
        {name: "翻译", dsid: "23196", listname: "fanyizhaopin"},
        {name: "编辑/出版/印刷", dsid: "13925", listname: "zpxiezuochuban"}
    ]
    }
    ,
    {
        category: "财会 | 金融 | 保险", cates: [
        {name: "财务/审计/统计", dsid: "13907", listname: "zpcaiwushenji"},
        {name: "金融/银行/证券/投资", dsid: "23194", listname: "jinrongtouzi"},
        {name: "保险", dsid: "9250", listname: "zpjinrongbaoxian"}
    ]
    }
    ,
    {
        category: "医疗 | 制药 | 环保", cates: [
        {name: "医院/医疗/护理", dsid: "13919", listname: "zpyiyuanyiliao"},
        {name: "制药/生物工程", dsid: "38677", listname: "zpzhiyao"},
        {name: "环保", dsid: "24513", listname: "huanbao"}
    ]
    }
    ,
    {
        category: "建筑 | 装修 | 物业 | 其他", cates: [
        {name: "建筑", dsid: "13914", listname: "zpfangchanjianzhu"},
        {name: "物业管理", dsid: "38672", listname: "zpwuye"},
        {name: "农/林/牧/渔业", dsid: "24466", listname: "nonglinmuyu"},
        {name: "其他职位", dsid: "13961", listname: "zhaopin"}
    ]
    }
]


//职位类别
var qzcatelist = [
    {category: "生活 | 服务业", cates: [
        {name: "餐饮", dsid: "13136", listname: "qzzplvyoujiudian"},
        {name: "家政保洁/安保", dsid: "13083", listname: "qzjiazhengbaojiexin"},
        {name: "美容/美发", dsid: "13093", listname: "qzmeirongjianshen"},
        {name: "酒店/旅游", dsid: "38824", listname: "qzzpjiudian"},
        {name: "娱乐/休闲", dsid: "13146", listname: "qzzpwentiyingshi"},
        {name: "保健按摩", dsid: "38829", listname: "qzzpanmo"},
        {name: "运动健身", dsid: "38830", listname: "qzzpjianshen"}
    ]
    },
    {
        category: "人力 | 行政 | 管理", cates: [
        {name: "人事/行政/后勤", dsid: "13126", listname: "qzrenli"},
        {name: "司机", dsid: "13080", listname: "qzsiji"},
        {name: "高级管理", dsid: "13897", listname: "qzzpguanli"}
    ]
    }
    ,
    {
        category: "销售 | 客服 | 采购 | 淘宝", cates: [
        {name: "销售", dsid: "13139", listname: "qzyewu"},
        {name: "客服", dsid: "13122", listname: "qzkefu"},
        {name: "贸易/采购", dsid: "13133", listname: "qzzpshangwumaoyi"},
        {name: "超市/百货/零售", dsid: "13803", listname: "qzchaoshishangye"},
        {name: "淘宝职位", dsid: "38665", listname: "qzzptaobao"},
        {name: "房产中介", dsid: "38823", listname: "qzzpfangchan"}
    ]
    }
    ,
    {
        category: "市场 | 媒介 | 广告 | 设计", cates: [
        {name: "市场/媒介/公关", dsid: "13125", listname: "qzshichang"},
        {name: "广告/会展/咨询", dsid: "13140", listname: "qzzpguanggao"},
        {name: "美术/设计/创意", dsid: "38826", listname: "qzzpmeishu"}
    ]
    }
    ,
    {
        category: "生产 | 物流 | 质控 | 汽车", cates: [
        {name: "普工/技工", dsid: "13137", listname: "qzzpshengchankaifa"},
        {name: "生产管理/研发", dsid: "38825", listname: "qzzpshengchan"},
        {name: "物流/仓储", dsid: "13134", listname: "qzzpwuliucangchu"},
        {name: "服装/纺织/食品", dsid: "24581", listname: "qzxiaofeipin"},
        {name: "质控/安防", dsid: "24571", listname: "qzzhikonganfang"},
        {name: "汽车制造/服务", dsid: "13145", listname: "qzzpqiche"}
    ]
    }
    ,
    {
        category: "网络 | 通信 | 电子", cates: [
        {name: "计算机/互联网/通信", dsid: "13129", listname: "qztech"},
        {name: "电子/电气", dsid: "13144", listname: "qzzpjixieyiqi"},
        {name: "机械/仪器仪表", dsid: "38828", listname: "qzzpjixie"}
    ]
    }
    ,
    {
        category: "法律 | 教育 | 翻译 | 出版", cates: [
        {name: "法律", dsid: "13128", listname: "qzzpfalvzixun"},
        {name: "教育培训", dsid: "13148", listname: "qzzhuanye"},
        {name: "翻译", dsid: "23197", listname: "qzfanyizhaopin"},
        {name: "编辑/出版/印刷", dsid: "13147", listname: "qzzpxiezuochuban"}
    ]
    }
    ,
    {
        category: "财会 | 金融 | 保险", cates: [
        {name: "财务/审计/统计", dsid: "13127", listname: "qzzpcaiwushenji"},
        {name: "金融/银行/证券/投资", dsid: "23195", listname: "qzjinrongtouzi"},
        {name: "保险", dsid: "13132", listname: "qzzpjinrongbaoxian"}
    ]
    }
    ,
    {
        category: "医疗 | 制药 | 环保", cates: [
        {name: "医院/医疗/护理", dsid: "13141", listname: "qzzpyiyuanyiliao"},
        {name: "制药/生物工程", dsid: "38827", listname: "qzzpzhiyao"},
        {name: "环保", dsid: "24515", listname: "qzhuanbao"}
    ]
    }
    ,
    {
        category: "建筑 | 装修 | 物业 | 其他", cates: [
        {name: "建筑", dsid: "13135", listname: "qzzpfangchanjianzhu"},
        {name: "物业管理", dsid: "38822", listname: "qzzpwuye"},
        {name: "农/林/牧/渔业", dsid: "24476", listname: "qznonglinmuyu"},
        {name: "其他职位", dsid: "13149", listname: "qzzhaopin"}
    ]
    }
]