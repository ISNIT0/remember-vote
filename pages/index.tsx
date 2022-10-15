import type { NextPage } from "next";
import Script from "next/script";
import { useEffect, useState } from "react";
import { TikTokFrame } from "../components/Frame";
import { HowVote } from "../components/HowVote";
import { RemindMeToVote } from "../components/RemindMeToVote";
import { WhyVote } from "../components/WhyVote";
import { ampli } from "../src/ampli";
import { isBrowser } from "../util/isBrowser";

const Home: NextPage = () => {
  const shouldRunAnalytics = isBrowser();
  const [canScroll, setCanScroll] = useState(false);
  useEffect(() => {
    ampli.load({ environment: "production" });
    ampli.pageViewed({ utm_source: "" });

    (window as any).OneSignal = (window as any).OneSignal || [];
    (window as any).OneSignal.push(function () {
      (window as any).OneSignal.init({
        appId: "8b5836b6-fbf2-41c2-8624-757ece4356a2",
        safari_web_id:
          "web.onesignal.auto.487bfeae-71a3-407e-85d8-1b40bd783a80",
        notifyButton: {
          enable: true,
        },
        allowLocalhostAsSecureOrigin: true,
      });
    });
  }, [shouldRunAnalytics]);

  return (
    <>
      <Script src="https://cdn.onesignal.com/sdks/OneSignalSDK.js" async />
      <TikTokFrame canScroll={canScroll}>
        <WhyVote setCanScroll={setCanScroll} canScroll={canScroll} />
        <HowVote />
        <RemindMeToVote />
      </TikTokFrame>
    </>
  );
};

export default Home;
