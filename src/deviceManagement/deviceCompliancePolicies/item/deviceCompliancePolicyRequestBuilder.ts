import {DeviceCompliancePolicy} from '../../../deviceCompliancePolicy';
import {AssignRequestBuilder} from '../assign/assignRequestBuilder';
import {AssignmentsRequestBuilder} from '../assignments/assignmentsRequestBuilder';
import {DeviceCompliancePolicyAssignmentRequestBuilder} from '../assignments/item/item/deviceCompliancePolicyAssignmentRequestBuilder';
import {DeviceSettingStateSummariesRequestBuilder} from '../deviceSettingStateSummaries/deviceSettingStateSummariesRequestBuilder';
import {SettingStateDeviceSummaryRequestBuilder} from '../deviceSettingStateSummaries/item/item/settingStateDeviceSummaryRequestBuilder';
import {DeviceStatusesRequestBuilder} from '../deviceStatuses/deviceStatusesRequestBuilder';
import {DeviceComplianceDeviceStatusRequestBuilder} from '../deviceStatuses/item/item/deviceComplianceDeviceStatusRequestBuilder';
import {DeviceStatusOverviewRequestBuilder} from '../deviceStatusOverview/deviceStatusOverviewRequestBuilder';
import {ScheduleActionsForRulesRequestBuilder} from '../scheduleActionsForRules/scheduleActionsForRulesRequestBuilder';
import {DeviceComplianceScheduledActionForRuleRequestBuilder} from '../scheduledActionsForRule/item/item/deviceComplianceScheduledActionForRuleRequestBuilder';
import {ScheduledActionsForRuleRequestBuilder} from '../scheduledActionsForRule/scheduledActionsForRuleRequestBuilder';
import {DeviceComplianceUserStatusRequestBuilder} from '../userStatuses/item/item/deviceComplianceUserStatusRequestBuilder';
import {UserStatusesRequestBuilder} from '../userStatuses/userStatusesRequestBuilder';
import {UserStatusOverviewRequestBuilder} from '../userStatusOverview/userStatusOverviewRequestBuilder';
import {HttpCore, HttpMethod, RequestInformation, ResponseHandler, MiddlewareOption} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}  */
export class DeviceCompliancePolicyRequestBuilder {
    public get assign(): AssignRequestBuilder {
        return new AssignRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get assignments(): AssignmentsRequestBuilder {
        return new AssignmentsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** Current path for the request  */
    private readonly currentPath: string;
    public get deviceSettingStateSummaries(): DeviceSettingStateSummariesRequestBuilder {
        return new DeviceSettingStateSummariesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get deviceStatuses(): DeviceStatusesRequestBuilder {
        return new DeviceStatusesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get deviceStatusOverview(): DeviceStatusOverviewRequestBuilder {
        return new DeviceStatusOverviewRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** The http core service to use to execute the requests.  */
    private readonly httpCore: HttpCore;
    /** Whether the current path is a raw URL  */
    private readonly isRawUrl: boolean;
    /** Path segment to use to build the URL for the current request builder  */
    private readonly pathSegment: string;
    public get scheduleActionsForRules(): ScheduleActionsForRulesRequestBuilder {
        return new ScheduleActionsForRulesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get scheduledActionsForRule(): ScheduledActionsForRuleRequestBuilder {
        return new ScheduledActionsForRuleRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get userStatuses(): UserStatusesRequestBuilder {
        return new UserStatusesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get userStatusOverview(): UserStatusOverviewRequestBuilder {
        return new UserStatusOverviewRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /**
     * Gets an item from the graphtypescriptv4.utilities.deviceManagement.deviceCompliancePolicies.item.assignments.item collection
     * @param id Unique identifier of the item
     * @returns a deviceCompliancePolicyAssignmentRequestBuilder
     */
    public assignmentsById(id: String) : DeviceCompliancePolicyAssignmentRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new DeviceCompliancePolicyAssignmentRequestBuilder(this.currentPath + this.pathSegment + "/assignments/" + id, this.httpCore, false);
    };
    /**
     * Instantiates a new DeviceCompliancePolicyRequestBuilder and sets the default values.
     * @param currentPath Current path for the request
     * @param httpCore The http core service to use to execute the requests.
     * @param isRawUrl Whether the current path is a raw URL
     */
    public constructor(currentPath: string, httpCore: HttpCore, isRawUrl: boolean = true) {
        if(!currentPath) throw new Error("currentPath cannot be undefined");
        if(!httpCore) throw new Error("httpCore cannot be undefined");
        this.pathSegment = "";
        this.httpCore = httpCore;
        this.currentPath = currentPath;
        this.isRawUrl = isRawUrl;
    };
    /**
     * The device compliance policies.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(h?: object | undefined, o?: MiddlewareOption[] | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.setUri(this.currentPath, this.pathSegment, this.isRawUrl);
        requestInfo.httpMethod = HttpMethod.DELETE;
        h && requestInfo.setHeadersFromRawObject(h);
        o && requestInfo.addMiddlewareOptions(...o);
        return requestInfo;
    };
    /**
     * The device compliance policies.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @returns a RequestInformation
     */
    public createGetRequestInformation(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.setUri(this.currentPath, this.pathSegment, this.isRawUrl);
        requestInfo.httpMethod = HttpMethod.GET;
        h && requestInfo.setHeadersFromRawObject(h);
        q && requestInfo.setQueryStringParametersFromRawObject(q);
        o && requestInfo.addMiddlewareOptions(...o);
        return requestInfo;
    };
    /**
     * The device compliance policies.
     * @param body 
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: DeviceCompliancePolicy | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.setUri(this.currentPath, this.pathSegment, this.isRawUrl);
        requestInfo.httpMethod = HttpMethod.PATCH;
        h && requestInfo.setHeadersFromRawObject(h);
        requestInfo.setContentFromParsable(this.httpCore, "application/json", body);
        o && requestInfo.addMiddlewareOptions(...o);
        return requestInfo;
    };
    /**
     * The device compliance policies.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInformation(
            h, o
        );
        return this.httpCore?.sendNoResponseContentAsync(requestInfo, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.deviceManagement.deviceCompliancePolicies.item.deviceSettingStateSummaries.item collection
     * @param id Unique identifier of the item
     * @returns a settingStateDeviceSummaryRequestBuilder
     */
    public deviceSettingStateSummariesById(id: String) : SettingStateDeviceSummaryRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new SettingStateDeviceSummaryRequestBuilder(this.currentPath + this.pathSegment + "/deviceSettingStateSummaries/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.deviceManagement.deviceCompliancePolicies.item.deviceStatuses.item collection
     * @param id Unique identifier of the item
     * @returns a deviceComplianceDeviceStatusRequestBuilder
     */
    public deviceStatusesById(id: String) : DeviceComplianceDeviceStatusRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new DeviceComplianceDeviceStatusRequestBuilder(this.currentPath + this.pathSegment + "/deviceStatuses/" + id, this.httpCore, false);
    };
    /**
     * The device compliance policies.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of DeviceCompliancePolicy
     */
    public get(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<DeviceCompliancePolicy | undefined> {
        const requestInfo = this.createGetRequestInformation(
            q, h, o
        );
        return this.httpCore?.sendAsync<DeviceCompliancePolicy>(requestInfo, DeviceCompliancePolicy, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * The device compliance policies.
     * @param body 
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: DeviceCompliancePolicy | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, h, o
        );
        return this.httpCore?.sendNoResponseContentAsync(requestInfo, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.deviceManagement.deviceCompliancePolicies.item.scheduledActionsForRule.item collection
     * @param id Unique identifier of the item
     * @returns a deviceComplianceScheduledActionForRuleRequestBuilder
     */
    public scheduledActionsForRuleById(id: String) : DeviceComplianceScheduledActionForRuleRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new DeviceComplianceScheduledActionForRuleRequestBuilder(this.currentPath + this.pathSegment + "/scheduledActionsForRule/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.deviceManagement.deviceCompliancePolicies.item.userStatuses.item collection
     * @param id Unique identifier of the item
     * @returns a deviceComplianceUserStatusRequestBuilder
     */
    public userStatusesById(id: String) : DeviceComplianceUserStatusRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new DeviceComplianceUserStatusRequestBuilder(this.currentPath + this.pathSegment + "/userStatuses/" + id, this.httpCore, false);
    };
}
