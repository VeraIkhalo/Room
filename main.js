const burger =document.getElementById("burger");
 const mobileNav=document.getElementById("mobile-nav");

 function toggle(){
	 if(mobileNav.style.display === "none" ){
		 mobileNav.style.display = "block";
	 }
	 else{mobileNav.style.display = "none";}
 }
 
 burger.addEventListener("click", toggle) 



const images=[
             {imageURL:"images/desktop-image-hero-1.jpg",
			 heading:"Discover innovative ways to decorate",
			 paragraph:"We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form andnfunction in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."},

			 {imageURL:"images/desktop-image-hero-2.jpg",
			 heading:"We are available across the globe", 
			 paragraph:"With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."},
			 
			 {imageURL:"images/desktop-image-hero-3.jpg",
			 heading:"Manufactured with the best materials", 
			 paragraph:"Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."} ];
			 
			 const prev =document.querySelector(".prev");
			 const next =document.querySelector(".next");
			 const image =document.querySelector(".image");
			 const headEl =document.querySelector(".head");
			 const paragraphEl =document.querySelector(".paragraph");
			 let index =0;
			 
prev.addEventListener("click", function(e){
	if(index=== 0){
		index=images.length;}
	
headEl.innerHTML =images[index-1].heading;
paragraphEl.innerHTML =images[index-1].paragraph;
image.src =images[index-1].imageURL;	
	index--;  });			 
	
next.addEventListener("click", function(e){
	if(index=== images.length-1){
		index= -1;}
	
headEl.innerHTML =images[index+1].heading;
paragraphEl.innerHTML =images[index+1].paragraph;
image.src =images[index+1].imageURL	;
	index++;  });			 	