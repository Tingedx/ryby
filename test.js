const fishData = [
    
    {
        name: "Amur biały",
        species: "Ctenopharyngodon idella",
        image: "https://via.placeholder.com/150",
        link: "amur-bialy.html"
    },
    {
        name: "Boleń",
        species: "Aspius aspius",
        image: "https://via.placeholder.com/150",
        link: "bolen.html"
    },
    {
        name: "Brzana",
        species: "Barbus barbus",
        image: "https://via.placeholder.com/150",
        link: "brzana.html"
    },
    {
        name: "Certa",
        species: "Vimba vimba",
        image: "https://via.placeholder.com/150",
        link: "certa.html"
    },
    {
        name: "Jaź",
        species: "Leuciscus idus",
        image: "https://via.placeholder.com/150",
        link: "jaz.html"
    },
    {
        name: "Jelec",
        species: "Leuciscus leuciscus",
        image: "https://via.placeholder.com/150",
        link: "jelec.html"
    },
    {
        name: "Karaś",
        species: "Carassius carassius",
        image: "https://via.placeholder.com/150",
        link: "karas.html"
    },
    {
        name: "Karaś srebrzysty",
        species: "Carassius auratus gibelio",
        image: "https://via.placeholder.com/150",
        link: "karas-srebrzysty.html"
    },
    {
        name: "Karp",
        species: "Cyprinus carpio",
        image: "https://via.placeholder.com/150",
        link: "karp.html"
    }
];

const catalog = document.getElementById("fishCatalog");

fishData.forEach(fish => {
    const card = document.createElement("a");
    card.className = "fish-card";
    card.href = fish.link;

    card.innerHTML = `
        <img src="${fish.image}" alt="${fish.name}">
        <div class="fish-content">
            <div class="fish-name">${fish.name}</div>
            <div class="fish-species">${fish.species}</div>
        </div>
    `;

    catalog.appendChild(card);
});
