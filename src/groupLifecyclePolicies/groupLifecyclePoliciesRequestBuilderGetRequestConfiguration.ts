import {GroupLifecyclePoliciesRequestBuilderGetQueryParameters} from './groupLifecyclePoliciesRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface GroupLifecyclePoliciesRequestBuilderGetRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?:GroupLifecyclePoliciesRequestBuilderGetQueryParameters | undefined;
}
