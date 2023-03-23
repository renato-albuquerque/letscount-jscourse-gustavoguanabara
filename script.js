function count() {
    let start = document.querySelector("#start")
    let end = document.querySelector("#end")
    let step = document.querySelector("#step")
    /* let btnCount = document.querySelector(".btnCount") */
    let result = document.querySelector("#result")

    if(start.value.length == 0 || end.value.length == 0 || step.value.length == 0) {    /* Check if each input box is empty. */
        // alert("[ERROR] Data is missing.")
        result.innerHTML = "Impossible to count."
        result.style.color = "red"
        result.style.fontWeight = "bold"
        result.style.fontStyle = "italic"
    } else {
        result.innerHTML = `The result is: <br>`
        result.style.color = "red"
        result.style.fontWeight = "bold"
        result.style.fontStyle = "italic"
        
        let s = Number(start.value)
        let e = Number(end.value)
        let st = Number(step.value)

        if(st <= 0) {
            alert("Invalid step. It will be considered step equal to 1.")
            st = 1
        }

        if(s < e) {
            // Count up
            for(let c = s; c <= e; c += st) {
                result.innerHTML += `${c} &#128073; `   /* Source to emojis: https://www.w3schools.com/charsets/ref_emoji.asp*/  
                /*Another way to write emoji: \u{1F449} */
            }
            result.innerHTML += "&#127937;"     
        } else {
            // Countdown
            for(let c = s; c >= e; c-= st) {
                result.innerHTML += `${c} &#128073; ` 
            }
            result.innerHTML += "&#127937;"     
        }
    }    
}