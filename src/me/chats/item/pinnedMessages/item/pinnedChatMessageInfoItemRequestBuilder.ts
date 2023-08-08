import {createPinnedChatMessageInfoFromDiscriminatorValue} from '../../../../../models/createPinnedChatMessageInfoFromDiscriminatorValue';
import {deserializeIntoPinnedChatMessageInfo} from '../../../../../models/deserializeIntoPinnedChatMessageInfo';
import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../models/oDataErrors/serializeODataError';
import type {PinnedChatMessageInfo} from '../../../../../models/pinnedChatMessageInfo';
import {serializePinnedChatMessageInfo} from '../../../../../models/serializePinnedChatMessageInfo';
import {MessageRequestBuilder} from './message/messageRequestBuilder';
import {PinnedChatMessageInfoItemRequestBuilderDeleteRequestConfiguration} from './pinnedChatMessageInfoItemRequestBuilderDeleteRequestConfiguration';
import {PinnedChatMessageInfoItemRequestBuilderGetRequestConfiguration} from './pinnedChatMessageInfoItemRequestBuilderGetRequestConfiguration';
import {PinnedChatMessageInfoItemRequestBuilderPatchRequestConfiguration} from './pinnedChatMessageInfoItemRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the pinnedMessages property of the microsoft.graph.chat entity.
 */
export class PinnedChatMessageInfoItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the message property of the microsoft.graph.pinnedChatMessageInfo entity.
     */
    public get message(): MessageRequestBuilder {
        return new MessageRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new PinnedChatMessageInfoItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/me/chats/{chat%2Did}/pinnedMessages/{pinnedChatMessageInfo%2Did}{?%24select,%24expand}");
    };
    /**
     * Unpin a message from a chat.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/chat-delete-pinnedmessages?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: PinnedChatMessageInfoItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
        const requestInfo = this.toDeleteRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendNoResponseContentAsync(requestInfo, errorMapping);
    };
    /**
     * A collection of all the pinned messages in the chat. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of PinnedChatMessageInfo
     */
    public get(requestConfiguration?: PinnedChatMessageInfoItemRequestBuilderGetRequestConfiguration | undefined) : Promise<PinnedChatMessageInfo | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<PinnedChatMessageInfo>(requestInfo, createPinnedChatMessageInfoFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property pinnedMessages in me
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of PinnedChatMessageInfo
     */
    public patch(body: PinnedChatMessageInfo, requestConfiguration?: PinnedChatMessageInfoItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<PinnedChatMessageInfo | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<PinnedChatMessageInfo>(requestInfo, createPinnedChatMessageInfoFromDiscriminatorValue, errorMapping);
    };
    /**
     * Unpin a message from a chat.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: PinnedChatMessageInfoItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * A collection of all the pinned messages in the chat. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: PinnedChatMessageInfoItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property pinnedMessages in me
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: PinnedChatMessageInfo, requestConfiguration?: PinnedChatMessageInfoItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializePinnedChatMessageInfo);
        return requestInfo;
    };
}
