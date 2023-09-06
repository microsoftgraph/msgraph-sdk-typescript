import { type ConversationMemberCollectionResponse } from '../../../../../../models/';
import { type ConversationMember } from '../../../../../../models/conversationMember';
import { createConversationMemberCollectionResponseFromDiscriminatorValue } from '../../../../../../models/createConversationMemberCollectionResponseFromDiscriminatorValue';
import { createConversationMemberFromDiscriminatorValue } from '../../../../../../models/createConversationMemberFromDiscriminatorValue';
import { deserializeIntoConversationMember } from '../../../../../../models/deserializeIntoConversationMember';
import { type ODataError } from '../../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../../../models/oDataErrors/serializeODataError';
import { serializeConversationMember } from '../../../../../../models/serializeConversationMember';
import { AddRequestBuilder } from './add/addRequestBuilder';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { ConversationMemberItemRequestBuilder } from './item/conversationMemberItemRequestBuilder';
import { type MembersRequestBuilderGetRequestConfiguration } from './membersRequestBuilderGetRequestConfiguration';
import { type MembersRequestBuilderPostRequestConfiguration } from './membersRequestBuilderPostRequestConfiguration';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the members property of the microsoft.graph.channel entity.
 */
export class MembersRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to call the add method.
     */
    public get add(): AddRequestBuilder {
        return new AddRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the members property of the microsoft.graph.channel entity.
     * @param conversationMemberId The unique identifier of conversationMember
     * @returns a ConversationMemberItemRequestBuilder
     */
    public byConversationMemberId(conversationMemberId: string) : ConversationMemberItemRequestBuilder {
        if(!conversationMemberId) throw new Error("conversationMemberId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["conversationMember%2Did"] = conversationMemberId
        return new ConversationMemberItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new MembersRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/groups/{group%2Did}/team/channels/{channel%2Did}/members{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Retrieve a list of conversationMembers from a channel. This method supports federation. Only a user who is a member of the shared channel can retrieve the channel member list.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ConversationMemberCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/channel-list-members?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: MembersRequestBuilderGetRequestConfiguration | undefined) : Promise<ConversationMemberCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ConversationMemberCollectionResponse>(requestInfo, createConversationMemberCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Add a conversationMember to a channel.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ConversationMember
     * @see {@link https://learn.microsoft.com/graph/api/conversationmember-add?view=graph-rest-1.0|Find more info here}
     */
    public post(body: ConversationMember, requestConfiguration?: MembersRequestBuilderPostRequestConfiguration | undefined) : Promise<ConversationMember | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ConversationMember>(requestInfo, createConversationMemberFromDiscriminatorValue, errorMapping);
    };
    /**
     * Retrieve a list of conversationMembers from a channel. This method supports federation. Only a user who is a member of the shared channel can retrieve the channel member list.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: MembersRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Add a conversationMember to a channel.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: ConversationMember, requestConfiguration?: MembersRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeConversationMember);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a membersRequestBuilder
     */
    public withUrl(rawUrl: string) : MembersRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new MembersRequestBuilder(rawUrl, this.requestAdapter);
    };
}
