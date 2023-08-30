import {ChatCollectionResponse} from '../../models/';
import type {Chat} from '../../models/chat';
import {createChatCollectionResponseFromDiscriminatorValue} from '../../models/createChatCollectionResponseFromDiscriminatorValue';
import {createChatFromDiscriminatorValue} from '../../models/createChatFromDiscriminatorValue';
import {deserializeIntoChat} from '../../models/deserializeIntoChat';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import {serializeChat} from '../../models/serializeChat';
import {ChatsRequestBuilderGetRequestConfiguration} from './chatsRequestBuilderGetRequestConfiguration';
import {ChatsRequestBuilderPostRequestConfiguration} from './chatsRequestBuilderPostRequestConfiguration';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {GetAllMessagesRequestBuilder} from './getAllMessages/getAllMessagesRequestBuilder';
import {ChatItemRequestBuilder} from './item/chatItemRequestBuilder';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the chats property of the microsoft.graph.user entity.
 */
export class ChatsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the getAllMessages method.
     */
    public get getAllMessages(): GetAllMessagesRequestBuilder {
        return new GetAllMessagesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the chats property of the microsoft.graph.user entity.
     * @param chatId The unique identifier of chat
     * @returns a ChatItemRequestBuilder
     */
    public byChatId(chatId: string) : ChatItemRequestBuilder {
        if(!chatId) throw new Error("chatId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["chat%2Did"] = chatId
        return new ChatItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new ChatsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/me/chats{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Retrieve the list of chats that the user is part of. This method supports federation. When a user ID is provided, the calling application must belong to the same tenant that the user belongs to.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ChatCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/chat-list?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: ChatsRequestBuilderGetRequestConfiguration | undefined) : Promise<ChatCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ChatCollectionResponse>(requestInfo, createChatCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to chats for me
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Chat
     */
    public post(body: Chat, requestConfiguration?: ChatsRequestBuilderPostRequestConfiguration | undefined) : Promise<Chat | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<Chat>(requestInfo, createChatFromDiscriminatorValue, errorMapping);
    };
    /**
     * Retrieve the list of chats that the user is part of. This method supports federation. When a user ID is provided, the calling application must belong to the same tenant that the user belongs to.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ChatsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to chats for me
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: Chat, requestConfiguration?: ChatsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeChat);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a chatsRequestBuilder
     */
    public withUrl(rawUrl: string) : ChatsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new ChatsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
