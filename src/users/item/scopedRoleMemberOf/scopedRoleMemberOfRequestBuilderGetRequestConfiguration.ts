import { type ScopedRoleMemberOfRequestBuilderGetQueryParameters } from './scopedRoleMemberOfRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

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
