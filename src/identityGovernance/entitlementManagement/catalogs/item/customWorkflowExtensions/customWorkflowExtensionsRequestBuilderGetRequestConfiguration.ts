import { type CustomWorkflowExtensionsRequestBuilderGetQueryParameters } from './customWorkflowExtensionsRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface CustomWorkflowExtensionsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: CustomWorkflowExtensionsRequestBuilderGetQueryParameters | undefined;
}
