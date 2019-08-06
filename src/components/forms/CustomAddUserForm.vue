<template>
    <base-add-user-form>
        <!-- Custom block: place whatever the child should add inside the slot="custom" -->
        <div slot="custom">
            <base-input label="Custom field"
                        placeholder="This is a custom field injected into the core form"
                        type="date">
            </base-input>
            <button class="btn btn-outline-info" v-on:click="useBaseFunction()">Use base functionality</button>
            <button class="btn btn-outline-danger" v-on:click="overwrittenMethod">Custom functionality</button>
        </div>
    </base-add-user-form>
</template>

<script>
    import AddUserForm from "@/components/forms/AddUserForm";
    import BaseInput from "@/components/forms/inputs/BaseInput";
    let formMixin = require('./mixins/AddUserFormMixin');

    export default {
        extend: AddUserForm,
        name: "CustomAddUserForm",
        components: {
            'base-add-user-form': AddUserForm,
            'base-input': BaseInput
        },
        mixins: [formMixin],
        methods: {
            /**
             * This is an example of how to override functions in ChildComponent.
             * @see https://is.gd/8lWXZz
             * @param evt - Event
             */
            overwrittenMethod: function(evt) {
                evt.preventDefault(); // btn click inside the form triggers the submit
                AddUserForm.methods.overwrittenMethod();
                console.log('Child: custom logic inside overwritten function'); // eslint-disable-line
            },
            /**
             * This is an example of how to reuse the method from the parent.
             * @param evt - Event
             */
            useBaseFunction: function(evt) {
                this.baseMethod("Custom argument.Whatever.");
                console.log('Child custom logic inside function that reuses the function from the parent.')
            }
        }
    }
</script>

<style scoped>

</style>