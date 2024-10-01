import { findBySlug } from "@/utils/mushrooms";

export function generateMetadata({ params }) {
  const mushroomInfo = findBySlug(params.slug);
  return {
    title: `${mushroomInfo.name} Info`,
    description: `Learn about ${mushroomInfo.name}`,
  };
}

export default function SlugPage({ params }) {
  console.log(params);
  const mushroomInfo = findBySlug(params.slug);
  console.log(mushroomInfo);
  return (
    <div>
      <h2>{mushroomInfo.name}</h2>
      <br />
      <p>{mushroomInfo.bio}</p>
      <p>{mushroomInfo.climate}</p>
    </div>
  );
}
