import {AllowedUsersRequestBuilderGetQueryParameters} from './allowedUsersRequestBuilderGetQueryParameters';
import type {RequestOption} from '@microsoft/kiota-abstractions';

export interface AllowedUsersRequestBuilderGetRequestConfiguration {
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
    queryParameters?: AllowedUsersRequestBuilderGetQueryParameters | undefined;
}
