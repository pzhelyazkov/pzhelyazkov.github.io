'use strict'
    //add and remove classes for search bar while scrolling
    
	window.addEventListener('scroll', function() { 
       
        var myNav = document.querySelector('.header-nav, .header-nav-index');
        var myButtons = document.querySelectorAll('.header-nav-index button, .header-nav button');
		if (document.documentElement.scrollTop > 0) 
		{
            if(myNav.classList.contains('header-nav-index'))
            {
                myNav.classList.add("scrolled-index");
                myButtons.classList.add("scrolled-index");
            }
            else if(myNav.classList.contains('header-nav'))
            {
                myNav.classList.add("scrolled");
                myButtons.classList.add("scrolled");
            }
			
        }
     
		if(document.documentElement.scrollTop==0)
			{
                if(myNav.classList.contains('header-nav-index'))
                {
                    myNav.classList.remove("scrolled-index");
                    myButtons.classList.remove("scrolled-index");
                }
                else if(myNav.classList.contains('header-nav'))
                {
                    myNav.classList.remove("scrolled");
                    myButtons.classList.remove("scrolled");
                }
                
            }
        });
    

    //open navbar (for small resolutions)
        var nav = document.querySelector('#open-nav')
        if(nav)
        {
	    nav.addEventListener('click', function() {
		var buttons = document.querySelectorAll('.header-menu-btn');
		for(let i=0; i<buttons.length; i++)
		{
			
			if(buttons[i].style.visibility==="hidden")
			{
				buttons[i].style.visibility='visible';
			}
			else
			{
				buttons[i].style.visibility="hidden";
			}
		}
    });
    }


        //open pop-up with search bar
        document.querySelector('#button-search').addEventListener("click", function () {
            var background = document.querySelector('#semitransp-bckgr');
            var searchWindow = document.querySelector('#search');
            searchWindow.style.visibility="visible";
            background.style.visibility="visible";

        });
        
        //send XMLHttpRequest

        var xmlhttp = new XMLHttpRequest();
        var url = "myLinks.txt";

        xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myArr = JSON.parse(this.responseText);
            getLinks(myArr);
        }
        };
        xmlhttp.open("GET", url, true);
        xmlhttp.send();

        function getLinks(arr) {
        var out = "";
        var i;
        for(i = 0; i < arr.length; i++) {
            out += '<a href="' + arr[i].url + '">' + 
            arr[i].display + '</a><br>';
        }
        document.getElementById("results").innerHTML = out;
        }
            
        //close pop-up with search bar
        document.querySelector('#button-exit').addEventListener("click", function () {
            var searchWindow = document.querySelector('#search');
            var background = document.querySelector('#semitransp-bckgr');
            searchWindow.style.visibility="hidden";
            background.style.visibility="hidden";
        });


        function readMore()
		{
		  var dots = document.getElementById("dots");
		  var moreText = document.getElementById("more");
		  var btnText = document.getElementById("myBtn");

		  if (dots.style.display === "none") {
		    dots.style.display = "inline";
		    btnText.innerHTML = "Read more"; 
		    moreText.style.display = "none";
		  } else {
		    dots.style.display = "none";
		    btnText.innerHTML = "Read less"; 
		    moreText.style.display = "inline";
		  }
		}
        

   

        


