/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createNotificationMessageTemplateCollectionResponseFromDiscriminatorValue, createNotificationMessageTemplateFromDiscriminatorValue, serializeNotificationMessageTemplate, type NotificationMessageTemplate, type NotificationMessageTemplateCollectionResponse } from '@microsoft/msgraph-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/index.js';
// @ts-ignore
import { NotificationMessageTemplateItemRequestBuilderNavigationMetadata, NotificationMessageTemplateItemRequestBuilderRequestsMetadata, type NotificationMessageTemplateItemRequestBuilder } from './item/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the notificationMessageTemplates property of the microsoft.graph.deviceManagement entity.
 */
export interface NotificationMessageTemplatesRequestBuilder extends BaseRequestBuilder<NotificationMessageTemplatesRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the notificationMessageTemplates property of the microsoft.graph.deviceManagement entity.
     * @param notificationMessageTemplateId The unique identifier of notificationMessageTemplate
     * @returns {NotificationMessageTemplateItemRequestBuilder}
     */
     byNotificationMessageTemplateId(notificationMessageTemplateId: string) : NotificationMessageTemplateItemRequestBuilder;
    /**
     * List properties and relationships of the notificationMessageTemplate objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<NotificationMessageTemplateCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/intune-notification-notificationmessagetemplate-list?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<NotificationMessageTemplatesRequestBuilderGetQueryParameters> | undefined) : Promise<NotificationMessageTemplateCollectionResponse | undefined>;
    /**
     * Create a new notificationMessageTemplate object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<NotificationMessageTemplate>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/intune-notification-notificationmessagetemplate-create?view=graph-rest-1.0|Find more info here}
     */
     post(body: NotificationMessageTemplate, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<NotificationMessageTemplate | undefined>;
    /**
     * List properties and relationships of the notificationMessageTemplate objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<NotificationMessageTemplatesRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create a new notificationMessageTemplate object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: NotificationMessageTemplate, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * List properties and relationships of the notificationMessageTemplate objects.
 */
export interface NotificationMessageTemplatesRequestBuilderGetQueryParameters {
    /**
     * Include count of items
     */
    count?: boolean;
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Filter items by property values
     */
    filter?: string;
    /**
     * Order items by property values
     */
    orderby?: string[];
    /**
     * Search items by search phrases
     */
    search?: string;
    /**
     * Select properties to be returned
     */
    select?: string[];
    /**
     * Skip the first n items
     */
    skip?: number;
    /**
     * Show only the first n items
     */
    top?: number;
}
/**
 * Uri template for the request builder.
 */
export const NotificationMessageTemplatesRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/notificationMessageTemplates{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const NotificationMessageTemplatesRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "count": "%24count",
    "expand": "%24expand",
    "filter": "%24filter",
    "orderby": "%24orderby",
    "search": "%24search",
    "select": "%24select",
    "skip": "%24skip",
    "top": "%24top",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const NotificationMessageTemplatesRequestBuilderNavigationMetadata: Record<Exclude<keyof NotificationMessageTemplatesRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byNotificationMessageTemplateId: {
        requestsMetadata: NotificationMessageTemplateItemRequestBuilderRequestsMetadata,
        navigationMetadata: NotificationMessageTemplateItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["notificationMessageTemplate%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const NotificationMessageTemplatesRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: NotificationMessageTemplatesRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createNotificationMessageTemplateCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: NotificationMessageTemplatesRequestBuilderGetQueryParametersMapper,
    },
    post: {
        uriTemplate: NotificationMessageTemplatesRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createNotificationMessageTemplateFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeNotificationMessageTemplate,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
