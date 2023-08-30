import {TeamworkTagMemberCollectionResponse} from '../../../../../../models/';
import {createTeamworkTagMemberCollectionResponseFromDiscriminatorValue} from '../../../../../../models/createTeamworkTagMemberCollectionResponseFromDiscriminatorValue';
import {createTeamworkTagMemberFromDiscriminatorValue} from '../../../../../../models/createTeamworkTagMemberFromDiscriminatorValue';
import {deserializeIntoTeamworkTagMember} from '../../../../../../models/deserializeIntoTeamworkTagMember';
import {ODataError} from '../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../models/oDataErrors/serializeODataError';
import {serializeTeamworkTagMember} from '../../../../../../models/serializeTeamworkTagMember';
import type {TeamworkTagMember} from '../../../../../../models/teamworkTagMember';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {TeamworkTagMemberItemRequestBuilder} from './item/teamworkTagMemberItemRequestBuilder';
import {MembersRequestBuilderGetRequestConfiguration} from './membersRequestBuilderGetRequestConfiguration';
import {MembersRequestBuilderPostRequestConfiguration} from './membersRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the members property of the microsoft.graph.teamworkTag entity.
 */
export class MembersRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the members property of the microsoft.graph.teamworkTag entity.
     * @param teamworkTagMemberId The unique identifier of teamworkTagMember
     * @returns a TeamworkTagMemberItemRequestBuilder
     */
    public byTeamworkTagMemberId(teamworkTagMemberId: string) : TeamworkTagMemberItemRequestBuilder {
        if(!teamworkTagMemberId) throw new Error("teamworkTagMemberId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["teamworkTagMember%2Did"] = teamworkTagMemberId
        return new TeamworkTagMemberItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new MembersRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/groups/{group%2Did}/team/tags/{teamworkTag%2Did}/members{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get a list of the members of a standard tag in a team and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of TeamworkTagMemberCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/teamworktagmember-list?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: MembersRequestBuilderGetRequestConfiguration | undefined) : Promise<TeamworkTagMemberCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<TeamworkTagMemberCollectionResponse>(requestInfo, createTeamworkTagMemberCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new teamworkTagMember object in a team.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of TeamworkTagMember
     * @see {@link https://learn.microsoft.com/graph/api/teamworktagmember-post?view=graph-rest-1.0|Find more info here}
     */
    public post(body: TeamworkTagMember, requestConfiguration?: MembersRequestBuilderPostRequestConfiguration | undefined) : Promise<TeamworkTagMember | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<TeamworkTagMember>(requestInfo, createTeamworkTagMemberFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get a list of the members of a standard tag in a team and their properties.
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
     * Create a new teamworkTagMember object in a team.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: TeamworkTagMember, requestConfiguration?: MembersRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeTeamworkTagMember);
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
