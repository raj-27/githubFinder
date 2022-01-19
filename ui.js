class UI {
    constructor() {
        this.profile = document.getElementById('profile')
    }
    showProfile(user) {
        this.profile.innerHTML = `
        <div class="card card-body mb-3">
        <div class="row mt-2 justify-content-center">
            <div class="col-md-5 col-lg-4 col-sm-12 mb-2 ">
                <img src="${user.avatar_url}" class='img-fluid mb-4 d-block' alt="" srcset="">
                <a href="${user.html_url}" target="_blank" class='btn btn-sm btn-lg btn-md btn-primary ' rel="noopener noreferrer">View Profile</a>
            </div>
            <div class="col-md-7 col-lg-8 col-sm-12 bg-dark p-2">
                <div class="badge bg-primary">Pulic resos: ${user.public_repos}</div>
                <div class="badge bg-secondary ">Pulic gists: ${user.public_gists}</div>
                <div class="badge bg-success">Followers: ${user.followers}</div>
                <div class="badge bg-info">Following: ${user.following}</div>
            </div>
        </div>
    </div>
    <h3 class='heading mb-3'>Latest Repos</h3>
    <div id=repos></div>
   `
    }

    showRepo(repository) {
        let output = '';

        repository.forEach(repo => {
            output += `
        <div class="card card-body mb-2">
          <div class="row">
            <div class="col-md-6">
              <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            </div>
            <div class="col-md-6">
            <span class="badge bg-primary">Stars: ${repo.stargazers_count}</span>
            <span class="badge bg-secondary">Watchers: ${repo.watchers_count}</span>
            <span class="badge bg-success">Forks: ${repo.forms_count}</span>
            </div>
          </div>
        </div>
      `;
        });
        let rep = document.querySelector('#repos');
        rep.innerHTML = output;
    }
    showAlert(msg, className) {
        this.clearAlert();
        let div = document.createElement('div');
        div.className = className;
        div.innerText = msg;
        let container = document.querySelector('.searchContainer')
        let search = document.querySelector('.search');
        container.insertBefore(div, search);
        setTimeout(() => {
            this.clearAlert();
        }, 2500)

    }
    clearAlert() {
        let alert = document.querySelector('.alert');
        if (alert) {
            alert.remove();
        }
    }
    clearProfile() {
        this.profile.innerHTML = ''
    }
}