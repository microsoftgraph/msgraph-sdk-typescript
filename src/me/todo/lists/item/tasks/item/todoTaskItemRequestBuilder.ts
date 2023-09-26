import { type ODataError } from '../../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../../../../models/oDataErrors/oDataError';
import { createTodoTaskFromDiscriminatorValue, deserializeIntoTodoTask, serializeTodoTask, type TodoTask } from '../../../../../../models/todoTask';
import { AttachmentsRequestBuilder } from './attachments/attachmentsRequestBuilder';
import { AttachmentSessionsRequestBuilder } from './attachmentSessions/attachmentSessionsRequestBuilder';
import { ChecklistItemsRequestBuilder } from './checklistItems/checklistItemsRequestBuilder';
import { ExtensionsRequestBuilder } from './extensions/extensionsRequestBuilder';
import { LinkedResourcesRequestBuilder } from './linkedResources/linkedResourcesRequestBuilder';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface TodoTaskItemRequestBuilderDeleteRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
}
export interface TodoTaskItemRequestBuilderGetQueryParameters {
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Select properties to be returned
     */
    select?: string[];
}
export interface TodoTaskItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: TodoTaskItemRequestBuilderGetQueryParameters;
}
export interface TodoTaskItemRequestBuilderPatchRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
}
/**
 * Provides operations to manage the tasks property of the microsoft.graph.todoTaskList entity.
 */
export class TodoTaskItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the attachments property of the microsoft.graph.todoTask entity.
     */
    public get attachments(): AttachmentsRequestBuilder {
        return new AttachmentsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the attachmentSessions property of the microsoft.graph.todoTask entity.
     */
    public get attachmentSessions(): AttachmentSessionsRequestBuilder {
        return new AttachmentSessionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the checklistItems property of the microsoft.graph.todoTask entity.
     */
    public get checklistItems(): ChecklistItemsRequestBuilder {
        return new ChecklistItemsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the extensions property of the microsoft.graph.todoTask entity.
     */
    public get extensions(): ExtensionsRequestBuilder {
        return new ExtensionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the linkedResources property of the microsoft.graph.todoTask entity.
     */
    public get linkedResources(): LinkedResourcesRequestBuilder {
        return new LinkedResourcesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new TodoTaskItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/me/todo/lists/{todoTaskList%2Did}/tasks/{todoTask%2Did}{?%24select,%24expand}");
    };
    /**
     * Deletes a todoTask object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/todotask-delete?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: TodoTaskItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Read the properties and relationships of a todoTask object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of TodoTask
     * @see {@link https://learn.microsoft.com/graph/api/todotask-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: TodoTaskItemRequestBuilderGetRequestConfiguration | undefined) : Promise<TodoTask | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<TodoTask>(requestInfo, createTodoTaskFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the properties of a todoTask object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of TodoTask
     * @see {@link https://learn.microsoft.com/graph/api/todotask-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: TodoTask, requestConfiguration?: TodoTaskItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<TodoTask | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<TodoTask>(requestInfo, createTodoTaskFromDiscriminatorValue, errorMapping);
    };
    /**
     * Deletes a todoTask object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: TodoTaskItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Read the properties and relationships of a todoTask object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: TodoTaskItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the properties of a todoTask object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: TodoTask, requestConfiguration?: TodoTaskItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeTodoTask);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a TodoTaskItemRequestBuilder
     */
    public withUrl(rawUrl: string) : TodoTaskItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new TodoTaskItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
