/**
 * @WIP: this file is part of the configuration that should compile the vue components using rollup.js.
 * Preliminary results have shown that it does not allow to build the vue components separately.
 *
 */
import App from './App'
import BaseModal from "@/components/modals/BaseModal";
import MainContainer from "@/components/layout/containers/MainContainer";
import AddUserForm from "@/components/forms/AddUserForm";
import CustomAddUserForm from "@/components/forms/CustomAddUserForm";
import BaseInput from "@/components/forms/inputs/BaseInput";

export function install(Vue) {
    if (install.installed) return;
    install.installed = true;
    Vue.component('App', App);
    Vue.component('BaseModal', BaseModal);
    Vue.component('BaseInput', BaseInput);
    Vue.component('MainContainer', MainContainer);
    Vue.component('AddUserForm', AddUserForm);
    Vue.component('CustomAddUserForm', CustomAddUserForm);
}

const plugin = {
  install
};

let GlobalVue = null;
if(typeof window !== 'undefined'){
    GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
    GlobalVue = global.Vue;
}
if(GlobalVue){
    GlobalVue.use(plugin);
}

export default App;
export default BaseInput;
export default BaseModal;
export default MainContainer;
export default AddUserForm;
export default CustomAddUserForm;