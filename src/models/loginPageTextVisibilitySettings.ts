import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface LoginPageTextVisibilitySettings extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The hideAccountResetCredentials property
     */
    hideAccountResetCredentials?: boolean | undefined;
    /**
     * The hideCannotAccessYourAccount property
     */
    hideCannotAccessYourAccount?: boolean | undefined;
    /**
     * The hideForgotMyPassword property
     */
    hideForgotMyPassword?: boolean | undefined;
    /**
     * The hidePrivacyAndCookies property
     */
    hidePrivacyAndCookies?: boolean | undefined;
    /**
     * The hideResetItNow property
     */
    hideResetItNow?: boolean | undefined;
    /**
     * The hideTermsOfUse property
     */
    hideTermsOfUse?: boolean | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
}
