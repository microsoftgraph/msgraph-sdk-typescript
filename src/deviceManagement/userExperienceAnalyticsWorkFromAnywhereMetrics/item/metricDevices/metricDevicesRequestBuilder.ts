import {UserExperienceAnalyticsWorkFromAnywhereDeviceCollectionResponse} from '../../../../models/';
import {createUserExperienceAnalyticsWorkFromAnywhereDeviceCollectionResponseFromDiscriminatorValue} from '../../../../models/createUserExperienceAnalyticsWorkFromAnywhereDeviceCollectionResponseFromDiscriminatorValue';
import {createUserExperienceAnalyticsWorkFromAnywhereDeviceFromDiscriminatorValue} from '../../../../models/createUserExperienceAnalyticsWorkFromAnywhereDeviceFromDiscriminatorValue';
import {deserializeIntoUserExperienceAnalyticsWorkFromAnywhereDevice} from '../../../../models/deserializeIntoUserExperienceAnalyticsWorkFromAnywhereDevice';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {serializeUserExperienceAnalyticsWorkFromAnywhereDevice} from '../../../../models/serializeUserExperienceAnalyticsWorkFromAnywhereDevice';
import type {UserExperienceAnalyticsWorkFromAnywhereDevice} from '../../../../models/userExperienceAnalyticsWorkFromAnywhereDevice';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {UserExperienceAnalyticsWorkFromAnywhereDeviceItemRequestBuilder} from './item/userExperienceAnalyticsWorkFromAnywhereDeviceItemRequestBuilder';
import {MetricDevicesRequestBuilderGetRequestConfiguration} from './metricDevicesRequestBuilderGetRequestConfiguration';
import {MetricDevicesRequestBuilderPostRequestConfiguration} from './metricDevicesRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

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
     * @param userExperienceAnalyticsWorkFromAnywhereDeviceId Unique identifier of the item
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
}
