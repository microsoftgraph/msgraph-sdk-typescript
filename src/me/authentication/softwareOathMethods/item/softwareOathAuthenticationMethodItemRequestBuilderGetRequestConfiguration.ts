import {SoftwareOathAuthenticationMethodItemRequestBuilderGetQueryParameters} from './softwareOathAuthenticationMethodItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

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
