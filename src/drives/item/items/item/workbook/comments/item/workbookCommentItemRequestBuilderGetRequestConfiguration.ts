import {WorkbookCommentItemRequestBuilderGetQueryParameters} from './workbookCommentItemRequestBuilderGetQueryParameters';
import type {RequestOption} from '@microsoft/kiota-abstractions';

export interface WorkbookCommentItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: WorkbookCommentItemRequestBuilderGetQueryParameters | undefined;
}
