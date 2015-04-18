$(document).ready(function() {

var hideButton = $('#hide');
hideButton.click(function() {
	hideButton.css("margin","auto");
	hideButton.css("width","30px");
	hideButton.css("color","red");
    var target = hideButton.attr('data-target');
    if ($(target).css('display') == "none") {
        $(target).css("display","block");
        hideButton.html(hideButton.attr('data-shown-text'));
    } else {
        $(target).css("display","none");
        hideButton.html(hideButton.attr('data-hidden-text'));
		hideButton.attr("title","Show the editor");
		hideButton.css("margin","0");
		hideButton.css("width","35px");
		hideButton.css("color","green");
    }
});

$( "#tabs-min" ).tabs();
var ht = $(window).height()-50;
$("#flexbox1").css('height',ht+'px');
var myCodeMirror1 = CodeMirror.fromTextArea(document.getElementById("htmltext"), {
            lineNumbers: true,
            mode: "xml",
			htmlMode: true,
			autoCloseTags: true,
			autofocus:true,
			
        });
myCodeMirror1.setSize(600,500);	
myCodeMirror1.setOption("theme",'ambiance');

var myCodeMirror2 = CodeMirror.fromTextArea(document.getElementById("csstext"), {
            lineNumbers: true,
            mode:  "css",
			autoCloseBrackets: true,
			autofocus:true,
        });
myCodeMirror2.setSize(600,500);	
myCodeMirror2.setOption("theme",'ambiance');

var myCodeMirror3 = CodeMirror.fromTextArea(document.getElementById("jstext"), {
            lineNumbers: true,
            mode:  "javascript",
			autoCloseBrackets: true,
			autofocus:true,
        });
myCodeMirror3.setSize(600,500);	
myCodeMirror3.setOption("theme",'ambiance');

$('#play').tooltip({
	tooltipClass: "decorate-tooltip"
});
$('#reset').tooltip({
	tooltipClass: "decorate-tooltip"
});
$('#hide').tooltip({
	tooltipClass: "decorate-tooltip"
});

$('#play').click(function(){
	$("#result").fadeOut();
	$("#resultframe").contents().find('html').html("<style>"+myCodeMirror2.getValue()+"</style>"+"<code>"+myCodeMirror1.getValue()+"</code>");
	document.getElementById('resultframe').contentWindow.eval(myCodeMirror3.getValue());
});

$('#reset').click(function(){
	var element = $("#tabs-1").parent().find("li.ui-state-active");
	if(element.attr("aria-labelledby")=="ui-id-1"){
		myCodeMirror1.setValue("");
		myCodeMirror1.clearHistory();
		$("#resultframe").contents().find('html').html("<style>"+myCodeMirror2.getValue()+"</style>"+"<code>"+myCodeMirror1.getValue()+"</code>");
	}
	if(element.attr("aria-labelledby")=="ui-id-2"){
		myCodeMirror2.setValue("");
		myCodeMirror2.clearHistory();
		$("#resultframe").contents().find('html').html("<style>"+myCodeMirror2.getValue()+"</style>"+"<code>"+myCodeMirror1.getValue()+"</code>");
	}
	if(element.attr("aria-labelledby")=="ui-id-3"){
		myCodeMirror3.setValue("");
		myCodeMirror3.clearHistory();
		$("#resultframe").contents().find('html').html("<style>"+myCodeMirror2.getValue()+"</style>"+"<code>"+myCodeMirror1.getValue()+"</code>");
	}
});
});