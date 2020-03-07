				window.onscroll = function() {
					myFunction();
				};
				var navbar = document.getElementById("navbar");
				var sticky = navbar.offsetTop;

				function openNav() {
					document.getElementById("mySidenav").style.width = "250px";
					document.getElementById("main").style.marginLeft = "250px";
					document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
				}

				function closeNav() {
					document.getElementById("mySidenav").style.width = "0";
					document.getElementById("main").style.marginLeft = "0";
					document.body.style.backgroundColor = "white";
				}

				function myFunction() {
					if (window.pageYOffset >= sticky) {
						navbar.classList.add("sticky");
					} else {
						navbar.classList.remove("sticky");
					}
}
                
function openPage(pageName,elmnt,color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("linkcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("link");
    for (i = 0; i < tablinks.length; i++) {
	  tablinks[i].style.backgroundColor = "";
	  tablinks[i].style.borderLeft = "";
    }
    document.getElementById(pageName).style.display = "block";
	elmnt.style.backgroundColor = color;
	elmnt.style.borderLeft = "4px solid aqua";
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();
