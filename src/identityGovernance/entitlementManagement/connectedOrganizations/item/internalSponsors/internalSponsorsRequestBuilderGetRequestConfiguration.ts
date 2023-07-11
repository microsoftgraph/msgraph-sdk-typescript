import {InternalSponsorsRequestBuilderGetQueryParameters} from './internalSponsorsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface InternalSponsorsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: InternalSponsorsRequestBuilderGetQueryParameters | undefined;
}
