import {FollowedSitesRequestBuilderGetQueryParameters} from './followedSitesRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface FollowedSitesRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: FollowedSitesRequestBuilderGetQueryParameters | undefined;
}
