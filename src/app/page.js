import Image from "next/image";
import CoolText from "@/components/CoolText";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <nav>
        <Link href={"/mushrooms"}>to /mushrooms</Link>
      </nav>
      <div className="shadow-2xl">
        <p className="text-5xl">
          Styled Page<span className="text-sky-500"> Blue Text</span>
        </p>
        <p className="text-4xl">
          Home <CoolText>WORLD</CoolText>
        </p>
      </div>
    </>
  );
}
