import {AgreementFileVersionItemRequestBuilderGetQueryParameters} from './agreementFileVersionItemRequestBuilderGetQueryParameters';
import type {RequestOption} from '@microsoft/kiota-abstractions';

export interface AgreementFileVersionItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: AgreementFileVersionItemRequestBuilderGetQueryParameters | undefined;
}
