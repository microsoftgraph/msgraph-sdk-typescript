import {TeamsApp} from '../../../../../../../../models/';
import {createTeamsAppFromDiscriminatorValue} from '../../../../../../../../models/createTeamsAppFromDiscriminatorValue';
import {ODataError} from '../../../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../../../models/oDataErrors/serializeODataError';
import {TeamsAppRequestBuilderGetRequestConfiguration} from './teamsAppRequestBuilderGetRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the teamsApp property of the microsoft.graph.teamsTab entity.
 */
export class TeamsAppRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new TeamsAppRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/teamwork/deletedTeams/{deletedTeam%2Did}/channels/{channel%2Did}/tabs/{teamsTab%2Did}/teamsApp{?%24select,%24expand}");
    };
    /**
     * The application that is linked to the tab. This cannot be changed after tab creation.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of TeamsApp
     */
    public get(requestConfiguration?: TeamsAppRequestBuilderGetRequestConfiguration | undefined) : Promise<TeamsApp | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<TeamsApp>(requestInfo, createTeamsAppFromDiscriminatorValue, errorMapping);
    };
    /**
     * The application that is linked to the tab. This cannot be changed after tab creation.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: TeamsAppRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a teamsAppRequestBuilder
     */
    public withUrl(rawUrl: string) : TeamsAppRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new TeamsAppRequestBuilder(rawUrl, this.requestAdapter);
    };
}
