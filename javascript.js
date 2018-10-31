$('.carousel').carousel({
	interval: 3000
})
document.addEventListener("DOMContentLoaded",function(){
	var traiqua = document.querySelector(".header-title__desc");
	var trenxuong = document.querySelector(".header-imges__img");
	var phaiqua = document.querySelector(".header-title__button");
	traiqua.classList.add('traiqua');
	phaiqua.classList.add('phaiqua');
	trenxuong.classList.add('trenxuong');
	//slide
	
	

	// bắt sự kienj cuộc chuột
	window.addEventListener('scroll',function(){
		var sangtrai = document.getElementsByClassName('sangtrai');
		if(window.pageYOffset >= 90){
			for (var i = 0; i < sangtrai.length; i++) {
				sangtrai[i].classList.add('cdsangtrai');
			}
		}
		var specials = document.getElementsByClassName('col-3-1');
		var anhcd = document.getElementsByClassName('textarea__img');
		if(window.pageYOffset >= 710){
			for (var i = 0; i < specials.length; i++) {
				if(i%2==0){
					specials[i].classList.add('specialsSangPhai');

				}
			}
		}

		if (window.pageYOffset >= 1000) {
			for (var i = 0; i < specials.length; i++) {
				if(i%2 != 0){
					specials[i].classList.add('specialsSangTrai')
				}
			}
		}

		if(window.pageYOffset > 1170){
			for (var i = 0; i < anhcd.length; i++) {
				anhcd[i].classList.add('anhhien');
			}
		}

		var dreamcol1 = document.querySelector('.dream-col1');
		var dreamcol2 = document.querySelector('.dream-col2');
		var dreamcol3 = document.querySelector('.dream-col3');
		if (window.pageYOffset > 1800) {
			dreamcol1.classList.add('dreamtraiqua');
			dreamcol2.classList.add('dreamduoilen');
			dreamcol3.classList.add('dreamphaiqua');
		}

		var imgquangcao = document.querySelector('.quangcao-left');
		var phone = document.querySelector('.quangcao-right');
		if(window.pageYOffset > 3130){
			imgquangcao.classList.add('dichtaicho');
			phone.classList.add('phonecd');
		}

		var contactcol1 = document.querySelector('.contact-col1');
		var contactcol2 = document.querySelector('.contact-col2');
		var contactcol3 = document.querySelector('.contact-col3');
		if(window.pageYOffset > 5950){
			contactcol1.classList.add('contacttraiqua');
			contactcol2.classList.add('contacttrenxuong');
			contactcol3.classList.add('contactphaiqua');
		}
	})
},false)