window.addEventListener('DOMContentLoaded', () => {
    console.log("Ji");

    function toggleHide() {
      var x = document.querySelector(".nav-items-list");
      x.classList.toggle("items-list-hidden")
    }

    toggleHide();

    document.getElementById("burger").addEventListener("click", function() {
      toggleHide();
    })

    if(window.matchMedia("(max-width: 600px)").matches) {

      console.log("hello")

      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          console.log(entry.intersectionRatio)
          if (entry.intersectionRatio <0.10) {
              // console.log(document.querySelector(`.header>.nav-items>a[href="#${id}`))
            document.querySelector(`.nav-items-list`).classList.add('absolute-list');
          } else {
            document.querySelector(`.nav-items-list`).classList.remove('absolute-list');
          }
        });
      }, {threshold: [0,0.05,0.1]});
    
      console.group(document.querySelectorAll('.name-section'))
      
      document.querySelectorAll('.name-section').forEach((section) => {
        observer.observe(section);
      })
      console.log(document.querySelectorAll('.nav-items>a'))
      document.querySelectorAll('.nav-items>a').forEach((section) => {
        section.addEventListener("click", function() {
          toggleHide();
          console.log("Hello")
        })
      })
    }


    //const observer_mobile
    if(window.matchMedia("(min-width: 600px)").matches)
    {    
      const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const id = entry.target.getAttribute('id');
        console.log(entry.intersectionRatio, id)
        var ratio = window.innerHeight*0.51/entry.target.offsetHeight;
        console.log("RATIO"+ratio)
        if (entry.intersectionRatio > ratio) {
            // console.log(document.querySelector(`.header>.nav-items>a[href="#${id}`))
          document.querySelector(`.header>.nav-items-list>.nav-items>a[href="#${id}"]`).parentElement.classList.add('clicked');
        } else {
          document.querySelector(`.header>.nav-items-list>.nav-items>a[href="#${id}"]`).parentElement.classList.remove('clicked');
        }
      });
    }, {threshold: [0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1.0], root: document.querySelector("new-content")});
  
    
    document.querySelectorAll('.content-item[id]').forEach((section) => {
      observer.observe(section);
    })
    ;}
  });

