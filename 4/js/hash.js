window.onload = function () {
	var tag_div = document.getElementsByTagName("div");		
	pageChange();
	window.onhashchange = function () {
		for (var i = 0, len = tag_div.length; i < len; i ++) {
			tag_div[i].style.display = "none";
		}
		pageChange();
	}
	function pageChange() {
		var hash = window.location.hash;
		switch (hash) {
			case "#div1":
			    tag_div[0].style.display = "block";
			    break;
			case "#div2":
			    tag_div[1].style.display = "block";
			    break;
			default:
			    break;
		}
	}
}
