import {AppliedPoliciesRequestBuilderGetQueryParameters} from './appliedPoliciesRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface AppliedPoliciesRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: AppliedPoliciesRequestBuilderGetQueryParameters | undefined;
}
