let github = new Github();
let ui = new UI();
let myInput = document.querySelector('.myInput');

myInput.addEventListener('keyup', (e) => {
    let userInput = e.target.value;
    if (userInput !== '') {
        github.getProfile(userInput)
            .then(data => {
                if (data.profile.message === 'Not Found') {
                    ui.showAlert(`Sorry we can't Find this User`, 'alert alert-danger')
                } else {
                    ui.showProfile(data.profile);
                    ui.showRepo(data.repos);
                }
            })
    } else {
        ui.clearProfile();
    }
})