import { type AgreementAcceptanceItemRequestBuilderGetQueryParameters } from './agreementAcceptanceItemRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface AgreementAcceptanceItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: AgreementAcceptanceItemRequestBuilderGetQueryParameters | undefined;
}
