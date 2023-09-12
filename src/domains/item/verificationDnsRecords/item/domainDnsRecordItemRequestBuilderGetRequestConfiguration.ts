import { type DomainDnsRecordItemRequestBuilderGetQueryParameters } from './domainDnsRecordItemRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface DomainDnsRecordItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: DomainDnsRecordItemRequestBuilderGetQueryParameters | undefined;
}
