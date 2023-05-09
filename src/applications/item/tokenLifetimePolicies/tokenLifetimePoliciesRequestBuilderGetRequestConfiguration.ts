import {TokenLifetimePoliciesRequestBuilderGetQueryParameters} from './tokenLifetimePoliciesRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface TokenLifetimePoliciesRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: TokenLifetimePoliciesRequestBuilderGetQueryParameters | undefined;
}
