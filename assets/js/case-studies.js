/*--- Case Studies Reveal Animation ---*/

const revealObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

revealObserver.unobserve(entry.target);

}

});

},{

threshold:.18,
rootMargin:"0px 0px -80px 0px"

});

document.querySelectorAll(`
.case-overview-content,
.case-overview-feature-card,
.case-study-badge,
.case-study-title,
.case-study-description,
.case-study-card,
.approach-badge,
.approach-title,
.approach-description,
.approach-card
`).forEach((element,index)=>{

element.style.transitionDelay=`${index*10}ms`;

revealObserver.observe(element);

});