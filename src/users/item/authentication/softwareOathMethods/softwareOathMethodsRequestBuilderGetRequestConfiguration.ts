import {SoftwareOathMethodsRequestBuilderGetQueryParameters} from './softwareOathMethodsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface SoftwareOathMethodsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: SoftwareOathMethodsRequestBuilderGetQueryParameters | undefined;
}
