import {DeviceCompliancePolicy} from '../../../models/';
import {createDeviceCompliancePolicyFromDiscriminatorValue} from '../../../models/createDeviceCompliancePolicyFromDiscriminatorValue';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {AssignRequestBuilder} from './assign/assignRequestBuilder';
import {AssignmentsRequestBuilder} from './assignments/assignmentsRequestBuilder';
import {DeviceCompliancePolicyAssignmentItemRequestBuilder} from './assignments/item/deviceCompliancePolicyAssignmentItemRequestBuilder';
import {DeviceCompliancePolicyItemRequestBuilderDeleteRequestConfiguration} from './deviceCompliancePolicyItemRequestBuilderDeleteRequestConfiguration';
import {DeviceCompliancePolicyItemRequestBuilderGetRequestConfiguration} from './deviceCompliancePolicyItemRequestBuilderGetRequestConfiguration';
import {DeviceCompliancePolicyItemRequestBuilderPatchRequestConfiguration} from './deviceCompliancePolicyItemRequestBuilderPatchRequestConfiguration';
import {DeviceSettingStateSummariesRequestBuilder} from './deviceSettingStateSummaries/deviceSettingStateSummariesRequestBuilder';
import {SettingStateDeviceSummaryItemRequestBuilder} from './deviceSettingStateSummaries/item/settingStateDeviceSummaryItemRequestBuilder';
import {DeviceStatusesRequestBuilder} from './deviceStatuses/deviceStatusesRequestBuilder';
import {DeviceComplianceDeviceStatusItemRequestBuilder} from './deviceStatuses/item/deviceComplianceDeviceStatusItemRequestBuilder';
import {DeviceStatusOverviewRequestBuilder} from './deviceStatusOverview/deviceStatusOverviewRequestBuilder';
import {ScheduleActionsForRulesRequestBuilder} from './scheduleActionsForRules/scheduleActionsForRulesRequestBuilder';
import {DeviceComplianceScheduledActionForRuleItemRequestBuilder} from './scheduledActionsForRule/item/deviceComplianceScheduledActionForRuleItemRequestBuilder';
import {ScheduledActionsForRuleRequestBuilder} from './scheduledActionsForRule/scheduledActionsForRuleRequestBuilder';
import {DeviceComplianceUserStatusItemRequestBuilder} from './userStatuses/item/deviceComplianceUserStatusItemRequestBuilder';
import {UserStatusesRequestBuilder} from './userStatuses/userStatusesRequestBuilder';
import {UserStatusOverviewRequestBuilder} from './userStatusOverview/userStatusOverviewRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the deviceCompliancePolicies property of the microsoft.graph.deviceManagement entity. */
export class DeviceCompliancePolicyItemRequestBuilder {
    /** The assign property */
    public get assign(): AssignRequestBuilder {
        return new AssignRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The assignments property */
    public get assignments(): AssignmentsRequestBuilder {
        return new AssignmentsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The deviceSettingStateSummaries property */
    public get deviceSettingStateSummaries(): DeviceSettingStateSummariesRequestBuilder {
        return new DeviceSettingStateSummariesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The deviceStatuses property */
    public get deviceStatuses(): DeviceStatusesRequestBuilder {
        return new DeviceStatusesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The deviceStatusOverview property */
    public get deviceStatusOverview(): DeviceStatusOverviewRequestBuilder {
        return new DeviceStatusOverviewRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** The scheduleActionsForRules property */
    public get scheduleActionsForRules(): ScheduleActionsForRulesRequestBuilder {
        return new ScheduleActionsForRulesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The scheduledActionsForRule property */
    public get scheduledActionsForRule(): ScheduledActionsForRuleRequestBuilder {
        return new ScheduledActionsForRuleRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /** The userStatuses property */
    public get userStatuses(): UserStatusesRequestBuilder {
        return new UserStatusesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The userStatusOverview property */
    public get userStatusOverview(): UserStatusOverviewRequestBuilder {
        return new UserStatusOverviewRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.deviceManagement.deviceCompliancePolicies.item.assignments.item collection
     * @param id Unique identifier of the item
     * @returns a deviceCompliancePolicyAssignmentItemRequestBuilder
     */
    public assignmentsById(id: string) : DeviceCompliancePolicyAssignmentItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["deviceCompliancePolicyAssignment%2Did"] = id
        return new DeviceCompliancePolicyAssignmentItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new DeviceCompliancePolicyItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy%2Did}{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete navigation property deviceCompliancePolicies for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(requestConfiguration?: DeviceCompliancePolicyItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * The device compliance policies.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: DeviceCompliancePolicyItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.setQueryStringParametersFromRawObject(requestConfiguration.queryParameters);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * Update the navigation property deviceCompliancePolicies in deviceManagement
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: DeviceCompliancePolicy | undefined, requestConfiguration?: DeviceCompliancePolicyItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        return requestInfo;
    };
    /**
     * Delete navigation property deviceCompliancePolicies for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: DeviceCompliancePolicyItemRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.deviceManagement.deviceCompliancePolicies.item.deviceSettingStateSummaries.item collection
     * @param id Unique identifier of the item
     * @returns a settingStateDeviceSummaryItemRequestBuilder
     */
    public deviceSettingStateSummariesById(id: string) : SettingStateDeviceSummaryItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["settingStateDeviceSummary%2Did"] = id
        return new SettingStateDeviceSummaryItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.deviceManagement.deviceCompliancePolicies.item.deviceStatuses.item collection
     * @param id Unique identifier of the item
     * @returns a deviceComplianceDeviceStatusItemRequestBuilder
     */
    public deviceStatusesById(id: string) : DeviceComplianceDeviceStatusItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["deviceComplianceDeviceStatus%2Did"] = id
        return new DeviceComplianceDeviceStatusItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * The device compliance policies.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of DeviceCompliancePolicy
     */
    public get(requestConfiguration?: DeviceCompliancePolicyItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<DeviceCompliancePolicy | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<DeviceCompliancePolicy>(requestInfo, createDeviceCompliancePolicyFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Update the navigation property deviceCompliancePolicies in deviceManagement
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: DeviceCompliancePolicy | undefined, requestConfiguration?: DeviceCompliancePolicyItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.deviceManagement.deviceCompliancePolicies.item.scheduledActionsForRule.item collection
     * @param id Unique identifier of the item
     * @returns a deviceComplianceScheduledActionForRuleItemRequestBuilder
     */
    public scheduledActionsForRuleById(id: string) : DeviceComplianceScheduledActionForRuleItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["deviceComplianceScheduledActionForRule%2Did"] = id
        return new DeviceComplianceScheduledActionForRuleItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.deviceManagement.deviceCompliancePolicies.item.userStatuses.item collection
     * @param id Unique identifier of the item
     * @returns a deviceComplianceUserStatusItemRequestBuilder
     */
    public userStatusesById(id: string) : DeviceComplianceUserStatusItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["deviceComplianceUserStatus%2Did"] = id
        return new DeviceComplianceUserStatusItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
}
