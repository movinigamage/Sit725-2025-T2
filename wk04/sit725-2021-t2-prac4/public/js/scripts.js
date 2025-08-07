
const clickMe = () => {
    alert("Thanks for clicking me. Hope you have a nice day!");
};

const submitForm = () => {
    const firstName = $('#first_name').val().trim();
    const lastName = $('#last_name').val().trim();
    const email = $('#email').val().trim();

    const formData = {
        first_name: firstName,
        last_name: lastName,
        email: email
    };

    console.log("Form Data Submitted: ", formData);

    $('#attendanceFormWrapper').html(`
        <div class="center-align" style="padding: 2rem;">
            <h5>Thanks for confirming, ${formData.first_name}!</h5>
            <p>We'll see you soon.</p>
        </div>
    `);
};


const submitAdoptForm = () => {

    const name = $('#adopt_name').val().trim();
    const email = $('#adopt_email').val().trim();
    const reason = $('#adopt_reason').val().trim();
    const cat = $('#catName').text().trim();

    const adoptData = { name, email, reason, cat };
    console.log("Adopt Form Submitted: ", adoptData);

    $('#adoptFormWrapper').html(`
        <div class="center-align" style="padding: 2rem;">
            <h5>Thank you for your interest in adopting ${adoptData.cat}!</h5>
            <p>We’ll get in touch with you soon, ${adoptData.name}.</p>
        </div>
    `);
};



const submitContactForm = (event) => {
    const name = $('#contact_name').val().trim();
    const email = $('#contact_email').val().trim();
    const message = $('#contact_message').val().trim();


    const contactData = { name, email, message };
    console.log("Contact Form Submitted:", contactData);

    $('#contactFormWrapper').html(`
        <div class="center-align" style="padding: 2rem;">
            <h5>Thanks for your message, ${name}!</h5>
            <p>We’ll get back to you at <strong>${email}</strong> soon.</p>
        </div>
    `);
};


const addCards = (items) => {
    items.forEach(item => {
        let itemToAppend = `
            <div class="col s4 center-align">
                <div class="card medium">
                    <div class="card-image waves-effect waves-block waves-light">
                        <img class="activator" src="${item.image}">
                    </div>
                    <div class="card-content">
                        <span class="card-title activator grey-text text-darken-4">
                            ${item.title}
                            <i class="material-icons right">more_vert</i>
                        </span>
                        <p>
                            <a href="#adoptModal" class="modal-trigger adopt-link" data-cat="${item.title}">
                                ${item.link}
                            </a>
                        </p>
                    </div>
                    <div class="card-reveal">
                        <span class="card-title grey-text text-darken-4">
                            ${item.title}
                            <i class="material-icons right">close</i>
                        </span>
                        <p class="card-text grey-text text-darken-2">${item.description}</p>
                    </div>
                </div>
            </div>`;
        $("#card-section").append(itemToAppend);
    });
};


$(document).ready(function () {
    $('.materialboxed').materialbox();
    $('.modal').modal();

    // 🛠 Correct event bindings
    $('#attendanceForm').submit(function (event) {
        event.preventDefault();
        submitForm();
    });

    $('#adoptForm').submit(function (event) {
        event.preventDefault();
        submitAdoptForm();
    });

    $('#contactForm').submit(function (event) {
        event.preventDefault();
        submitContactForm();
    });

    // Load cards from DB
    $.get("/api/projects", (res) => {
        if (res.statusCode === 200) {
            addCards(res.data);
        } else {
            console.error("Failed to fetch cards");
        }
    });

    // Cat modal name binding
    $(document).on('click', '.adopt-link', function () {
        const catName = $(this).data('cat');
        $('#catName').text(catName);
        $('#catNameInline').text(catName);
    });
});
