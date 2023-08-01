import {createUserExperienceAnalyticsBaselineFromDiscriminatorValue} from '../../../models/createUserExperienceAnalyticsBaselineFromDiscriminatorValue';
import {deserializeIntoUserExperienceAnalyticsBaseline} from '../../../models/deserializeIntoUserExperienceAnalyticsBaseline';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {serializeUserExperienceAnalyticsBaseline} from '../../../models/serializeUserExperienceAnalyticsBaseline';
import type {UserExperienceAnalyticsBaseline} from '../../../models/userExperienceAnalyticsBaseline';
import {AppHealthMetricsRequestBuilder} from './appHealthMetrics/appHealthMetricsRequestBuilder';
import {BatteryHealthMetricsRequestBuilder} from './batteryHealthMetrics/batteryHealthMetricsRequestBuilder';
import {BestPracticesMetricsRequestBuilder} from './bestPracticesMetrics/bestPracticesMetricsRequestBuilder';
import {DeviceBootPerformanceMetricsRequestBuilder} from './deviceBootPerformanceMetrics/deviceBootPerformanceMetricsRequestBuilder';
import {RebootAnalyticsMetricsRequestBuilder} from './rebootAnalyticsMetrics/rebootAnalyticsMetricsRequestBuilder';
import {ResourcePerformanceMetricsRequestBuilder} from './resourcePerformanceMetrics/resourcePerformanceMetricsRequestBuilder';
import {UserExperienceAnalyticsBaselineItemRequestBuilderDeleteRequestConfiguration} from './userExperienceAnalyticsBaselineItemRequestBuilderDeleteRequestConfiguration';
import {UserExperienceAnalyticsBaselineItemRequestBuilderGetRequestConfiguration} from './userExperienceAnalyticsBaselineItemRequestBuilderGetRequestConfiguration';
import {UserExperienceAnalyticsBaselineItemRequestBuilderPatchRequestConfiguration} from './userExperienceAnalyticsBaselineItemRequestBuilderPatchRequestConfiguration';
import {WorkFromAnywhereMetricsRequestBuilder} from './workFromAnywhereMetrics/workFromAnywhereMetricsRequestBuilder';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the userExperienceAnalyticsBaselines property of the microsoft.graph.deviceManagement entity.
 */
export class UserExperienceAnalyticsBaselineItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the appHealthMetrics property of the microsoft.graph.userExperienceAnalyticsBaseline entity.
     */
    public get appHealthMetrics(): AppHealthMetricsRequestBuilder {
        return new AppHealthMetricsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the batteryHealthMetrics property of the microsoft.graph.userExperienceAnalyticsBaseline entity.
     */
    public get batteryHealthMetrics(): BatteryHealthMetricsRequestBuilder {
        return new BatteryHealthMetricsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the bestPracticesMetrics property of the microsoft.graph.userExperienceAnalyticsBaseline entity.
     */
    public get bestPracticesMetrics(): BestPracticesMetricsRequestBuilder {
        return new BestPracticesMetricsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the deviceBootPerformanceMetrics property of the microsoft.graph.userExperienceAnalyticsBaseline entity.
     */
    public get deviceBootPerformanceMetrics(): DeviceBootPerformanceMetricsRequestBuilder {
        return new DeviceBootPerformanceMetricsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the rebootAnalyticsMetrics property of the microsoft.graph.userExperienceAnalyticsBaseline entity.
     */
    public get rebootAnalyticsMetrics(): RebootAnalyticsMetricsRequestBuilder {
        return new RebootAnalyticsMetricsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the resourcePerformanceMetrics property of the microsoft.graph.userExperienceAnalyticsBaseline entity.
     */
    public get resourcePerformanceMetrics(): ResourcePerformanceMetricsRequestBuilder {
        return new ResourcePerformanceMetricsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the workFromAnywhereMetrics property of the microsoft.graph.userExperienceAnalyticsBaseline entity.
     */
    public get workFromAnywhereMetrics(): WorkFromAnywhereMetricsRequestBuilder {
        return new WorkFromAnywhereMetricsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new UserExperienceAnalyticsBaselineItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/userExperienceAnalyticsBaselines/{userExperienceAnalyticsBaseline%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property userExperienceAnalyticsBaselines for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: UserExperienceAnalyticsBaselineItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * User experience analytics baselines
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UserExperienceAnalyticsBaseline
     */
    public get(requestConfiguration?: UserExperienceAnalyticsBaselineItemRequestBuilderGetRequestConfiguration | undefined) : Promise<UserExperienceAnalyticsBaseline | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UserExperienceAnalyticsBaseline>(requestInfo, createUserExperienceAnalyticsBaselineFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property userExperienceAnalyticsBaselines in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UserExperienceAnalyticsBaseline
     */
    public patch(body: UserExperienceAnalyticsBaseline | undefined, requestConfiguration?: UserExperienceAnalyticsBaselineItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<UserExperienceAnalyticsBaseline | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UserExperienceAnalyticsBaseline>(requestInfo, createUserExperienceAnalyticsBaselineFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property userExperienceAnalyticsBaselines for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: UserExperienceAnalyticsBaselineItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * User experience analytics baselines
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: UserExperienceAnalyticsBaselineItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property userExperienceAnalyticsBaselines in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: UserExperienceAnalyticsBaseline | undefined, requestConfiguration?: UserExperienceAnalyticsBaselineItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeUserExperienceAnalyticsBaseline);
        return requestInfo;
    };
}
