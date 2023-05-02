import {AttachmentSessionsRequestBuilderGetQueryParameters} from './attachmentSessionsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface AttachmentSessionsRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: AttachmentSessionsRequestBuilderGetQueryParameters | undefined;
}
