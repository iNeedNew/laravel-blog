<template>
    <form>
        <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <input v-model="email" type="email" class="form-control" id="email">
        </div>
        <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input v-model="password" type="password" class="form-control" id="password">
        </div>
        <!--        <div class="mb-3 form-check">-->
        <!--            <input type="checkbox" class="form-check-input" id="exampleCheck1">-->
        <!--            <label class="form-check-label" for="exampleCheck1">Check me out</label>-->
        <!--        </div>-->
        <button :disabled="!isDisabled" @click.prevent="signIn" type="submit" class="btn btn-primary">Submit</button>
    </form>
</template>

<script>
import router from "../../router";

export default {
    data() {
        return {
            email: "",
            password: "",
        }
    },
    methods: {
        signIn() {
            axios.post('/api/auth/login', {
                email: this.email,
                password: this.password,
            }).then((res) => {
                console.log(res)
                if (res.status === 200) {
                    localStorage.auth = JSON.stringify({
                        access_token: res.data.access_token,
                        token_type: res.data.token_type,
                        expires_in: res.data.expires_in
                    });
                }
            }).catch((res) => {
                console.log(res);
            })
        }
    },
    computed: {
        isDisabled() {
            return this.email && this.password;
        },
    },
    name: "SignIn"
}
</script>

<style scoped>

</style>
