import {TeamworkTagMember, TeamworkTagMemberCollectionResponse} from '../../../../../../models/';
import {createTeamworkTagMemberCollectionResponseFromDiscriminatorValue} from '../../../../../../models/createTeamworkTagMemberCollectionResponseFromDiscriminatorValue';
import {createTeamworkTagMemberFromDiscriminatorValue} from '../../../../../../models/createTeamworkTagMemberFromDiscriminatorValue';
import {ODataError} from '../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {TeamworkTagMemberItemRequestBuilder} from './item/teamworkTagMemberItemRequestBuilder';
import {MembersRequestBuilderGetRequestConfiguration} from './membersRequestBuilderGetRequestConfiguration';
import {MembersRequestBuilderPostRequestConfiguration} from './membersRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the members property of the microsoft.graph.teamworkTag entity.
 */
export class MembersRequestBuilder extends BaseRequestBuilder {
    /** Provides operations to count the resources in the collection. */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the members property of the microsoft.graph.teamworkTag entity.
     * @param teamworkTagMemberId Unique identifier of the item
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
        super(pathParameters, requestAdapter, "{+baseurl}/me/joinedTeams/{team%2Did}/tags/{teamworkTag%2Did}/members{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Users assigned to the tag.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of TeamworkTagMemberCollectionResponse
     */
    public get(requestConfiguration?: MembersRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<TeamworkTagMemberCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<TeamworkTagMemberCollectionResponse>(requestInfo, createTeamworkTagMemberCollectionResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create new navigation property to members for me
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of TeamworkTagMember
     */
    public post(body: TeamworkTagMember | undefined, requestConfiguration?: MembersRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<TeamworkTagMember | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<TeamworkTagMember>(requestInfo, createTeamworkTagMemberFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Users assigned to the tag.
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
     * Create new navigation property to members for me
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: TeamworkTagMember | undefined, requestConfiguration?: MembersRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        return requestInfo;
    };
}
