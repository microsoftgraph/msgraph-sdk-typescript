import {AllowedMembersRequestBuilderGetQueryParameters} from './allowedMembersRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface AllowedMembersRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: AllowedMembersRequestBuilderGetQueryParameters | undefined;
}
