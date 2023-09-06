import { type DeletedTeamCollectionResponse } from '../../models/';
import { createDeletedTeamCollectionResponseFromDiscriminatorValue } from '../../models/createDeletedTeamCollectionResponseFromDiscriminatorValue';
import { createDeletedTeamFromDiscriminatorValue } from '../../models/createDeletedTeamFromDiscriminatorValue';
import { type DeletedTeam } from '../../models/deletedTeam';
import { deserializeIntoDeletedTeam } from '../../models/deserializeIntoDeletedTeam';
import { type ODataError } from '../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../models/oDataErrors/serializeODataError';
import { serializeDeletedTeam } from '../../models/serializeDeletedTeam';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { type DeletedTeamsRequestBuilderGetRequestConfiguration } from './deletedTeamsRequestBuilderGetRequestConfiguration';
import { type DeletedTeamsRequestBuilderPostRequestConfiguration } from './deletedTeamsRequestBuilderPostRequestConfiguration';
import { GetAllMessagesRequestBuilder } from './getAllMessages/getAllMessagesRequestBuilder';
import { DeletedTeamItemRequestBuilder } from './item/deletedTeamItemRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the deletedTeams property of the microsoft.graph.teamwork entity.
 */
export class DeletedTeamsRequestBuilder extends BaseRequestBuilder {
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
     * Provides operations to manage the deletedTeams property of the microsoft.graph.teamwork entity.
     * @param deletedTeamId The unique identifier of deletedTeam
     * @returns a DeletedTeamItemRequestBuilder
     */
    public byDeletedTeamId(deletedTeamId: string) : DeletedTeamItemRequestBuilder {
        if(!deletedTeamId) throw new Error("deletedTeamId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["deletedTeam%2Did"] = deletedTeamId
        return new DeletedTeamItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new DeletedTeamsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/teamwork/deletedTeams{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get a list of the deletedTeam objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DeletedTeamCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/teamwork-list-deletedteams?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: DeletedTeamsRequestBuilderGetRequestConfiguration | undefined) : Promise<DeletedTeamCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DeletedTeamCollectionResponse>(requestInfo, createDeletedTeamCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to deletedTeams for teamwork
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DeletedTeam
     */
    public post(body: DeletedTeam, requestConfiguration?: DeletedTeamsRequestBuilderPostRequestConfiguration | undefined) : Promise<DeletedTeam | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DeletedTeam>(requestInfo, createDeletedTeamFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get a list of the deletedTeam objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: DeletedTeamsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to deletedTeams for teamwork
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: DeletedTeam, requestConfiguration?: DeletedTeamsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeDeletedTeam);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a deletedTeamsRequestBuilder
     */
    public withUrl(rawUrl: string) : DeletedTeamsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new DeletedTeamsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
