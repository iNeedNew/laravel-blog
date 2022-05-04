<template>
    <div class="container">
        <div class="row">
            <div class="header p-3">
                <ul class="nav justify-content-center">
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{name:'auth.sign_in'}">Sign In</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{name:'auth.sign_up'}">Sign Up</router-link>
                    </li>
                </ul>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="content w-50">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Index",
}
</script>

<style scoped>

</style>
