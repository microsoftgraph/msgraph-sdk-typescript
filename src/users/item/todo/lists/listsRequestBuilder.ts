import {TodoTaskListCollectionResponse} from '../../../../models/';
import {createTodoTaskListCollectionResponseFromDiscriminatorValue} from '../../../../models/createTodoTaskListCollectionResponseFromDiscriminatorValue';
import {createTodoTaskListFromDiscriminatorValue} from '../../../../models/createTodoTaskListFromDiscriminatorValue';
import {deserializeIntoTodoTaskList} from '../../../../models/deserializeIntoTodoTaskList';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {serializeTodoTaskList} from '../../../../models/serializeTodoTaskList';
import type {TodoTaskList} from '../../../../models/todoTaskList';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {DeltaRequestBuilder} from './delta/deltaRequestBuilder';
import {TodoTaskListItemRequestBuilder} from './item/todoTaskListItemRequestBuilder';
import {ListsRequestBuilderGetRequestConfiguration} from './listsRequestBuilderGetRequestConfiguration';
import {ListsRequestBuilderPostRequestConfiguration} from './listsRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the lists property of the microsoft.graph.todo entity.
 */
export class ListsRequestBuilder extends BaseRequestBuilder {
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
     * Provides operations to manage the lists property of the microsoft.graph.todo entity.
     * @param todoTaskListId The unique identifier of todoTaskList
     * @returns a TodoTaskListItemRequestBuilder
     */
    public byTodoTaskListId(todoTaskListId: string) : TodoTaskListItemRequestBuilder {
        if(!todoTaskListId) throw new Error("todoTaskListId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["todoTaskList%2Did"] = todoTaskListId
        return new TodoTaskListItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new ListsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/users/{user%2Did}/todo/lists{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get a list of the todoTaskList objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of TodoTaskListCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/todo-list-lists?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: ListsRequestBuilderGetRequestConfiguration | undefined) : Promise<TodoTaskListCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<TodoTaskListCollectionResponse>(requestInfo, createTodoTaskListCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new lists object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of TodoTaskList
     * @see {@link https://learn.microsoft.com/graph/api/todo-post-lists?view=graph-rest-1.0|Find more info here}
     */
    public post(body: TodoTaskList, requestConfiguration?: ListsRequestBuilderPostRequestConfiguration | undefined) : Promise<TodoTaskList | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<TodoTaskList>(requestInfo, createTodoTaskListFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get a list of the todoTaskList objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ListsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new lists object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: TodoTaskList, requestConfiguration?: ListsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeTodoTaskList);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a listsRequestBuilder
     */
    public withUrl(rawUrl: string) : ListsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new ListsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
