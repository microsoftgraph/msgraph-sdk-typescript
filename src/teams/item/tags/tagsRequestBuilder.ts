import {TeamworkTagCollectionResponse} from '../../../models/';
import {createTeamworkTagCollectionResponseFromDiscriminatorValue} from '../../../models/createTeamworkTagCollectionResponseFromDiscriminatorValue';
import {createTeamworkTagFromDiscriminatorValue} from '../../../models/createTeamworkTagFromDiscriminatorValue';
import {deserializeIntoTeamworkTag} from '../../../models/deserializeIntoTeamworkTag';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {serializeTeamworkTag} from '../../../models/serializeTeamworkTag';
import type {TeamworkTag} from '../../../models/teamworkTag';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {TeamworkTagItemRequestBuilder} from './item/teamworkTagItemRequestBuilder';
import {TagsRequestBuilderGetRequestConfiguration} from './tagsRequestBuilderGetRequestConfiguration';
import {TagsRequestBuilderPostRequestConfiguration} from './tagsRequestBuilderPostRequestConfiguration';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the tags property of the microsoft.graph.team entity.
 */
export class TagsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the tags property of the microsoft.graph.team entity.
     * @param teamworkTagId The unique identifier of teamworkTag
     * @returns a TeamworkTagItemRequestBuilder
     */
    public byTeamworkTagId(teamworkTagId: string) : TeamworkTagItemRequestBuilder {
        if(!teamworkTagId) throw new Error("teamworkTagId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["teamworkTag%2Did"] = teamworkTagId
        return new TeamworkTagItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new TagsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/teams/{team%2Did}/tags{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get a list of the tag objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of TeamworkTagCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/teamworktag-list?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: TagsRequestBuilderGetRequestConfiguration | undefined) : Promise<TeamworkTagCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<TeamworkTagCollectionResponse>(requestInfo, createTeamworkTagCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a standard tag for members in a team.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of TeamworkTag
     * @see {@link https://learn.microsoft.com/graph/api/teamworktag-post?view=graph-rest-1.0|Find more info here}
     */
    public post(body: TeamworkTag, requestConfiguration?: TagsRequestBuilderPostRequestConfiguration | undefined) : Promise<TeamworkTag | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<TeamworkTag>(requestInfo, createTeamworkTagFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get a list of the tag objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: TagsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a standard tag for members in a team.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: TeamworkTag, requestConfiguration?: TagsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeTeamworkTag);
        return requestInfo;
    };
}
