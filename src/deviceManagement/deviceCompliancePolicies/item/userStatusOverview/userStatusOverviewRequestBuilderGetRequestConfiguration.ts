import {UserStatusOverviewRequestBuilderGetQueryParameters} from './userStatusOverviewRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface UserStatusOverviewRequestBuilderGetRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?:UserStatusOverviewRequestBuilderGetQueryParameters | undefined;
}
