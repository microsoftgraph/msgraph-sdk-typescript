import {ManagedDeviceMobileAppConfiguration} from '../../../managedDeviceMobileAppConfiguration';
import {AssignRequestBuilder} from '../assign/assignRequestBuilder';
import {AssignmentsRequestBuilder} from '../assignments/assignmentsRequestBuilder';
import {ManagedDeviceMobileAppConfigurationAssignmentRequestBuilder} from '../assignments/item/item/managedDeviceMobileAppConfigurationAssignmentRequestBuilder';
import {DeviceStatusesRequestBuilder} from '../deviceStatuses/deviceStatusesRequestBuilder';
import {ManagedDeviceMobileAppConfigurationDeviceStatusRequestBuilder} from '../deviceStatuses/item/item/managedDeviceMobileAppConfigurationDeviceStatusRequestBuilder';
import {DeviceStatusSummaryRequestBuilder} from '../deviceStatusSummary/deviceStatusSummaryRequestBuilder';
import {ManagedDeviceMobileAppConfigurationUserStatusRequestBuilder} from '../userStatuses/item/item/managedDeviceMobileAppConfigurationUserStatusRequestBuilder';
import {UserStatusesRequestBuilder} from '../userStatuses/userStatusesRequestBuilder';
import {UserStatusSummaryRequestBuilder} from '../userStatusSummary/userStatusSummaryRequestBuilder';
import {HttpCore, HttpMethod, RequestInformation, ResponseHandler, MiddlewareOption} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}  */
export class ManagedDeviceMobileAppConfigurationRequestBuilder {
    public get assign(): AssignRequestBuilder {
        return new AssignRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get assignments(): AssignmentsRequestBuilder {
        return new AssignmentsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** Current path for the request  */
    private readonly currentPath: string;
    public get deviceStatuses(): DeviceStatusesRequestBuilder {
        return new DeviceStatusesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get deviceStatusSummary(): DeviceStatusSummaryRequestBuilder {
        return new DeviceStatusSummaryRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** The http core service to use to execute the requests.  */
    private readonly httpCore: HttpCore;
    /** Whether the current path is a raw URL  */
    private readonly isRawUrl: boolean;
    /** Path segment to use to build the URL for the current request builder  */
    private readonly pathSegment: string;
    public get userStatuses(): UserStatusesRequestBuilder {
        return new UserStatusesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get userStatusSummary(): UserStatusSummaryRequestBuilder {
        return new UserStatusSummaryRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /**
     * Gets an item from the graphtypescriptv4.utilities.deviceAppManagement.mobileAppConfigurations.item.assignments.item collection
     * @param id Unique identifier of the item
     * @returns a managedDeviceMobileAppConfigurationAssignmentRequestBuilder
     */
    public assignmentsById(id: String) : ManagedDeviceMobileAppConfigurationAssignmentRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new ManagedDeviceMobileAppConfigurationAssignmentRequestBuilder(this.currentPath + this.pathSegment + "/assignments/" + id, this.httpCore, false);
    };
    /**
     * Instantiates a new ManagedDeviceMobileAppConfigurationRequestBuilder and sets the default values.
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
     * The Managed Device Mobile Application Configurations.
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
     * The Managed Device Mobile Application Configurations.
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
     * The Managed Device Mobile Application Configurations.
     * @param body 
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: ManagedDeviceMobileAppConfiguration | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined) : RequestInformation {
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
     * The Managed Device Mobile Application Configurations.
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
     * Gets an item from the graphtypescriptv4.utilities.deviceAppManagement.mobileAppConfigurations.item.deviceStatuses.item collection
     * @param id Unique identifier of the item
     * @returns a managedDeviceMobileAppConfigurationDeviceStatusRequestBuilder
     */
    public deviceStatusesById(id: String) : ManagedDeviceMobileAppConfigurationDeviceStatusRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new ManagedDeviceMobileAppConfigurationDeviceStatusRequestBuilder(this.currentPath + this.pathSegment + "/deviceStatuses/" + id, this.httpCore, false);
    };
    /**
     * The Managed Device Mobile Application Configurations.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ManagedDeviceMobileAppConfiguration
     */
    public get(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<ManagedDeviceMobileAppConfiguration | undefined> {
        const requestInfo = this.createGetRequestInformation(
            q, h, o
        );
        return this.httpCore?.sendAsync<ManagedDeviceMobileAppConfiguration>(requestInfo, ManagedDeviceMobileAppConfiguration, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * The Managed Device Mobile Application Configurations.
     * @param body 
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: ManagedDeviceMobileAppConfiguration | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, h, o
        );
        return this.httpCore?.sendNoResponseContentAsync(requestInfo, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.deviceAppManagement.mobileAppConfigurations.item.userStatuses.item collection
     * @param id Unique identifier of the item
     * @returns a managedDeviceMobileAppConfigurationUserStatusRequestBuilder
     */
    public userStatusesById(id: String) : ManagedDeviceMobileAppConfigurationUserStatusRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new ManagedDeviceMobileAppConfigurationUserStatusRequestBuilder(this.currentPath + this.pathSegment + "/userStatuses/" + id, this.httpCore, false);
    };
}
