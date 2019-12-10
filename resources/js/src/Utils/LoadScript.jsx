export function labelActive() {
    let inputs = document.querySelectorAll('input.input-material');

    if (inputs) {
        setTimeout(() => {
            for (let input of inputs) {
                if (input.value != '') {
                    input.nextSibling.classList.add('active');
                }
                input.addEventListener('focus', (e) => {
                    e.target.nextSibling.classList.add('active');
                });
            }
        }, 100);
        for (let input of inputs) {
            input.addEventListener('blur', (e) => {
                e.target.nextSibling.classList.remove('active');
                if (e.target.value !== '') {
                    e.target.nextSibling.classList.add('active');
                } else {
                    e.target.nextSibling.classList.remove('active');
                }
            });
        }
    }
}
