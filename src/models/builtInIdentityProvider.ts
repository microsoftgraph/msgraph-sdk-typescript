import { type IdentityProviderBase } from './identityProviderBase';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface BuiltInIdentityProvider extends IdentityProviderBase, Parsable {
    /**
     * The identity provider type. For a B2B scenario, possible values: AADSignup, MicrosoftAccount, EmailOTP. Required.
     */
    identityProviderType?: string | undefined;
}
