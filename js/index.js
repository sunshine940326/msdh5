//Use rem
var documentElement = document.documentElement;

if (documentElement.clientWidth >= 750) {
    documentElement.style.fontSize = '54px';
} else {
    documentElement.style.fontSize = "${documentElement.getBoundingClientRect().width / 10}px";
}


(function () {
    document.addEventListener('DOMContentLoaded', function () {
        var deviceWidth = document.documentElement.clientWidth;
        document.documentElement.style.fontSize = deviceWidth / 10 + 'px';
    }, false);
    window.onresize = function(){
        var deviceWidth = document.documentElement.clientWidth;
        document.documentElement.style.fontSize = deviceWidth / 10 + 'px';
    };

    console.log(document.width)
})();


function view() {
    return {
        w: document.documentElement.clientWidth,
        h: document.documentElement.clientHeight
    };
}

/*获取localStorage的值*/
var languageSession=localStorage.getItem("language");
console.log(languageSession)

/*获取当前的路径名称*/
var pathName =  window.document.location.pathname;
console.log(pathName)

if(languageSession =="en"){
    /*如果为英文状态改变title*/
    if(pathName.indexOf("index")!=-1) {
        document.title = 'MSD MINIWEBSITE';
    }
    if(pathName.indexOf("chanpin")!=-1) {
        document.title = 'PRODUCTS IN CHINA';
    }
    if(pathName.indexOf("gaikuang")!=-1) {
        document.title = 'CORPORATE PROFILE';
    }
    if(pathName.indexOf("shiming")!=-1) {
        document.title = 'MISSION AND VISION';
    }
    if(pathName.indexOf("zeren")!=-1) {
        document.title = 'SOCIAL RESPONSIBILITY';
    }
    if(pathName.indexOf("rencaifazhan")!=-1) {
        document.title = 'TALENT DEVELOPMENT';
    }
    if(pathName.indexOf("keyan")!=-1) {
        document.title = 'SCIENTIFIC EXCELLENCE';
    }
    if(pathName.indexOf("tushuguan")!=-1) {
        document.title = 'SCIENCE LIBRARY';
    }
    if(pathName.indexOf("yixuezhuanye")!=-1) {
        document.title = 'MEDICAL PROFESSION';
    }

    /*判断session的值,如果为en的情况*/
    console.log("当前选择的语言为en");

    /*中英文切换按钮图片转换*/
    $("#cn").attr("src", "img/cn.png");

    /*首屏返回时图片转换*/
    $("#link_gaikuang").attr("src", "img/en_link_gaikuang.png");
    $(".link_gaikuang").addClass('en_link_gaikuang');
    $("#link_shiming").attr("src", "img/en_link_shiming.png");
    $("#link_zeren").attr("src", "img/en_link_zeren.png");
    $("#link_chanpin").attr("src", "img/en_link_chanpin.png");
    $(".link_chanpin").addClass('en_link_chanpin');
    $("#link_yixue").attr("src", "img/en_link_yixue.png");
    $(".link_yixue").addClass('en_link_yixue');
    $("#link_tushuguan").attr("src", "img/en_link_tushuguan.png");
    $(".link_tushuguan").addClass('en_link_tushuguan');
    $("#link_keyan").attr("src", "img/en_link_keyan.png");
    $(".link_keyan").addClass('en_link_keyan');
    $("#link_rencai").attr("src", "img/en_link_rencai.png");
    $(".link_rencai").addClass('en_link_rencai');
    $("#link_inChina2").attr("src", "img/gongsigaikuang/en_link_inChina.png");
    $(".link_inChina2").addClass('en_link_inChina2');

    /*其他页面转换*/
    /*公司概况版块*/
    $("#link_inChina").attr("src", "img/gongsigaikuang/en_link_inChina.png");
    $(".link_inChina").addClass('en_link_inChina');
    $("#link_inEarth").attr("src", "img/gongsigaikuang/en_link_inEarth.png");
    $(".link_inEarth").addClass('en_link_inEarth');
    $("#link_shipin").attr("src", "img/gongsigaikuang/en_link_shipin.png");
    $(".link_shipin").addClass('en_link_shipin');
    $("#link_qiyerongyu").attr("src", "img/gongsigaikuang/en_link_qiyerongyu.png");
    $(".link_qiyerongyu").addClass('en_link_qiyerongyu');
    /*使命与愿景模块*/
    $(".touxiang").attr("src", "img/shiming/en_touxiang.png");
    $(".link_shiming2").addClass('en_link_shiming2');
    $("#link_shiming2").attr("src", "img/shiming/en_link_shiming2.png");
    $("#link_shangyedaode").attr("src", "img/shiming/en_link_shangyedaode.png");
    $(".link_shangyedaode").addClass('en_link_shangyedaode');
    /*社会责任模块*/
    $("#link_yigan").attr("src", "img/zeren/en_link_yigan.png");
    $(".link_yigan").addClass('en_link_yigan');
    $("#link_zhiyuanzhe").attr("src", "img/zeren/en_link_zhiyuanzhe.png");
    $(".link_zhiyuanzhe").addClass('en_link_zhiyuanzhe');
    $("#link_xiangmu").attr("src", "img/zeren/en_link_xiangmu.png");
    $(".link_xiangmu").addClass('en_link_xiangmu');
    $("#link_qiyezeren").attr("src", "img/zeren/en_link_qiyezeren.png");
    $(".link_qiyezeren").addClass('en_link_qiyezeren');
    $("#link_kangzhen").attr("src", "img/zeren/en_link_kangzhen.png");
    $(".link_kangzhen").addClass('en_link_kangzhen');
    $("#link_beike").attr("src", "img/zeren/en_link_beike.png");
    $(".link_beike").addClass('en_link_beike');
    $("#link_aizibing").attr("src", "img/zeren/en_link_aizibing.png");
    $(".link_aizibing").addClass('en_link_aizibing');
    /*在华产品*/
    $("#link_jiankang").attr("src", "img/chanpin/en_link_jiankang.png");
    $(".link_jiankang").addClass('en_link_jiankang');
    $("#link_baojian").attr("src", "img/chanpin/en_link_baojian.png");
    $(".link_baojian").addClass('en_link_baojian');
    /*医学专业*/
    $("#link_yiliaoshouce").attr("src", "img/yixuezhuanye/en_link_yimoxiangtong.png");
    $(".link_yiliaoshouce").addClass('en_link_yiliaoshouce');
    $("#link_yiweida").attr("src", "img/yixuezhuanye/en_link_yiweida.png");
    $(".link_yiweida").addClass('en_link_yiweida');
    /*图书馆*/
    $("#link_xinyao").attr("src", "img/tushuguan/en_link_xinyao.png");
    $(".link_xinyao").addClass('en_link_xinyao');
    $("#link_zhenliaoshouce").attr("src", "img/tushuguan/en_link_zhenliaoshouce.png");
    $(".link_zhenliaoshouce").addClass('en_link_zhenliaoshouce');
    $("#link_shouce").attr("src", "img/tushuguan/en_link_shouce.png");
    $(".link_shouce").addClass('en_link_shouce');
    /*人才发展*/
    $("#link_rencaijiazhi").attr("src", "img/rencaifazhan/en_link_rencaijiazhi.png");
    $(".link_rencaijiazhi").addClass('en_link_rencaijiazhi');
    $("#link_guzhu").attr("src", "img/rencaifazhan/en_link_guzhu.png");
    $(".link_guzhu").addClass('en_link_guzhu');
    $("#link_yumojujin").attr("src", "img/rencaifazhan/en_link_yumojujin.png");
    $(".link_yumojujin").addClass('en_link_yumojujin');
    $("#link_zhaopin").attr("src", "img/rencaifazhan/en_link_zhaopin.png");
    $(".link_zhaopin").addClass('en_link_zhaopin');
    /*科研卓著*/

    $("#link_yimiao").attr("src", "img/keyan/en_link_yimiao.png");
    $(".link_yimiao").addClass('en_link_yimiao');
    $("#link_xinyaoyan").attr("src", "img/keyan/en_link_xinyaoyan.png");
    $(".link_xinyaoyan").addClass('en_link_xinyaoyan');
}else {
    /*如果选择语言为cn时*/
    console.log("当前选择的语言为cn");
    $("#link_gaikuang").attr("src", "img/link_gaikuang.png");
}


/*禁止触摸下拉*/
window.onload = function () {
    document.addEventListener('touchmove', function (event) {
        event.preventDefault();
    }, false);

}

/*click trnslate button*/
$('#cn').on('click', function () {
    if ($("#cn").attr("src") == "img/en.png") {
        localStorage.setItem("language", langBtn);
        console.log("当前选择的语言为english")
        document.title = 'MSD MINIWEBSITE';
        $("#cn").attr("src", "img/cn.png");

        /*点击切换按钮,将langBtn的值设置为en*/
        var langBtn="en";
        console.log("当前选择的语言为en");
        /*localStorage改写数据*/
        localStorage.setItem("language", langBtn);
        $("#link_gaikuang").attr("src", "img/en_link_gaikuang.png");
        $(".link_gaikuang").addClass('en_link_gaikuang');
        $("#link_shiming").attr("src", "img/en_link_shiming.png");
        $("#link_zeren").attr("src", "img/en_link_zeren.png");
        $("#link_chanpin").attr("src", "img/en_link_chanpin.png");
        $(".link_chanpin").addClass('en_link_chanpin');
        $("#link_yixue").attr("src", "img/en_link_yixue.png");
        $(".link_yixue").addClass('en_link_yixue');
        $("#link_tushuguan").attr("src", "img/en_link_tushuguan.png");
        $(".link_tushuguan").addClass('en_link_tushuguan');
        $("#link_keyan").attr("src", "img/en_link_keyan.png");
        $(".link_keyan").addClass('en_link_keyan');
        $("#link_rencai").attr("src", "img/en_link_rencai.png");
        $(".link_rencai").addClass('en_link_rencai');
        $("#link_inChina").attr("src", "img/gongsigaikuang/en_link_inChina.png");
    } else {

        var langBtn="cn";
        /*localStorage改写数据*/
        localStorage.setItem("language", langBtn);
        document.title = '默沙东官网';
        console.log("当前选择的语言为cn");
        $("#cn").attr("src", "img/en.png");
        $("#link_gaikuang").attr("src", "img/link_gaikuang.png");
        $(".link_gaikuang").removeClass('en_link_gaikuang');
        $("#link_shiming").attr("src", "img/link_shiming.png");
        $("#link_zeren").attr("src", "img/link_zeren.png");
        $("#link_chanpin").attr("src", "img/link_chanpin.png");
        $(".link_chanpin").removeClass('en_link_chanpin');
        $("#link_yixue").attr("src", "img/link_yixue.png");
        $(".link_yixue").removeClass('en_link_yixue');
        $("#link_tushuguan").attr("src", "img/link_tushuguan.png");
        $(".link_tushuguan").removeClass('en_link_tushuguan');
        $("#link_keyan").attr("src", "img/link_keyan.png");
        $(".link_keyan").removeClass('en_link_keyan');
        $("#link_rencai").attr("src", "img/link_rencai.png");
        $(".link_rencai").removeClass('en_link_rencai');
    }
})


/*talk animation*/
var talkleft = document.getElementById('talkleft');
var talkright = document.getElementById('talkright');
setInterval(function () {
    talkleft.style.display = 'none';
    talkright.style.display = 'none';
    setTimeout(function () {
        talkleft.style.display = 'block';
        talkright.style.display = 'block';
    }, 100);
}, 8000);

/*tanhao animation*/
var oTanhao = document.getElementById("tanhao");
setInterval(function () {
    oTanhao.style.display = 'none';
    setTimeout(function () {
        oTanhao.style.display = 'block';

    }, 200);
}, 8000);



/*preload*/
function preloadimages(arr){
    var newimages=[], loadedimages=0
    var arr=(typeof arr!="object")? [arr] : arr
    function imageloadpost(){
        loadedimages++
        if (loadedimages==arr.length){
            console.log("图片加载成功")
        }
    }
    for (var i=0; i<arr.length; i++){
        newimages[i]=new Image()
        newimages[i].src=arr[i]
        newimages[i].onload=function(){
            imageloadpost()
        }
        newimages[i].onerror=function(){
            imageloadpost()
        }
    }
}


preloadimages(['img/chanpin/box.png',
    'img/chanpin/box1.png',
    'img/chanpin/box2.png',
    'img/chanpin/box3.png',
    'img/chanpin/chanpin_bgd.png',
    'img/chanpin/cloud1.png',
    'img/chanpin/cloud2.png',
    'img/chanpin/cloud3.png',
    'img/chanpin/cloud6.png',
    'img/chanpin/e.png',
    'img/chanpin/link_baojian.png',
    'img/chanpin/link_jiankang.png',
    'img/chanpin/peoplebottom.png',
    'img/chanpin/peopletop.png',
    'img/chanpin/shadow.png',
    'img/chanpin/water.png',
    'img/chanpin/water1.png',
    'img/zeren/car1.png',
    'img/zeren/car2.png',
    'img/zeren/cloud1.png',
    'img/zeren/cloud2.png',
    'img/zeren/cloud3.png',
    'img/zeren/leaf1.png',
    'img/zeren/leaf2.png',
    'img/zeren/leaf3.png',
    'img/zeren/leaf4.png',
    'img/zeren/leaf5.png',
    'img/zeren/leaf6.png',
    'img/zeren/leaf7.png',
    'img/zeren/leaf8.png',
    'img/zeren/link_aizibing.png',
    'img/zeren/link_beike.png',
    'img/zeren/link_kangzhen.png',
    'img/zeren/link_qiyezeren.png',
    'img/zeren/link_xiangmu.png',
    'img/zeren/link_yigan.png',
    'img/zeren/link_zhiyuanzhe.png',
    'img/zeren/tree.png',
    'img/zeren/zeren_bgd.png',
    'img/keyan/bubble.png',
    'img/keyan/en_link_xinyaoyan.png',
    'img/keyan/en_link_yimiao.png',
    'img/keyan/keyan_bgd.png',
    'img/keyan/left_1.png',
    'img/keyan/left_2.png',
    'img/keyan/left_3.png',
    'img/keyan/left_4.png',
    'img/keyan/link_xinyaoyan.png',
    'img/keyan/link_yimiao.png',
    'img/keyan/right_1.png',
    'img/keyan/right_2.png',
    'img/keyan/right_3.png',
    'img/keyan/right_4.png',
    'img/keyan/right_5.png',
    'img/keyan/right_6.png',
    'img/gongsigaikuang/earth.png',
    'img/gongsigaikuang/en_link_inChina.png',
    'img/gongsigaikuang/en_link_inEarth.png',
    'img/gongsigaikuang/en_link_qiyerongyu.png',
    'img/gongsigaikuang/en_link_shipin.png',
    'img/gongsigaikuang/gaikuang_bgd.png',
    'img/gongsigaikuang/gaikuang_cloud1.png',
    'img/gongsigaikuang/gaikuang_cloud2.png',
    'img/gongsigaikuang/gaikuang_cloud3.png',
    'img/gongsigaikuang/gaikuang_cloud4.png',
    'img/gongsigaikuang/gaikuang_thing1.png',
    'img/gongsigaikuang/gaikuang_thing2.png',
    'img/gongsigaikuang/light.png',
    'img/gongsigaikuang/link_inChina.png',
    'img/gongsigaikuang/link_inEarth.png',
    'img/gongsigaikuang/link_qiyerongyu.png',
    'img/gongsigaikuang/link_shipin.png',
    'img/gongsigaikuang/map_turn.png',
    'img/gongsigaikuang/map.png',
    'img/tushuguan/en_link_shouce.png',
    'img/tushuguan/en_link_xinyao.png',
    'img/tushuguan/en_link_zhenliaoshouce.png',
    'img/tushuguan/link_mojia.png',
    'img/tushuguan/link_shouce.png',
    'img/tushuguan/link_xinyao.png',
    'img/tushuguan/link_zhenliaoshouce.png',
    'img/tushuguan/pingzi.png',
    'img/tushuguan/thing1.png',
    'img/tushuguan/thing2.png',
    'img/tushuguan/thing3.png',
    'img/tushuguan/thing4.png',
    'img/tushuguan/tushuguan_bgd.png',
])
