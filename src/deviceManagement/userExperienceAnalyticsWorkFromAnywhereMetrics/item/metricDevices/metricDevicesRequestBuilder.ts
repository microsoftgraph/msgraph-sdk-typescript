import { type UserExperienceAnalyticsWorkFromAnywhereDeviceCollectionResponse } from '../../../../models/';
import { type ODataError } from '../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../../models/oDataErrors/oDataError';
import { createUserExperienceAnalyticsWorkFromAnywhereDeviceFromDiscriminatorValue, deserializeIntoUserExperienceAnalyticsWorkFromAnywhereDevice, serializeUserExperienceAnalyticsWorkFromAnywhereDevice, type UserExperienceAnalyticsWorkFromAnywhereDevice } from '../../../../models/userExperienceAnalyticsWorkFromAnywhereDevice';
import { createUserExperienceAnalyticsWorkFromAnywhereDeviceCollectionResponseFromDiscriminatorValue } from '../../../../models/userExperienceAnalyticsWorkFromAnywhereDeviceCollectionResponse';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { UserExperienceAnalyticsWorkFromAnywhereDeviceItemRequestBuilder } from './item/userExperienceAnalyticsWorkFromAnywhereDeviceItemRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface MetricDevicesRequestBuilderGetQueryParameters {
    /**
     * Include count of items
     */
    count?: boolean;
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Filter items by property values
     */
    filter?: string;
    /**
     * Order items by property values
     */
    orderby?: string[];
    /**
     * Search items by search phrases
     */
    search?: string;
    /**
     * Select properties to be returned
     */
    select?: string[];
    /**
     * Skip the first n items
     */
    skip?: number;
    /**
     * Show only the first n items
     */
    top?: number;
}
export interface MetricDevicesRequestBuilderGetRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
    /**
     * Request query parameters
     */
    queryParameters?: MetricDevicesRequestBuilderGetQueryParameters;
}
export interface MetricDevicesRequestBuilderPostRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
}
/**
 * Provides operations to manage the metricDevices property of the microsoft.graph.userExperienceAnalyticsWorkFromAnywhereMetric entity.
 */
export class MetricDevicesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the metricDevices property of the microsoft.graph.userExperienceAnalyticsWorkFromAnywhereMetric entity.
     * @param userExperienceAnalyticsWorkFromAnywhereDeviceId The unique identifier of userExperienceAnalyticsWorkFromAnywhereDevice
     * @returns a UserExperienceAnalyticsWorkFromAnywhereDeviceItemRequestBuilder
     */
    public byUserExperienceAnalyticsWorkFromAnywhereDeviceId(userExperienceAnalyticsWorkFromAnywhereDeviceId: string) : UserExperienceAnalyticsWorkFromAnywhereDeviceItemRequestBuilder {
        if(!userExperienceAnalyticsWorkFromAnywhereDeviceId) throw new Error("userExperienceAnalyticsWorkFromAnywhereDeviceId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["userExperienceAnalyticsWorkFromAnywhereDevice%2Did"] = userExperienceAnalyticsWorkFromAnywhereDeviceId
        return new UserExperienceAnalyticsWorkFromAnywhereDeviceItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new MetricDevicesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics/{userExperienceAnalyticsWorkFromAnywhereMetric%2Did}/metricDevices{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * The work from anywhere metric devices. Read-only.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UserExperienceAnalyticsWorkFromAnywhereDeviceCollectionResponse
     */
    public get(requestConfiguration?: MetricDevicesRequestBuilderGetRequestConfiguration | undefined) : Promise<UserExperienceAnalyticsWorkFromAnywhereDeviceCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UserExperienceAnalyticsWorkFromAnywhereDeviceCollectionResponse>(requestInfo, createUserExperienceAnalyticsWorkFromAnywhereDeviceCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to metricDevices for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UserExperienceAnalyticsWorkFromAnywhereDevice
     */
    public post(body: UserExperienceAnalyticsWorkFromAnywhereDevice, requestConfiguration?: MetricDevicesRequestBuilderPostRequestConfiguration | undefined) : Promise<UserExperienceAnalyticsWorkFromAnywhereDevice | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UserExperienceAnalyticsWorkFromAnywhereDevice>(requestInfo, createUserExperienceAnalyticsWorkFromAnywhereDeviceFromDiscriminatorValue, errorMapping);
    };
    /**
     * The work from anywhere metric devices. Read-only.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: MetricDevicesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to metricDevices for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: UserExperienceAnalyticsWorkFromAnywhereDevice, requestConfiguration?: MetricDevicesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeUserExperienceAnalyticsWorkFromAnywhereDevice);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a metricDevicesRequestBuilder
     */
    public withUrl(rawUrl: string) : MetricDevicesRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new MetricDevicesRequestBuilder(rawUrl, this.requestAdapter);
    };
}
