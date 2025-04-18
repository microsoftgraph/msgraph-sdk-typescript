/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createTodoTaskListFromDiscriminatorValue, serializeTodoTaskList, type TodoTaskList } from '@microsoft/msgraph-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { ExtensionsRequestBuilderNavigationMetadata, ExtensionsRequestBuilderRequestsMetadata, type ExtensionsRequestBuilder } from './extensions/index.js';
// @ts-ignore
import { TasksRequestBuilderNavigationMetadata, TasksRequestBuilderRequestsMetadata, type TasksRequestBuilder } from './tasks/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the lists property of the microsoft.graph.todo entity.
 */
export interface TodoTaskListItemRequestBuilder extends BaseRequestBuilder<TodoTaskListItemRequestBuilder> {
    /**
     * Provides operations to manage the extensions property of the microsoft.graph.todoTaskList entity.
     */
    get extensions(): ExtensionsRequestBuilder;
    /**
     * Provides operations to manage the tasks property of the microsoft.graph.todoTaskList entity.
     */
    get tasks(): TasksRequestBuilder;
    /**
     * Delete navigation property lists for users
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * The task lists in the users mailbox.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<TodoTaskList>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<TodoTaskListItemRequestBuilderGetQueryParameters> | undefined) : Promise<TodoTaskList | undefined>;
    /**
     * Update the navigation property lists in users
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<TodoTaskList>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: TodoTaskList, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<TodoTaskList | undefined>;
    /**
     * Delete navigation property lists for users
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * The task lists in the users mailbox.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<TodoTaskListItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property lists in users
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: TodoTaskList, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * The task lists in the users mailbox.
 */
export interface TodoTaskListItemRequestBuilderGetQueryParameters {
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Select properties to be returned
     */
    select?: string[];
}
/**
 * Uri template for the request builder.
 */
export const TodoTaskListItemRequestBuilderUriTemplate = "{+baseurl}/users/{user%2Did}/todo/lists/{todoTaskList%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const TodoTaskListItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const TodoTaskListItemRequestBuilderNavigationMetadata: Record<Exclude<keyof TodoTaskListItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    extensions: {
        requestsMetadata: ExtensionsRequestBuilderRequestsMetadata,
        navigationMetadata: ExtensionsRequestBuilderNavigationMetadata,
    },
    tasks: {
        requestsMetadata: TasksRequestBuilderRequestsMetadata,
        navigationMetadata: TasksRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const TodoTaskListItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: TodoTaskListItemRequestBuilderUriTemplate,
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: TodoTaskListItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createTodoTaskListFromDiscriminatorValue,
        queryParametersMapper: TodoTaskListItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: TodoTaskListItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createTodoTaskListFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeTodoTaskList,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
