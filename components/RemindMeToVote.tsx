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
            GET REMINDERS
          </PrimaryButton>
        </div>
      </div>
      <div className="remind-me">
        <div>
          <div>
            <a
              href="https://www.gov.uk/register-to-vote"
              className="primary-button final-page"
            >
              Register to Vote
            </a>
          </div>
          <br />
          <br />
          <div>
            <a
              href="https://www.gov.uk/register-to-vote"
              className="primary-button final-page"
            >
              Info on your candidates
            </a>
          </div>
          <br />
          <br />
          <div>
            <a
              href="https://www.gov.uk/register-to-vote"
              className="primary-button final-page"
            >
              Info on hustings
            </a>
          </div>
          <br />
          <br />
          <div>
            <a
              href="https://www.gov.uk/register-to-vote"
              className="primary-button final-page"
            >
              The voting process
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
