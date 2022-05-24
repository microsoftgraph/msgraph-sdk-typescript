import {ScopedRoleMembersRequestBuilderGetQueryParameters} from './scopedRoleMembersRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ScopedRoleMembersRequestBuilderGetRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?:ScopedRoleMembersRequestBuilderGetQueryParameters | undefined;
}
