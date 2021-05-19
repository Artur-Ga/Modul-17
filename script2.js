const btn = document.querySelector(".btn");

let btn_status = ""

const icon_1 = document.querySelector(".icon_1");

const icon_2 = document.querySelector(".icon_2");

btn.addEventListener("click", () => {
  if(btn_status == "clicked") {
    icon_1.style.display = 'inline'
    icon_2.style.display = 'none'
    btn_status = ""
  }
  else {
    icon_1.style.display = 'none'
    icon_2.style.display = 'inline'
    btn_status = "clicked"
  }
});