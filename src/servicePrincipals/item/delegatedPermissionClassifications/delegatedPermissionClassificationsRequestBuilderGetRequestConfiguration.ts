import {DelegatedPermissionClassificationsRequestBuilderGetQueryParameters} from './delegatedPermissionClassificationsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface DelegatedPermissionClassificationsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: DelegatedPermissionClassificationsRequestBuilderGetQueryParameters | undefined;
}
