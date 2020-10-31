// WRITE YOUR CODE IN HERE:

for (let i = 0; i < querySelectorAll("li").length; i++) {
    document.querySelectorAll("li").classList.toggle("highlight");
    document.querySelectorAll(".highlight").classList.toggle("highlight");

}
 
