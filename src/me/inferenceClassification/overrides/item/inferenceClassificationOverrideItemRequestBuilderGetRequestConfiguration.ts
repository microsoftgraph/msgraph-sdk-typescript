import { type InferenceClassificationOverrideItemRequestBuilderGetQueryParameters } from './inferenceClassificationOverrideItemRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface InferenceClassificationOverrideItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: InferenceClassificationOverrideItemRequestBuilderGetQueryParameters | undefined;
}
