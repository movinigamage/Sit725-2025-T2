const cardList = [
    {
        title: "Luna",
        image: "images/luna.jpeg",
        link: "Adopt Luna",
        description: "Luna is a playful 3-month-old tabby who loves chasing yarn balls."
    },
    {
        title: "Simba",
        image: "images/simba.jpeg",
        link: "Adopt Simba",
        description: "Simba is curious and bold – perfect for an adventurous home!"
    },
    {
        title: "Milo",
        image: "images/milo.jpg",
        link: "Adopt Milo",
        description: "Milo is a cuddle expert who purrs all day long."
    }
];

const clickMe = () => {
    alert("Thanks for clicking me. Hope you have a nice day!");
};

const submitForm = () => {
    let formData = {
        first_name: $('#first_name').val(),
        last_name: $('#last_name').val(),
        email: $('#email').val()
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
    let adoptData = {
        name: $('#adopt_name').val(),
        email: $('#adopt_email').val(),
        reason: $('#adopt_reason').val(),
        cat: $('#catName').text()
    };
    console.log("Adopt Form Submitted: ", adoptData);

    $('#adoptFormWrapper').html(`
        <div class="center-align" style="padding: 2rem;">
            <h5>Thank you for your interest in adopting ${adoptData.cat}!</h5>
            <p>We’ll get in touch with you soon, ${adoptData.name}.</p>
        </div>
    `);
};


const submitContactForm = (event) => {
    event.preventDefault(); 

    const name = $('#contact_name').val();
    const email = $('#contact_email').val();
    const message = $('#contact_message').val();

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
    $('#formSubmit').click(() => submitForm());
    $('#adoptSubmit').click(() => submitAdoptForm());
    $('#contactForm').submit(submitContactForm);

    addCards(cardList);


    $(document).on('click', '.adopt-link', function () {
        const catName = $(this).data('cat');
        $('#catName').text(catName);
        $('#catNameInline').text(catName);
    });
});
