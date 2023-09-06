import { type UserExperienceAnalyticsMetricCollectionResponse } from '../../../models/';
import { createUserExperienceAnalyticsMetricCollectionResponseFromDiscriminatorValue } from '../../../models/createUserExperienceAnalyticsMetricCollectionResponseFromDiscriminatorValue';
import { createUserExperienceAnalyticsMetricFromDiscriminatorValue } from '../../../models/createUserExperienceAnalyticsMetricFromDiscriminatorValue';
import { deserializeIntoUserExperienceAnalyticsMetric } from '../../../models/deserializeIntoUserExperienceAnalyticsMetric';
import { type ODataError } from '../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../models/oDataErrors/serializeODataError';
import { serializeUserExperienceAnalyticsMetric } from '../../../models/serializeUserExperienceAnalyticsMetric';
import { type UserExperienceAnalyticsMetric } from '../../../models/userExperienceAnalyticsMetric';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { UserExperienceAnalyticsMetricItemRequestBuilder } from './item/userExperienceAnalyticsMetricItemRequestBuilder';
import { type MetricValuesRequestBuilderGetRequestConfiguration } from './metricValuesRequestBuilderGetRequestConfiguration';
import { type MetricValuesRequestBuilderPostRequestConfiguration } from './metricValuesRequestBuilderPostRequestConfiguration';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the metricValues property of the microsoft.graph.userExperienceAnalyticsCategory entity.
 */
export class MetricValuesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the metricValues property of the microsoft.graph.userExperienceAnalyticsCategory entity.
     * @param userExperienceAnalyticsMetricId The unique identifier of userExperienceAnalyticsMetric
     * @returns a UserExperienceAnalyticsMetricItemRequestBuilder
     */
    public byUserExperienceAnalyticsMetricId(userExperienceAnalyticsMetricId: string) : UserExperienceAnalyticsMetricItemRequestBuilder {
        if(!userExperienceAnalyticsMetricId) throw new Error("userExperienceAnalyticsMetricId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["userExperienceAnalyticsMetric%2Did"] = userExperienceAnalyticsMetricId
        return new UserExperienceAnalyticsMetricItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new MetricValuesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/userExperienceAnalyticsAppHealthOverview/metricValues{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * The metric values for the user experience analytics category. Read-only.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UserExperienceAnalyticsMetricCollectionResponse
     */
    public get(requestConfiguration?: MetricValuesRequestBuilderGetRequestConfiguration | undefined) : Promise<UserExperienceAnalyticsMetricCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UserExperienceAnalyticsMetricCollectionResponse>(requestInfo, createUserExperienceAnalyticsMetricCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to metricValues for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UserExperienceAnalyticsMetric
     */
    public post(body: UserExperienceAnalyticsMetric, requestConfiguration?: MetricValuesRequestBuilderPostRequestConfiguration | undefined) : Promise<UserExperienceAnalyticsMetric | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UserExperienceAnalyticsMetric>(requestInfo, createUserExperienceAnalyticsMetricFromDiscriminatorValue, errorMapping);
    };
    /**
     * The metric values for the user experience analytics category. Read-only.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: MetricValuesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to metricValues for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: UserExperienceAnalyticsMetric, requestConfiguration?: MetricValuesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeUserExperienceAnalyticsMetric);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a metricValuesRequestBuilder
     */
    public withUrl(rawUrl: string) : MetricValuesRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new MetricValuesRequestBuilder(rawUrl, this.requestAdapter);
    };
}
