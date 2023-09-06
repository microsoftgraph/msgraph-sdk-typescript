import { type DetectedAppItemRequestBuilderGetQueryParameters } from './detectedAppItemRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface DetectedAppItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: DetectedAppItemRequestBuilderGetQueryParameters | undefined;
}
