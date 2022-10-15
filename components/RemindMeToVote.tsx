import { ampli } from "../src/ampli";
import { isBrowser } from "../util/isBrowser";
import { PrimaryButton } from "./PrimaryButton";

export const RemindMeToVote = () => {
  return (
    <>
      <span className="sticky-header remind-me">
        <h1>Remind Me</h1>
      </span>
      <div className="remind-me">
        <h2>Feel overwhelmed? Too much to remember?</h2>
        <h1>Get reminders when you need to do something about voting...</h1>
        <div>
          <PrimaryButton
            onClick={() => {
              const OneSignal = isBrowser() ? (window as any).OneSignal : null;
              console.log({ OneSignal });
              OneSignal?.showNativePrompt().then(() => {
                const postcode = prompt("Please Enter Postcode");
                OneSignal.sendTags({
                  postcode,
                });
                ampli.subscribed({ postCode: postcode! });
              });
            }}
          >
            Setup Reminders
          </PrimaryButton>
        </div>
      </div>
    </>
  );
};
