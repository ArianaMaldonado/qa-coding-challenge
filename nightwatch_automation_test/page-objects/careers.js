const commands = {
    fillForm: function (fullName, email, link, comments) {
        return this
            .setValue('@nameInput', fullName)
            .setValue('@emailInput', email)
            .setValue('@liInput', link)
            .setValue('@commentsInput', comments);

    },

    getErrorBorderColor: function () {
        return this
            .click('@sendBtn')
            .waitForElementVisible('@nameInput', 3000)
            .getCssProperty('@liInput', 'border', function (result) {
                console.log('Result:', result.value);
            });
    },

    getBorderNone: function () {
        return this
            .waitForElementVisible('@phoneInput', 2000)
            .getCssProperty('@phoneInput', 'border', function (result) {
                console.log('Result:', result.value);
            });
    }
}

module.exports = {
    url: 'https://inhouse.decemberlabs.com/careers/',
    elements: {
        // Pop up
        applyBtn: {
            selector: 'body > main > section.row.content_culture > article > div > a'
        },
        popUp: {
            selector: 'body > main > section.row.content_what_we_offer > div > div'
        },
        title: {
            selector: 'body > main > section.row.content_what_we_offer > div > div > div.start-project-form.content_form > h3'
        },
        sendBtn: {
            selector: '#wpforms-submit-870'
        },

        // Form
        nameInput: {
            selector: '#wpforms-870-field_0'
        },
        emailInput: {
            selector: '#wpforms-870-field_1'
        },
        phoneInput: {
            selector: '#wpforms-870-field_6'
        },
        liInput: {
            selector: '#wpforms-870-field_20'
        },
        fileInput: {
            selector: '#wpforms-870-field_22'
        },
        commentsInput: {
            selector: '#wpforms-870-field_2'
        }
    },
    commands: [commands]
}