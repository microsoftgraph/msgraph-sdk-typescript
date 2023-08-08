import {AllowedMembersRequestBuilderGetQueryParameters} from './allowedMembersRequestBuilderGetQueryParameters';
import type {RequestOption} from '@microsoft/kiota-abstractions';

export interface AllowedMembersRequestBuilderGetRequestConfiguration {
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
    queryParameters?: AllowedMembersRequestBuilderGetQueryParameters | undefined;
}
