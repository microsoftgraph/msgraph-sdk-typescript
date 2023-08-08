import {AssignmentRequestsRequestBuilderGetQueryParameters} from './assignmentRequestsRequestBuilderGetQueryParameters';
import type {RequestOption} from '@microsoft/kiota-abstractions';

export interface AssignmentRequestsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: AssignmentRequestsRequestBuilderGetQueryParameters | undefined;
}
