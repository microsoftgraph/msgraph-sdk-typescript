import {LoginPageTextVisibilitySettings} from './loginPageTextVisibilitySettings';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeLoginPageTextVisibilitySettings(writer: SerializationWriter, loginPageTextVisibilitySettings: LoginPageTextVisibilitySettings | undefined = {} as LoginPageTextVisibilitySettings) : void {
        writer.writeBooleanValue("hideAccountResetCredentials", loginPageTextVisibilitySettings.hideAccountResetCredentials);
        writer.writeBooleanValue("hideCannotAccessYourAccount", loginPageTextVisibilitySettings.hideCannotAccessYourAccount);
        writer.writeBooleanValue("hideForgotMyPassword", loginPageTextVisibilitySettings.hideForgotMyPassword);
        writer.writeBooleanValue("hidePrivacyAndCookies", loginPageTextVisibilitySettings.hidePrivacyAndCookies);
        writer.writeBooleanValue("hideResetItNow", loginPageTextVisibilitySettings.hideResetItNow);
        writer.writeBooleanValue("hideTermsOfUse", loginPageTextVisibilitySettings.hideTermsOfUse);
        writer.writeStringValue("@odata.type", loginPageTextVisibilitySettings.odataType);
        writer.writeAdditionalData(loginPageTextVisibilitySettings.additionalData);
}
