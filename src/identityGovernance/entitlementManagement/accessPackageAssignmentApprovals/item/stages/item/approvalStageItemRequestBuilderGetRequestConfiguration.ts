import {ApprovalStageItemRequestBuilderGetQueryParameters} from './approvalStageItemRequestBuilderGetQueryParameters';
import type {RequestOption} from '@microsoft/kiota-abstractions';

export interface ApprovalStageItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: ApprovalStageItemRequestBuilderGetQueryParameters | undefined;
}
