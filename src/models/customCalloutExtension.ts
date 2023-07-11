import {CustomExtensionAuthenticationConfiguration} from './customExtensionAuthenticationConfiguration';
import {CustomExtensionClientConfiguration} from './customExtensionClientConfiguration';
import {CustomExtensionEndpointConfiguration} from './customExtensionEndpointConfiguration';
import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface CustomCalloutExtension extends Entity, Parsable {
    /**
     * Configuration for securing the API call to the logic app. For example, using OAuth client credentials flow.
     */
    authenticationConfiguration?: CustomExtensionAuthenticationConfiguration | undefined;
    /**
     * HTTP connection settings that define how long Azure AD can wait for a connection to a logic app, how many times you can retry a timed-out connection and the exception scenarios when retries are allowed.
     */
    clientConfiguration?: CustomExtensionClientConfiguration | undefined;
    /**
     * Description for the customCalloutExtension object.
     */
    description?: string | undefined;
    /**
     * Display name for the customCalloutExtension object.
     */
    displayName?: string | undefined;
    /**
     * The type and details for configuring the endpoint to call the logic app's workflow.
     */
    endpointConfiguration?: CustomExtensionEndpointConfiguration | undefined;
}
