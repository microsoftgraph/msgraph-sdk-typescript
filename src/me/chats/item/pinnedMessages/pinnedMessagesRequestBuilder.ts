import {PinnedChatMessageInfoCollectionResponse} from '../../../../models/';
import {createPinnedChatMessageInfoCollectionResponseFromDiscriminatorValue} from '../../../../models/createPinnedChatMessageInfoCollectionResponseFromDiscriminatorValue';
import {createPinnedChatMessageInfoFromDiscriminatorValue} from '../../../../models/createPinnedChatMessageInfoFromDiscriminatorValue';
import {deserializeIntoPinnedChatMessageInfo} from '../../../../models/deserializeIntoPinnedChatMessageInfo';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import type {PinnedChatMessageInfo} from '../../../../models/pinnedChatMessageInfo';
import {serializePinnedChatMessageInfo} from '../../../../models/serializePinnedChatMessageInfo';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {PinnedChatMessageInfoItemRequestBuilder} from './item/pinnedChatMessageInfoItemRequestBuilder';
import {PinnedMessagesRequestBuilderGetRequestConfiguration} from './pinnedMessagesRequestBuilderGetRequestConfiguration';
import {PinnedMessagesRequestBuilderPostRequestConfiguration} from './pinnedMessagesRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the pinnedMessages property of the microsoft.graph.chat entity.
 */
export class PinnedMessagesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the pinnedMessages property of the microsoft.graph.chat entity.
     * @param pinnedChatMessageInfoId Unique identifier of the item
     * @returns a PinnedChatMessageInfoItemRequestBuilder
     */
    public byPinnedChatMessageInfoId(pinnedChatMessageInfoId: string) : PinnedChatMessageInfoItemRequestBuilder {
        if(!pinnedChatMessageInfoId) throw new Error("pinnedChatMessageInfoId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["pinnedChatMessageInfo%2Did"] = pinnedChatMessageInfoId
        return new PinnedChatMessageInfoItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new PinnedMessagesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/me/chats/{chat%2Did}/pinnedMessages{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get a list of pinnedChatMessages in a chat.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of PinnedChatMessageInfoCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/chat-list-pinnedmessages?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: PinnedMessagesRequestBuilderGetRequestConfiguration | undefined) : Promise<PinnedChatMessageInfoCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<PinnedChatMessageInfoCollectionResponse>(requestInfo, createPinnedChatMessageInfoCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Pin a chat message in the specified chat. This API cannot create a new chat; you must use the list chats method to retrieve the ID of an existing chat before you can pin a chat message.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of PinnedChatMessageInfo
     * @see {@link https://learn.microsoft.com/graph/api/chat-post-pinnedmessages?view=graph-rest-1.0|Find more info here}
     */
    public post(body: PinnedChatMessageInfo, requestConfiguration?: PinnedMessagesRequestBuilderPostRequestConfiguration | undefined) : Promise<PinnedChatMessageInfo | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<PinnedChatMessageInfo>(requestInfo, createPinnedChatMessageInfoFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get a list of pinnedChatMessages in a chat.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: PinnedMessagesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Pin a chat message in the specified chat. This API cannot create a new chat; you must use the list chats method to retrieve the ID of an existing chat before you can pin a chat message.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: PinnedChatMessageInfo, requestConfiguration?: PinnedMessagesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializePinnedChatMessageInfo);
        return requestInfo;
    };
}
