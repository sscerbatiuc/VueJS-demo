<template>
    <div>
        <h1 id="welcome-message">{{ msg }}</h1>
        <button class="btn btn-dark" v-b-modal.modal-core>Add user</button>
        <div id="separator">&nbsp;</div>
        <button class="btn btn-info" v-b-modal.modal-custom>Add custom user</button>
        <base-modal id="modal-core" title="Register user">
            <div slot="body">
                <add-user-form/>
            </div>
        </base-modal>
        <base-modal id="modal-custom" title="(Custom) Register user">
            <div slot="body">
                <custom-add-user-form/>
            </div>
        </base-modal>
    </div>
</template>

<script>
    import AddUserForm from '../../forms/AddUserForm.vue'
    import BaseModal from "../../modals/BaseModal";
    import CustomAddUserForm from "../../forms/CustomAddUserForm";

    export default {
        name: 'MainContainer',
        components: {
            'base-modal': BaseModal,
            'add-user-form': AddUserForm,
            'custom-add-user-form': CustomAddUserForm
        },
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

    #separator {
        width: 20px;
        display: inline;
    }
</style>
