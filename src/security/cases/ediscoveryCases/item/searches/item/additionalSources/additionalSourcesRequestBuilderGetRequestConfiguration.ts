import { type AdditionalSourcesRequestBuilderGetQueryParameters } from './additionalSourcesRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface AdditionalSourcesRequestBuilderGetRequestConfiguration {
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
    queryParameters?: AdditionalSourcesRequestBuilderGetQueryParameters | undefined;
}
