import { type AssignmentDefaultsRequestBuilderGetQueryParameters } from './assignmentDefaultsRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface AssignmentDefaultsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: AssignmentDefaultsRequestBuilderGetQueryParameters | undefined;
}
