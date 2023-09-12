import { type ExternalActivityItemRequestBuilderGetQueryParameters } from './externalActivityItemRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface ExternalActivityItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: ExternalActivityItemRequestBuilderGetQueryParameters | undefined;
}
