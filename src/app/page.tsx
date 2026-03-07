import { Hero } from "@/components/Hero";
import { MiddleSections } from "@/components/MiddleSection";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <MiddleSections />
    </main>
  );
}
