import { type AdditionalDataHolder, type Parsable } from '@microsoft/kiota-abstractions';

export interface LoginPageTextVisibilitySettings extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Option to hide the self-service password reset (SSPR) hyperlinks such as 'Can't access your account?', 'Forgot my password' and 'Reset it now' on the sign-in form.
     */
    hideAccountResetCredentials?: boolean | undefined;
    /**
     * Option to hide the self-service password reset (SSPR) 'Can't access your account?' hyperlink on the sign-in form.
     */
    hideCannotAccessYourAccount?: boolean | undefined;
    /**
     * Option to hide the self-service password reset (SSPR) 'Forgot my password' hyperlink on the sign-in form.
     */
    hideForgotMyPassword?: boolean | undefined;
    /**
     * Option to hide the 'Privacy & Cookies' hyperlink in the footer.
     */
    hidePrivacyAndCookies?: boolean | undefined;
    /**
     * Option to hide the self-service password reset (SSPR) 'reset it now' hyperlink on the sign-in form.
     */
    hideResetItNow?: boolean | undefined;
    /**
     * Option to hide the 'Terms of Use' hyperlink in the footer.
     */
    hideTermsOfUse?: boolean | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
}
