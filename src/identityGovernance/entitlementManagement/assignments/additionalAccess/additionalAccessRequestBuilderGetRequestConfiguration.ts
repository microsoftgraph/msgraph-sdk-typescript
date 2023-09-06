import { type AdditionalAccessRequestBuilderGetQueryParameters } from './additionalAccessRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface AdditionalAccessRequestBuilderGetRequestConfiguration {
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
    queryParameters?: AdditionalAccessRequestBuilderGetQueryParameters | undefined;
}
