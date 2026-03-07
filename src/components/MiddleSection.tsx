import { ClientSlider } from "./ClientSlider";
import { ProductShowcase } from "./ProductShowcase";
import { BeforeAfter } from "./BeforeAfter";
import { WhyItWorks } from "./WhyItWorks";
import { HowItWorks } from "./HowItWorks";
import { WhoIsItFor } from "./Whoisitfor";

export function MiddleSections() {
  return (
    <>
      <ClientSlider />
      <ProductShowcase />
      <BeforeAfter />
      <WhoIsItFor />
      <WhyItWorks />
      <HowItWorks />
    </>
  );
}