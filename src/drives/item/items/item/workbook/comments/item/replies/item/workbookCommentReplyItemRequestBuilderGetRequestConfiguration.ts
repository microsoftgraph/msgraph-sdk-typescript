import { type WorkbookCommentReplyItemRequestBuilderGetQueryParameters } from './workbookCommentReplyItemRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface WorkbookCommentReplyItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: WorkbookCommentReplyItemRequestBuilderGetQueryParameters | undefined;
}
