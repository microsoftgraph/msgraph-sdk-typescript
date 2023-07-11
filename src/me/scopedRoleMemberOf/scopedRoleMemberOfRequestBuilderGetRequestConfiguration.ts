import {ScopedRoleMemberOfRequestBuilderGetQueryParameters} from './scopedRoleMemberOfRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ScopedRoleMemberOfRequestBuilderGetRequestConfiguration {
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
    queryParameters?: ScopedRoleMemberOfRequestBuilderGetQueryParameters | undefined;
}
