import {IntendedPoliciesRequestBuilderGetQueryParameters} from './intendedPoliciesRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface IntendedPoliciesRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: IntendedPoliciesRequestBuilderGetQueryParameters | undefined;
}
