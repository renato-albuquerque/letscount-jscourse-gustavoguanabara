function count() {
    let start = document.querySelector("#start")
    let end = document.querySelector("#end")
    let step = document.querySelector("#step")
    /* let btnCount = document.querySelector(".btnCount") */
    let result = document.querySelector("#result")

    if(start.value.length == 0 || end.value.length == 0 || step.value.length == 0) {    /* Check if each input box is empty. */
        alert("[ERROR] Data is missing.")
    } else {
        result.innerHTML = `The result is: `
        result.style.color = "red"
        result.style.fontWeight = "bold"

        let sta = Number(start.value)
        let end = Number(end.value)
        let ste = Number(step.value)

        for(let c = sta; c <= end; c += ste) {
            result.innerHTML += 
        }




    }
    


    
    
}