import {ScopedRoleMembershipItemRequestBuilderGetQueryParameters} from './scopedRoleMembershipItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ScopedRoleMembershipItemRequestBuilderGetRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?:ScopedRoleMembershipItemRequestBuilderGetQueryParameters | undefined;
}
