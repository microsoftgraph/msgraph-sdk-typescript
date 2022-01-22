import {DeviceCompliancePolicy} from '../../../models/microsoft/graph/deviceCompliancePolicy';
import {AssignRequestBuilder} from './assign/assignRequestBuilder';
import {AssignmentsRequestBuilder} from './assignments/assignmentsRequestBuilder';
import {DeviceCompliancePolicyAssignmentRequestBuilder} from './assignments/item/deviceCompliancePolicyAssignmentRequestBuilder';
import {DeviceSettingStateSummariesRequestBuilder} from './deviceSettingStateSummaries/deviceSettingStateSummariesRequestBuilder';
import {SettingStateDeviceSummaryRequestBuilder} from './deviceSettingStateSummaries/item/settingStateDeviceSummaryRequestBuilder';
import {DeviceStatusesRequestBuilder} from './deviceStatuses/deviceStatusesRequestBuilder';
import {DeviceComplianceDeviceStatusRequestBuilder} from './deviceStatuses/item/deviceComplianceDeviceStatusRequestBuilder';
import {DeviceStatusOverviewRequestBuilder} from './deviceStatusOverview/deviceStatusOverviewRequestBuilder';
import {ScheduleActionsForRulesRequestBuilder} from './scheduleActionsForRules/scheduleActionsForRulesRequestBuilder';
import {DeviceComplianceScheduledActionForRuleRequestBuilder} from './scheduledActionsForRule/item/deviceComplianceScheduledActionForRuleRequestBuilder';
import {ScheduledActionsForRuleRequestBuilder} from './scheduledActionsForRule/scheduledActionsForRuleRequestBuilder';
import {DeviceComplianceUserStatusRequestBuilder} from './userStatuses/item/deviceComplianceUserStatusRequestBuilder';
import {UserStatusesRequestBuilder} from './userStatuses/userStatusesRequestBuilder';
import {UserStatusOverviewRequestBuilder} from './userStatusOverview/userStatusOverviewRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}  */
export class DeviceCompliancePolicyRequestBuilder {
    public get assign(): AssignRequestBuilder {
        return new AssignRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get assignments(): AssignmentsRequestBuilder {
        return new AssignmentsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get deviceSettingStateSummaries(): DeviceSettingStateSummariesRequestBuilder {
        return new DeviceSettingStateSummariesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get deviceStatuses(): DeviceStatusesRequestBuilder {
        return new DeviceStatusesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get deviceStatusOverview(): DeviceStatusOverviewRequestBuilder {
        return new DeviceStatusOverviewRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request  */
    private readonly pathParameters: Map<string, unknown>;
    /** The request adapter to use to execute the requests.  */
    private readonly requestAdapter: RequestAdapter;
    public get scheduleActionsForRules(): ScheduleActionsForRulesRequestBuilder {
        return new ScheduleActionsForRulesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get scheduledActionsForRule(): ScheduledActionsForRuleRequestBuilder {
        return new ScheduledActionsForRuleRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder  */
    private readonly urlTemplate: string;
    public get userStatuses(): UserStatusesRequestBuilder {
        return new UserStatusesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get userStatusOverview(): UserStatusOverviewRequestBuilder {
        return new UserStatusOverviewRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.deviceManagement.deviceCompliancePolicies.item.assignments.item collection
     * @param id Unique identifier of the item
     * @returns a deviceCompliancePolicyAssignmentRequestBuilder
     */
    public assignmentsById(id: string) : DeviceCompliancePolicyAssignmentRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        id && urlTplParams.set("deviceCompliancePolicyAssignment_id", id);
        return new DeviceCompliancePolicyAssignmentRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new DeviceCompliancePolicyRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Map<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy_id}{?select,expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * The device compliance policies.
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(h?: object | undefined, o?: RequestOption[] | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.DELETE;
        h && requestInfo.setHeadersFromRawObject(h);
        o && requestInfo.addRequestOptions(...o);
        return requestInfo;
    };
    /**
     * The device compliance policies.
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @returns a RequestInformation
     */
    public createGetRequestInformation(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: object | undefined, o?: RequestOption[] | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        h && requestInfo.setHeadersFromRawObject(h);
        q && requestInfo.setQueryStringParametersFromRawObject(q);
        o && requestInfo.addRequestOptions(...o);
        return requestInfo;
    };
    /**
     * The device compliance policies.
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: DeviceCompliancePolicy | undefined, h?: object | undefined, o?: RequestOption[] | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        h && requestInfo.setHeadersFromRawObject(h);
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        o && requestInfo.addRequestOptions(...o);
        return requestInfo;
    };
    /**
     * The device compliance policies.
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(h?: object | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInformation(
            h, o
        );
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.deviceManagement.deviceCompliancePolicies.item.deviceSettingStateSummaries.item collection
     * @param id Unique identifier of the item
     * @returns a settingStateDeviceSummaryRequestBuilder
     */
    public deviceSettingStateSummariesById(id: string) : SettingStateDeviceSummaryRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        id && urlTplParams.set("settingStateDeviceSummary_id", id);
        return new SettingStateDeviceSummaryRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.deviceManagement.deviceCompliancePolicies.item.deviceStatuses.item collection
     * @param id Unique identifier of the item
     * @returns a deviceComplianceDeviceStatusRequestBuilder
     */
    public deviceStatusesById(id: string) : DeviceComplianceDeviceStatusRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        id && urlTplParams.set("deviceComplianceDeviceStatus_id", id);
        return new DeviceComplianceDeviceStatusRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * The device compliance policies.
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of DeviceCompliancePolicy
     */
    public get(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: object | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<DeviceCompliancePolicy | undefined> {
        const requestInfo = this.createGetRequestInformation(
            q, h, o
        );
        return this.requestAdapter?.sendAsync<DeviceCompliancePolicy>(requestInfo, DeviceCompliancePolicy, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * The device compliance policies.
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: DeviceCompliancePolicy | undefined, h?: object | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, h, o
        );
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.deviceManagement.deviceCompliancePolicies.item.scheduledActionsForRule.item collection
     * @param id Unique identifier of the item
     * @returns a deviceComplianceScheduledActionForRuleRequestBuilder
     */
    public scheduledActionsForRuleById(id: string) : DeviceComplianceScheduledActionForRuleRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        id && urlTplParams.set("deviceComplianceScheduledActionForRule_id", id);
        return new DeviceComplianceScheduledActionForRuleRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.deviceManagement.deviceCompliancePolicies.item.userStatuses.item collection
     * @param id Unique identifier of the item
     * @returns a deviceComplianceUserStatusRequestBuilder
     */
    public userStatusesById(id: string) : DeviceComplianceUserStatusRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        id && urlTplParams.set("deviceComplianceUserStatus_id", id);
        return new DeviceComplianceUserStatusRequestBuilder(urlTplParams, this.requestAdapter);
    };
}
