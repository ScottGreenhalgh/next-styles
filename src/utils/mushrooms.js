export const mushrooms = [
  {
    id: 1,
    name: "Amanita Muscaria",
    bio: "Known for its iconic red cap with white spots, this mushroom is both toxic and hallucinogenic.",
    img: "https://example.com/amanita_muscaria.jpg",
    climate: "Temperate forests",
  },
  {
    id: 2,
    name: "Chanterelle",
    bio: "A highly prized edible mushroom with a distinctive yellow color and fruity aroma.",
    img: "https://example.com/chanterelle.jpg",
    climate: "Deciduous and coniferous forests",
  },
  {
    id: 3,
    name: "Shiitake",
    bio: "Popular in Asian cuisine, this mushroom is known for its rich, savory flavor and numerous health benefits.",
    img: "https://example.com/shiitake.jpg",
    climate: "Warm, moist climates",
  },
  {
    id: 4,
    name: "Morel",
    bio: "Highly sought after by foragers, morels have a distinctive honeycomb appearance and are considered a delicacy.",
    img: "https://example.com/morel.jpg",
    climate: "Woodlands and forested areas",
  },
  {
    id: 5,
    name: "Oyster Mushroom",
    bio: "Named for its oyster-shaped cap, this mushroom is commonly used in cooking and has a mild, anise-like flavor.",
    img: "https://example.com/oyster_mushroom.jpg",
    climate: "Temperate and subtropical forests",
  },
  {
    id: 6,
    name: "Lion's Mane",
    bio: "This unique mushroom resembles a lion's mane and is known for its potential cognitive benefits.",
    img: "https://example.com/lions_mane.jpg",
    climate: "Deciduous forests",
  },
  {
    id: 7,
    name: "Porcini",
    bio: "A gourmet mushroom with a nutty flavor, often used in Italian cuisine.",
    img: "https://example.com/porcini.jpg",
    climate: "Coniferous and deciduous forests",
  },
  {
    id: 8,
    name: "Enoki",
    bio: "Characterized by its long, thin stems and small caps, enoki mushrooms are commonly used in soups and salads.",
    img: "https://example.com/enoki.jpg",
    climate: "Cool, humid environments",
  },
  {
    id: 9,
    name: "Maitake",
    bio: "Also known as 'hen of the woods,' this mushroom is valued for its medicinal properties and rich flavor.",
    img: "https://example.com/maitake.jpg",
    climate: "Temperate forests",
  },
  {
    id: 10,
    name: "Reishi",
    bio: "Often used in traditional medicine, reishi mushrooms are known for their potential immune-boosting properties.",
    img: "https://example.com/reishi.jpg",
    climate: "Warm, humid climates",
  },
];

function generateSlugs(mushrooms) {
  mushrooms.forEach((mushroom) => {
    mushroom.slug = mushroom.name
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/'/g, "");
  });
}

export function findBySlug(slug) {
  let localMushroom = undefined;
  console.log("finding mushroom by slug");
  mushrooms.forEach((mushroom) => {
    console.log(
      `checking mushroom name: ${mushroom.name}, against slug: ${slug}`
    );
    if (
      mushroom.name.toLowerCase().replace(/ /g, "-").replace(/'/g, "") ===
      slug
    ) {
      console.log("mushroom found by slug");
      console.log(`Mushroom is ${mushroom}`);
      localMushroom = mushroom;
    }
  });

  return localMushroom;
}
