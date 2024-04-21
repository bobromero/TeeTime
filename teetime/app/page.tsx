import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Tee Time Home Page</h1>
      <p>
        Tee Time is a Golfers First app dedicated to making the game of golf more enjoyable to everyone!
      </p>
      <p>Find courses of different skill levels near you and track your scores along with your friends</p>
      <Link href="/Courses/">Find Courses</Link>
    </main>
  );
}
