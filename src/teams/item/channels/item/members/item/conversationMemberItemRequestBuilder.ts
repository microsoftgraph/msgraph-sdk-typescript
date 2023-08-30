import type {ConversationMember} from '../../../../../../models/conversationMember';
import {createConversationMemberFromDiscriminatorValue} from '../../../../../../models/createConversationMemberFromDiscriminatorValue';
import {deserializeIntoConversationMember} from '../../../../../../models/deserializeIntoConversationMember';
import {ODataError} from '../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../models/oDataErrors/serializeODataError';
import {serializeConversationMember} from '../../../../../../models/serializeConversationMember';
import {ConversationMemberItemRequestBuilderDeleteRequestConfiguration} from './conversationMemberItemRequestBuilderDeleteRequestConfiguration';
import {ConversationMemberItemRequestBuilderGetRequestConfiguration} from './conversationMemberItemRequestBuilderGetRequestConfiguration';
import {ConversationMemberItemRequestBuilderPatchRequestConfiguration} from './conversationMemberItemRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the members property of the microsoft.graph.channel entity.
 */
export class ConversationMemberItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new ConversationMemberItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/teams/{team%2Did}/channels/{channel%2Did}/members/{conversationMember%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete a conversationMember from a channel. This operation is allowed only for channels with a membershipType value of private or shared.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/channel-delete-members?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: ConversationMemberItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Get a conversationMember from a channel.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ConversationMember
     * @see {@link https://learn.microsoft.com/graph/api/channel-get-members?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: ConversationMemberItemRequestBuilderGetRequestConfiguration | undefined) : Promise<ConversationMember | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ConversationMember>(requestInfo, createConversationMemberFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the role of a conversationMember in a channel. This operation is allowed only for channels with a membershipType value of private or shared.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ConversationMember
     * @see {@link https://learn.microsoft.com/graph/api/channel-update-members?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: ConversationMember, requestConfiguration?: ConversationMemberItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<ConversationMember | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ConversationMember>(requestInfo, createConversationMemberFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete a conversationMember from a channel. This operation is allowed only for channels with a membershipType value of private or shared.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: ConversationMemberItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Get a conversationMember from a channel.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ConversationMemberItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the role of a conversationMember in a channel. This operation is allowed only for channels with a membershipType value of private or shared.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: ConversationMember, requestConfiguration?: ConversationMemberItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeConversationMember);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a ConversationMemberItemRequestBuilder
     */
    public withUrl(rawUrl: string) : ConversationMemberItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new ConversationMemberItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
