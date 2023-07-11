import {AgreementAcceptancesRequestBuilderGetQueryParameters} from './agreementAcceptancesRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface AgreementAcceptancesRequestBuilderGetRequestConfiguration {
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
    queryParameters?: AgreementAcceptancesRequestBuilderGetQueryParameters | undefined;
}
