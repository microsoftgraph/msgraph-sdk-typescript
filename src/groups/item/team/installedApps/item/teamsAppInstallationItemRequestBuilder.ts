import {createTeamsAppInstallationFromDiscriminatorValue} from '../../../../../models/createTeamsAppInstallationFromDiscriminatorValue';
import {deserializeIntoTeamsAppInstallation} from '../../../../../models/deserializeIntoTeamsAppInstallation';
import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../models/oDataErrors/serializeODataError';
import {serializeTeamsAppInstallation} from '../../../../../models/serializeTeamsAppInstallation';
import {TeamsAppInstallation} from '../../../../../models/teamsAppInstallation';
import {TeamsAppRequestBuilder} from './teamsApp/teamsAppRequestBuilder';
import {TeamsAppDefinitionRequestBuilder} from './teamsAppDefinition/teamsAppDefinitionRequestBuilder';
import {TeamsAppInstallationItemRequestBuilderDeleteRequestConfiguration} from './teamsAppInstallationItemRequestBuilderDeleteRequestConfiguration';
import {TeamsAppInstallationItemRequestBuilderGetRequestConfiguration} from './teamsAppInstallationItemRequestBuilderGetRequestConfiguration';
import {TeamsAppInstallationItemRequestBuilderPatchRequestConfiguration} from './teamsAppInstallationItemRequestBuilderPatchRequestConfiguration';
import {UpgradeRequestBuilder} from './upgrade/upgradeRequestBuilder';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the installedApps property of the microsoft.graph.team entity.
 */
export class TeamsAppInstallationItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the teamsApp property of the microsoft.graph.teamsAppInstallation entity.
     */
    public get teamsApp(): TeamsAppRequestBuilder {
        return new TeamsAppRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the teamsAppDefinition property of the microsoft.graph.teamsAppInstallation entity.
     */
    public get teamsAppDefinition(): TeamsAppDefinitionRequestBuilder {
        return new TeamsAppDefinitionRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the upgrade method.
     */
    public get upgrade(): UpgradeRequestBuilder {
        return new UpgradeRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new TeamsAppInstallationItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/groups/{group%2Did}/team/installedApps/{teamsAppInstallation%2Did}{?%24select,%24expand}");
    };
    /**
     * Uninstalls an app from the specified team.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://docs.microsoft.com/graph/api/team-delete-installedapps?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: TeamsAppInstallationItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
        const requestInfo = this.toDeleteRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendNoResponseContentAsync(requestInfo, errorMapping);
    };
    /**
     * Retrieve the app installed in the specified team.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of TeamsAppInstallation
     * @see {@link https://docs.microsoft.com/graph/api/team-get-installedapps?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: TeamsAppInstallationItemRequestBuilderGetRequestConfiguration | undefined) : Promise<TeamsAppInstallation | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<TeamsAppInstallation>(requestInfo, createTeamsAppInstallationFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property installedApps in groups
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of TeamsAppInstallation
     */
    public patch(body: TeamsAppInstallation | undefined, requestConfiguration?: TeamsAppInstallationItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<TeamsAppInstallation | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<TeamsAppInstallation>(requestInfo, createTeamsAppInstallationFromDiscriminatorValue, errorMapping);
    };
    /**
     * Uninstalls an app from the specified team.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: TeamsAppInstallationItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.DELETE;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * Retrieve the app installed in the specified team.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: TeamsAppInstallationItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property installedApps in groups
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: TeamsAppInstallation | undefined, requestConfiguration?: TeamsAppInstallationItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeTeamsAppInstallation);
        return requestInfo;
    };
}
