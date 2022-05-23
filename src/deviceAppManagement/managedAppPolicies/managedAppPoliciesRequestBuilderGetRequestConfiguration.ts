import {ManagedAppPoliciesRequestBuilderGetQueryParameters} from './managedAppPoliciesRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ManagedAppPoliciesRequestBuilderGetRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?:ManagedAppPoliciesRequestBuilderGetQueryParameters | undefined;
}
