import { type DomainNameReferencesRequestBuilderGetQueryParameters } from './domainNameReferencesRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface DomainNameReferencesRequestBuilderGetRequestConfiguration {
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
    queryParameters?: DomainNameReferencesRequestBuilderGetQueryParameters | undefined;
}
