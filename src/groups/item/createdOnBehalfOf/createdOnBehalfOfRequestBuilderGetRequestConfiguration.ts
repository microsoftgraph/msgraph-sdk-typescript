import { type CreatedOnBehalfOfRequestBuilderGetQueryParameters } from './createdOnBehalfOfRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface CreatedOnBehalfOfRequestBuilderGetRequestConfiguration {
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
    queryParameters?: CreatedOnBehalfOfRequestBuilderGetQueryParameters | undefined;
}
