// Countdown!
var before="our big day!"
var current="The big day is finally here!!!"
var montharray=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec")
function countdown(yr,m,d){
	var today=new Date()
	var todayy=today.getYear()
	if (todayy < 1000)
		todayy+=1900
	var todaym=today.getMonth()
	var todayd=today.getDate()
	var todayh=today.getHours()
	var todaymin=today.getMinutes()
	var todaystring=montharray[todaym]+" "+todayd+", "+todayy+" "+todayh+":"+todaymin
	var futurestring=montharray[m-1]+" "+d+", "+yr
	dd=Date.parse(futurestring)-Date.parse(todaystring)
	dday=Math.floor(dd/(60*60*1000*24)*1)
	dhour=Math.floor((dd%(60*60*1000*24))/(60*60*1000)*1)
	dmin=Math.floor(((dd%(60*60*1000*24))%(60*60*1000))/(60*1000)*1)
	var difference=(Math.round((Date.parse(futurestring)-Date.parse(todaystring))/(24*60*60*1000))*1)
	if (difference==0)
		document.write(current)
	else if (difference>0)
		document.getElementById('count').innerHTML += ("<strong>" +dday+ "</strong> days, <strong>"+dhour+"</strong> hours, & <strong>"+dmin+"</strong> minutes until <strong>"+before+"</strong>")
}
countdown(2017,10,21)


// Arrow/Link scroll to Sections!		
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});	


// Responsive Helper
if ($(window).width() > 800) {
  // Scroll reveal!
  window.sr = ScrollReveal();
  sr.reveal('.one', {delay: 400, reset:true});
  sr.reveal('.two', {delay: 800, reset:true});
  sr.reveal('.three', {delay: 1200, reset:true});
  sr.reveal('.four', {delay: 1600, reset:true});
  sr.reveal('.five', {delay: 2000, reset:true});
}
else {
}

if ($(window).width() > 415) {
  // 'Our Story' Nav Update!
  function update() {
      if ($(window).scrollTop() > 800) {
          $('#ourStory').animate({
              "bottom": '0px'
          }, 100);
      } else {
          $('#ourStory').animate({
              "bottom": '100px'
          }, 100);
      }
  }
  setInterval(update, 500);
}
else {
}




