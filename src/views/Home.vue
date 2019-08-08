<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <MainContainer msg="Inther Core Web 3.0"/>
    </div>
</template>

<script>
    // Note: @ is an alias to /src
    import MainContainer from "@/components/layout/containers/MainContainer";

    export default {
        name: 'home',
        components: {
            "MainContainer": MainContainer

        }
    }
</script>
