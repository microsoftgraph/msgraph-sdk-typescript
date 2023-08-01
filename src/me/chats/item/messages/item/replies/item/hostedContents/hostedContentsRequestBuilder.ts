import {ChatMessageHostedContentCollectionResponse} from '../../../../../../../../models/';
import type {ChatMessageHostedContent} from '../../../../../../../../models/chatMessageHostedContent';
import {createChatMessageHostedContentCollectionResponseFromDiscriminatorValue} from '../../../../../../../../models/createChatMessageHostedContentCollectionResponseFromDiscriminatorValue';
import {createChatMessageHostedContentFromDiscriminatorValue} from '../../../../../../../../models/createChatMessageHostedContentFromDiscriminatorValue';
import {deserializeIntoChatMessageHostedContent} from '../../../../../../../../models/deserializeIntoChatMessageHostedContent';
import {ODataError} from '../../../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../../../models/oDataErrors/serializeODataError';
import {serializeChatMessageHostedContent} from '../../../../../../../../models/serializeChatMessageHostedContent';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {HostedContentsRequestBuilderGetRequestConfiguration} from './hostedContentsRequestBuilderGetRequestConfiguration';
import {HostedContentsRequestBuilderPostRequestConfiguration} from './hostedContentsRequestBuilderPostRequestConfiguration';
import {ChatMessageHostedContentItemRequestBuilder} from './item/chatMessageHostedContentItemRequestBuilder';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, getPathParameters} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the hostedContents property of the microsoft.graph.chatMessage entity.
 */
export class HostedContentsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the hostedContents property of the microsoft.graph.chatMessage entity.
     * @param chatMessageHostedContentId Unique identifier of the item
     * @returns a ChatMessageHostedContentItemRequestBuilder
     */
    public byChatMessageHostedContentId(chatMessageHostedContentId: string) : ChatMessageHostedContentItemRequestBuilder {
        if(!chatMessageHostedContentId) throw new Error("chatMessageHostedContentId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["chatMessageHostedContent%2Did"] = chatMessageHostedContentId
        return new ChatMessageHostedContentItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new HostedContentsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/me/chats/{chat%2Did}/messages/{chatMessage%2Did}/replies/{chatMessage%2Did1}/hostedContents{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Retrieve the list of chatMessageHostedContent objects from a message. This API only lists the hosted content objects. To get the content bytes, see get chatmessage hosted content
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ChatMessageHostedContentCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/chatmessage-list-hostedcontents?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: HostedContentsRequestBuilderGetRequestConfiguration | undefined) : Promise<ChatMessageHostedContentCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ChatMessageHostedContentCollectionResponse>(requestInfo, createChatMessageHostedContentCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to hostedContents for me
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ChatMessageHostedContent
     */
    public post(body: ChatMessageHostedContent | undefined, requestConfiguration?: HostedContentsRequestBuilderPostRequestConfiguration | undefined) : Promise<ChatMessageHostedContent | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ChatMessageHostedContent>(requestInfo, createChatMessageHostedContentFromDiscriminatorValue, errorMapping);
    };
    /**
     * Retrieve the list of chatMessageHostedContent objects from a message. This API only lists the hosted content objects. To get the content bytes, see get chatmessage hosted content
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: HostedContentsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to hostedContents for me
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: ChatMessageHostedContent | undefined, requestConfiguration?: HostedContentsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeChatMessageHostedContent);
        return requestInfo;
    };
}
