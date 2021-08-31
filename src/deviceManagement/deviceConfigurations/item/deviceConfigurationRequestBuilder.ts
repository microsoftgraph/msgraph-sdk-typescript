import {DeviceConfiguration} from '../../deviceConfiguration';
import {AssignmentsRequestBuilder} from '../assignments/assignmentsRequestBuilder';
import {DeviceConfigurationAssignmentRequestBuilder} from '../assignments/item/deviceConfigurationAssignmentRequestBuilder';
import {DeviceSettingStateSummariesRequestBuilder} from '../deviceSettingStateSummaries/deviceSettingStateSummariesRequestBuilder';
import {SettingStateDeviceSummaryRequestBuilder} from '../deviceSettingStateSummaries/item/settingStateDeviceSummaryRequestBuilder';
import {DeviceStatusesRequestBuilder} from '../deviceStatuses/deviceStatusesRequestBuilder';
import {DeviceConfigurationDeviceStatusRequestBuilder} from '../deviceStatuses/item/deviceConfigurationDeviceStatusRequestBuilder';
import {DeviceStatusOverviewRequestBuilder} from '../deviceStatusOverview/deviceStatusOverviewRequestBuilder';
import {Microsoft.graph.assignRequestBuilder} from '../microsoft/graph/assign/microsoft.graph.assignRequestBuilder';
import {DeviceConfigurationUserStatusRequestBuilder} from '../userStatuses/item/deviceConfigurationUserStatusRequestBuilder';
import {UserStatusesRequestBuilder} from '../userStatuses/userStatusesRequestBuilder';
import {UserStatusOverviewRequestBuilder} from '../userStatusOverview/userStatusOverviewRequestBuilder';
import {HttpCore, HttpMethod, RequestInfo, ResponseHandler, MiddlewareOption} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /deviceManagement/deviceConfigurations/{deviceConfiguration-id}  */
export class DeviceConfigurationRequestBuilder {
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
    public get microsoft.graph.assign(): Microsoft.graph.assignRequestBuilder {
        return new Microsoft.graph.assignRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** Path segment to use to build the URL for the current request builder  */
    private readonly pathSegment: string;
    public get userStatuses(): UserStatusesRequestBuilder {
        return new UserStatusesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get userStatusOverview(): UserStatusOverviewRequestBuilder {
        return new UserStatusOverviewRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /**
     * Gets an item from the MicrosoftGraph.deviceManagement.deviceConfigurations.assignments collection
     * @param id Unique identifier of the item
     * @returns a DeviceConfigurationAssignmentRequestBuilder
     */
    public assignmentsById(id: String) : DeviceConfigurationAssignmentRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new DeviceConfigurationAssignmentRequestBuilder(this.currentPath + this.pathSegment + "/assignments/" + id, this.httpCore, false);
    };
    /**
     * Instantiates a new DeviceConfigurationRequestBuilder and sets the default values.
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
     * The device configurations.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInfo
     */
    public createDeleteRequestInfo(h?: object | undefined, o?: MiddlewareOption[] | undefined) : RequestInfo {
        const requestInfo = new RequestInfo();
        requestInfo.setUri(this.currentPath, this.pathSegment, this.isRawUrl);
        requestInfo.httpMethod = HttpMethod.DELETE;
        h && requestInfo.setHeadersFromRawObject(h);
        o && requestInfo.addMiddlewareOptions(...o);
        return requestInfo;
    };
    /**
     * The device configurations.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @returns a RequestInfo
     */
    public createGetRequestInfo(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined) : RequestInfo {
        const requestInfo = new RequestInfo();
        requestInfo.setUri(this.currentPath, this.pathSegment, this.isRawUrl);
        requestInfo.httpMethod = HttpMethod.GET;
        h && requestInfo.setHeadersFromRawObject(h);
        q && requestInfo.setQueryStringParametersFromRawObject(q);
        o && requestInfo.addMiddlewareOptions(...o);
        return requestInfo;
    };
    /**
     * The device configurations.
     * @param body 
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInfo
     */
    public createPatchRequestInfo(body: DeviceConfiguration | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined) : RequestInfo {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInfo();
        requestInfo.setUri(this.currentPath, this.pathSegment, this.isRawUrl);
        requestInfo.httpMethod = HttpMethod.PATCH;
        h && requestInfo.setHeadersFromRawObject(h);
        requestInfo.setContentFromParsable(this.httpCore, "application/json", body);
        o && requestInfo.addMiddlewareOptions(...o);
        return requestInfo;
    };
    /**
     * The device configurations.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInfo(
            h, o
        );
        return this.httpCore?.sendNoResponseContentAsync(requestInfo, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the MicrosoftGraph.deviceManagement.deviceConfigurations.deviceSettingStateSummaries collection
     * @param id Unique identifier of the item
     * @returns a SettingStateDeviceSummaryRequestBuilder
     */
    public deviceSettingStateSummariesById(id: String) : SettingStateDeviceSummaryRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new SettingStateDeviceSummaryRequestBuilder(this.currentPath + this.pathSegment + "/deviceSettingStateSummaries/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the MicrosoftGraph.deviceManagement.deviceConfigurations.deviceStatuses collection
     * @param id Unique identifier of the item
     * @returns a DeviceConfigurationDeviceStatusRequestBuilder
     */
    public deviceStatusesById(id: String) : DeviceConfigurationDeviceStatusRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new DeviceConfigurationDeviceStatusRequestBuilder(this.currentPath + this.pathSegment + "/deviceStatuses/" + id, this.httpCore, false);
    };
    /**
     * The device configurations.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of DeviceConfiguration
     */
    public get(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<DeviceConfiguration | undefined> {
        const requestInfo = this.createGetRequestInfo(
            q, h, o
        );
        return this.httpCore?.sendAsync<DeviceConfiguration>(requestInfo, DeviceConfiguration, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * The device configurations.
     * @param body 
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: DeviceConfiguration | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInfo(
            body, h, o
        );
        return this.httpCore?.sendNoResponseContentAsync(requestInfo, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the MicrosoftGraph.deviceManagement.deviceConfigurations.userStatuses collection
     * @param id Unique identifier of the item
     * @returns a DeviceConfigurationUserStatusRequestBuilder
     */
    public userStatusesById(id: String) : DeviceConfigurationUserStatusRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new DeviceConfigurationUserStatusRequestBuilder(this.currentPath + this.pathSegment + "/userStatuses/" + id, this.httpCore, false);
    };
}
