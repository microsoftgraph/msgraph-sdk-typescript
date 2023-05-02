import {DomainDnsRecordsRequestBuilderGetQueryParameters} from './domainDnsRecordsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface DomainDnsRecordsRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: DomainDnsRecordsRequestBuilderGetQueryParameters | undefined;
}
