import { type ConversationThreadCollectionResponse } from '../../../models/';
import { createConversationThreadFromDiscriminatorValue, deserializeIntoConversationThread, serializeConversationThread, type ConversationThread } from '../../../models/conversationThread';
import { createConversationThreadCollectionResponseFromDiscriminatorValue } from '../../../models/conversationThreadCollectionResponse';
import { type ODataError } from '../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../models/oDataErrors/oDataError';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { ConversationThreadItemRequestBuilder } from './item/conversationThreadItemRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface ThreadsRequestBuilderGetQueryParameters {
    /**
     * Include count of items
     */
    count?: boolean;
    /**
     * Filter items by property values
     */
    filter?: string;
    /**
     * Order items by property values
     */
    orderby?: string[];
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
export interface ThreadsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: ThreadsRequestBuilderGetQueryParameters;
}
export interface ThreadsRequestBuilderPostRequestConfiguration {
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
 * Provides operations to manage the threads property of the microsoft.graph.group entity.
 */
export class ThreadsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the threads property of the microsoft.graph.group entity.
     * @param conversationThreadId The unique identifier of conversationThread
     * @returns a ConversationThreadItemRequestBuilder
     */
    public byConversationThreadId(conversationThreadId: string) : ConversationThreadItemRequestBuilder {
        if(!conversationThreadId) throw new Error("conversationThreadId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["conversationThread%2Did"] = conversationThreadId
        return new ConversationThreadItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new ThreadsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/groups/{group%2Did}/threads{?%24top,%24skip,%24filter,%24count,%24orderby,%24select}");
    };
    /**
     * Get all the threads of a group. This API is supported in the following national cloud deployments.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ConversationThreadCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/group-list-threads?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: ThreadsRequestBuilderGetRequestConfiguration | undefined) : Promise<ConversationThreadCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ConversationThreadCollectionResponse>(requestInfo, createConversationThreadCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Start a new group conversation by first creating a thread. A new conversation, conversation thread, and post are created in the group.Use reply thread or reply post to further post to that thread. Note: You can also start a new thread in an existing conversation. This API is supported in the following national cloud deployments.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ConversationThread
     * @see {@link https://learn.microsoft.com/graph/api/group-post-threads?view=graph-rest-1.0|Find more info here}
     */
    public post(body: ConversationThread, requestConfiguration?: ThreadsRequestBuilderPostRequestConfiguration | undefined) : Promise<ConversationThread | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ConversationThread>(requestInfo, createConversationThreadFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get all the threads of a group. This API is supported in the following national cloud deployments.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ThreadsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Start a new group conversation by first creating a thread. A new conversation, conversation thread, and post are created in the group.Use reply thread or reply post to further post to that thread. Note: You can also start a new thread in an existing conversation. This API is supported in the following national cloud deployments.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: ConversationThread, requestConfiguration?: ThreadsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeConversationThread);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a threadsRequestBuilder
     */
    public withUrl(rawUrl: string) : ThreadsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new ThreadsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
