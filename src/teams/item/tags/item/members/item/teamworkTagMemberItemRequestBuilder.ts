import {createTeamworkTagMemberFromDiscriminatorValue} from '../../../../../../models/createTeamworkTagMemberFromDiscriminatorValue';
import {deserializeIntoTeamworkTagMember} from '../../../../../../models/deserializeIntoTeamworkTagMember';
import {ODataError} from '../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../models/oDataErrors/serializeODataError';
import {serializeTeamworkTagMember} from '../../../../../../models/serializeTeamworkTagMember';
import type {TeamworkTagMember} from '../../../../../../models/teamworkTagMember';
import {TeamworkTagMemberItemRequestBuilderDeleteRequestConfiguration} from './teamworkTagMemberItemRequestBuilderDeleteRequestConfiguration';
import {TeamworkTagMemberItemRequestBuilderGetRequestConfiguration} from './teamworkTagMemberItemRequestBuilderGetRequestConfiguration';
import {TeamworkTagMemberItemRequestBuilderPatchRequestConfiguration} from './teamworkTagMemberItemRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the members property of the microsoft.graph.teamworkTag entity.
 */
export class TeamworkTagMemberItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new TeamworkTagMemberItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/teams/{team%2Did}/tags/{teamworkTag%2Did}/members/{teamworkTagMember%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete a member from a standard tag in a team.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/teamworktagmember-delete?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: TeamworkTagMemberItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Get the properties and relationships of a member of a standard tag in a team.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of TeamworkTagMember
     * @see {@link https://learn.microsoft.com/graph/api/teamworktagmember-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: TeamworkTagMemberItemRequestBuilderGetRequestConfiguration | undefined) : Promise<TeamworkTagMember | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<TeamworkTagMember>(requestInfo, createTeamworkTagMemberFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property members in teams
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of TeamworkTagMember
     */
    public patch(body: TeamworkTagMember, requestConfiguration?: TeamworkTagMemberItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<TeamworkTagMember | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<TeamworkTagMember>(requestInfo, createTeamworkTagMemberFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete a member from a standard tag in a team.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: TeamworkTagMemberItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Get the properties and relationships of a member of a standard tag in a team.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: TeamworkTagMemberItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property members in teams
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: TeamworkTagMember, requestConfiguration?: TeamworkTagMemberItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeTeamworkTagMember);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a TeamworkTagMemberItemRequestBuilder
     */
    public withUrl(rawUrl: string) : TeamworkTagMemberItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new TeamworkTagMemberItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
