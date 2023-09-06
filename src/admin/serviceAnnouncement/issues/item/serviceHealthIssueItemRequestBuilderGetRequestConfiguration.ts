import { type ServiceHealthIssueItemRequestBuilderGetQueryParameters } from './serviceHealthIssueItemRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface ServiceHealthIssueItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: ServiceHealthIssueItemRequestBuilderGetQueryParameters | undefined;
}
