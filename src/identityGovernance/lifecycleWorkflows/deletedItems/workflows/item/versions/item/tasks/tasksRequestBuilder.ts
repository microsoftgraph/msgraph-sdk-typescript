import { type TaskCollectionResponse } from '../../../../../../../../models/identityGovernance/';
import { createTaskCollectionResponseFromDiscriminatorValue } from '../../../../../../../../models/identityGovernance/createTaskCollectionResponseFromDiscriminatorValue';
import { createTaskFromDiscriminatorValue } from '../../../../../../../../models/identityGovernance/createTaskFromDiscriminatorValue';
import { deserializeIntoTask } from '../../../../../../../../models/identityGovernance/deserializeIntoTask';
import { serializeTask } from '../../../../../../../../models/identityGovernance/serializeTask';
import { type Task } from '../../../../../../../../models/identityGovernance/task';
import { type ODataError } from '../../../../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../../../../../models/oDataErrors/serializeODataError';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { TaskItemRequestBuilder } from './item/taskItemRequestBuilder';
import { type TasksRequestBuilderGetRequestConfiguration } from './tasksRequestBuilderGetRequestConfiguration';
import { type TasksRequestBuilderPostRequestConfiguration } from './tasksRequestBuilderPostRequestConfiguration';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the tasks property of the microsoft.graph.identityGovernance.workflowBase entity.
 */
export class TasksRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the tasks property of the microsoft.graph.identityGovernance.workflowBase entity.
     * @param taskId The unique identifier of task
     * @returns a TaskItemRequestBuilder
     */
    public byTaskId(taskId: string) : TaskItemRequestBuilder {
        if(!taskId) throw new Error("taskId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["task%2Did"] = taskId
        return new TaskItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new TasksRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow%2Did}/versions/{workflowVersion%2DversionNumber}/tasks{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * The tasks in the workflow.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of TaskCollectionResponse
     */
    public get(requestConfiguration?: TasksRequestBuilderGetRequestConfiguration | undefined) : Promise<TaskCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<TaskCollectionResponse>(requestInfo, createTaskCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to tasks for identityGovernance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Task
     */
    public post(body: Task, requestConfiguration?: TasksRequestBuilderPostRequestConfiguration | undefined) : Promise<Task | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<Task>(requestInfo, createTaskFromDiscriminatorValue, errorMapping);
    };
    /**
     * The tasks in the workflow.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: TasksRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to tasks for identityGovernance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: Task, requestConfiguration?: TasksRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeTask);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a tasksRequestBuilder
     */
    public withUrl(rawUrl: string) : TasksRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new TasksRequestBuilder(rawUrl, this.requestAdapter);
    };
}
