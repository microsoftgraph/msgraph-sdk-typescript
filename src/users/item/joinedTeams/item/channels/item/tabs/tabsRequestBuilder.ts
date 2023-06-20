import {TeamsTabCollectionResponse} from '../../../../../../../models/';
import {createTeamsTabCollectionResponseFromDiscriminatorValue} from '../../../../../../../models/createTeamsTabCollectionResponseFromDiscriminatorValue';
import {createTeamsTabFromDiscriminatorValue} from '../../../../../../../models/createTeamsTabFromDiscriminatorValue';
import {deserializeIntoTeamsTab} from '../../../../../../../models/deserializeIntoTeamsTab';
import {ODataError} from '../../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../../models/oDataErrors/serializeODataError';
import {serializeTeamsTab} from '../../../../../../../models/serializeTeamsTab';
import {TeamsTab} from '../../../../../../../models/teamsTab';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {TeamsTabItemRequestBuilder} from './item/teamsTabItemRequestBuilder';
import {TabsRequestBuilderGetRequestConfiguration} from './tabsRequestBuilderGetRequestConfiguration';
import {TabsRequestBuilderPostRequestConfiguration} from './tabsRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the tabs property of the microsoft.graph.channel entity.
 */
export class TabsRequestBuilder extends BaseRequestBuilder {
    /** Provides operations to count the resources in the collection. */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the tabs property of the microsoft.graph.channel entity.
     * @param teamsTabId Unique identifier of the item
     * @returns a TeamsTabItemRequestBuilder
     */
    public byTeamsTabId(teamsTabId: string) : TeamsTabItemRequestBuilder {
        if(!teamsTabId) throw new Error("teamsTabId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["teamsTab%2Did"] = teamsTabId
        return new TeamsTabItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new TabsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/users/{user%2Did}/joinedTeams/{team%2Did}/channels/{channel%2Did}/tabs{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Retrieve the list of tabs in the specified channel within a team. 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of TeamsTabCollectionResponse
     * @see {@link https://docs.microsoft.com/graph/api/channel-list-tabs?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: TabsRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<TeamsTabCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<TeamsTabCollectionResponse>(requestInfo, createTeamsTabCollectionResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Adds (pins) a tab to the specified channel within a team. The corresponding app must already be installed in the team.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of TeamsTab
     * @see {@link https://docs.microsoft.com/graph/api/channel-post-tabs?view=graph-rest-1.0|Find more info here}
     */
    public post(body: TeamsTab | undefined, requestConfiguration?: TabsRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<TeamsTab | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<TeamsTab>(requestInfo, createTeamsTabFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Retrieve the list of tabs in the specified channel within a team. 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: TabsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Adds (pins) a tab to the specified channel within a team. The corresponding app must already be installed in the team.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: TeamsTab | undefined, requestConfiguration?: TabsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeTeamsTab);
        return requestInfo;
    };
}
