import {PassiveDnsRequestBuilderGetQueryParameters} from './passiveDnsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface PassiveDnsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: PassiveDnsRequestBuilderGetQueryParameters | undefined;
}
