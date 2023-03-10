$(".step").click( function() {
	$(this).addClass("active").prevAll().addClass("active");
	$(this).nextAll().removeClass("active");
});

$(".step01").click( function() {
	$("#line-progress").css("width", "0%");
	$(".discovery").addClass("active").siblings().removeClass("active");
});

$(".step02").click( function() {
	$("#line-progress").css("width", "50%");
	$(".strategy").addClass("active").siblings().removeClass("active");
});

$(".step03").click( function() {
	$("#line-progress").css("width", "100%");
	$(".creative").addClass("active").siblings().removeClass("active");
});

$("#one-click-membership").withfriends('leilo', {
      Replace_Element:false
    , Memberships: true
    , Tier: 10771674
    , Auto_Select: true
});

function submitMembershipSelection() {
	var savings;
	if (document.getElementById('savings-cost')){
	    savings = document.getElementById('savings-cost');
	}; 
	var package_choices = $("packages").children("option:selected").val();
	var package_choices = document.getElementById("packages");
    var selectedText = package_choices.options[package_choices.selectedIndex].innerHTML;
    var selectedValue = package_choices.value;
	if(selectedValue == 1){
		savings.innerHTML = "$4.99 per month";

		$("#one-click-membership").off("click").withfriends('leilo', {
		      Replace_Element:false
		    , Memberships: true
		    , Tier: 10771672
		    , Auto_Select: true
		}); 
	}
	else if(selectedValue == 2){
	    savings.innerHTML = "$18.78 per month";

	    $("#one-click-membership").off("click").withfriends('leilo', {
		      Replace_Element:false
		    , Memberships: true
		    , Tier: 10771673
		    , Auto_Select: true
		});
	}
	else if(selectedValue == 3){
	    savings.innerHTML = "$44.95 per month";

	    $("#one-click-membership").off("click").withfriends('leilo', {
		      Replace_Element:false
		    , Memberships: true
		    , Tier: 10771674
		    , Auto_Select: true
		});
	}
}

function scrollToElement(selector, callback){
    var animation = {scrollTop: $(selector).offset().top};
    $('html,body').animate(animation, 'slow', 'swing', function() {
        if (typeof callback == 'function') {
            callback();
        }
        callback = null;
    });
}
