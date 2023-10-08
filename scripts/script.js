$(function () {
	$('#accordion').accordion({
		collapsible: true,
	});
});
$(function () {
	$('#datepicker').datepicker();
	$('#anim').on('change', function () {
		$('#datepicker').datepicker('option', 'showAnim', $(this).val());
	});
});
$(function () {
	$('#tabs').tabs();
});
$(function () {
	$('#menu').menu();
});