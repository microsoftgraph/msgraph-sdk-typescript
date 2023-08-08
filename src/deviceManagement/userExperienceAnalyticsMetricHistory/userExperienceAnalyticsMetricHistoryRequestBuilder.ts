import {UserExperienceAnalyticsMetricHistoryCollectionResponse} from '../../models/';
import {createUserExperienceAnalyticsMetricHistoryCollectionResponseFromDiscriminatorValue} from '../../models/createUserExperienceAnalyticsMetricHistoryCollectionResponseFromDiscriminatorValue';
import {createUserExperienceAnalyticsMetricHistoryFromDiscriminatorValue} from '../../models/createUserExperienceAnalyticsMetricHistoryFromDiscriminatorValue';
import {deserializeIntoUserExperienceAnalyticsMetricHistory} from '../../models/deserializeIntoUserExperienceAnalyticsMetricHistory';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import {serializeUserExperienceAnalyticsMetricHistory} from '../../models/serializeUserExperienceAnalyticsMetricHistory';
import type {UserExperienceAnalyticsMetricHistory} from '../../models/userExperienceAnalyticsMetricHistory';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {UserExperienceAnalyticsMetricHistoryItemRequestBuilder} from './item/userExperienceAnalyticsMetricHistoryItemRequestBuilder';
import {UserExperienceAnalyticsMetricHistoryRequestBuilderGetRequestConfiguration} from './userExperienceAnalyticsMetricHistoryRequestBuilderGetRequestConfiguration';
import {UserExperienceAnalyticsMetricHistoryRequestBuilderPostRequestConfiguration} from './userExperienceAnalyticsMetricHistoryRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the userExperienceAnalyticsMetricHistory property of the microsoft.graph.deviceManagement entity.
 */
export class UserExperienceAnalyticsMetricHistoryRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the userExperienceAnalyticsMetricHistory property of the microsoft.graph.deviceManagement entity.
     * @param userExperienceAnalyticsMetricHistoryId Unique identifier of the item
     * @returns a UserExperienceAnalyticsMetricHistoryItemRequestBuilder
     */
    public byUserExperienceAnalyticsMetricHistoryId(userExperienceAnalyticsMetricHistoryId: string) : UserExperienceAnalyticsMetricHistoryItemRequestBuilder {
        if(!userExperienceAnalyticsMetricHistoryId) throw new Error("userExperienceAnalyticsMetricHistoryId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["userExperienceAnalyticsMetricHistory%2Did"] = userExperienceAnalyticsMetricHistoryId
        return new UserExperienceAnalyticsMetricHistoryItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new UserExperienceAnalyticsMetricHistoryRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/userExperienceAnalyticsMetricHistory{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * User experience analytics metric history
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UserExperienceAnalyticsMetricHistoryCollectionResponse
     */
    public get(requestConfiguration?: UserExperienceAnalyticsMetricHistoryRequestBuilderGetRequestConfiguration | undefined) : Promise<UserExperienceAnalyticsMetricHistoryCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UserExperienceAnalyticsMetricHistoryCollectionResponse>(requestInfo, createUserExperienceAnalyticsMetricHistoryCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to userExperienceAnalyticsMetricHistory for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UserExperienceAnalyticsMetricHistory
     */
    public post(body: UserExperienceAnalyticsMetricHistory, requestConfiguration?: UserExperienceAnalyticsMetricHistoryRequestBuilderPostRequestConfiguration | undefined) : Promise<UserExperienceAnalyticsMetricHistory | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UserExperienceAnalyticsMetricHistory>(requestInfo, createUserExperienceAnalyticsMetricHistoryFromDiscriminatorValue, errorMapping);
    };
    /**
     * User experience analytics metric history
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: UserExperienceAnalyticsMetricHistoryRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to userExperienceAnalyticsMetricHistory for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: UserExperienceAnalyticsMetricHistory, requestConfiguration?: UserExperienceAnalyticsMetricHistoryRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeUserExperienceAnalyticsMetricHistory);
        return requestInfo;
    };
}
