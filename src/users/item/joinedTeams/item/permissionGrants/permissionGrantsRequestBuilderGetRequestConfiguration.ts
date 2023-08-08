import {PermissionGrantsRequestBuilderGetQueryParameters} from './permissionGrantsRequestBuilderGetQueryParameters';
import type {RequestOption} from '@microsoft/kiota-abstractions';

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
