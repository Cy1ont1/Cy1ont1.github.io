let home = document.getElementById("build-house")
let job = document.getElementById("masters-partnership")
let body = document.getElementById("body")

let modal = document.getElementById("modal")
let panel = document.getElementById("modal-panel")
let exit = document.getElementById("modal-exit")
let modalH = document.getElementById("nodal")

let choice = document.getElementById("modal-choice")
let master = document.getElementById("modal-master")
let masterEnd = document.getElementById("modal-master-end")
let exitM = document.getElementById("master-exit")

//  HOME
home.addEventListener("click", (e) => {
    modal.style.display = "flex"
    panel.style.display = "block"
    modalH.style.display = "flex"
    choice.style.display = "flex"

    body.style.height= "100vh"
    body.style.overflowY= "hidden"
})
// JOB
job.addEventListener("click", (e) => {
    modal.style.display = "flex"
    panel.style.display = "block"
    modalH.style.display = "flex"
    master.style.display = "flex"

    body.style.height= "100vh"
    body.style.overflowY= "hidden"
})
// EXIT
exit.addEventListener("click", (e) => {
    modal.style.display = "none"
    panel.style.display = "none"
    modalH.style.display = "none"
    choice.style.display = "none"
    master.style.display = "none"
    masterEnd.style.display = "none"

    body.style.height= ""
    body.style.overflowY= ""
})

// MODAL
modal.addEventListener("click", (e) => {
    modal.style.display = "none"
    panel.style.display = "none"
    modalH.style.display = "none"
    choice.style.display = "none"
    master.style.display = "none"
    masterEnd.style.display = "none"

    body.style.height= ""
    body.style.overflowY= ""
})

let id = document.getElementById("license")
let idNo = document.getElementById("no-license")
let btn = document.getElementById("form-btn")

idNo.addEventListener("change", (e) => {
    if (this.checked) {
        id.disabled = !id.disabled
        id.required = !id.required
    } else {
        id.disabled = !id.disabled
        id.required = !id.required
    }
})

let form = document.getElementById("form")

btn.addEventListener("click", (e) => {
    masterEnd.style.display = "flex"
    modal.style.display = "flex"
    panel.style.display = "block"
    modalH.style.display = "flex"
    master.style.display = "none"
})
// EXIT MASTER
exitM.addEventListener("click", (e) => {
    modal.style.display = "none"
    panel.style.display = "none"
    modalH.style.display = "none"
    choice.style.display = "none"
    master.style.display = "none"
    masterEnd.style.display = "none"

    body.style.height= ""
    body.style.overflowY= ""

    setTimeout(() => {
        form.onsubmit()
    }, 2000);
})
function ex1() {
    home.click()
}