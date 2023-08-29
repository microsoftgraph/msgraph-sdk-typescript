import {createUserScopeTeamsAppInstallationFromDiscriminatorValue} from '../../../../models/createUserScopeTeamsAppInstallationFromDiscriminatorValue';
import {deserializeIntoUserScopeTeamsAppInstallation} from '../../../../models/deserializeIntoUserScopeTeamsAppInstallation';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {serializeUserScopeTeamsAppInstallation} from '../../../../models/serializeUserScopeTeamsAppInstallation';
import type {UserScopeTeamsAppInstallation} from '../../../../models/userScopeTeamsAppInstallation';
import {ChatRequestBuilder} from './chat/chatRequestBuilder';
import {TeamsAppRequestBuilder} from './teamsApp/teamsAppRequestBuilder';
import {TeamsAppDefinitionRequestBuilder} from './teamsAppDefinition/teamsAppDefinitionRequestBuilder';
import {UserScopeTeamsAppInstallationItemRequestBuilderDeleteRequestConfiguration} from './userScopeTeamsAppInstallationItemRequestBuilderDeleteRequestConfiguration';
import {UserScopeTeamsAppInstallationItemRequestBuilderGetRequestConfiguration} from './userScopeTeamsAppInstallationItemRequestBuilderGetRequestConfiguration';
import {UserScopeTeamsAppInstallationItemRequestBuilderPatchRequestConfiguration} from './userScopeTeamsAppInstallationItemRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the installedApps property of the microsoft.graph.userTeamwork entity.
 */
export class UserScopeTeamsAppInstallationItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the chat property of the microsoft.graph.userScopeTeamsAppInstallation entity.
     */
    public get chat(): ChatRequestBuilder {
        return new ChatRequestBuilder(this.pathParameters, this.requestAdapter);
    }
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
     * Instantiates a new UserScopeTeamsAppInstallationItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/me/teamwork/installedApps/{userScopeTeamsAppInstallation%2Did}{?%24select,%24expand}");
    };
    /**
     * Uninstall an app from the personal scope of the specified user.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/userteamwork-delete-installedapps?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: UserScopeTeamsAppInstallationItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Retrieve the app installed in the personal scope of the specified user.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UserScopeTeamsAppInstallation
     * @see {@link https://learn.microsoft.com/graph/api/userteamwork-get-installedapps?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: UserScopeTeamsAppInstallationItemRequestBuilderGetRequestConfiguration | undefined) : Promise<UserScopeTeamsAppInstallation | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UserScopeTeamsAppInstallation>(requestInfo, createUserScopeTeamsAppInstallationFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property installedApps in me
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UserScopeTeamsAppInstallation
     */
    public patch(body: UserScopeTeamsAppInstallation, requestConfiguration?: UserScopeTeamsAppInstallationItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<UserScopeTeamsAppInstallation | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UserScopeTeamsAppInstallation>(requestInfo, createUserScopeTeamsAppInstallationFromDiscriminatorValue, errorMapping);
    };
    /**
     * Uninstall an app from the personal scope of the specified user.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: UserScopeTeamsAppInstallationItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Retrieve the app installed in the personal scope of the specified user.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: UserScopeTeamsAppInstallationItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
    public toPatchRequestInformation(body: UserScopeTeamsAppInstallation, requestConfiguration?: UserScopeTeamsAppInstallationItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeUserScopeTeamsAppInstallation);
        return requestInfo;
    };
}
