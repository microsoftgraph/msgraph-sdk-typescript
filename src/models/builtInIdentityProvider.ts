import {IdentityProviderBase} from './identityProviderBase';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface BuiltInIdentityProvider extends Partial<AdditionalDataHolder>, IdentityProviderBase, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The identity provider type. For a B2B scenario, possible values: AADSignup, MicrosoftAccount, EmailOTP. Required. */
    identityProviderType?: string | undefined;
}
