import {PassiveDnsRecordsRequestBuilderGetQueryParameters} from './passiveDnsRecordsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface PassiveDnsRecordsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: PassiveDnsRecordsRequestBuilderGetQueryParameters | undefined;
}
