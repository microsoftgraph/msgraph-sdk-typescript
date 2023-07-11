import {TermsOfUseRequestBuilderGetQueryParameters} from './termsOfUseRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface TermsOfUseRequestBuilderGetRequestConfiguration {
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
    queryParameters?: TermsOfUseRequestBuilderGetQueryParameters | undefined;
}
