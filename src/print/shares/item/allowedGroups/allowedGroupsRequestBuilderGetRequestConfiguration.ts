import {AllowedGroupsRequestBuilderGetQueryParameters} from './allowedGroupsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface AllowedGroupsRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: AllowedGroupsRequestBuilderGetQueryParameters | undefined;
}
