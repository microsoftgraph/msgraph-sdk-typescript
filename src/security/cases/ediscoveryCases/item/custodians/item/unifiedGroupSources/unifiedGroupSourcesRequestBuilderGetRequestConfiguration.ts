import { type UnifiedGroupSourcesRequestBuilderGetQueryParameters } from './unifiedGroupSourcesRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface UnifiedGroupSourcesRequestBuilderGetRequestConfiguration {
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
    queryParameters?: UnifiedGroupSourcesRequestBuilderGetQueryParameters | undefined;
}
