import { type IdentityApiConnectorItemRequestBuilderGetQueryParameters } from './identityApiConnectorItemRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface IdentityApiConnectorItemRequestBuilderGetRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]> | undefined;
    /**
     * Request options
     */
    options?: RequestOption[] | undefined;
    /**
     * Request query parameters
     */
    queryParameters?: IdentityApiConnectorItemRequestBuilderGetQueryParameters | undefined;
}
