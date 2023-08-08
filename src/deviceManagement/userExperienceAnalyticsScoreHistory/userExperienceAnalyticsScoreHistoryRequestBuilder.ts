import {UserExperienceAnalyticsScoreHistoryCollectionResponse} from '../../models/';
import {createUserExperienceAnalyticsScoreHistoryCollectionResponseFromDiscriminatorValue} from '../../models/createUserExperienceAnalyticsScoreHistoryCollectionResponseFromDiscriminatorValue';
import {createUserExperienceAnalyticsScoreHistoryFromDiscriminatorValue} from '../../models/createUserExperienceAnalyticsScoreHistoryFromDiscriminatorValue';
import {deserializeIntoUserExperienceAnalyticsScoreHistory} from '../../models/deserializeIntoUserExperienceAnalyticsScoreHistory';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import {serializeUserExperienceAnalyticsScoreHistory} from '../../models/serializeUserExperienceAnalyticsScoreHistory';
import type {UserExperienceAnalyticsScoreHistory} from '../../models/userExperienceAnalyticsScoreHistory';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {UserExperienceAnalyticsScoreHistoryItemRequestBuilder} from './item/userExperienceAnalyticsScoreHistoryItemRequestBuilder';
import {UserExperienceAnalyticsScoreHistoryRequestBuilderGetRequestConfiguration} from './userExperienceAnalyticsScoreHistoryRequestBuilderGetRequestConfiguration';
import {UserExperienceAnalyticsScoreHistoryRequestBuilderPostRequestConfiguration} from './userExperienceAnalyticsScoreHistoryRequestBuilderPostRequestConfiguration';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the userExperienceAnalyticsScoreHistory property of the microsoft.graph.deviceManagement entity.
 */
export class UserExperienceAnalyticsScoreHistoryRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the userExperienceAnalyticsScoreHistory property of the microsoft.graph.deviceManagement entity.
     * @param userExperienceAnalyticsScoreHistoryId Unique identifier of the item
     * @returns a UserExperienceAnalyticsScoreHistoryItemRequestBuilder
     */
    public byUserExperienceAnalyticsScoreHistoryId(userExperienceAnalyticsScoreHistoryId: string) : UserExperienceAnalyticsScoreHistoryItemRequestBuilder {
        if(!userExperienceAnalyticsScoreHistoryId) throw new Error("userExperienceAnalyticsScoreHistoryId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["userExperienceAnalyticsScoreHistory%2Did"] = userExperienceAnalyticsScoreHistoryId
        return new UserExperienceAnalyticsScoreHistoryItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new UserExperienceAnalyticsScoreHistoryRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/userExperienceAnalyticsScoreHistory{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * User experience analytics device Startup Score History
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UserExperienceAnalyticsScoreHistoryCollectionResponse
     */
    public get(requestConfiguration?: UserExperienceAnalyticsScoreHistoryRequestBuilderGetRequestConfiguration | undefined) : Promise<UserExperienceAnalyticsScoreHistoryCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UserExperienceAnalyticsScoreHistoryCollectionResponse>(requestInfo, createUserExperienceAnalyticsScoreHistoryCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to userExperienceAnalyticsScoreHistory for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UserExperienceAnalyticsScoreHistory
     */
    public post(body: UserExperienceAnalyticsScoreHistory, requestConfiguration?: UserExperienceAnalyticsScoreHistoryRequestBuilderPostRequestConfiguration | undefined) : Promise<UserExperienceAnalyticsScoreHistory | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UserExperienceAnalyticsScoreHistory>(requestInfo, createUserExperienceAnalyticsScoreHistoryFromDiscriminatorValue, errorMapping);
    };
    /**
     * User experience analytics device Startup Score History
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: UserExperienceAnalyticsScoreHistoryRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to userExperienceAnalyticsScoreHistory for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: UserExperienceAnalyticsScoreHistory, requestConfiguration?: UserExperienceAnalyticsScoreHistoryRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeUserExperienceAnalyticsScoreHistory);
        return requestInfo;
    };
}
