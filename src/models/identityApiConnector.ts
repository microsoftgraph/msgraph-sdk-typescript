import {ApiAuthenticationConfigurationBase} from './apiAuthenticationConfigurationBase';
import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface IdentityApiConnector extends Entity, Parsable {
    /**
     * The object which describes the authentication configuration details for calling the API. Basic and PKCS 12 client certificate are supported.
     */
    authenticationConfiguration?: ApiAuthenticationConfigurationBase | undefined;
    /**
     * The name of the API connector.
     */
    displayName?: string | undefined;
    /**
     * The URL of the API endpoint to call.
     */
    targetUrl?: string | undefined;
}
