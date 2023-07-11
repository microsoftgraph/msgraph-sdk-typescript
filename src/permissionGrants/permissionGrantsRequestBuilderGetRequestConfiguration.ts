import {PermissionGrantsRequestBuilderGetQueryParameters} from './permissionGrantsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface PermissionGrantsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: PermissionGrantsRequestBuilderGetQueryParameters | undefined;
}
