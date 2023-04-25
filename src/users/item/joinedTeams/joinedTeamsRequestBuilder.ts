import {Team, TeamCollectionResponse} from '../../../models/';
import {createTeamCollectionResponseFromDiscriminatorValue} from '../../../models/createTeamCollectionResponseFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from '../../../models/createTeamFromDiscriminatorValue';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {GetAllMessagesRequestBuilder} from './getAllMessages/getAllMessagesRequestBuilder';
import {TeamItemRequestBuilder} from './item/teamItemRequestBuilder';
import {JoinedTeamsRequestBuilderGetRequestConfiguration} from './joinedTeamsRequestBuilderGetRequestConfiguration';
import {JoinedTeamsRequestBuilderPostRequestConfiguration} from './joinedTeamsRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the joinedTeams property of the microsoft.graph.user entity.
 */
export class JoinedTeamsRequestBuilder extends BaseRequestBuilder {
    /** Provides operations to count the resources in the collection. */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the getAllMessages method. */
    public get getAllMessages(): GetAllMessagesRequestBuilder {
        return new GetAllMessagesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the joinedTeams property of the microsoft.graph.user entity.
     * @param teamId Unique identifier of the item
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
     * Get joinedTeams from users
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of TeamCollectionResponse
     */
    public get(requestConfiguration?: JoinedTeamsRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<TeamCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<TeamCollectionResponse>(requestInfo, createTeamCollectionResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create new navigation property to joinedTeams for users
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Team
     */
    public post(body: Team | undefined, requestConfiguration?: JoinedTeamsRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Team | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<Team>(requestInfo, createTeamFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Get joinedTeams from users
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
    public toPostRequestInformation(body: Team | undefined, requestConfiguration?: JoinedTeamsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
