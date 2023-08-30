import {TeamsAppDefinition} from '../../../../../../models/';
import {createTeamsAppDefinitionFromDiscriminatorValue} from '../../../../../../models/createTeamsAppDefinitionFromDiscriminatorValue';
import {ODataError} from '../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../models/oDataErrors/serializeODataError';
import {TeamsAppDefinitionRequestBuilderGetRequestConfiguration} from './teamsAppDefinitionRequestBuilderGetRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the teamsAppDefinition property of the microsoft.graph.teamsAppInstallation entity.
 */
export class TeamsAppDefinitionRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new TeamsAppDefinitionRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/me/chats/{chat%2Did}/installedApps/{teamsAppInstallation%2Did}/teamsAppDefinition{?%24select,%24expand}");
    };
    /**
     * The details of this version of the app.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of TeamsAppDefinition
     */
    public get(requestConfiguration?: TeamsAppDefinitionRequestBuilderGetRequestConfiguration | undefined) : Promise<TeamsAppDefinition | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<TeamsAppDefinition>(requestInfo, createTeamsAppDefinitionFromDiscriminatorValue, errorMapping);
    };
    /**
     * The details of this version of the app.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: TeamsAppDefinitionRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * @returns a teamsAppDefinitionRequestBuilder
     */
    public withUrl(rawUrl: string) : TeamsAppDefinitionRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new TeamsAppDefinitionRequestBuilder(rawUrl, this.requestAdapter);
    };
}
