import {LinkedResourcesRequestBuilderGetQueryParameters} from './linkedResourcesRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface LinkedResourcesRequestBuilderGetRequestConfiguration {
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
    queryParameters?: LinkedResourcesRequestBuilderGetQueryParameters | undefined;
}
