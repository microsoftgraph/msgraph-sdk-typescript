import {SharedWithMeRequestBuilderGetQueryParameters} from './sharedWithMeRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface SharedWithMeRequestBuilderGetRequestConfiguration {
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
    queryParameters?: SharedWithMeRequestBuilderGetQueryParameters | undefined;
}
