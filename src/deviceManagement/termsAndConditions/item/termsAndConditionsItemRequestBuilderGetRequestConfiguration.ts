import {TermsAndConditionsItemRequestBuilderGetQueryParameters} from './termsAndConditionsItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface TermsAndConditionsItemRequestBuilderGetRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?:TermsAndConditionsItemRequestBuilderGetQueryParameters | undefined;
}
