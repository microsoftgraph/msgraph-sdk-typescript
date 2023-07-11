import {LastMessagePreviewRequestBuilderGetQueryParameters} from './lastMessagePreviewRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

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
