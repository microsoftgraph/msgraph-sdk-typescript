import {TokenIssuancePolicyItemRequestBuilderGetQueryParameters} from './tokenIssuancePolicyItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface TokenIssuancePolicyItemRequestBuilderGetRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?:TokenIssuancePolicyItemRequestBuilderGetQueryParameters | undefined;
}
