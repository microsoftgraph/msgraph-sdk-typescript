import {TodoTask} from '../../../../../../models/';
import {createTodoTaskFromDiscriminatorValue} from '../../../../../../models/createTodoTaskFromDiscriminatorValue';
import {ODataError} from '../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {AttachmentsRequestBuilder} from './attachments/attachmentsRequestBuilder';
import {AttachmentSessionsRequestBuilder} from './attachmentSessions/attachmentSessionsRequestBuilder';
import {ChecklistItemsRequestBuilder} from './checklistItems/checklistItemsRequestBuilder';
import {ExtensionsRequestBuilder} from './extensions/extensionsRequestBuilder';
import {LinkedResourcesRequestBuilder} from './linkedResources/linkedResourcesRequestBuilder';
import {TodoTaskItemRequestBuilderDeleteRequestConfiguration} from './todoTaskItemRequestBuilderDeleteRequestConfiguration';
import {TodoTaskItemRequestBuilderGetRequestConfiguration} from './todoTaskItemRequestBuilderGetRequestConfiguration';
import {TodoTaskItemRequestBuilderPatchRequestConfiguration} from './todoTaskItemRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the tasks property of the microsoft.graph.todoTaskList entity.
 */
export class TodoTaskItemRequestBuilder extends BaseRequestBuilder {
    /** Provides operations to manage the attachments property of the microsoft.graph.todoTask entity. */
    public get attachments(): AttachmentsRequestBuilder {
        return new AttachmentsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the attachmentSessions property of the microsoft.graph.todoTask entity. */
    public get attachmentSessions(): AttachmentSessionsRequestBuilder {
        return new AttachmentSessionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the checklistItems property of the microsoft.graph.todoTask entity. */
    public get checklistItems(): ChecklistItemsRequestBuilder {
        return new ChecklistItemsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the extensions property of the microsoft.graph.todoTask entity. */
    public get extensions(): ExtensionsRequestBuilder {
        return new ExtensionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the linkedResources property of the microsoft.graph.todoTask entity. */
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
     * Delete navigation property tasks for me
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: TodoTaskItemRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.toDeleteRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * The tasks in this task list. Read-only. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of TodoTask
     */
    public get(requestConfiguration?: TodoTaskItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<TodoTask | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<TodoTask>(requestInfo, createTodoTaskFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Update the navigation property tasks in me
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of TodoTask
     */
    public patch(body: TodoTask | undefined, requestConfiguration?: TodoTaskItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<TodoTask | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<TodoTask>(requestInfo, createTodoTaskFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Delete navigation property tasks for me
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
     * The tasks in this task list. Read-only. Nullable.
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
     * Update the navigation property tasks in me
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: TodoTask | undefined, requestConfiguration?: TodoTaskItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        return requestInfo;
    };
}
