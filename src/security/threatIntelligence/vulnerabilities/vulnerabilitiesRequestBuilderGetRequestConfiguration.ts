import {VulnerabilitiesRequestBuilderGetQueryParameters} from './vulnerabilitiesRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface VulnerabilitiesRequestBuilderGetRequestConfiguration {
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
    queryParameters?: VulnerabilitiesRequestBuilderGetQueryParameters | undefined;
}
