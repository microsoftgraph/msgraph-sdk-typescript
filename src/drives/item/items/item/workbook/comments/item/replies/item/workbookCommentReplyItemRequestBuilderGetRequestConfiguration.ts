import {WorkbookCommentReplyItemRequestBuilderGetQueryParameters} from './workbookCommentReplyItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface WorkbookCommentReplyItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: WorkbookCommentReplyItemRequestBuilderGetQueryParameters | undefined;
}
