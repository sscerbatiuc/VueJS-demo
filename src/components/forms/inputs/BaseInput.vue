<template>
    <b-form-group v-bind:label="label">
        <b-form-input v-bind="$attrs"
                      v-bind:type="type"
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
            required: String // TODO: check how to specify it as boolean, since required="true" will not interpret is as Boolean
        },
        methods: {
            updateInput(evt) {
                if (evt.taget && evt.target.value) {
                    this.$emit('input', evt.target.value);
                }
            }
        }
    }
</script>

<style scoped>

</style>