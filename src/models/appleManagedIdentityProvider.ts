import {IdentityProviderBase} from './identityProviderBase';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AppleManagedIdentityProvider extends Partial<AdditionalDataHolder>, IdentityProviderBase, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The certificate data which is a long string of text from the certificate, can be null. */
    certificateData?: string | undefined;
    /** The Apple developer identifier. Required. */
    developerId?: string | undefined;
    /** The Apple key identifier. Required. */
    keyId?: string | undefined;
    /** The Apple service identifier. Required. */
    serviceId?: string | undefined;
}
