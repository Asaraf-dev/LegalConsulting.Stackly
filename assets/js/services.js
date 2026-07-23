/*--- Services Page Reveal ---*/

const servicesObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

servicesObserver.unobserve(entry.target);

}

});

},{

threshold:.2,
rootMargin:"0px 0px -80px 0px"

});

document.querySelectorAll(

`
.service-overview-content,
.service-overview-feature-card,
.practice-badge,
.practice-title,
.practice-description,
.practice-card,
.industry-badge,
.industry-title,
.industry-description,
.industry-card
`

).forEach((el,index)=>{

el.style.transitionDelay=`${index*10}ms`;

servicesObserver.observe(el);

});