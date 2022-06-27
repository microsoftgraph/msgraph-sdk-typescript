import {AuthenticationMethodConfiguration} from './authenticationMethodConfiguration';
import {MicrosoftAuthenticatorAuthenticationMethodTarget} from './microsoftAuthenticatorAuthenticationMethodTarget';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface MicrosoftAuthenticatorAuthenticationMethodConfiguration extends Partial<AdditionalDataHolder>, AuthenticationMethodConfiguration, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** A collection of users or groups who are enabled to use the authentication method. */
    includeTargets?: MicrosoftAuthenticatorAuthenticationMethodTarget[] | undefined;
}
