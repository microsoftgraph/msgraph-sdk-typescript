import { type WorkflowTemplateItemRequestBuilderGetQueryParameters } from './workflowTemplateItemRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface WorkflowTemplateItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: WorkflowTemplateItemRequestBuilderGetQueryParameters | undefined;
}
