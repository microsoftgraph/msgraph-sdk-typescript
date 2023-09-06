import { type AssignmentPoliciesRequestBuilderGetQueryParameters } from './assignmentPoliciesRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface AssignmentPoliciesRequestBuilderGetRequestConfiguration {
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
    queryParameters?: AssignmentPoliciesRequestBuilderGetQueryParameters | undefined;
}
