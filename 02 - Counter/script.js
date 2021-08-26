let count = 0;

// value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

console.log(btns);
//comment

btns.forEach(function(btn) {
     btn.addEventListener('click', function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains('dec')){
            count--;
        }
        value.textContent = count;
     })
});
