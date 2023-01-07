const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
console.log(checkboxes);
let lastChecked;

function match(event) {
    let isBetween = false;
    if(event.shiftKey && this.checked){
        checkboxes.forEach(checkbox => {
            if(checkbox === this || checkbox === lastChecked) {
                isBetween = !isBetween;
            }
            if(isBetween){
                checkbox.checked = true;
            }
        })
    }
    lastChecked = this;
}


checkboxes.forEach(input => input.addEventListener('click', match))

