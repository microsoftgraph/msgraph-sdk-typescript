import {TodoTask} from '../../../../../../../models/';
import {createTodoTaskFromDiscriminatorValue} from '../../../../../../../models/createTodoTaskFromDiscriminatorValue';
import {ODataError} from '../../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {AttachmentsRequestBuilder} from './attachments/attachmentsRequestBuilder';
import {AttachmentBaseItemRequestBuilder} from './attachments/item/attachmentBaseItemRequestBuilder';
import {AttachmentSessionsRequestBuilder} from './attachmentSessions/attachmentSessionsRequestBuilder';
import {AttachmentSessionItemRequestBuilder} from './attachmentSessions/item/attachmentSessionItemRequestBuilder';
import {ChecklistItemsRequestBuilder} from './checklistItems/checklistItemsRequestBuilder';
import {ChecklistItemItemRequestBuilder} from './checklistItems/item/checklistItemItemRequestBuilder';
import {ExtensionsRequestBuilder} from './extensions/extensionsRequestBuilder';
import {ExtensionItemRequestBuilder} from './extensions/item/extensionItemRequestBuilder';
import {LinkedResourceItemRequestBuilder} from './linkedResources/item/linkedResourceItemRequestBuilder';
import {LinkedResourcesRequestBuilder} from './linkedResources/linkedResourcesRequestBuilder';
import {TodoTaskItemRequestBuilderDeleteRequestConfiguration} from './todoTaskItemRequestBuilderDeleteRequestConfiguration';
import {TodoTaskItemRequestBuilderGetRequestConfiguration} from './todoTaskItemRequestBuilderGetRequestConfiguration';
import {TodoTaskItemRequestBuilderPatchRequestConfiguration} from './todoTaskItemRequestBuilderPatchRequestConfiguration';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the tasks property of the microsoft.graph.todoTaskList entity. */
export class TodoTaskItemRequestBuilder {
    /** The attachments property */
    public get attachments(): AttachmentsRequestBuilder {
        return new AttachmentsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The attachmentSessions property */
    public get attachmentSessions(): AttachmentSessionsRequestBuilder {
        return new AttachmentSessionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The checklistItems property */
    public get checklistItems(): ChecklistItemsRequestBuilder {
        return new ChecklistItemsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The extensions property */
    public get extensions(): ExtensionsRequestBuilder {
        return new ExtensionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The linkedResources property */
    public get linkedResources(): LinkedResourcesRequestBuilder {
        return new LinkedResourcesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.users.item.todo.lists.item.tasks.item.attachments.item collection
     * @param id Unique identifier of the item
     * @returns a AttachmentBaseItemRequestBuilder
     */
    public attachmentsById(id: string) : AttachmentBaseItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["attachmentBase%2Did"] = id
        return new AttachmentBaseItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.users.item.todo.lists.item.tasks.item.attachmentSessions.item collection
     * @param id Unique identifier of the item
     * @returns a AttachmentSessionItemRequestBuilder
     */
    public attachmentSessionsById(id: string) : AttachmentSessionItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["attachmentSession%2Did"] = id
        return new AttachmentSessionItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.users.item.todo.lists.item.tasks.item.checklistItems.item collection
     * @param id Unique identifier of the item
     * @returns a ChecklistItemItemRequestBuilder
     */
    public checklistItemsById(id: string) : ChecklistItemItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["checklistItem%2Did"] = id
        return new ChecklistItemItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new TodoTaskItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/users/{user%2Did}/todo/lists/{todoTaskList%2Did}/tasks/{todoTask%2Did}{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete navigation property tasks for users
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(requestConfiguration?: TodoTaskItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
    public createGetRequestInformation(requestConfiguration?: TodoTaskItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        requestInfo.headers["Accept"] = "application/json";
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.setQueryStringParametersFromRawObject(requestConfiguration.queryParameters);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * Update the navigation property tasks in users
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: TodoTask | undefined, requestConfiguration?: TodoTaskItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        requestInfo.headers["Accept"] = "application/json";
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        return requestInfo;
    };
    /**
     * Delete navigation property tasks for users
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: TodoTaskItemRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.users.item.todo.lists.item.tasks.item.extensions.item collection
     * @param id Unique identifier of the item
     * @returns a ExtensionItemRequestBuilder
     */
    public extensionsById(id: string) : ExtensionItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["extension%2Did"] = id
        return new ExtensionItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * The tasks in this task list. Read-only. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of TodoTask
     */
    public get(requestConfiguration?: TodoTaskItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<TodoTask | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<TodoTask>(requestInfo, createTodoTaskFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.users.item.todo.lists.item.tasks.item.linkedResources.item collection
     * @param id Unique identifier of the item
     * @returns a LinkedResourceItemRequestBuilder
     */
    public linkedResourcesById(id: string) : LinkedResourceItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["linkedResource%2Did"] = id
        return new LinkedResourceItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Update the navigation property tasks in users
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of TodoTask
     */
    public patch(body: TodoTask | undefined, requestConfiguration?: TodoTaskItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<TodoTask | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<TodoTask>(requestInfo, createTodoTaskFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
}
