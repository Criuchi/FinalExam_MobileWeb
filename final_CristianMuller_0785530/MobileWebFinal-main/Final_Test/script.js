$(document).ready(function () {
    $('#articleForm').validate({
        messages: {
            name: {
                required: "Please enter a headline.",
            },
            tel: {
                required: "Please select a phone.",
                pattern: "Please add a valid phone"
            },
            zip: {
                required: "Please enter the zip code.",
                pattern: "Please add a valid zip code"
            },
            date: {
                required: "Please select a date."
            },
        }
    });
});