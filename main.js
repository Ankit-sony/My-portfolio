
        var tablinks = document.getElementsByClassName("tab-links")
        var tabcontents = document.getElementsByClassName("tab-contents")
        function opentab(tabname){
            for(tablink of tablinks){
                tablink.classList.remove("active");
            }
            for(tabcontent of tabcontents){
                tabcontent.classList.remove("active-tab");
            }
            event.currentTarget.classList.add("active");
            document.getElementById(tabname).classList.add("active-tab");
        }
        // ksfdhksajhf
    
        var sidemenu = document.getElementById("sidemenu");
        function openmenu(){
            sidemenu.style.right = "0"
        }
        function closemenu(){
            sidemenu.style.right = "-200px"
        }

        const scriptURL = 'https://script.google.com/macros/s/AKfycbwq0alh05664ENBVz-DWGBSyKjoSA280l-nmhiNKMLwx-8ioAeslzucWHSx9BdQPL-wLw/exec'
        const form = document.forms['submit-to-google-sheet']
        const msg = document.getElementById("msg")
      
        form.addEventListener('submit', e => {
          e.preventDefault()
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {
                msg.innerHTML = "Message sent Successfully"
                setTimeout(function(){
                    msg.innerHTML = ""
                },5000)
                form.reset() 
            })
            .catch(error => console.error('Error!', error.message))
        })
    