// // get the element to animate
// var element = document.querySelector("content-item");//.getElementById('box');

// var navItems = document.querySelector("nav-item");



// var elementHeight = element.clientHeight;

// // listen for scroll event and call animate function
// document.addEventListener('scroll', animate);

// // check if element is in view
// function inView() {
//   // get window height
//   var windowHeight = window.innerHeight;
//   // get number of pixels that the document is scrolled
//   var scrollY = window.scrollY || window.pageYOffset;
  
//   // get current scroll position (distance from the top of the page to the bottom of the current viewport)
//   var scrollPosition = scrollY + windowHeight;
//   // get element position (distance from the top of the page to the bottom of the element)
//   var elementPosition = element.getBoundingClientRect().top + scrollY + elementHeight;
  
//   // is scroll position greater than element position? (is element in view?)
//   if (scrollPosition > elementPosition) {
//     return true;
//   }
  
//   return false;
// }

// // animate element when it is in view
// function animate() {
//   // is element in view?
//   if (inView()) {
//       // element is in view, add class to element
//       element.classList.add('animate');
//   }
// }

var publications = [
  {
      "title": "Dialog Driven Face Construction using GANs",
      "authors": "Malaika Vijay, Meghana, Nishant Aklecha, Ramamoorthy Srinath",
      "at":"ICTAI 2020",
      "year": 2020,
      "doi": "https://doi.org/10.1109/ICTAI50040.2020.00104",
      "pdf": "#"
  },
  {
      "title": "Detection of Emphasis Words in Short Texts – A Context Aware Label Distribution Learning Approach",
      "authors": "Meghana, Bhaskarjyoti Das",
      "at":"ICAICR 2020",
      "year": 2021,
      "doi": "https://doi.org/10.1007/978-981-16-3660-8_32",
      "pdf": "#"
  }
]

window.addEventListener('DOMContentLoaded', () => {
    console.log("Ji");

    function toggleHide() {
      var x = document.querySelector(".nav-items-list");
      // if (x.style.display !== "none") {
          // x.style.display = "none";
      x.classList.toggle("items-list-hidden")
    }

    toggleHide();

    document.getElementById("burger").addEventListener("click", function() {
      toggleHide();
        // var x = document.querySelector(".nav-items-list");
        // if (x.style.display !== "none") {
            // x.style.display = "none";
            // x.classList.toggle("items-list-hidden")
            // c.classList.remove("fa-chevron-up")
            // c.classList.add("fa-chevron-down")
        //   } else {
            // x.style.display = "block";
            // x.classList.remove("items-list-hidden")
            // c.classList.remove("fa-chevron-down")
            // c.classList.add("fa-chevron-up")
        //   }
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
      // Track all sections that have an `id` applied
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

    

    // var c = document.querySelector("#chev");

    // function myFunction() {
    //     var x = document.querySelector(".nav-items-list");
        
    //     if (x.style.display !== "none") {
    //       x.style.display = "none";
    //       c.classList.remove("fa-chevron-up")
    //       c.classList.add("fa-chevron-down")
    //     } else {
    //       x.style.display = "block";
    //       c.classList.remove("fa-chevron-down")
    //       c.classList.add("fa-chevron-up")
    //     }
    //   }
    // if(window.matchMedia("(max-width: 600px)").matches) {
    //     var wrap = document.querySelector(".header");
    //     console.log(wrap)
    //     // document.addEventListener("scroll", function(e) {
    //     //     console.log(wrap.scrollY)
    //     //     if (this.scrollTop > 200) {
    //     //         alert("Hey")
    //     //         c.style.display = "block";
    //     //       // wrap.classList.add("fix-search");
    //     //     } else {
    //     //         c.style.display = "none";
    //     //       // wrap.classList.remove("fix-search");
    //     //     }
            
    //     //   });

    //     document.querySelector(".nav-items-list").addEventListener("click", function(e) {
    //         myFunction();
    //     })
    // }
    


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
  
    // Track all sections that have an `id` applied
    document.querySelectorAll('.content-item[id]').forEach((section) => {
      observer.observe(section);
    })
    ;}
  });

