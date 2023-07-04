import {TermsAndConditionsRequestBuilderGetQueryParameters} from './termsAndConditionsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface TermsAndConditionsRequestBuilderGetRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]> | undefined;
    /**
     * Request options
     */
    options?: RequestOption[] | undefined;
    /**
     * Request query parameters
     */
    queryParameters?: TermsAndConditionsRequestBuilderGetQueryParameters | undefined;
}
