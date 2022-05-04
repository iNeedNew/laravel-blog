<template>
    <form>
        <div class="mb-3">
            <label for="nickname" class="form-label">Nickname</label>
            <input v-model="nickname" type="email" class="form-control" id="nickname">
        </div>
        <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <input v-model="email" type="email" class="form-control" id="email">
        </div>
        <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input v-model="password" type="password" class="form-control" id="password">
        </div>
        <div class="mb-3">
            <label for="password-confirmation" class="form-label">Password confirm</label>
            <input v-model="password_confirmation" type="password" class="form-control" id="password-confirmation">
        </div>
        <!--        <div class="mb-3 form-check">-->
        <!--            <input type="checkbox" class="form-check-input" id="exampleCheck1">-->
        <!--            <label class="form-check-label" for="exampleCheck1">Check me out</label>-->
        <!--        </div>-->
        <button :disabled="!isDisabled" @click.prevent="signUp" type="submit" class="btn btn-primary">Submit</button>
    </form>
</template>

<script>
import router from "../../router";

export default {
    data() {
        return {
            nickname: "",
            email: "",
            password: "",
            password_confirmation: "",
        }
    },
    methods: {
        signUp() {
            axios.post('/api/auth/register', {
                nickname: this.nickname,
                email: this.email,
                password: this.password,
                password_confirmation: this.password_confirmation,
            }).then((res) => {
                console.log(res)
                router.push({name: 'post.index'})
            }).catch((res) => {
                console.log(res);
            })
        }
    },
    computed: {
        isDisabled() {
            return this.nickname && this.email && this.password && this.password_confirmation;
        },
    },
    name: "SignUp"
}
</script>

<style scoped>

</style>
