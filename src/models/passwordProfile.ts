import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface PasswordProfile extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * true if the user must change her password on the next login; otherwise false.
     */
    forceChangePasswordNextSignIn?: boolean | undefined;
    /**
     * If true, at next sign-in, the user must perform a multi-factor authentication (MFA) before being forced to change their password. The behavior is identical to forceChangePasswordNextSignIn except that the user is required to first perform a multi-factor authentication before password change. After a password change, this property will be automatically reset to false. If not set, default is false.
     */
    forceChangePasswordNextSignInWithMfa?: boolean | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The password for the user. This property is required when a user is created. It can be updated, but the user will be required to change the password on the next login. The password must satisfy minimum requirements as specified by the user’s passwordPolicies property. By default, a strong password is required.
     */
    password?: string | undefined;
}
