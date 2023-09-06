import { createDeviceCompliancePolicyFromDiscriminatorValue } from '../../../models/createDeviceCompliancePolicyFromDiscriminatorValue';
import { deserializeIntoDeviceCompliancePolicy } from '../../../models/deserializeIntoDeviceCompliancePolicy';
import { type DeviceCompliancePolicy } from '../../../models/deviceCompliancePolicy';
import { type ODataError } from '../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../models/oDataErrors/serializeODataError';
import { serializeDeviceCompliancePolicy } from '../../../models/serializeDeviceCompliancePolicy';
import { AssignRequestBuilder } from './assign/assignRequestBuilder';
import { AssignmentsRequestBuilder } from './assignments/assignmentsRequestBuilder';
import { type DeviceCompliancePolicyItemRequestBuilderDeleteRequestConfiguration } from './deviceCompliancePolicyItemRequestBuilderDeleteRequestConfiguration';
import { type DeviceCompliancePolicyItemRequestBuilderGetRequestConfiguration } from './deviceCompliancePolicyItemRequestBuilderGetRequestConfiguration';
import { type DeviceCompliancePolicyItemRequestBuilderPatchRequestConfiguration } from './deviceCompliancePolicyItemRequestBuilderPatchRequestConfiguration';
import { DeviceSettingStateSummariesRequestBuilder } from './deviceSettingStateSummaries/deviceSettingStateSummariesRequestBuilder';
import { DeviceStatusesRequestBuilder } from './deviceStatuses/deviceStatusesRequestBuilder';
import { DeviceStatusOverviewRequestBuilder } from './deviceStatusOverview/deviceStatusOverviewRequestBuilder';
import { ScheduleActionsForRulesRequestBuilder } from './scheduleActionsForRules/scheduleActionsForRulesRequestBuilder';
import { ScheduledActionsForRuleRequestBuilder } from './scheduledActionsForRule/scheduledActionsForRuleRequestBuilder';
import { UserStatusesRequestBuilder } from './userStatuses/userStatusesRequestBuilder';
import { UserStatusOverviewRequestBuilder } from './userStatusOverview/userStatusOverviewRequestBuilder';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the deviceCompliancePolicies property of the microsoft.graph.deviceManagement entity.
 */
export class DeviceCompliancePolicyItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to call the assign method.
     */
    public get assign(): AssignRequestBuilder {
        return new AssignRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the assignments property of the microsoft.graph.deviceCompliancePolicy entity.
     */
    public get assignments(): AssignmentsRequestBuilder {
        return new AssignmentsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the deviceSettingStateSummaries property of the microsoft.graph.deviceCompliancePolicy entity.
     */
    public get deviceSettingStateSummaries(): DeviceSettingStateSummariesRequestBuilder {
        return new DeviceSettingStateSummariesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the deviceStatuses property of the microsoft.graph.deviceCompliancePolicy entity.
     */
    public get deviceStatuses(): DeviceStatusesRequestBuilder {
        return new DeviceStatusesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the deviceStatusOverview property of the microsoft.graph.deviceCompliancePolicy entity.
     */
    public get deviceStatusOverview(): DeviceStatusOverviewRequestBuilder {
        return new DeviceStatusOverviewRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the scheduleActionsForRules method.
     */
    public get scheduleActionsForRules(): ScheduleActionsForRulesRequestBuilder {
        return new ScheduleActionsForRulesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the scheduledActionsForRule property of the microsoft.graph.deviceCompliancePolicy entity.
     */
    public get scheduledActionsForRule(): ScheduledActionsForRuleRequestBuilder {
        return new ScheduledActionsForRuleRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the userStatuses property of the microsoft.graph.deviceCompliancePolicy entity.
     */
    public get userStatuses(): UserStatusesRequestBuilder {
        return new UserStatusesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the userStatusOverview property of the microsoft.graph.deviceCompliancePolicy entity.
     */
    public get userStatusOverview(): UserStatusOverviewRequestBuilder {
        return new UserStatusOverviewRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new DeviceCompliancePolicyItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy%2Did}{?%24select,%24expand}");
    };
    /**
     * Deletes a androidWorkProfileCompliancePolicy.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/intune-deviceconfig-androidworkprofilecompliancepolicy-delete?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: DeviceCompliancePolicyItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Read properties and relationships of the macOSCompliancePolicy object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DeviceCompliancePolicy
     * @see {@link https://learn.microsoft.com/graph/api/intune-deviceconfig-macoscompliancepolicy-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: DeviceCompliancePolicyItemRequestBuilderGetRequestConfiguration | undefined) : Promise<DeviceCompliancePolicy | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DeviceCompliancePolicy>(requestInfo, createDeviceCompliancePolicyFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the properties of a androidCompliancePolicy object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DeviceCompliancePolicy
     * @see {@link https://learn.microsoft.com/graph/api/intune-deviceconfig-androidcompliancepolicy-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: DeviceCompliancePolicy, requestConfiguration?: DeviceCompliancePolicyItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<DeviceCompliancePolicy | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DeviceCompliancePolicy>(requestInfo, createDeviceCompliancePolicyFromDiscriminatorValue, errorMapping);
    };
    /**
     * Deletes a androidWorkProfileCompliancePolicy.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: DeviceCompliancePolicyItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Read properties and relationships of the macOSCompliancePolicy object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: DeviceCompliancePolicyItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the properties of a androidCompliancePolicy object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: DeviceCompliancePolicy, requestConfiguration?: DeviceCompliancePolicyItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeDeviceCompliancePolicy);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a DeviceCompliancePolicyItemRequestBuilder
     */
    public withUrl(rawUrl: string) : DeviceCompliancePolicyItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new DeviceCompliancePolicyItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
