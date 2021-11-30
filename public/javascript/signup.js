async function signupFormHandler(event) {
    event.preventDefault();

    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const age = document.querySelector('#age-signup').value.trim();
    const first_name = document.querySelector('#firstName-signup').value.trim();
    const favorite = document.querySelector('#inputStateDrink').value.trim();
    const state = document.querySelector('#inputStateState').value.trim();

    if (username && favorite && state && password && age && first_name) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({
                username,
                password,
                age,
                first_name,
                favorite,
                state
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            console.log('success');
            document.location.replace('/profile');
        } else {
            console.log();
            alert(response.statusText);
        }
    }
}

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);