import { type LastMessagePreviewRequestBuilderGetQueryParameters } from './lastMessagePreviewRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface LastMessagePreviewRequestBuilderGetRequestConfiguration {
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
    queryParameters?: LastMessagePreviewRequestBuilderGetQueryParameters | undefined;
}
