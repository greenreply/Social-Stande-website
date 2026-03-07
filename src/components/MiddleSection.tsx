
import { ProductShowcase } from "./ProductShowcase";
import { BeforeAfter } from "./BeforeAfter";
import { WhyItWorks } from "./WhyItWorks";
import { HowItWorks } from "./HowItWorks";
import { SocialProof } from "./SocialProof";
import { WhoIsItFor } from "./Whoisitfor";

export function MiddleSections() {
  return (
    <>
      <ProductShowcase />
      <BeforeAfter />
      <WhoIsItFor />
      <WhyItWorks />
      <HowItWorks />
      <SocialProof />
    </>
  );
}