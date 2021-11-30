function messaging() {
    if (loggedIn === true) {
        document.location.replace('/profile/messaging')
    }
}

document.addEventListener('#messaging').on('submit', messaging);