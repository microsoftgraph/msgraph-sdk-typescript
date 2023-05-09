import {UnifiedRoleDefinitionItemRequestBuilderGetQueryParameters} from './unifiedRoleDefinitionItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface UnifiedRoleDefinitionItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: UnifiedRoleDefinitionItemRequestBuilderGetQueryParameters | undefined;
}
