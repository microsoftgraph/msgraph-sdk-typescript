import { createSharedWithChannelTeamInfoFromDiscriminatorValue } from '../../../../../../../../models/createSharedWithChannelTeamInfoFromDiscriminatorValue';
import { deserializeIntoSharedWithChannelTeamInfo } from '../../../../../../../../models/deserializeIntoSharedWithChannelTeamInfo';
import { type ODataError } from '../../../../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../../../../../models/oDataErrors/serializeODataError';
import { serializeSharedWithChannelTeamInfo } from '../../../../../../../../models/serializeSharedWithChannelTeamInfo';
import { type SharedWithChannelTeamInfo } from '../../../../../../../../models/sharedWithChannelTeamInfo';
import { AllowedMembersRequestBuilder } from './allowedMembers/allowedMembersRequestBuilder';
import { type SharedWithChannelTeamInfoItemRequestBuilderDeleteRequestConfiguration } from './sharedWithChannelTeamInfoItemRequestBuilderDeleteRequestConfiguration';
import { type SharedWithChannelTeamInfoItemRequestBuilderGetRequestConfiguration } from './sharedWithChannelTeamInfoItemRequestBuilderGetRequestConfiguration';
import { type SharedWithChannelTeamInfoItemRequestBuilderPatchRequestConfiguration } from './sharedWithChannelTeamInfoItemRequestBuilderPatchRequestConfiguration';
import { TeamRequestBuilder } from './team/teamRequestBuilder';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the sharedWithTeams property of the microsoft.graph.channel entity.
 */
export class SharedWithChannelTeamInfoItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the allowedMembers property of the microsoft.graph.sharedWithChannelTeamInfo entity.
     */
    public get allowedMembers(): AllowedMembersRequestBuilder {
        return new AllowedMembersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the team property of the microsoft.graph.teamInfo entity.
     */
    public get team(): TeamRequestBuilder {
        return new TeamRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new SharedWithChannelTeamInfoItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/users/{user%2Did}/joinedTeams/{team%2Did}/channels/{channel%2Did}/sharedWithTeams/{sharedWithChannelTeamInfo%2Did}{?%24select,%24expand}");
    };
    /**
     * Unshare a channel with a team by deleting the corresponding sharedWithChannelTeamInfo resource. This operation is allowed only for channels with a membershipType value of shared.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/sharedwithchannelteaminfo-delete?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: SharedWithChannelTeamInfoItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Get a team that has been shared with a specified channel. This operation is allowed only for channels with a membershipType value of shared.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of SharedWithChannelTeamInfo
     * @see {@link https://learn.microsoft.com/graph/api/sharedwithchannelteaminfo-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: SharedWithChannelTeamInfoItemRequestBuilderGetRequestConfiguration | undefined) : Promise<SharedWithChannelTeamInfo | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<SharedWithChannelTeamInfo>(requestInfo, createSharedWithChannelTeamInfoFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property sharedWithTeams in users
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of SharedWithChannelTeamInfo
     */
    public patch(body: SharedWithChannelTeamInfo, requestConfiguration?: SharedWithChannelTeamInfoItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<SharedWithChannelTeamInfo | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<SharedWithChannelTeamInfo>(requestInfo, createSharedWithChannelTeamInfoFromDiscriminatorValue, errorMapping);
    };
    /**
     * Unshare a channel with a team by deleting the corresponding sharedWithChannelTeamInfo resource. This operation is allowed only for channels with a membershipType value of shared.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: SharedWithChannelTeamInfoItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Get a team that has been shared with a specified channel. This operation is allowed only for channels with a membershipType value of shared.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: SharedWithChannelTeamInfoItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property sharedWithTeams in users
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: SharedWithChannelTeamInfo, requestConfiguration?: SharedWithChannelTeamInfoItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeSharedWithChannelTeamInfo);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a SharedWithChannelTeamInfoItemRequestBuilder
     */
    public withUrl(rawUrl: string) : SharedWithChannelTeamInfoItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new SharedWithChannelTeamInfoItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
