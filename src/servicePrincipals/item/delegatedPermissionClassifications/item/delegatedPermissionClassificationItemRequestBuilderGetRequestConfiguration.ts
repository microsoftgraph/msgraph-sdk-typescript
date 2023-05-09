import {DelegatedPermissionClassificationItemRequestBuilderGetQueryParameters} from './delegatedPermissionClassificationItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface DelegatedPermissionClassificationItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: DelegatedPermissionClassificationItemRequestBuilderGetQueryParameters | undefined;
}
