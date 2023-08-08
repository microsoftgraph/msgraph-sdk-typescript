import {FollowedSitesRequestBuilderGetQueryParameters} from './followedSitesRequestBuilderGetQueryParameters';
import type {RequestOption} from '@microsoft/kiota-abstractions';

export interface FollowedSitesRequestBuilderGetRequestConfiguration {
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
    queryParameters?: FollowedSitesRequestBuilderGetQueryParameters | undefined;
}
