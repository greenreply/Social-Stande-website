"use client";

import { ProductShowcase } from "./ProductShowcase";
import { BeforeAfter } from "./BeforeAfter";
import { WhyItWorks } from "./WhyItWorks";
import { HowItWorks } from "./HowItWorks";
import { SocialProof } from "./SocialProof";

export function MiddleSections() {
  return (
    <>
      <ProductShowcase />
      <BeforeAfter />
      <WhyItWorks />
      <HowItWorks />
      <SocialProof />
    </>
  );
}