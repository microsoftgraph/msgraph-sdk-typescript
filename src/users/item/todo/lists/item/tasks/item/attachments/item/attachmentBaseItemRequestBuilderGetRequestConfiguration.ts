import {AttachmentBaseItemRequestBuilderGetQueryParameters} from './attachmentBaseItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface AttachmentBaseItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: AttachmentBaseItemRequestBuilderGetQueryParameters | undefined;
}
