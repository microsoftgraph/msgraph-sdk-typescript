import {createTaskFromDiscriminatorValue} from '../../../../../../../../models/identityGovernance/createTaskFromDiscriminatorValue';
import {deserializeIntoTask} from '../../../../../../../../models/identityGovernance/deserializeIntoTask';
import {serializeTask} from '../../../../../../../../models/identityGovernance/serializeTask';
import type {Task} from '../../../../../../../../models/identityGovernance/task';
import {ODataError} from '../../../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../../../models/oDataErrors/serializeODataError';
import {TaskItemRequestBuilderDeleteRequestConfiguration} from './taskItemRequestBuilderDeleteRequestConfiguration';
import {TaskItemRequestBuilderGetRequestConfiguration} from './taskItemRequestBuilderGetRequestConfiguration';
import {TaskItemRequestBuilderPatchRequestConfiguration} from './taskItemRequestBuilderPatchRequestConfiguration';
import {TaskProcessingResultsRequestBuilder} from './taskProcessingResults/taskProcessingResultsRequestBuilder';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the tasks property of the microsoft.graph.identityGovernance.workflowBase entity.
 */
export class TaskItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the taskProcessingResults property of the microsoft.graph.identityGovernance.task entity.
     */
    public get taskProcessingResults(): TaskProcessingResultsRequestBuilder {
        return new TaskProcessingResultsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new TaskItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identityGovernance/lifecycleWorkflows/workflows/{workflow%2Did}/versions/{workflowVersion%2DversionNumber}/tasks/{task%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property tasks for identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: TaskItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
        const requestInfo = this.toDeleteRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendNoResponseContentAsync(requestInfo, errorMapping);
    };
    /**
     * The tasks in the workflow.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Task
     */
    public get(requestConfiguration?: TaskItemRequestBuilderGetRequestConfiguration | undefined) : Promise<Task | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<Task>(requestInfo, createTaskFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property tasks in identityGovernance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Task
     */
    public patch(body: Task, requestConfiguration?: TaskItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<Task | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<Task>(requestInfo, createTaskFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property tasks for identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: TaskItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.DELETE;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * The tasks in the workflow.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: TaskItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property tasks in identityGovernance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: Task, requestConfiguration?: TaskItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeTask);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a TaskItemRequestBuilder
     */
    public withUrl(rawUrl: string) : TaskItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new TaskItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
