import type {ChatMessageHostedContent} from '../../../../../../../../../models/chatMessageHostedContent';
import {createChatMessageHostedContentFromDiscriminatorValue} from '../../../../../../../../../models/createChatMessageHostedContentFromDiscriminatorValue';
import {deserializeIntoChatMessageHostedContent} from '../../../../../../../../../models/deserializeIntoChatMessageHostedContent';
import {ODataError} from '../../../../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../../../../models/oDataErrors/serializeODataError';
import {serializeChatMessageHostedContent} from '../../../../../../../../../models/serializeChatMessageHostedContent';
import {ChatMessageHostedContentItemRequestBuilderDeleteRequestConfiguration} from './chatMessageHostedContentItemRequestBuilderDeleteRequestConfiguration';
import {ChatMessageHostedContentItemRequestBuilderGetRequestConfiguration} from './chatMessageHostedContentItemRequestBuilderGetRequestConfiguration';
import {ChatMessageHostedContentItemRequestBuilderPatchRequestConfiguration} from './chatMessageHostedContentItemRequestBuilderPatchRequestConfiguration';
import {ContentRequestBuilder} from './value/contentRequestBuilder';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the hostedContents property of the microsoft.graph.chatMessage entity.
 */
export class ChatMessageHostedContentItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the media for the group entity.
     */
    public get content(): ContentRequestBuilder {
        return new ContentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new ChatMessageHostedContentItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/groups/{group%2Did}/team/channels/{channel%2Did}/messages/{chatMessage%2Did}/hostedContents/{chatMessageHostedContent%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property hostedContents for groups
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: ChatMessageHostedContentItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Retrieve the properties and relationships of chatMessageHostedContent object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ChatMessageHostedContent
     * @see {@link https://learn.microsoft.com/graph/api/chatmessagehostedcontent-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: ChatMessageHostedContentItemRequestBuilderGetRequestConfiguration | undefined) : Promise<ChatMessageHostedContent | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ChatMessageHostedContent>(requestInfo, createChatMessageHostedContentFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property hostedContents in groups
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ChatMessageHostedContent
     */
    public patch(body: ChatMessageHostedContent, requestConfiguration?: ChatMessageHostedContentItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<ChatMessageHostedContent | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ChatMessageHostedContent>(requestInfo, createChatMessageHostedContentFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property hostedContents for groups
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: ChatMessageHostedContentItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Retrieve the properties and relationships of chatMessageHostedContent object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ChatMessageHostedContentItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property hostedContents in groups
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: ChatMessageHostedContent, requestConfiguration?: ChatMessageHostedContentItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeChatMessageHostedContent);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a ChatMessageHostedContentItemRequestBuilder
     */
    public withUrl(rawUrl: string) : ChatMessageHostedContentItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new ChatMessageHostedContentItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
