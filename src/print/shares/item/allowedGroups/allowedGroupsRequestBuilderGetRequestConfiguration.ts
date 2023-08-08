import {AllowedGroupsRequestBuilderGetQueryParameters} from './allowedGroupsRequestBuilderGetQueryParameters';
import type {RequestOption} from '@microsoft/kiota-abstractions';

export interface AllowedGroupsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: AllowedGroupsRequestBuilderGetQueryParameters | undefined;
}
