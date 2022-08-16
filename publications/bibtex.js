$(document).ready(function toggle_bibtex(){
    var str =$(this).attr('id');
    var str = $(this).attr('id');
    $(str).style.color = 'red'
    var ret = str.split("_");
    var id = ret[1];

	var x = document.getElementById(id);
	if (x.style.display === "none") {
	x.style.display = "block";
	} else {
	x.style.display = "none";
	}
    // $('#' + id).toggle();
    // $(id).toggle();
});