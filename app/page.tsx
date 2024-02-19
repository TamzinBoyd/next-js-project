import Image from "next/image";
import Link from "next/link";
import Header from "../app/components/header/Header";

export default function Home() {
  return (
    <>
      <Header />
      <button className="btn btn-primary">
        <Link href="/about">See about me</Link>
      </button>
    </>
  );
}
