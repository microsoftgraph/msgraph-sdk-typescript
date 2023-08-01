import {createUserExperienceAnalyticsWorkFromAnywhereDeviceFromDiscriminatorValue} from '../../../../../models/createUserExperienceAnalyticsWorkFromAnywhereDeviceFromDiscriminatorValue';
import {deserializeIntoUserExperienceAnalyticsWorkFromAnywhereDevice} from '../../../../../models/deserializeIntoUserExperienceAnalyticsWorkFromAnywhereDevice';
import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../models/oDataErrors/serializeODataError';
import {serializeUserExperienceAnalyticsWorkFromAnywhereDevice} from '../../../../../models/serializeUserExperienceAnalyticsWorkFromAnywhereDevice';
import type {UserExperienceAnalyticsWorkFromAnywhereDevice} from '../../../../../models/userExperienceAnalyticsWorkFromAnywhereDevice';
import {UserExperienceAnalyticsWorkFromAnywhereDeviceItemRequestBuilderDeleteRequestConfiguration} from './userExperienceAnalyticsWorkFromAnywhereDeviceItemRequestBuilderDeleteRequestConfiguration';
import {UserExperienceAnalyticsWorkFromAnywhereDeviceItemRequestBuilderGetRequestConfiguration} from './userExperienceAnalyticsWorkFromAnywhereDeviceItemRequestBuilderGetRequestConfiguration';
import {UserExperienceAnalyticsWorkFromAnywhereDeviceItemRequestBuilderPatchRequestConfiguration} from './userExperienceAnalyticsWorkFromAnywhereDeviceItemRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the metricDevices property of the microsoft.graph.userExperienceAnalyticsWorkFromAnywhereMetric entity.
 */
export class UserExperienceAnalyticsWorkFromAnywhereDeviceItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new UserExperienceAnalyticsWorkFromAnywhereDeviceItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/userExperienceAnalyticsWorkFromAnywhereMetrics/{userExperienceAnalyticsWorkFromAnywhereMetric%2Did}/metricDevices/{userExperienceAnalyticsWorkFromAnywhereDevice%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property metricDevices for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: UserExperienceAnalyticsWorkFromAnywhereDeviceItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
        const requestInfo = this.toDeleteRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendNoResponseContentAsync(requestInfo, errorMapping);
    };
    /**
     * The work from anywhere metric devices. Read-only.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UserExperienceAnalyticsWorkFromAnywhereDevice
     */
    public get(requestConfiguration?: UserExperienceAnalyticsWorkFromAnywhereDeviceItemRequestBuilderGetRequestConfiguration | undefined) : Promise<UserExperienceAnalyticsWorkFromAnywhereDevice | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UserExperienceAnalyticsWorkFromAnywhereDevice>(requestInfo, createUserExperienceAnalyticsWorkFromAnywhereDeviceFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property metricDevices in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UserExperienceAnalyticsWorkFromAnywhereDevice
     */
    public patch(body: UserExperienceAnalyticsWorkFromAnywhereDevice | undefined, requestConfiguration?: UserExperienceAnalyticsWorkFromAnywhereDeviceItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<UserExperienceAnalyticsWorkFromAnywhereDevice | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UserExperienceAnalyticsWorkFromAnywhereDevice>(requestInfo, createUserExperienceAnalyticsWorkFromAnywhereDeviceFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property metricDevices for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: UserExperienceAnalyticsWorkFromAnywhereDeviceItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.DELETE;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * The work from anywhere metric devices. Read-only.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: UserExperienceAnalyticsWorkFromAnywhereDeviceItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property metricDevices in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: UserExperienceAnalyticsWorkFromAnywhereDevice | undefined, requestConfiguration?: UserExperienceAnalyticsWorkFromAnywhereDeviceItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeUserExperienceAnalyticsWorkFromAnywhereDevice);
        return requestInfo;
    };
}
