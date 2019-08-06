<template>
    <div class="hello">
        <h1 id="welcome-message">{{ msg }}</h1>
        <button v-b-modal.modal-1>Add user</button>
        <base-modal title="Register user">
            <div slot="body">
                <add-user-form/>
            </div>
        </base-modal>
    </div>
</template>

<script>
    import AddUserForm from '@/components/forms/AddUserForm.vue'
    import BaseModal from "@/components/modals/BaseModal";

    export default {
        name: 'MainContainer',
        components: {
            'base-modal': BaseModal,
            'add-user-form': AddUserForm},
        props: {
            msg: String
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
