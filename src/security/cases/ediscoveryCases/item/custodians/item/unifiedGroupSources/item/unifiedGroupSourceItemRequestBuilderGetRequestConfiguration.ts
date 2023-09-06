import { type UnifiedGroupSourceItemRequestBuilderGetQueryParameters } from './unifiedGroupSourceItemRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface UnifiedGroupSourceItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: UnifiedGroupSourceItemRequestBuilderGetQueryParameters | undefined;
}
