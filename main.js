// تخزين المحتوى العربي الموجود بالفعل
let arabic = document.getElementById("text").innerHTML;

// تجهيز المحتوى الإنجليزي من القالب المخفي
let english = document.getElementById("text2").innerHTML;

let isArabic = true;

function swap() {
  let t = document.getElementById("text");

  if (isArabic) {
    t.innerHTML = english;
    t.style.direction = "ltr";
  } else {
    t.innerHTML = arabic;
    t.style.direction = "rtl";
  }

  isArabic = !isArabic;
  
  // العودة لأعلى الصفحة عند تغيير اللغة
  window.scrollTo(0, 0);
}
