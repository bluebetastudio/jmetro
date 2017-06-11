	$(document).ready(function(){
		
		var speed = .9;
		
		var AboutThePlugin = "<b>About that Plugin</b><br><br>"+
		
			'jMetro was made by Fernando Gravina, from BlueBeta Studio (<a target="_blank" href="https://github.com/bluebetastudio/jmetro">https://github.com/bluebetastudio/jmetro</a>).<br><br>'+
			'- You can download and put that plugin in your site without any problems. There is plenty of demos for you.<br>'+
			'- Feel free to change the code as you wish - just use the uncompressed JS/CSS code, and compress it again using online JS/CSS Compressor. '+
			'Again, there is plenty of compressors around Google, hehe.<br><br>'+
			'Any problem, suggestion or critique, please send an email for <b>developer@bluebeta.studio</b>.'
		
		var MITLicense = "<b>The MIT License (MIT)</b><br><br>"+

			'<sub>jMetro v1.0 (https://github.com/bluebetastudio/jmetro) </sub><br>'+
			'Here you include your <b>Terms of Use</b>, <b>Privacy Policies</b>, blah blah blah.<br><br>'+

			'Permission is hereby granted, free of charge, to any person obtaining a copy'+
			'of this software and associated documentation files (the "Software"), to deal'+
			'in the Software without restriction, including without limitation the rights'+
			'to use, copy, modify, merge, publish, distribute, sublicense, and/or sell'+
			'copies of the Software, and to permit persons to whom the Software is'+
			'furnished to do so, subject to the following conditions:<br><br>'+

			'The above copyright notice and this permission notice shall be included in'+
			'all copies or substantial portions of the Software.<br><br>'+

			'THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR'+
			'IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,'+
			'FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE'+
			'AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER'+
			'LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,'+
			'OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN'+
			'THE SOFTWARE.';
		
		$.SyntaxHighlighter.init();
		
		$("#demo_0").click(function(){
			$.jMetro(
				"This is a title",
				"This is a message base, just a simple base."
			);	
		});
		
		$("#download_0").click(function(){
			$.jMetro("Before you Download", MITLicense, {
				height: '350',
				gradient: {
					from: 'rgba(2,127,185,1)',
					to: 'rgba(11,128,183,.9)'
				},
				textalign: 'left', textcolor: 'white', textborder: 'white',
				check: "I understood, can I download now?",
				close: true,
				buttons: [{
					text: "Download",
					link: "http://bluebeta.studio/blog/",
					target: "same"
				}]
			});
		});
		
		$("#demo_1").click(function(){$.jMetro("OMG AN ERROR?", "<b>Error</b> 0x004000EC: The SYSTEM know that you love it.<br><b>Reason</b>: everyone loves Windows 8 UI Interface, right?", { style: "error" });});
		
		$("#demo_2").click(function(){
			$.jMetro(
				"Alert!",
				"Something is wrong!<br><b>404 Error: File not Found.</b>",
				{
					icon: 'http://goo.gl/aQJHgu',
					style: "error",
					shadowcolor: '#850000'
				}
			);	
		});
		
		$("#demo_3").click(function(){
			$.jMetro( "Hey blocker!", "Where are ya?.", { blocker: false });	
		});
		
		$("#demo_4").click(function(){
			$.jMetro(
				"You need to choose!",
				"Someone wants to eat a piece of cake. Do you allow it?",
				{
					buttons: [{
						text: "YES",
						click: function(){
							$.jMetro("Nham nham nham", "He ate the cake, and he liked it~", { style: "success", shadowcolor: '#3a6f00'});		
						}		
					},{
						text: "NO",
						click: function(){
							$.jMetro("OMG WHY", "I wanted that cake so bad DXX", { style: "error", shadowcolor: '#850000' });			
						}		
					}]
				}
			);	
		});
		
		$("#demo_5").click(function(){
			$.jMetro(
							"Multiple choice!",
							"One will open a new link, another will show an Javascript alert.",
							{
								buttons: [{
									text: "New Page",
									link: "https://bluebeta.studio/blog/",
									target: "new"
								},{
									text: "Same Page",
									link: "https://bluebeta.studio/blog/",
									target: "same"								
								},{
									text: "Execute Alert",
									click: function(){
										alert("You clicked!! You clicked!!");
									}								
								}]
							}
						);	
		});
		
		$("#demo_6").click(function(){
			$.jMetro("Hey, COOL!!", "You changed your background and put a cool icon. Now, try to resize your window and <b>see the magic</b>!", {
				image: $("#t_image").val(),
				icon: $("#t_icon").val(),
			});
		});

		
		$("#demo1").click(function(){
			$.jMetro("Thanks for downloading!", AboutThePlugin, {
				height: '350',
				bgcolor: 'rgb(23, 123, 175)',
				textalign: 'left', textcolor: 'white', textborder: 'white',
				close: true
			});
		});

		$("#demo_7").click(function(){
			$.jMetro( "SOMETHING WRONG", "Seems your Windows is corrupted... there is too much Microsoft on them.<br>Do you want to install Ubuntu instead?", {
				icon: "images/ub.png",
				image: "images/ub.jpg",
				textshadow: '#551820',
				shadowcolor	: "#220D1C",
				shadowopacity	: .7,
				buttons: [{
					text: "Go ahead",
					link: "http://www.ubuntu.com/download",
					target: "new"
				}, {
					text: "No never",
					click: function(){
						$.jMetro('OKAY, OKAY', 'If you want to continue with your pirated Microsoft version, alright. Just kidding.', {
							shadowcolor: "#0A2A5B",
							textshadow: '#1C51AD',
							icon: "images/win8.png",
							image: "images/win8b.jpg"
						});
					}			
				}]
			});
		});	
	});