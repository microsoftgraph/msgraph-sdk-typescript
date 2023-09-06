import { type ExternalSponsorsRequestBuilderGetQueryParameters } from './externalSponsorsRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface ExternalSponsorsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: ExternalSponsorsRequestBuilderGetQueryParameters | undefined;
}
