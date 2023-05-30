import {SharedWithChannelTeamInfoCollectionResponse} from '../../../../../../models/';
import {createSharedWithChannelTeamInfoCollectionResponseFromDiscriminatorValue} from '../../../../../../models/createSharedWithChannelTeamInfoCollectionResponseFromDiscriminatorValue';
import {createSharedWithChannelTeamInfoFromDiscriminatorValue} from '../../../../../../models/createSharedWithChannelTeamInfoFromDiscriminatorValue';
import {deserializeIntoSharedWithChannelTeamInfo} from '../../../../../../models/deserializeIntoSharedWithChannelTeamInfo';
import {ODataError} from '../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../models/oDataErrors/serializeODataError';
import {serializeSharedWithChannelTeamInfo} from '../../../../../../models/serializeSharedWithChannelTeamInfo';
import {SharedWithChannelTeamInfo} from '../../../../../../models/sharedWithChannelTeamInfo';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {SharedWithChannelTeamInfoItemRequestBuilder} from './item/sharedWithChannelTeamInfoItemRequestBuilder';
import {SharedWithTeamsRequestBuilderGetRequestConfiguration} from './sharedWithTeamsRequestBuilderGetRequestConfiguration';
import {SharedWithTeamsRequestBuilderPostRequestConfiguration} from './sharedWithTeamsRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the sharedWithTeams property of the microsoft.graph.channel entity.
 */
export class SharedWithTeamsRequestBuilder extends BaseRequestBuilder {
    /** Provides operations to count the resources in the collection. */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the sharedWithTeams property of the microsoft.graph.channel entity.
     * @param sharedWithChannelTeamInfoId Unique identifier of the item
     * @returns a SharedWithChannelTeamInfoItemRequestBuilder
     */
    public bySharedWithChannelTeamInfoId(sharedWithChannelTeamInfoId: string) : SharedWithChannelTeamInfoItemRequestBuilder {
        if(!sharedWithChannelTeamInfoId) throw new Error("sharedWithChannelTeamInfoId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["sharedWithChannelTeamInfo%2Did"] = sharedWithChannelTeamInfoId
        return new SharedWithChannelTeamInfoItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new SharedWithTeamsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/teamwork/deletedTeams/{deletedTeam%2Did}/channels/{channel%2Did}/sharedWithTeams{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get the list of teams that has been shared a specified channel. This operation is allowed only for channels with a **membershipType** value of `shared`.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of SharedWithChannelTeamInfoCollectionResponse
     * @see {@link https://docs.microsoft.com/graph/api/sharedwithchannelteaminfo-list?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: SharedWithTeamsRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<SharedWithChannelTeamInfoCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<SharedWithChannelTeamInfoCollectionResponse>(requestInfo, createSharedWithChannelTeamInfoCollectionResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create new navigation property to sharedWithTeams for teamwork
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of SharedWithChannelTeamInfo
     */
    public post(body: SharedWithChannelTeamInfo | undefined, requestConfiguration?: SharedWithTeamsRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<SharedWithChannelTeamInfo | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<SharedWithChannelTeamInfo>(requestInfo, createSharedWithChannelTeamInfoFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Get the list of teams that has been shared a specified channel. This operation is allowed only for channels with a **membershipType** value of `shared`.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: SharedWithTeamsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to sharedWithTeams for teamwork
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: SharedWithChannelTeamInfo | undefined, requestConfiguration?: SharedWithTeamsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeSharedWithChannelTeamInfo);
        return requestInfo;
    };
}
