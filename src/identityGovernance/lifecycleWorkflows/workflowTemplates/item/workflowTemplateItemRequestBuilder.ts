import { type WorkflowTemplate } from '../../../../models/identityGovernance/';
import { createWorkflowTemplateFromDiscriminatorValue } from '../../../../models/identityGovernance/workflowTemplate';
import { type ODataError } from '../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../../models/oDataErrors/oDataError';
import { TasksRequestBuilder } from './tasks/tasksRequestBuilder';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface WorkflowTemplateItemRequestBuilderGetQueryParameters {
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Select properties to be returned
     */
    select?: string[];
}
export interface WorkflowTemplateItemRequestBuilderGetRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
    /**
     * Request query parameters
     */
    queryParameters?: WorkflowTemplateItemRequestBuilderGetQueryParameters;
}
/**
 * Provides operations to manage the workflowTemplates property of the microsoft.graph.identityGovernance.lifecycleWorkflowsContainer entity.
 */
export class WorkflowTemplateItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the tasks property of the microsoft.graph.identityGovernance.workflowTemplate entity.
     */
    public get tasks(): TasksRequestBuilder {
        return new TasksRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new WorkflowTemplateItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identityGovernance/lifecycleWorkflows/workflowTemplates/{workflowTemplate%2Did}{?%24select,%24expand}");
    };
    /**
     * Read the properties and relationships of a workflowTemplate object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WorkflowTemplate
     * @see {@link https://learn.microsoft.com/graph/api/identitygovernance-workflowtemplate-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: WorkflowTemplateItemRequestBuilderGetRequestConfiguration | undefined) : Promise<WorkflowTemplate | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<WorkflowTemplate>(requestInfo, createWorkflowTemplateFromDiscriminatorValue, errorMapping);
    };
    /**
     * Read the properties and relationships of a workflowTemplate object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: WorkflowTemplateItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.setQueryStringParametersFromRawObject(requestConfiguration.queryParameters);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a WorkflowTemplateItemRequestBuilder
     */
    public withUrl(rawUrl: string) : WorkflowTemplateItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new WorkflowTemplateItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
