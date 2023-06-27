import {IdentityProviderBase} from './identityProviderBase';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AppleManagedIdentityProvider extends IdentityProviderBase, Parsable {
    /**
     * The certificate data, which is a long string of text from the certificate. Can be null.
     */
    certificateData?: string | undefined;
    /**
     * The Apple developer identifier. Required.
     */
    developerId?: string | undefined;
    /**
     * The Apple key identifier. Required.
     */
    keyId?: string | undefined;
    /**
     * The Apple service identifier. Required.
     */
    serviceId?: string | undefined;
}
