import {ConversationMemberCollectionResponse} from '../../../../../../../models/';
import {createConversationMemberCollectionResponseFromDiscriminatorValue} from '../../../../../../../models/createConversationMemberCollectionResponseFromDiscriminatorValue';
import {ODataError} from '../../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../../models/oDataErrors/serializeODataError';
import {AllowedMembersRequestBuilderGetRequestConfiguration} from './allowedMembersRequestBuilderGetRequestConfiguration';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {ConversationMemberItemRequestBuilder} from './item/conversationMemberItemRequestBuilder';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the allowedMembers property of the microsoft.graph.sharedWithChannelTeamInfo entity.
 */
export class AllowedMembersRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the allowedMembers property of the microsoft.graph.sharedWithChannelTeamInfo entity.
     * @param conversationMemberId Unique identifier of the item
     * @returns a ConversationMemberItemRequestBuilder
     */
    public byConversationMemberId(conversationMemberId: string) : ConversationMemberItemRequestBuilder {
        if(!conversationMemberId) throw new Error("conversationMemberId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["conversationMember%2Did"] = conversationMemberId
        return new ConversationMemberItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new AllowedMembersRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/teams/{team%2Did}/channels/{channel%2Did}/sharedWithTeams/{sharedWithChannelTeamInfo%2Did}/allowedMembers{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get the list of conversationMembers who can access a shared channel. This method does not return the following conversationMembers from the team:- Users with `Guest` role- Users who are externally authenticated in the tenant
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ConversationMemberCollectionResponse
     * @see {@link https://docs.microsoft.com/graph/api/sharedwithchannelteaminfo-list-allowedmembers?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: AllowedMembersRequestBuilderGetRequestConfiguration | undefined) : Promise<ConversationMemberCollectionResponse | undefined> {
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
     * Get the list of conversationMembers who can access a shared channel. This method does not return the following conversationMembers from the team:- Users with `Guest` role- Users who are externally authenticated in the tenant
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: AllowedMembersRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
}
