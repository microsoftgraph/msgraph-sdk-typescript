import {WorkflowTemplateItemRequestBuilderGetQueryParameters} from './workflowTemplateItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

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
