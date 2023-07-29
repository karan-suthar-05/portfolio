let menu = document.getElementById("menu-icon");
let nav = document.querySelector(".nav");
menu.addEventListener("click",()=>{
    menu.classList.toggle('bx-x');
    nav.classList.toggle('active');

})


let sections = document.querySelectorAll("section");
let links = document.querySelectorAll(".nav a");
let changeLinkColor = ()=>{
    let scrollPosition = window.pageYOffset + 80;
    console.log(scrollPosition);
    sections.forEach((s)=>{
        console.log(s.offsetTop);
        if(scrollPosition >= s.offsetTop && scrollPosition < s.offsetTop + s.offsetHeight)
        {
            let sid = s.getAttribute("id");
            links.forEach((l)=>{
                if(l.getAttribute("href").slice(1) === sid)
                {
                    l.classList.add("active");
                }
                else
                {
                    l.classList.remove("active");

                }
            })
        }
    })
}
window.addEventListener("scroll",changeLinkColor);
links.forEach((a)=>{
    a.addEventListener("click",()=>{
        menu.classList.toggle('bx-x');
    nav.classList.toggle('active');
        links.forEach((l)=>{
            l.classList.remove("active");
        })
        if(a.id=="hlink")
        {
            a.classList.add("active");
        }
        else if(a.id=="alink")
        {
            a.classList.add("active");
        }
        else if(a.id=="slink")
        {
            a.classList.add("active");
        }
        else if(a.id=="plink")
        {
            a.classList.add("active");
        }
        else if(a.id=="clink")
        {
            a.classList.add("active");
        }
        
    })
})

// about section
let p = document.getElementById("about-p");
let aboutBtn = document.getElementById("abour-readmore");
aboutBtn.addEventListener("click",()=>{
    
    if(aboutBtn.innerText=="Read More")
    {

        let para = "";
        para += p.innerText;
    para += ` I'm particularly fascinated by the intersection of design and development, striving to enhance user experiences and create seamless interactions.
                
    Though I don't have professional experience yet, I've worked on personal and academic projects to hone my skills. I'm constantly refining my frontend design abilities.
    
    As an enthusiastic learner, I stay updated with the latest trends and technologies in web development through online courses and workshops. I thrive in collaborative team environments, where I can contribute my skills effectively and learn from others.
    
    If you're looking for a dedicated full-stack developer and web designer, I invite you to explore my portfolio. Let's connect and collaborate on your next project, creating impactful and innovative solutions together.`;
    setTimeout(() => {
        
        p.innerText = para;
        aboutBtn.innerText = "Read Less";
    }, 100);
}
else
{
        setTimeout(() => {
            p.innerText = `Hello, I'm Karan Suthar, a BCA student specializing in full-stack development, programming, and web design. I'm passionate about creating engaging websites and web applications using HTML, CSS, JavaScript,php,and Node.js.

            and i am also a passionate programmer with expertise in C, C++, and Java. I have a deep love for coding and enjoy tackling complex problems through logical thinking and creative solutions.

            With a strong foundation in computer science and practical programming skills, I enjoy solving complex problems and bringing innovative ideas to life through technology.`;
        aboutBtn.innerText = "Read More";
        }, 100);
    }

})

ScrollReveal({
     reset: false,
     duration:2000,
     delay:10
});

ScrollReveal().reveal('.home-content , .heading',{origin:'top'});
ScrollReveal().reveal('.home-img , .service-container , .portfolio-box , .contact form',{origin:'bottom'});
ScrollReveal().reveal('.about-img , .home-content h1 ',{origin:'left'});
ScrollReveal().reveal('.about-content , .home-content p ',{origin:'right'});


var typed = new Typed('#my-text', {
    strings: [' Frontend Developer ', ' Backend Developer','3d Modeler','Programmer',' Web Designer'],
    typeSpeed: 100,
    smartBackspace: true,
    loop:true,
    fadeOut: true,
    fadeOutClass: 'typed-fade-out',
    fadeOutDelay: 100,   
  });