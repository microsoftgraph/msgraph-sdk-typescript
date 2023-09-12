import { type CustomExtensionRequestBuilderGetQueryParameters } from './customExtensionRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface CustomExtensionRequestBuilderGetRequestConfiguration {
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
    queryParameters?: CustomExtensionRequestBuilderGetQueryParameters | undefined;
}
