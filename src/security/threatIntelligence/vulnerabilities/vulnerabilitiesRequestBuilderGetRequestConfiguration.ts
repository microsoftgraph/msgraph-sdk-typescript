import { type VulnerabilitiesRequestBuilderGetQueryParameters } from './vulnerabilitiesRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

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
