class Github {
    constructor() {
        this.clientId = 'a20c00111dbee417260f';
        this.secret_id = 'fe09c89d0de6071fd7a69404473c27f7980f3087'
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getProfile(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            profile,
            repos
        }
    }
}