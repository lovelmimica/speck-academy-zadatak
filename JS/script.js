$(document).ready(function(){
	$("#alati li").click(function(){
		$li_new_tool = "<li>" + $(this).text() + "</li>";

		$("#toolbox").prepend($li_new_tool);
		$("#toolbox li").click(function(){
			$(this).remove();
		});
	});
});