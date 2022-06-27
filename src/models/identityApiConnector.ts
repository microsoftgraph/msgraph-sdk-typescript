import {ApiAuthenticationConfigurationBase} from './apiAuthenticationConfigurationBase';
import {Entity} from './entity';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface IdentityApiConnector extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The object which describes the authentication configuration details for calling the API. Basic and PKCS 12 client certificate are supported. */
    authenticationConfiguration?: ApiAuthenticationConfigurationBase | undefined;
    /** The name of the API connector. */
    displayName?: string | undefined;
    /** The URL of the API endpoint to call. */
    targetUrl?: string | undefined;
}
