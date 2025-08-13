const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/myprojectDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const Project = mongoose.model('Project', {
    title: String,
    image: String,
    link: String,
    description: String
});

const sampleCards = [
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

Project.insertMany(sampleCards)
    .then(() => {
        console.log("Seed data inserted.");
        mongoose.connection.close();
    })
    .catch((err) => {
        console.error("Error inserting seed data:", err);
        mongoose.connection.close();
    });
