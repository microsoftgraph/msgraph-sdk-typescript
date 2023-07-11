import {ConversationThreadCollectionResponse} from '../../../../../models/';
import {ConversationThread} from '../../../../../models/conversationThread';
import {createConversationThreadCollectionResponseFromDiscriminatorValue} from '../../../../../models/createConversationThreadCollectionResponseFromDiscriminatorValue';
import {createConversationThreadFromDiscriminatorValue} from '../../../../../models/createConversationThreadFromDiscriminatorValue';
import {deserializeIntoConversationThread} from '../../../../../models/deserializeIntoConversationThread';
import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../models/oDataErrors/serializeODataError';
import {serializeConversationThread} from '../../../../../models/serializeConversationThread';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {ConversationThreadItemRequestBuilder} from './item/conversationThreadItemRequestBuilder';
import {ThreadsRequestBuilderGetRequestConfiguration} from './threadsRequestBuilderGetRequestConfiguration';
import {ThreadsRequestBuilderPostRequestConfiguration} from './threadsRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the threads property of the microsoft.graph.conversation entity.
 */
export class ThreadsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the threads property of the microsoft.graph.conversation entity.
     * @param conversationThreadId Unique identifier of the item
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
        super(pathParameters, requestAdapter, "{+baseurl}/groups/{group%2Did}/conversations/{conversation%2Did}/threads{?%24top,%24skip,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get all the threads in a group conversation. Note: You can also get all the threads of a group.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ConversationThreadCollectionResponse
     * @see {@link https://docs.microsoft.com/graph/api/conversation-list-threads?view=graph-rest-1.0|Find more info here}
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
     * Create a new thread in the specified conversation.  A thread and post are created as specified. Use reply thread to further post to that thread. Or, if you get the post ID, you can also reply to that post in that thread. Note: You can also start a new conversation by first creating a thread.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ConversationThread
     * @see {@link https://docs.microsoft.com/graph/api/conversation-post-threads?view=graph-rest-1.0|Find more info here}
     */
    public post(body: ConversationThread | undefined, requestConfiguration?: ThreadsRequestBuilderPostRequestConfiguration | undefined) : Promise<ConversationThread | undefined> {
        if(!body) throw new Error("body cannot be undefined");
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
     * Get all the threads in a group conversation. Note: You can also get all the threads of a group.
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
     * Create a new thread in the specified conversation.  A thread and post are created as specified. Use reply thread to further post to that thread. Or, if you get the post ID, you can also reply to that post in that thread. Note: You can also start a new conversation by first creating a thread.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: ConversationThread | undefined, requestConfiguration?: ThreadsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeConversationThread);
        return requestInfo;
    };
}
