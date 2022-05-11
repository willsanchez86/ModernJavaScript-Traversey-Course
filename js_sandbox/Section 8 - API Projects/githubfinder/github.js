class Github {
    constructor() {
        this.client_id = 'dd7e28fd98b0195fb323';
        this.client_secret = '8607194b6d9a31fc31f4db13b70c94d61e79d532';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return { profile }
    }
}