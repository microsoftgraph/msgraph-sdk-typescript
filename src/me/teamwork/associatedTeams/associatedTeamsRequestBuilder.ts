import {AssociatedTeamInfoCollectionResponse} from '../../../models/';
import {AssociatedTeamInfo} from '../../../models/associatedTeamInfo';
import {createAssociatedTeamInfoCollectionResponseFromDiscriminatorValue} from '../../../models/createAssociatedTeamInfoCollectionResponseFromDiscriminatorValue';
import {createAssociatedTeamInfoFromDiscriminatorValue} from '../../../models/createAssociatedTeamInfoFromDiscriminatorValue';
import {deserializeIntoAssociatedTeamInfo} from '../../../models/deserializeIntoAssociatedTeamInfo';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {serializeAssociatedTeamInfo} from '../../../models/serializeAssociatedTeamInfo';
import {AssociatedTeamsRequestBuilderGetRequestConfiguration} from './associatedTeamsRequestBuilderGetRequestConfiguration';
import {AssociatedTeamsRequestBuilderPostRequestConfiguration} from './associatedTeamsRequestBuilderPostRequestConfiguration';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {AssociatedTeamInfoItemRequestBuilder} from './item/associatedTeamInfoItemRequestBuilder';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the associatedTeams property of the microsoft.graph.userTeamwork entity.
 */
export class AssociatedTeamsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the associatedTeams property of the microsoft.graph.userTeamwork entity.
     * @param associatedTeamInfoId Unique identifier of the item
     * @returns a AssociatedTeamInfoItemRequestBuilder
     */
    public byAssociatedTeamInfoId(associatedTeamInfoId: string) : AssociatedTeamInfoItemRequestBuilder {
        if(!associatedTeamInfoId) throw new Error("associatedTeamInfoId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["associatedTeamInfo%2Did"] = associatedTeamInfoId
        return new AssociatedTeamInfoItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new AssociatedTeamsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/me/teamwork/associatedTeams{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get the list of teams in Microsoft Teams that a user is associated with.Currently, a user can be associated with a team in two different ways:* A user can be a direct member of a team.* A user can be a member of a shared channel that is hosted inside a team.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of AssociatedTeamInfoCollectionResponse
     * @see {@link https://docs.microsoft.com/graph/api/associatedteaminfo-list?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: AssociatedTeamsRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<AssociatedTeamInfoCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<AssociatedTeamInfoCollectionResponse>(requestInfo, createAssociatedTeamInfoCollectionResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create new navigation property to associatedTeams for me
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of AssociatedTeamInfo
     */
    public post(body: AssociatedTeamInfo | undefined, requestConfiguration?: AssociatedTeamsRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<AssociatedTeamInfo | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<AssociatedTeamInfo>(requestInfo, createAssociatedTeamInfoFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Get the list of teams in Microsoft Teams that a user is associated with.Currently, a user can be associated with a team in two different ways:* A user can be a direct member of a team.* A user can be a member of a shared channel that is hosted inside a team.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: AssociatedTeamsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to associatedTeams for me
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: AssociatedTeamInfo | undefined, requestConfiguration?: AssociatedTeamsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeAssociatedTeamInfo);
        return requestInfo;
    };
}
