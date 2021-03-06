// Settings menu
(function(Global, app) {

    var view = app.views.loginView = Global.GenericView.extend({
        name: 'login',

        /**
         * Persistent views are rendered once
         * And must be destroyed manually
         * In this case destroy only if login is successful
         */
        persistent: true,
        init: function () {
            console.log('inited', this.name);

            this.authenticate = this.authenticate.bind(this);
        },

        elements: {
            loginBtn: null,
            skipBtn: null,
            recoverPasswordBtn: null,
            emailField: null,
            closeSubNav: null,
            passwordField: null
        },

        /**
         * When markup is ready do your stuff :)
         */
        onRender: function() {

            console.log('render ' + this.name);
            this.getElements();
            this.bindEvents();
        },

        getElements: function () {

            this.elements.loginBtn = this.placeholder.querySelector('#initiate-authentication');
            this.elements.skipBtn = this.placeholder.querySelector('#continue-local');
            this.elements.recoverPasswordBtn = this.placeholder.querySelector('#recover-password');
            this.elements.emailField = this.placeholder.querySelector('#email-field');
            this.elements.closeSubNav = document.getElementById('close-subconfiguration');
            this.elements.passwordField = this.placeholder.querySelector('#password-field');
        },

        bindEvents: function () {

            Events.subscribe(this.elements.loginBtn, 'click', this.authenticate);
            Events.subscribe(this.elements.closeSubNav, 'click', this.closeSubNavigation);
            // Events.subscribe(this.elements.skipBtn, 'click', this.continueLocal);
            // Events.subscribe(this.elements.recoverPasswordBtn, 'click', this.recoverPassword);
        },

        unbindEvents: function () {

            Events.unsubscribe(this.elements.loginBtn, 'click', this.authenticate);
            Events.unsubscribe(this.elements.closeSubNav, 'click', this.closeSubNavigation);
            // Events.unsubscribe(this.elements.skipBtn, 'click', this.continueLocal);
            // Events.unsubscribe(this.elements.recoverPasswordBtn, 'click', this.recoverPassword);
        },

        /**
         * Get fields vaues and pass then to the model
         */
        authenticate: function (evnt) {

            evnt.preventDefault();

            // TO DO: validate fields
            app.model.authenticate({
                email: this.elements.emailField.value,
                password: this.elements.passwordField.value
            });
        },

        /**
         * Close login navigation
         */
        closeSubNavigation: function () {
            console.log('sub nav closed - login');
            this.parentElement.parentElement.innerHTML = '';
        },

        /**
         * Switch to local storage model
         */
        continueLocal: function (evnt) {
            evnt.preventDefault();
        },

        /**
         * Send password recovery mail
         */
        recoverPassword: function (evnt) {
            evnt.preventDefault();
        },

        /**
         * Remove event listeners and markup
         * Called manually
         * @return {Void}
         */
        destroy: function destroyLoginView() {
            this.rendered = false;
            this.unbindEvents();
        }
    });

})(window, window.app);