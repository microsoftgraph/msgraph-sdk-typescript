import {createUserExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetricFromDiscriminatorValue} from '../../models/createUserExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetricFromDiscriminatorValue';
import {deserializeIntoUserExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric} from '../../models/deserializeIntoUserExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import {serializeUserExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric} from '../../models/serializeUserExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric';
import {UserExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric} from '../../models/userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric';
import {UserExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetricRequestBuilderDeleteRequestConfiguration} from './userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetricRequestBuilderDeleteRequestConfiguration';
import {UserExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetricRequestBuilderGetRequestConfiguration} from './userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetricRequestBuilderGetRequestConfiguration';
import {UserExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetricRequestBuilderPatchRequestConfiguration} from './userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetricRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric property of the microsoft.graph.deviceManagement entity.
 */
export class UserExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetricRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new UserExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetricRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric{?%24select,%24expand}");
    };
    /**
     * Delete navigation property userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: UserExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetricRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * User experience analytics work from anywhere hardware readiness metrics.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UserExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric
     */
    public get(requestConfiguration?: UserExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetricRequestBuilderGetRequestConfiguration | undefined) : Promise<UserExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UserExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric>(requestInfo, createUserExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetricFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UserExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric
     */
    public patch(body: UserExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric | undefined, requestConfiguration?: UserExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetricRequestBuilderPatchRequestConfiguration | undefined) : Promise<UserExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UserExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric>(requestInfo, createUserExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetricFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: UserExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetricRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * User experience analytics work from anywhere hardware readiness metrics.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: UserExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetricRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: UserExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric | undefined, requestConfiguration?: UserExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetricRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeUserExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric);
        return requestInfo;
    };
}
