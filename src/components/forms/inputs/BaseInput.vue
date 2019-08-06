<template>
    <b-form-group v-bind:label="label">
        <b-form-input v-bind="$attrs"
                      v-bind:type="type"
                      v-bind:required="required"
                      v-on:input="updateInput"
                      v-bind:placeholder="placeholder">
        </b-form-input>
    </b-form-group>
</template>

<script>
    export default {
        name: "base-input",
        props: {
            label: String,
            type: String,
            placeholder: String,
            required: Boolean
        },
        methods: {
            updateInput(evt){
                this.$emit('input', evt.target.value);
            }
        }
    }
</script>

<style scoped>

</style>