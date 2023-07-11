import {PassiveDnsRecordItemRequestBuilderGetQueryParameters} from './passiveDnsRecordItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface PassiveDnsRecordItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: PassiveDnsRecordItemRequestBuilderGetQueryParameters | undefined;
}
