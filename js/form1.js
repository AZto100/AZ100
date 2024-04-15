// Define form element
const form = document.getElementById("kt_docs_repeater_form");

// Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/
var validator = FormValidation.formValidation(
    form,
    {
        plugins: {
            trigger: new FormValidation.plugins.Trigger(),
            bootstrap: new FormValidation.plugins.Bootstrap5({
                rowSelector: ".fv-row",
                eleInvalidClass: "",
                eleValidClass: ""
            }),
            excluded: new FormValidation.plugins.Excluded({
                excluded: function (field, ele, eles) {
                    if (form.querySelector('[name="' + field + '"]') === null) {
                        return true;
                    }
                },
            }),
        }
    }
);

const addFields = function(index) {
    const namePrefix = "data[" + index + "]";

    // Add validators
    validator.addField(namePrefix + "[name]", {
        validators: {
            notEmpty: {
                message: "Text input is required"
            }
        }
    });

    validator.addField(namePrefix + "[email]", {
        validators: {
            emailAddress: {
                message: "The value is not a valid email address"
            },
            notEmpty: {
                message: "Email address is required"
            }
        }
    });

    validator.addField(namePrefix + "[primary][]", {
        validators: {
            notEmpty: {
                message: "Required"
            }
        }
    });
};

const removeFields = function(index) {
    const namePrefix = "data[" + index + "]";

    validator.addField(namePrefix + "[name]");
    validator.addField(namePrefix + "[email]");
    validator.addField(namePrefix + "[primary][]");
}

$(form).repeater({
    initEmpty: false,

    show: function () {
        $(this).slideDown();

        const index = $(this).closest("[data-repeater-item]").index();

        addFields(index);
    },

    hide: function (deleteElement) {
        $(this).slideUp(deleteElement);
    }
});

// Initial fields
addFields(0);

// Submit button handler
const submitButton = document.getElementById("kt_docs_repeater_button");
submitButton.addEventListener("click", function (e) {
    // Prevent default button action
    e.preventDefault();

    // Validate form before submit
    if (validator) {
        validator.validate().then(function (status) {
            if (status == "Valid") {
                // Show loading indication
                submitButton.setAttribute("data-kt-indicator", "on");

                // Disable button to avoid multiple click
                submitButton.disabled = true;

                // Simulate form submission. For more info check the plugin's official documentation: https://sweetalert2.github.io/
                setTimeout(function () {
                    // Remove loading indication
                    submitButton.removeAttribute("data-kt-indicator");

                    // Enable button
                    submitButton.disabled = false;

                    // Show popup confirmation
                    Swal.fire({
                        text: "Form has been successfully submitted!",
                        icon: "success",
                        buttonsStyling: false,
                        confirmButtonText: "Ok, got it!",
                        customClass: {
                            confirmButton: "btn btn-primary"
                        }
                    });

                    //form.submit(); // Submit form
                }, 2000);
            }
        });
    }
});
