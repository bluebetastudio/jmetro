/*
	jMetro v1.0
	A Windows 8/8.1 UI Modal Alert with jQuery ( based on MIT License )	
	Hot-To use
	- Include the Minified Plugin and Minified CSS on your page
	- jQuery Call: $.jMetro(title, message, options);	
	More examples at: https://github.com/bluebetastudio/jmetro
*/

(function( $ ){
	
	window.$.jMetro = function(title,message,options) {
	
			var html = "";
			var css = "";
			
			var bgcol = "#eeeeee";
			var color = "white";
		
			var settings = $.extend( {
				"buttons"	: [],				
				'blocker'	: true,
				'default'	: "OK",
				"gradient"  : [{
					"from"		: false,
					"to"		: false,
					"direction"	: false
				}],
				'fadeIn'	: 200,
				'fadeOut'	: 200,
				'style' 	: "none",
				'check' 	: false,
				'checkAlert' 	: "Please confirm before continue.",
				'opacity' 		: "1",	
				'textshadow' 	: false,	
				'shadowcolor'	: "#000",
				'shadowopacity': .4,
				'height'	: 200
			}, options);
			
			if ( !options) options = [];			
			if (!options['buttons']){	
				$.extend( options, {
					'buttons': [{
						text: settings['default'],
						click: function(){}
					}]
				});
			}		
			settings = $.extend(settings,options);
			
			if (settings['textshadow']) css += ".jm-cont{text-shadow:-1px 1px 5px "+settings['textshadow']+";}";
			
			if (settings['image']) css += "#jm-box{background:url('"+settings['image']+"') repeat!important;}";
			
			if (settings['blocker']) html += '<div id="jm-blocker" style="background:'+settings['shadowcolor']+'; opacity:'+settings['shadowopacity']+'"></div>';			
			
			color = "white";
			switch(settings['style']){
				case "none": bgcol = "#177BAF"; break;
				case "error": bgcol = "#D40001"; break;
				case "success": bgcol = "#0D8845";  break;
				case "dark": bgcol = "black"; break;
				case "white": bgcol = "white"; color = "black"; break;
			}
			
			var px = settings['height'].replace("px", "").replace(" ", "").replace("%", ""); 
			if (px < 200) px = 200;				
			css += "#jm-box{height:"+px+"px;margin-top:-"+(px/2)+"px;}#jm-box p{height:"+(px-160)+"px;max-height:"+(px-160)+"px;}";
			
			if (settings['bgcolor']) bgcol = settings['bgcolor'];
			if (settings['textalign']) css += "#jm-box p{ text-align: "+settings['textalign']+";}";
			if (settings['textcolor']) color = settings['textcolor'];
			if (settings['textborder']) css += "#jm-box p{border: 1px solid "+settings['textborder']+";}";
			
			html += '<div id="jm-box" style="background-color: '+bgcol+'; color: '+color+'; opacity: '+settings['opacity']+'; ">'
			+'<div class="jm-cont"><h1>';
			
			if (settings['icon']){
				css += "@media all and (max-width:550px){#jm-box h1{padding-left:30px!important;}}";
				html += '<img id="jm-icon" src="'+settings['icon']+'"/>';
			}
			
			html += title +'</h1><br>'+
		   '<p>'+message+'</p>';
		   
		   if (settings['close']) html += "<div id='jm-close'>X</div>";
		   
		   if (settings['check']) {
				html += "<div id='jm-check-confirm'><label><input type='checkbox' name='option1' value='Milk'>"+settings['check']+"</input></label></div>";
				settings['checked'] = true;
			}
		   
			html += '<div id="jm-b">'		
			$c = 0;		
			$.each(settings['buttons'], function(i, v){
				html += '<div id="jm-'+$c+'" class="jm-b" style="border-color: '+color+'">'+v['text']+'</div>';			
				$c++;			
			});
			html += '</div></div></div></div>';			
			
			html = $(html);
			$('<style id="jm-st">'+css+'</style>').appendTo('head');
			$("body").append(html);
			html.css("display", "none");
			
			$c = 0;
			
			$("#jm-close").click(function(e){
				$("#jm-box").fadeOut(settings['fadeOut'], function(){
					$("#jm-st, #jm-box, #jm-blocker").remove();	
				});
			});
			
			if ((settings['gradient']['to'] != false) && (settings['gradient']['from'] != false)){
				$("#jm-box").css('background', settings['gradient']['from'])
							.css('background', "-moz-linear-gradient(top, "+settings['gradient']['from']+" 0%, "+settings['gradient']['to']+" 100%)")
							.css('background', "-webkit-gradient(linear, left top, left bottom, color-stop(0%,"+settings['gradient']['from']+"), color-stop(100%,"+settings['gradient']['to']+"))")
							.css('background', "-webkit-linear-gradient(top, "+settings['gradient']['from']+" 0%,"+settings['gradient']['to']+" 100%)")
							.css('background', "-o-linear-gradient(top, "+settings['gradient']['from']+" 0%,"+settings['gradient']['to']+" 100%)")
							.css('background', "-ms-linear-gradient(top, "+settings['gradient']['from']+" 0%,"+settings['gradient']['to']+" 100%)")
							.css('background', "linear-gradient(to bottom, "+settings['gradient']['from']+" 0%,"+settings['gradient']['to']+" 100%)")
							.css('filter', "progid:DXImageTransform.Microsoft.gradient( startColorstr='"+settings['gradient']['from']+"', endColorstr='"+settings['gradient']['to']+"',GradientType=0 )");
			}
			
			$.each(settings['buttons'], function(i, v){
				$("#jm-" + $c).click(function(e) {
					if (settings['check']){
						if (!$("#jm-check-confirm input").is(':checked')){
							alert(settings['checkAlert']);
							return false;
						}
					}
					$("#jm-box").fadeOut(settings['fadeOut'], function(){
						$("#jm-st, #jm-box, #jm-blocker").remove();	
						if (v['link']){
							var t = "same";
							if (v['target']) t = v['target'];
							if (t == "new") window.open(v['link'],'_blank');
							else window.location.href = v['link'];
						} else {
							v['click'].apply(this, Array.prototype.slice.call( arguments, 1 ));
						}
					});									
				});				
				$c++;
			});			
			$('*').blur();			
			html.fadeIn(settings['fadeIn']);
		}  
})(jQuery);