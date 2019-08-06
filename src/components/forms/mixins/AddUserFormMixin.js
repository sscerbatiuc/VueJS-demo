/**
 * Mixin containing functions that should be reused inside the components.
 * @type {{methods: {baseMethod(*): void}}}
 */
module.exports = {
    methods: {
        /**
         * This is a base method intended to be re-used in the component as is.
         * @param arg - whatever
         */
        baseMethod(arg){
            console.log("Mixin: calling a function from the parent with args {" + arg + "}"); // eslint-disable-line
        }
    }
};