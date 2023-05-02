import {ConditionalAccessPoliciesRequestBuilderGetQueryParameters} from './conditionalAccessPoliciesRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ConditionalAccessPoliciesRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: ConditionalAccessPoliciesRequestBuilderGetQueryParameters | undefined;
}
