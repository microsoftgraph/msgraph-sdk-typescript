import { type TeamsAppInstallationCollectionResponse } from '../../../../models/';
import { createTeamsAppInstallationCollectionResponseFromDiscriminatorValue } from '../../../../models/createTeamsAppInstallationCollectionResponseFromDiscriminatorValue';
import { createTeamsAppInstallationFromDiscriminatorValue } from '../../../../models/createTeamsAppInstallationFromDiscriminatorValue';
import { deserializeIntoTeamsAppInstallation } from '../../../../models/deserializeIntoTeamsAppInstallation';
import { type ODataError } from '../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../models/oDataErrors/serializeODataError';
import { serializeTeamsAppInstallation } from '../../../../models/serializeTeamsAppInstallation';
import { type TeamsAppInstallation } from '../../../../models/teamsAppInstallation';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { type InstalledAppsRequestBuilderGetRequestConfiguration } from './installedAppsRequestBuilderGetRequestConfiguration';
import { type InstalledAppsRequestBuilderPostRequestConfiguration } from './installedAppsRequestBuilderPostRequestConfiguration';
import { TeamsAppInstallationItemRequestBuilder } from './item/teamsAppInstallationItemRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the installedApps property of the microsoft.graph.chat entity.
 */
export class InstalledAppsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the installedApps property of the microsoft.graph.chat entity.
     * @param teamsAppInstallationId The unique identifier of teamsAppInstallation
     * @returns a TeamsAppInstallationItemRequestBuilder
     */
    public byTeamsAppInstallationId(teamsAppInstallationId: string) : TeamsAppInstallationItemRequestBuilder {
        if(!teamsAppInstallationId) throw new Error("teamsAppInstallationId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["teamsAppInstallation%2Did"] = teamsAppInstallationId
        return new TeamsAppInstallationItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new InstalledAppsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/me/chats/{chat%2Did}/installedApps{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * List all app installations within a chat.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of TeamsAppInstallationCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/chat-list-installedapps?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: InstalledAppsRequestBuilderGetRequestConfiguration | undefined) : Promise<TeamsAppInstallationCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<TeamsAppInstallationCollectionResponse>(requestInfo, createTeamsAppInstallationCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Install a teamsApp to the specified chat.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of TeamsAppInstallation
     * @see {@link https://learn.microsoft.com/graph/api/chat-post-installedapps?view=graph-rest-1.0|Find more info here}
     */
    public post(body: TeamsAppInstallation, requestConfiguration?: InstalledAppsRequestBuilderPostRequestConfiguration | undefined) : Promise<TeamsAppInstallation | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<TeamsAppInstallation>(requestInfo, createTeamsAppInstallationFromDiscriminatorValue, errorMapping);
    };
    /**
     * List all app installations within a chat.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: InstalledAppsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Install a teamsApp to the specified chat.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: TeamsAppInstallation, requestConfiguration?: InstalledAppsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeTeamsAppInstallation);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a installedAppsRequestBuilder
     */
    public withUrl(rawUrl: string) : InstalledAppsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new InstalledAppsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
