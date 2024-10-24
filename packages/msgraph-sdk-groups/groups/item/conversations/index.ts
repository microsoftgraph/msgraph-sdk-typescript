/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createConversationCollectionResponseFromDiscriminatorValue, createConversationFromDiscriminatorValue, serializeConversation, type Conversation, type ConversationCollectionResponse } from '@microsoft/msgraph-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/index.js';
// @ts-ignore
import { ConversationItemRequestBuilderNavigationMetadata, ConversationItemRequestBuilderRequestsMetadata, type ConversationItemRequestBuilder } from './item/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the conversations property of the microsoft.graph.group entity.
 */
export interface ConversationsRequestBuilder extends BaseRequestBuilder<ConversationsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the conversations property of the microsoft.graph.group entity.
     * @param conversationId The unique identifier of conversation
     * @returns {ConversationItemRequestBuilder}
     */
     byConversationId(conversationId: string) : ConversationItemRequestBuilder;
    /**
     * Retrieve the list of conversations in this group.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ConversationCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/group-list-conversations?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<ConversationsRequestBuilderGetQueryParameters> | undefined) : Promise<ConversationCollectionResponse | undefined>;
    /**
     * Use reply thread or reply post to further post to that conversation.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<Conversation>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/group-post-conversations?view=graph-rest-1.0|Find more info here}
     */
     post(body: Conversation, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<Conversation | undefined>;
    /**
     * Retrieve the list of conversations in this group.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<ConversationsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Use reply thread or reply post to further post to that conversation.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: Conversation, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Retrieve the list of conversations in this group.
 */
export interface ConversationsRequestBuilderGetQueryParameters {
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
export const ConversationsRequestBuilderUriTemplate = "{+baseurl}/groups/{group%2Did}/conversations{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const ConversationsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const ConversationsRequestBuilderNavigationMetadata: Record<Exclude<keyof ConversationsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byConversationId: {
        requestsMetadata: ConversationItemRequestBuilderRequestsMetadata,
        navigationMetadata: ConversationItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["conversation%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const ConversationsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: ConversationsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createConversationCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: ConversationsRequestBuilderGetQueryParametersMapper,
    },
    post: {
        uriTemplate: ConversationsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createConversationFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeConversation,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
