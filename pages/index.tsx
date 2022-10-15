import type { NextPage } from "next";
import { useEffect } from "react";
import { TikTokFrame } from "../components/Frame";
import { HowVote } from "../components/HowVote";
import { RemindMeToVote } from "../components/RemindMeToVote";
import { WhyVote } from "../components/WhyVote";
import { ampli } from "../src/ampli";
import { isBrowser } from "../util/isBrowser";

const Home: NextPage = () => {
  const shouldRunAnalytics = isBrowser();
  useEffect(() => {
    ampli.load({ environment: "production" });
    ampli.pageViewed({ utm_source: "" });
  }, [shouldRunAnalytics]);

  return (
    <TikTokFrame>
      <WhyVote />
      <HowVote />
      <RemindMeToVote />
      <div>Page 4</div>
      <div>Page 5</div>
    </TikTokFrame>
  );
};

export default Home;
