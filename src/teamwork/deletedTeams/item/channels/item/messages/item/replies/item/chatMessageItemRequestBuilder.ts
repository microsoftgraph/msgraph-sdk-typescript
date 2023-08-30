import type {ChatMessage} from '../../../../../../../../../models/chatMessage';
import {createChatMessageFromDiscriminatorValue} from '../../../../../../../../../models/createChatMessageFromDiscriminatorValue';
import {deserializeIntoChatMessage} from '../../../../../../../../../models/deserializeIntoChatMessage';
import {ODataError} from '../../../../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../../../../models/oDataErrors/serializeODataError';
import {serializeChatMessage} from '../../../../../../../../../models/serializeChatMessage';
import {ChatMessageItemRequestBuilderDeleteRequestConfiguration} from './chatMessageItemRequestBuilderDeleteRequestConfiguration';
import {ChatMessageItemRequestBuilderGetRequestConfiguration} from './chatMessageItemRequestBuilderGetRequestConfiguration';
import {ChatMessageItemRequestBuilderPatchRequestConfiguration} from './chatMessageItemRequestBuilderPatchRequestConfiguration';
import {HostedContentsRequestBuilder} from './hostedContents/hostedContentsRequestBuilder';
import {SetReactionRequestBuilder} from './setReaction/setReactionRequestBuilder';
import {SoftDeleteRequestBuilder} from './softDelete/softDeleteRequestBuilder';
import {UndoSoftDeleteRequestBuilder} from './undoSoftDelete/undoSoftDeleteRequestBuilder';
import {UnsetReactionRequestBuilder} from './unsetReaction/unsetReactionRequestBuilder';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the replies property of the microsoft.graph.chatMessage entity.
 */
export class ChatMessageItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the hostedContents property of the microsoft.graph.chatMessage entity.
     */
    public get hostedContents(): HostedContentsRequestBuilder {
        return new HostedContentsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the setReaction method.
     */
    public get setReaction(): SetReactionRequestBuilder {
        return new SetReactionRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the softDelete method.
     */
    public get softDelete(): SoftDeleteRequestBuilder {
        return new SoftDeleteRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the undoSoftDelete method.
     */
    public get undoSoftDelete(): UndoSoftDeleteRequestBuilder {
        return new UndoSoftDeleteRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the unsetReaction method.
     */
    public get unsetReaction(): UnsetReactionRequestBuilder {
        return new UnsetReactionRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new ChatMessageItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/teamwork/deletedTeams/{deletedTeam%2Did}/channels/{channel%2Did}/messages/{chatMessage%2Did}/replies/{chatMessage%2Did1}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property replies for teamwork
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: ChatMessageItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Retrieve a single message or a message reply in a channel or a chat.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ChatMessage
     * @see {@link https://learn.microsoft.com/graph/api/chatmessage-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: ChatMessageItemRequestBuilderGetRequestConfiguration | undefined) : Promise<ChatMessage | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ChatMessage>(requestInfo, createChatMessageFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property replies in teamwork
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ChatMessage
     */
    public patch(body: ChatMessage, requestConfiguration?: ChatMessageItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<ChatMessage | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ChatMessage>(requestInfo, createChatMessageFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property replies for teamwork
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: ChatMessageItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Retrieve a single message or a message reply in a channel or a chat.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ChatMessageItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property replies in teamwork
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: ChatMessage, requestConfiguration?: ChatMessageItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeChatMessage);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a ChatMessageItemRequestBuilder
     */
    public withUrl(rawUrl: string) : ChatMessageItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new ChatMessageItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
