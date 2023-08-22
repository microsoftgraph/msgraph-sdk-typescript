import {TeamCollectionResponse} from '../models/';
import {createTeamCollectionResponseFromDiscriminatorValue} from '../models/createTeamCollectionResponseFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from '../models/createTeamFromDiscriminatorValue';
import {deserializeIntoTeam} from '../models/deserializeIntoTeam';
import {ODataError} from '../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../models/oDataErrors/serializeODataError';
import {serializeTeam} from '../models/serializeTeam';
import type {Team} from '../models/team';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {GetAllMessagesRequestBuilder} from './getAllMessages/getAllMessagesRequestBuilder';
import {TeamItemRequestBuilder} from './item/teamItemRequestBuilder';
import {TeamsRequestBuilderGetRequestConfiguration} from './teamsRequestBuilderGetRequestConfiguration';
import {TeamsRequestBuilderPostRequestConfiguration} from './teamsRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the collection of team entities.
 */
export class TeamsRequestBuilder extends BaseRequestBuilder {
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
     * Provides operations to manage the collection of team entities.
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
     * Instantiates a new TeamsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/teams{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * List all teams in an organization.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of TeamCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/teams-list?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: TeamsRequestBuilderGetRequestConfiguration | undefined) : Promise<TeamCollectionResponse | undefined> {
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
     * Create a new team.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Team
     * @see {@link https://learn.microsoft.com/graph/api/team-post?view=graph-rest-1.0|Find more info here}
     */
    public post(body: Team, requestConfiguration?: TeamsRequestBuilderPostRequestConfiguration | undefined) : Promise<Team | undefined> {
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
     * List all teams in an organization.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: TeamsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new team.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: Team, requestConfiguration?: TeamsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
}
