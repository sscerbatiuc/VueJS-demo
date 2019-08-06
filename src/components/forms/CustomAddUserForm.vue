<template>
    <base-add-user-form>
        <div slot="custom">
            <base-input label="Custom field"
                        placeholder="This is a custom field injected into the core form"
                        type="date">
            </base-input>
        </div>
    </base-add-user-form>
</template>

<script>
    import AddUserForm from "@/components/forms/AddUserForm";
    import BaseInput from "@/components/forms/inputs/BaseInput";

    export default {
        extend: AddUserForm,
        name: "CustomAddUserForm",
        components: {
            'base-add-user-form': AddUserForm,
            'base-input': BaseInput
        }
    }
</script>

<style scoped>

</style>