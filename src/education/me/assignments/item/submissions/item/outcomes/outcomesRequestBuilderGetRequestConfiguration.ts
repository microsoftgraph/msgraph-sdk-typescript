import {OutcomesRequestBuilderGetQueryParameters} from './outcomesRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface OutcomesRequestBuilderGetRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?:OutcomesRequestBuilderGetQueryParameters | undefined;
}
