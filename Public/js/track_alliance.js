/* 追加统计 */
function loadTj(item){
    item = item || document;
    if (location.search=='') {return;}
    // 筛选url中数据
    var url = location.search,arr,urlArr = [],oTar={};
    url=url.substring(1);
    arr=url.split('&');
    var urlTxt = ['utm_source','spm'];
    for (var i = 0; i < arr.length; i++) {
        var b = arr[i].split('=');
        for (var k = 0; k < urlTxt.length; k++) {
          if (urlTxt[k]==b[0]) {
            oTar[b[0]] = b[1];
          }
        }
    }
    for (var j in oTar) {
      urlArr.push( j+'='+oTar[j] );
    }
    if (urlArr.length<urlTxt.length) {return;}
    var aAll=item.getElementsByTagName('a');
    var urlLink = urlArr.join('&');
    var reg = new RegExp('^javascript|#');
    for(var i=0,len=aAll.length ;i<len;i++){ 
          var newUrl=urlArr;
          var href = aAll[i].href;
          if (href.indexOf('passport.58.com/login/')>-1) {continue;}
          if (href.indexOf(urlLink)>-1) {continue;}
          if (reg.test(href)||href=='') {
            continue;
          }window.location.search.indexOf('')
          href += (href.indexOf('?')>-1?'&':'?');
          aAll[i].href=href+urlLink;
    }
}
if(window.attachEvent){
  window.attachEvent('onload', function(){loadTj();});
}else{
  window.addEventListener('load', function(){loadTj();}, false);
}

    