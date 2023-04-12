var tabs = document.querySelectorAll(".tabs ul li");
var tab_wraps = document.querySelectorAll(".tab_wrap");
var tab_wraps2 = document.querySelectorAll(".tracking-wider");
var tabs2=document.querySelectorAll(".tabs2 ul li");
console.log(tabs);

tabs.forEach(function(tab, tab_index){
	
	tab.addEventListener("click", function(){
		tabs.forEach(function(tab){
			
			tab.classList.remove("active2");
		})
		tab.classList.add("active2");

		tab_wraps.forEach(function(content, content_index){
			if(content_index == tab_index){
				content.style.display = "block";
			}
			else{
				content.style.display = "none";
			}
		})

		tab_wraps2.forEach(function(content2, content_index2){
		
			if(content_index2 == tab_index){
				content2.style.display = "block";
			}
			else{
				content2.style.display = "none";
			}
		})

	})
})

tabs2.forEach(function(tab, tab_index){
	tab.addEventListener("click", function(){

		tabs2.forEach(function(tab){
			tab.classList.remove("active2");
		})
		tab.classList.add("active2");

		tab_wraps.forEach(function(content, content_index){
			if(content_index == tab_index){
				content.style.display = "block";
			}
			else{
				content.style.display = "none";
			}
		})

		tab_wraps2.forEach(function(content2, content_index2){
			
			if(content_index2 == tab_index){
				content2.style.display = "block";
			}
			else{
				content2.style.display = "none";
			}
		})

	})
})
