import { type SoftwareOathAuthenticationMethodItemRequestBuilderGetQueryParameters } from './softwareOathAuthenticationMethodItemRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface SoftwareOathAuthenticationMethodItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: SoftwareOathAuthenticationMethodItemRequestBuilderGetQueryParameters | undefined;
}
