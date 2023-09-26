import { type TeamCollectionResponse } from '../../../models/';
import { type ODataError } from '../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../models/oDataErrors/oDataError';
import { createTeamFromDiscriminatorValue, deserializeIntoTeam, serializeTeam, type Team } from '../../../models/team';
import { createTeamCollectionResponseFromDiscriminatorValue } from '../../../models/teamCollectionResponse';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { GetAllMessagesRequestBuilder } from './getAllMessages/getAllMessagesRequestBuilder';
import { TeamItemRequestBuilder } from './item/teamItemRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface JoinedTeamsRequestBuilderGetQueryParameters {
    /**
     * Include count of items
     */
    count?: boolean;
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Filter items by property values
     */
    filter?: string;
    /**
     * Order items by property values
     */
    orderby?: string[];
    /**
     * Search items by search phrases
     */
    search?: string;
    /**
     * Select properties to be returned
     */
    select?: string[];
    /**
     * Skip the first n items
     */
    skip?: number;
    /**
     * Show only the first n items
     */
    top?: number;
}
export interface JoinedTeamsRequestBuilderGetRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
    /**
     * Request query parameters
     */
    queryParameters?: JoinedTeamsRequestBuilderGetQueryParameters;
}
export interface JoinedTeamsRequestBuilderPostRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
}
/**
 * Provides operations to manage the joinedTeams property of the microsoft.graph.user entity.
 */
export class JoinedTeamsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the getAllMessages method.
     */
    public get getAllMessages(): GetAllMessagesRequestBuilder {
        return new GetAllMessagesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the joinedTeams property of the microsoft.graph.user entity.
     * @param teamId The unique identifier of team
     * @returns a TeamItemRequestBuilder
     */
    public byTeamId(teamId: string) : TeamItemRequestBuilder {
        if(!teamId) throw new Error("teamId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["team%2Did"] = teamId
        return new TeamItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new JoinedTeamsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/users/{user%2Did}/joinedTeams{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get the teams in Microsoft Teams that the user is a direct member of.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of TeamCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/user-list-joinedteams?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: JoinedTeamsRequestBuilderGetRequestConfiguration | undefined) : Promise<TeamCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<TeamCollectionResponse>(requestInfo, createTeamCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to joinedTeams for users
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Team
     */
    public post(body: Team, requestConfiguration?: JoinedTeamsRequestBuilderPostRequestConfiguration | undefined) : Promise<Team | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<Team>(requestInfo, createTeamFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get the teams in Microsoft Teams that the user is a direct member of.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: JoinedTeamsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to joinedTeams for users
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: Team, requestConfiguration?: JoinedTeamsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeTeam);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a joinedTeamsRequestBuilder
     */
    public withUrl(rawUrl: string) : JoinedTeamsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new JoinedTeamsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
