const appController = (function(){
    const content = document.querySelector(".content")
    const nav = document.querySelector("nav")
    const insertPage = (node) => {
        content.insertAdjacentHTML("afterbegin",node)
    }
    
    const redirectTo = (btn, linkPage) => {
        btn.addEventListener('click', () =>{
        clearContent()
        insertPage(linkPage)
        
        
        })
    }  
    const clearContent = () => {
        content.innerHTML = "";
    }
    const changeNavScrolled = () => {
        const option1 = document.querySelector(".option1")
        const trigger = document.querySelector(".trigger")
    
        const triggerOptions = {}
    
        const triggerObserver = new IntersectionObserver((entries,triggerObserver)=>{
            entries.forEach(entry => {
            !entry.isIntersecting ? option1.classList.add('scrolled-nav') : option1.classList.remove('scrolled-nav')
            })
        },triggerOptions)
        
        triggerObserver.observe(trigger)
        
    }
        return {redirectTo,changeNavScrolled,insertPage}

})()
export default appController 