import { type ODataError } from '../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../../../models/oDataErrors/oDataError';
import { createTeamsAppInstallationFromDiscriminatorValue, deserializeIntoTeamsAppInstallation, serializeTeamsAppInstallation, type TeamsAppInstallation } from '../../../../../models/teamsAppInstallation';
import { TeamsAppRequestBuilder } from './teamsApp/teamsAppRequestBuilder';
import { TeamsAppDefinitionRequestBuilder } from './teamsAppDefinition/teamsAppDefinitionRequestBuilder';
import { UpgradeRequestBuilder } from './upgrade/upgradeRequestBuilder';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface TeamsAppInstallationItemRequestBuilderDeleteRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
}
export interface TeamsAppInstallationItemRequestBuilderGetQueryParameters {
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Select properties to be returned
     */
    select?: string[];
}
export interface TeamsAppInstallationItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: TeamsAppInstallationItemRequestBuilderGetQueryParameters;
}
export interface TeamsAppInstallationItemRequestBuilderPatchRequestConfiguration {
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
 * Provides operations to manage the installedApps property of the microsoft.graph.chat entity.
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
        super(pathParameters, requestAdapter, "{+baseurl}/me/chats/{chat%2Did}/installedApps/{teamsAppInstallation%2Did}{?%24select,%24expand}");
    };
    /**
     * Uninstall an app installed within a chat. This API is supported in the following national cloud deployments.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/chat-delete-installedapps?view=graph-rest-1.0|Find more info here}
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
     * Get an app installed in a chat. This API is supported in the following national cloud deployments.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of TeamsAppInstallation
     * @see {@link https://learn.microsoft.com/graph/api/chat-get-installedapps?view=graph-rest-1.0|Find more info here}
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
     * Update the navigation property installedApps in me
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of TeamsAppInstallation
     */
    public patch(body: TeamsAppInstallation, requestConfiguration?: TeamsAppInstallationItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<TeamsAppInstallation | undefined> {
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
     * Uninstall an app installed within a chat. This API is supported in the following national cloud deployments.
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
     * Get an app installed in a chat. This API is supported in the following national cloud deployments.
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
     * Update the navigation property installedApps in me
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: TeamsAppInstallation, requestConfiguration?: TeamsAppInstallationItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeTeamsAppInstallation);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a TeamsAppInstallationItemRequestBuilder
     */
    public withUrl(rawUrl: string) : TeamsAppInstallationItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new TeamsAppInstallationItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
