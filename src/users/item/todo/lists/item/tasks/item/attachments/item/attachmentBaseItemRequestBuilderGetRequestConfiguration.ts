import { type AttachmentBaseItemRequestBuilderGetQueryParameters } from './attachmentBaseItemRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

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
