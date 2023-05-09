import {UnifiedRbacResourceActionItemRequestBuilderGetQueryParameters} from './unifiedRbacResourceActionItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface UnifiedRbacResourceActionItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: UnifiedRbacResourceActionItemRequestBuilderGetQueryParameters | undefined;
}
