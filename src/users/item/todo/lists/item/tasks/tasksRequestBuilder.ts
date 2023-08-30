import {TodoTaskCollectionResponse} from '../../../../../../models/';
import {createTodoTaskCollectionResponseFromDiscriminatorValue} from '../../../../../../models/createTodoTaskCollectionResponseFromDiscriminatorValue';
import {createTodoTaskFromDiscriminatorValue} from '../../../../../../models/createTodoTaskFromDiscriminatorValue';
import {deserializeIntoTodoTask} from '../../../../../../models/deserializeIntoTodoTask';
import {ODataError} from '../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../models/oDataErrors/serializeODataError';
import {serializeTodoTask} from '../../../../../../models/serializeTodoTask';
import type {TodoTask} from '../../../../../../models/todoTask';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {DeltaRequestBuilder} from './delta/deltaRequestBuilder';
import {TodoTaskItemRequestBuilder} from './item/todoTaskItemRequestBuilder';
import {TasksRequestBuilderGetRequestConfiguration} from './tasksRequestBuilderGetRequestConfiguration';
import {TasksRequestBuilderPostRequestConfiguration} from './tasksRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the tasks property of the microsoft.graph.todoTaskList entity.
 */
export class TasksRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the delta method.
     */
    public get delta(): DeltaRequestBuilder {
        return new DeltaRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the tasks property of the microsoft.graph.todoTaskList entity.
     * @param todoTaskId The unique identifier of todoTask
     * @returns a TodoTaskItemRequestBuilder
     */
    public byTodoTaskId(todoTaskId: string) : TodoTaskItemRequestBuilder {
        if(!todoTaskId) throw new Error("todoTaskId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["todoTask%2Did"] = todoTaskId
        return new TodoTaskItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new TasksRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/users/{user%2Did}/todo/lists/{todoTaskList%2Did}/tasks{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get the todoTask resources from the tasks navigation property of a specified todoTaskList.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of TodoTaskCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/todotasklist-list-tasks?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: TasksRequestBuilderGetRequestConfiguration | undefined) : Promise<TodoTaskCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<TodoTaskCollectionResponse>(requestInfo, createTodoTaskCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new task object in a specified todoTaskList.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of TodoTask
     * @see {@link https://learn.microsoft.com/graph/api/todotasklist-post-tasks?view=graph-rest-1.0|Find more info here}
     */
    public post(body: TodoTask, requestConfiguration?: TasksRequestBuilderPostRequestConfiguration | undefined) : Promise<TodoTask | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<TodoTask>(requestInfo, createTodoTaskFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get the todoTask resources from the tasks navigation property of a specified todoTaskList.
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
     * Create a new task object in a specified todoTaskList.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: TodoTask, requestConfiguration?: TasksRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeTodoTask);
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
