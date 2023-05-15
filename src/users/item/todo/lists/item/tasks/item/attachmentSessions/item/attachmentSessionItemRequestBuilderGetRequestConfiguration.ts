import {AttachmentSessionItemRequestBuilderGetQueryParameters} from './attachmentSessionItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface AttachmentSessionItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: AttachmentSessionItemRequestBuilderGetQueryParameters | undefined;
}
