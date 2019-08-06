<template>
    <form>
        <div>
            <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                <!--Example 1: Using components from the bootstrap vue library as they are defined-->
                <b-form-group id="input-group-name" label="Name" label-for="input-name">
                    <b-form-input id="input-name"
                                  v-model="form.name"
                                  required
                                  placeholder="Please enter your name">
                    </b-form-input>
                </b-form-group>

                <!-- Example 2: Wrapped component. @see: forms/inputs/BaseInput -->
                <!--The base prefix is suggested for presentational components. @see: https://is.gd/FTKIz2-->
                <!--TODO: specify as props the id for the form-group as well-->
                <base-input label="Password"
                            type="password"
                            v-model="form.password"
                            placeholder="Please enter the password">
                </base-input>

                <b-form-group id="input-group-age" label="Name" label-for="input-age">
                    <b-form-input
                            id="input-age"
                            type="number"
                            v-model="form.age"
                            required
                            placeholder="Please enter your age">
                    </b-form-input>
                </b-form-group>

                <b-form-group id="input-group-gender" label="Gender" label-for="input-gender">
                    <b-form-select
                            id="input-3"
                            v-model="form.gender"
                            :options="selectOptions"
                            required>
                    </b-form-select>
                </b-form-group>

                <b-form-group id="input-group-checkboxes">
                    <b-form-checkbox-group v-model="form.active" id="checkboxes-active">
                        <b-form-checkbox value="me">Active</b-form-checkbox>
                    </b-form-checkbox-group>
                </b-form-group>

                <slot name="custom">

                </slot>
                <b-button type="submit" variant="primary">Submit</b-button>
                <b-button type="reset" variant="danger">Reset</b-button>
            </b-form>
        </div>
    </form>
</template>

<script>

    import BaseInput from '@/components/forms/inputs/BaseInput'

    export default {
        name: "AddUserForm",
        components: {
            'base-input': BaseInput
        },
        data() {
            return {
                form: {
                    name: '',
                    age: null,
                    password: '',
                    gender: null,
                    active: []
                },
                selectOptions: [{text: 'Select One', value: null}, 'Male', 'Female'],
                show: true
            }
        },
        methods: {
            onSubmit(evt) {
                evt.preventDefault();
                alert(JSON.stringify(this.form))
            },
            onReset(evt) {
                evt.preventDefault();
                // Reset our form values
                this.form.age = '';
                this.form.name = '';
                this.form.gender = null;
                this.form.active = [];
                // Trick to reset/clear native browser form validation state
                this.show = false;
                this.$nextTick(() => {
                    this.show = true
                })
            }
        }
    }
</script>

<style scoped>

</style>