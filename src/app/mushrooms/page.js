import Link from "next/link";
import { mushrooms } from "@/utils/mushrooms";

export const metadata = {
  title: "All Mushrooms",
  description:
    "All the mushrooms in the world, learn interesting facts about mushrooms",
};

export default function MushroomsPage() {
  return (
    <div>
      {mushrooms.map((mushroom) => (
        <div key={mushroom.id}>
          <Link
            href={`mushrooms/${mushroom.name
              .toLowerCase()
              .replace(/ /g, "-")
              .replace(/'/g, "")}`}
          >
            <h3>{mushroom.name}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
}
