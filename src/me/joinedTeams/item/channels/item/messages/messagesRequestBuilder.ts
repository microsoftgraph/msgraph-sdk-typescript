import { type ChatMessageCollectionResponse } from '../../../../../../models/';
import { type ChatMessage } from '../../../../../../models/chatMessage';
import { createChatMessageCollectionResponseFromDiscriminatorValue } from '../../../../../../models/createChatMessageCollectionResponseFromDiscriminatorValue';
import { createChatMessageFromDiscriminatorValue } from '../../../../../../models/createChatMessageFromDiscriminatorValue';
import { deserializeIntoChatMessage } from '../../../../../../models/deserializeIntoChatMessage';
import { type ODataError } from '../../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../../../models/oDataErrors/serializeODataError';
import { serializeChatMessage } from '../../../../../../models/serializeChatMessage';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { DeltaRequestBuilder } from './delta/deltaRequestBuilder';
import { ChatMessageItemRequestBuilder } from './item/chatMessageItemRequestBuilder';
import { type MessagesRequestBuilderGetRequestConfiguration } from './messagesRequestBuilderGetRequestConfiguration';
import { type MessagesRequestBuilderPostRequestConfiguration } from './messagesRequestBuilderPostRequestConfiguration';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the messages property of the microsoft.graph.channel entity.
 */
export class MessagesRequestBuilder extends BaseRequestBuilder {
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
     * Provides operations to manage the messages property of the microsoft.graph.channel entity.
     * @param chatMessageId The unique identifier of chatMessage
     * @returns a ChatMessageItemRequestBuilder
     */
    public byChatMessageId(chatMessageId: string) : ChatMessageItemRequestBuilder {
        if(!chatMessageId) throw new Error("chatMessageId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["chatMessage%2Did"] = chatMessageId
        return new ChatMessageItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new MessagesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/me/joinedTeams/{team%2Did}/channels/{channel%2Did}/messages{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Retrieve the list of messages (without the replies) in a channel of a team.  To get the replies for a message, call the list message replies or the get message reply API.  This method supports federation. To list channel messages in application context, the request must be made from the tenant that the channel owner belongs to (represented by the tenantId property on the channel).
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ChatMessageCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/channel-list-messages?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: MessagesRequestBuilderGetRequestConfiguration | undefined) : Promise<ChatMessageCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ChatMessageCollectionResponse>(requestInfo, createChatMessageCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Send a new chatMessage in the specified channel or a chat.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ChatMessage
     * @see {@link https://learn.microsoft.com/graph/api/chatmessage-post?view=graph-rest-1.0|Find more info here}
     */
    public post(body: ChatMessage, requestConfiguration?: MessagesRequestBuilderPostRequestConfiguration | undefined) : Promise<ChatMessage | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ChatMessage>(requestInfo, createChatMessageFromDiscriminatorValue, errorMapping);
    };
    /**
     * Retrieve the list of messages (without the replies) in a channel of a team.  To get the replies for a message, call the list message replies or the get message reply API.  This method supports federation. To list channel messages in application context, the request must be made from the tenant that the channel owner belongs to (represented by the tenantId property on the channel).
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: MessagesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Send a new chatMessage in the specified channel or a chat.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: ChatMessage, requestConfiguration?: MessagesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeChatMessage);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a messagesRequestBuilder
     */
    public withUrl(rawUrl: string) : MessagesRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new MessagesRequestBuilder(rawUrl, this.requestAdapter);
    };
}
