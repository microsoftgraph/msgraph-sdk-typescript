import {WorkflowCollectionResponse} from '../../../models/identityGovernance/';
import {createWorkflowCollectionResponseFromDiscriminatorValue} from '../../../models/identityGovernance/createWorkflowCollectionResponseFromDiscriminatorValue';
import {createWorkflowFromDiscriminatorValue} from '../../../models/identityGovernance/createWorkflowFromDiscriminatorValue';
import {deserializeIntoWorkflow} from '../../../models/identityGovernance/deserializeIntoWorkflow';
import {serializeWorkflow} from '../../../models/identityGovernance/serializeWorkflow';
import type {Workflow} from '../../../models/identityGovernance/workflow';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {WorkflowItemRequestBuilder} from './item/workflowItemRequestBuilder';
import {WorkflowsRequestBuilderGetRequestConfiguration} from './workflowsRequestBuilderGetRequestConfiguration';
import {WorkflowsRequestBuilderPostRequestConfiguration} from './workflowsRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the workflows property of the microsoft.graph.identityGovernance.lifecycleWorkflowsContainer entity.
 */
export class WorkflowsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the workflows property of the microsoft.graph.identityGovernance.lifecycleWorkflowsContainer entity.
     * @param workflowId Unique identifier of the item
     * @returns a WorkflowItemRequestBuilder
     */
    public byWorkflowId(workflowId: string) : WorkflowItemRequestBuilder {
        if(!workflowId) throw new Error("workflowId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["workflow%2Did"] = workflowId
        return new WorkflowItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new WorkflowsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identityGovernance/lifecycleWorkflows/workflows{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get a list of workflow resources that are associated with lifecycle workflows.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WorkflowCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/identitygovernance-lifecycleworkflowscontainer-list-workflows?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: WorkflowsRequestBuilderGetRequestConfiguration | undefined) : Promise<WorkflowCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<WorkflowCollectionResponse>(requestInfo, createWorkflowCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new workflow object. You can create up to 50 workflows in a tenant.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Workflow
     * @see {@link https://learn.microsoft.com/graph/api/identitygovernance-lifecycleworkflowscontainer-post-workflows?view=graph-rest-1.0|Find more info here}
     */
    public post(body: Workflow, requestConfiguration?: WorkflowsRequestBuilderPostRequestConfiguration | undefined) : Promise<Workflow | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<Workflow>(requestInfo, createWorkflowFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get a list of workflow resources that are associated with lifecycle workflows.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: WorkflowsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new workflow object. You can create up to 50 workflows in a tenant.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: Workflow, requestConfiguration?: WorkflowsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.POST;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeWorkflow);
        return requestInfo;
    };
}
