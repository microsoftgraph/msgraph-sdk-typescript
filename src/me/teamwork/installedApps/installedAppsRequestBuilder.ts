import { type UserScopeTeamsAppInstallationCollectionResponse } from '../../../models/';
import { type ODataError } from '../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../models/oDataErrors/oDataError';
import { createUserScopeTeamsAppInstallationFromDiscriminatorValue, deserializeIntoUserScopeTeamsAppInstallation, serializeUserScopeTeamsAppInstallation, type UserScopeTeamsAppInstallation } from '../../../models/userScopeTeamsAppInstallation';
import { createUserScopeTeamsAppInstallationCollectionResponseFromDiscriminatorValue } from '../../../models/userScopeTeamsAppInstallationCollectionResponse';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { UserScopeTeamsAppInstallationItemRequestBuilder } from './item/userScopeTeamsAppInstallationItemRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface InstalledAppsRequestBuilderGetQueryParameters {
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
export interface InstalledAppsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: InstalledAppsRequestBuilderGetQueryParameters;
}
export interface InstalledAppsRequestBuilderPostRequestConfiguration {
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
 * Provides operations to manage the installedApps property of the microsoft.graph.userTeamwork entity.
 */
export class InstalledAppsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the installedApps property of the microsoft.graph.userTeamwork entity.
     * @param userScopeTeamsAppInstallationId The unique identifier of userScopeTeamsAppInstallation
     * @returns a UserScopeTeamsAppInstallationItemRequestBuilder
     */
    public byUserScopeTeamsAppInstallationId(userScopeTeamsAppInstallationId: string) : UserScopeTeamsAppInstallationItemRequestBuilder {
        if(!userScopeTeamsAppInstallationId) throw new Error("userScopeTeamsAppInstallationId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["userScopeTeamsAppInstallation%2Did"] = userScopeTeamsAppInstallationId
        return new UserScopeTeamsAppInstallationItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new InstalledAppsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/me/teamwork/installedApps{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Retrieve the list of apps installed in the personal scope of the specified user. This API is supported in the following national cloud deployments.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UserScopeTeamsAppInstallationCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/userteamwork-list-installedapps?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: InstalledAppsRequestBuilderGetRequestConfiguration | undefined) : Promise<UserScopeTeamsAppInstallationCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UserScopeTeamsAppInstallationCollectionResponse>(requestInfo, createUserScopeTeamsAppInstallationCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Install an app in the personal scope of the specified user. This API is supported in the following national cloud deployments.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UserScopeTeamsAppInstallation
     * @see {@link https://learn.microsoft.com/graph/api/userteamwork-post-installedapps?view=graph-rest-1.0|Find more info here}
     */
    public post(body: UserScopeTeamsAppInstallation, requestConfiguration?: InstalledAppsRequestBuilderPostRequestConfiguration | undefined) : Promise<UserScopeTeamsAppInstallation | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UserScopeTeamsAppInstallation>(requestInfo, createUserScopeTeamsAppInstallationFromDiscriminatorValue, errorMapping);
    };
    /**
     * Retrieve the list of apps installed in the personal scope of the specified user. This API is supported in the following national cloud deployments.
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
     * Install an app in the personal scope of the specified user. This API is supported in the following national cloud deployments.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: UserScopeTeamsAppInstallation, requestConfiguration?: InstalledAppsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeUserScopeTeamsAppInstallation);
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
