import {PassiveDnsReverseRequestBuilderGetQueryParameters} from './passiveDnsReverseRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface PassiveDnsReverseRequestBuilderGetRequestConfiguration {
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
    queryParameters?: PassiveDnsReverseRequestBuilderGetQueryParameters | undefined;
}
