import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h3> test </h3>
      <button className="btn btn-primary">
        <Link href="/about">See about me</Link>
      </button>
    </>
  );
}
