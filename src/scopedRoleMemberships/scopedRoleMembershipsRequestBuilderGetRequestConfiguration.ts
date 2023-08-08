import {ScopedRoleMembershipsRequestBuilderGetQueryParameters} from './scopedRoleMembershipsRequestBuilderGetQueryParameters';
import type {RequestOption} from '@microsoft/kiota-abstractions';

export interface ScopedRoleMembershipsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: ScopedRoleMembershipsRequestBuilderGetQueryParameters | undefined;
}
