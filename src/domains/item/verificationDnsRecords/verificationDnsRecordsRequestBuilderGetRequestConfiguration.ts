import {VerificationDnsRecordsRequestBuilderGetQueryParameters} from './verificationDnsRecordsRequestBuilderGetQueryParameters';
import type {RequestOption} from '@microsoft/kiota-abstractions';

export interface VerificationDnsRecordsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: VerificationDnsRecordsRequestBuilderGetQueryParameters | undefined;
}
