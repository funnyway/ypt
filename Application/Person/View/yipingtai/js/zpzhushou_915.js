        document.domain = "58.com";
		var width=0;
        function showzpzhushou(url,length) {
			try
			{
			width=length;
		    var src = document.createElement("script");
            src.type = "text/javascript";
            src.src = url;
            src.id = "scriptid";
			var div = document.getElementById("zpzs");
            if (div != null) {
                div.innerHTML = '';
                div.appendChild(src);             
				}
			}
			catch (e){}
        }
        function heartBeat() {
			try
			{
			   document.getElementById("zpzs").style.right = ((document.body.clientWidth - width) / 2) - 134 + "px";
				 if ((document.documentElement.scrollTop + document.body.scrollTop) > 0) {
					document.getElementById("gototop").style.display='';
				} else {
					document.getElementById("gototop").style.display='none';
				}
			}
			catch (e){}
        }
	    function zptop () { window.scroll(0, document.minTop || 0); }
        function callback(str) {
			try
			{
			if(str!=null&&str!=""){
			   document.getElementById("zpzs").innerHTML = str;
			   document.getElementById("zpzs").style.display = "";
               document.getElementById("zpzs").style.right = ((document.body.clientWidth - width) / 2) - 134 + "px";
			   if ((document.documentElement.scrollTop + document.body.scrollTop) > 0) {
					document.getElementById("gototop").style.display='';
				} else {
					document.getElementById("gototop").style.display='none';
				}
			   window.setInterval("heartBeat()", 1);
			   }
			}
			catch (e){}
        }
		function zp_right_help(width, id,str) {
        this.width = length;
        this.id = id;
        var obj = this;var o = document.getElementById(obj.id);
		o.style.display = "none";
        o.style.right = ((document.body.clientWidth - obj.width) / 2) - 134 + "px";
        o.innerHTML = str;
		
        this.heartBeat = function() {
        try {
			
                o.style.right = ((document.body.clientWidth - width) / 2) - 134 + "px";o.style.display = "";
            }
            catch (e) { }
        };
        
        window.setInterval(function(){obj.heartBeat();}, 100);
    }