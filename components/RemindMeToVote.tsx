import { ampli } from "../src/ampli";
import { isBrowser } from "../util/isBrowser";
import { PrimaryButton } from "./PrimaryButton";
const OneSignal = isBrowser() ? (window as any).OneSignal : null;

export const RemindMeToVote = () => {
  return (
    <>
      <div>
        <h2>Feel overwhelmed? Too much to remember?</h2>
        <h1>Get reminders when you need to do something about voting...</h1>
        <div>
          <PrimaryButton
            onClick={() => {
              OneSignal?.showNativePrompt();
              OneSignal?.on(
                "subscriptionChange",
                function (isSubscribed: boolean) {
                  if (isSubscribed) {
                    console.log({ isSubscribed });

                    const postcode = prompt("Please Enter Postcode");
                    OneSignal.sendTags({
                      postcode,
                    });
                    ampli.subscribed({ postCode: postcode! });
                  }
                }
              );
            }}
          >
            Setup Reminders
          </PrimaryButton>
        </div>
      </div>
    </>
  );
};
