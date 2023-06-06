import {LoginPageTextVisibilitySettings} from './loginPageTextVisibilitySettings';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoLoginPageTextVisibilitySettings(loginPageTextVisibilitySettings: LoginPageTextVisibilitySettings | undefined = {} as LoginPageTextVisibilitySettings) : Record<string, (node: ParseNode) => void> {
    return {
        "hideAccountResetCredentials": n => { loginPageTextVisibilitySettings.hideAccountResetCredentials = n.getBooleanValue(); },
        "hideCannotAccessYourAccount": n => { loginPageTextVisibilitySettings.hideCannotAccessYourAccount = n.getBooleanValue(); },
        "hideForgotMyPassword": n => { loginPageTextVisibilitySettings.hideForgotMyPassword = n.getBooleanValue(); },
        "hidePrivacyAndCookies": n => { loginPageTextVisibilitySettings.hidePrivacyAndCookies = n.getBooleanValue(); },
        "hideResetItNow": n => { loginPageTextVisibilitySettings.hideResetItNow = n.getBooleanValue(); },
        "hideTermsOfUse": n => { loginPageTextVisibilitySettings.hideTermsOfUse = n.getBooleanValue(); },
        "@odata.type": n => { loginPageTextVisibilitySettings.odataType = n.getStringValue(); },
    }
}
