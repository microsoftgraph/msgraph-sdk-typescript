import {AuthenticationMethodTarget} from './authenticationMethodTarget';
import {MicrosoftAuthenticatorAuthenticationMode} from './microsoftAuthenticatorAuthenticationMode';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface MicrosoftAuthenticatorAuthenticationMethodTarget extends Partial<AdditionalDataHolder>, AuthenticationMethodTarget, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Determines which types of notifications can be used for sign-in. The possible values are: deviceBasedPush (passwordless only), push, and any. */
    authenticationMode?: MicrosoftAuthenticatorAuthenticationMode | undefined;
}
