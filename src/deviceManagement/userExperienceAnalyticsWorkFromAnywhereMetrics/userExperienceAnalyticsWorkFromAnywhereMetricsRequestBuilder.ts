import {UserExperienceAnalyticsWorkFromAnywhereMetricCollectionResponse} from '../../models/';
import {createUserExperienceAnalyticsWorkFromAnywhereMetricCollectionResponseFromDiscriminatorValue} from '../../models/createUserExperienceAnalyticsWorkFromAnywhereMetricCollectionResponseFromDiscriminatorValue';
import {createUserExperienceAnalyticsWorkFromAnywhereMetricFromDiscriminatorValue} from '../../models/createUserExperienceAnalyticsWorkFromAnywhereMetricFromDiscriminatorValue';
import {deserializeIntoUserExperienceAnalyticsWorkFromAnywhereMetric} from '../../models/deserializeIntoUserExperienceAnalyticsWorkFromAnywhereMetric';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import {serializeUserExperienceAnalyticsWorkFromAnywhereMetric} from '../../models/serializeUserExperienceAnalyticsWorkFromAnywhereMetric';
import type {UserExperienceAnalyticsWorkFromAnywhereMetric} from '../../models/userExperienceAnalyticsWorkFromAnywhereMetric';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {UserExperienceAnalyticsWorkFromAnywhereMetricItemRequestBuilder} from './item/userExperienceAnalyticsWorkFromAnywhereMetricItemRequestBuilder';
import {UserExperienceAnalyticsWorkFromAnywhereMetricsRequestBuilderGetRequestConfiguration} from './userExperienceAnalyticsWorkFromAnywhereMetricsRequestBuilderGetRequestConfiguration';
import {UserExperienceAnalyticsWorkFromAnywhereMetricsRequestBuilderPostRequestConfiguration} from './userExperienceAnalyticsWorkFromAnywhereMetricsRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the userExperienceAnalyticsWorkFromAnywhereMetrics property of the microsoft.graph.deviceManagement entity.
 */
export class UserExperienceAnalyticsWorkFromAnywhereMetricsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the userExperienceAnalyticsWorkFromAnywhereMetrics property of the microsoft.graph.deviceManagement entity.
     * @param userExperienceAnalyticsWorkFromAnywhereMetricId The unique identifier of userExperienceAnalyticsWorkFromAnywhereMetric
     * @returns a UserExperienceAnalyticsWorkFromAnywhereMetricItemRequestBuilder
     */
    public byUserExperienceAnalyticsWorkFromAnywhereMetricId(userExperienceAnalyticsWorkFromAnywhereMetricId: string) : UserExperienceAnalyticsWorkFromAnywhereMetricItemRequestBuilder {
        if(!userExperienceAnalyticsWorkFromAnywhereMetricId) throw new Error("userExperienceAnalyticsWorkFromAnywhereMetricId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["userExperienceAnalyticsWorkFromAnywhereMetric%2Did"] = userExperienceAnalyticsWorkFromAnywhereMetricId
        return new UserExperienceAnalyticsWorkFromAnywhereMetricItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new UserExperienceAnalyticsWorkFromAnywhereMetricsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * User experience analytics work from anywhere metrics.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UserExperienceAnalyticsWorkFromAnywhereMetricCollectionResponse
     */
    public get(requestConfiguration?: UserExperienceAnalyticsWorkFromAnywhereMetricsRequestBuilderGetRequestConfiguration | undefined) : Promise<UserExperienceAnalyticsWorkFromAnywhereMetricCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UserExperienceAnalyticsWorkFromAnywhereMetricCollectionResponse>(requestInfo, createUserExperienceAnalyticsWorkFromAnywhereMetricCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to userExperienceAnalyticsWorkFromAnywhereMetrics for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UserExperienceAnalyticsWorkFromAnywhereMetric
     */
    public post(body: UserExperienceAnalyticsWorkFromAnywhereMetric, requestConfiguration?: UserExperienceAnalyticsWorkFromAnywhereMetricsRequestBuilderPostRequestConfiguration | undefined) : Promise<UserExperienceAnalyticsWorkFromAnywhereMetric | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UserExperienceAnalyticsWorkFromAnywhereMetric>(requestInfo, createUserExperienceAnalyticsWorkFromAnywhereMetricFromDiscriminatorValue, errorMapping);
    };
    /**
     * User experience analytics work from anywhere metrics.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: UserExperienceAnalyticsWorkFromAnywhereMetricsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to userExperienceAnalyticsWorkFromAnywhereMetrics for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: UserExperienceAnalyticsWorkFromAnywhereMetric, requestConfiguration?: UserExperienceAnalyticsWorkFromAnywhereMetricsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeUserExperienceAnalyticsWorkFromAnywhereMetric);
        return requestInfo;
    };
}
