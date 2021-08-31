import {ManagedDevice} from '../../../managedDevice';
import {DeviceCategoryRequestBuilder} from '../deviceCategory/deviceCategoryRequestBuilder';
import {DeviceCompliancePolicyStatesRequestBuilder} from '../deviceCompliancePolicyStates/deviceCompliancePolicyStatesRequestBuilder';
import {DeviceCompliancePolicyStateRequestBuilder} from '../deviceCompliancePolicyStates/item/deviceCompliancePolicyStateRequestBuilder';
import {DeviceConfigurationStatesRequestBuilder} from '../deviceConfigurationStates/deviceConfigurationStatesRequestBuilder';
import {DeviceConfigurationStateRequestBuilder} from '../deviceConfigurationStates/item/deviceConfigurationStateRequestBuilder';
import {Microsoft.graph.bypassActivationLockRequestBuilder} from '../microsoft/graph/bypassActivationLock/microsoft.graph.bypassActivationLockRequestBuilder';
import {Microsoft.graph.cleanWindowsDeviceRequestBuilder} from '../microsoft/graph/cleanWindowsDevice/microsoft.graph.cleanWindowsDeviceRequestBuilder';
import {Microsoft.graph.deleteUserFromSharedAppleDeviceRequestBuilder} from '../microsoft/graph/deleteUserFromSharedAppleDevice/microsoft.graph.deleteUserFromSharedAppleDeviceRequestBuilder';
import {Microsoft.graph.disableLostModeRequestBuilder} from '../microsoft/graph/disableLostMode/microsoft.graph.disableLostModeRequestBuilder';
import {Microsoft.graph.locateDeviceRequestBuilder} from '../microsoft/graph/locateDevice/microsoft.graph.locateDeviceRequestBuilder';
import {Microsoft.graph.logoutSharedAppleDeviceActiveUserRequestBuilder} from '../microsoft/graph/logoutSharedAppleDeviceActiveUser/microsoft.graph.logoutSharedAppleDeviceActiveUserRequestBuilder';
import {Microsoft.graph.rebootNowRequestBuilder} from '../microsoft/graph/rebootNow/microsoft.graph.rebootNowRequestBuilder';
import {Microsoft.graph.recoverPasscodeRequestBuilder} from '../microsoft/graph/recoverPasscode/microsoft.graph.recoverPasscodeRequestBuilder';
import {Microsoft.graph.remoteLockRequestBuilder} from '../microsoft/graph/remoteLock/microsoft.graph.remoteLockRequestBuilder';
import {Microsoft.graph.requestRemoteAssistanceRequestBuilder} from '../microsoft/graph/requestRemoteAssistance/microsoft.graph.requestRemoteAssistanceRequestBuilder';
import {Microsoft.graph.resetPasscodeRequestBuilder} from '../microsoft/graph/resetPasscode/microsoft.graph.resetPasscodeRequestBuilder';
import {Microsoft.graph.retireRequestBuilder} from '../microsoft/graph/retire/microsoft.graph.retireRequestBuilder';
import {Microsoft.graph.shutDownRequestBuilder} from '../microsoft/graph/shutDown/microsoft.graph.shutDownRequestBuilder';
import {Microsoft.graph.syncDeviceRequestBuilder} from '../microsoft/graph/syncDevice/microsoft.graph.syncDeviceRequestBuilder';
import {Microsoft.graph.updateWindowsDeviceAccountRequestBuilder} from '../microsoft/graph/updateWindowsDeviceAccount/microsoft.graph.updateWindowsDeviceAccountRequestBuilder';
import {Microsoft.graph.windowsDefenderScanRequestBuilder} from '../microsoft/graph/windowsDefenderScan/microsoft.graph.windowsDefenderScanRequestBuilder';
import {Microsoft.graph.windowsDefenderUpdateSignaturesRequestBuilder} from '../microsoft/graph/windowsDefenderUpdateSignatures/microsoft.graph.windowsDefenderUpdateSignaturesRequestBuilder';
import {Microsoft.graph.wipeRequestBuilder} from '../microsoft/graph/wipe/microsoft.graph.wipeRequestBuilder';
import {HttpCore, HttpMethod, RequestInfo, ResponseHandler, MiddlewareOption} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /deviceManagement/managedDevices/{managedDevice-id}  */
export class ManagedDeviceRequestBuilder {
    /** Current path for the request  */
    private readonly currentPath: string;
    public get deviceCategory(): DeviceCategoryRequestBuilder {
        return new DeviceCategoryRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get deviceCompliancePolicyStates(): DeviceCompliancePolicyStatesRequestBuilder {
        return new DeviceCompliancePolicyStatesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get deviceConfigurationStates(): DeviceConfigurationStatesRequestBuilder {
        return new DeviceConfigurationStatesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** The http core service to use to execute the requests.  */
    private readonly httpCore: HttpCore;
    /** Whether the current path is a raw URL  */
    private readonly isRawUrl: boolean;
    public get microsoft.graph.bypassActivationLock(): Microsoft.graph.bypassActivationLockRequestBuilder {
        return new Microsoft.graph.bypassActivationLockRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.cleanWindowsDevice(): Microsoft.graph.cleanWindowsDeviceRequestBuilder {
        return new Microsoft.graph.cleanWindowsDeviceRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.deleteUserFromSharedAppleDevice(): Microsoft.graph.deleteUserFromSharedAppleDeviceRequestBuilder {
        return new Microsoft.graph.deleteUserFromSharedAppleDeviceRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.disableLostMode(): Microsoft.graph.disableLostModeRequestBuilder {
        return new Microsoft.graph.disableLostModeRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.locateDevice(): Microsoft.graph.locateDeviceRequestBuilder {
        return new Microsoft.graph.locateDeviceRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.logoutSharedAppleDeviceActiveUser(): Microsoft.graph.logoutSharedAppleDeviceActiveUserRequestBuilder {
        return new Microsoft.graph.logoutSharedAppleDeviceActiveUserRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.rebootNow(): Microsoft.graph.rebootNowRequestBuilder {
        return new Microsoft.graph.rebootNowRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.recoverPasscode(): Microsoft.graph.recoverPasscodeRequestBuilder {
        return new Microsoft.graph.recoverPasscodeRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.remoteLock(): Microsoft.graph.remoteLockRequestBuilder {
        return new Microsoft.graph.remoteLockRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.requestRemoteAssistance(): Microsoft.graph.requestRemoteAssistanceRequestBuilder {
        return new Microsoft.graph.requestRemoteAssistanceRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.resetPasscode(): Microsoft.graph.resetPasscodeRequestBuilder {
        return new Microsoft.graph.resetPasscodeRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.retire(): Microsoft.graph.retireRequestBuilder {
        return new Microsoft.graph.retireRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.shutDown(): Microsoft.graph.shutDownRequestBuilder {
        return new Microsoft.graph.shutDownRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.syncDevice(): Microsoft.graph.syncDeviceRequestBuilder {
        return new Microsoft.graph.syncDeviceRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.updateWindowsDeviceAccount(): Microsoft.graph.updateWindowsDeviceAccountRequestBuilder {
        return new Microsoft.graph.updateWindowsDeviceAccountRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.windowsDefenderScan(): Microsoft.graph.windowsDefenderScanRequestBuilder {
        return new Microsoft.graph.windowsDefenderScanRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.windowsDefenderUpdateSignatures(): Microsoft.graph.windowsDefenderUpdateSignaturesRequestBuilder {
        return new Microsoft.graph.windowsDefenderUpdateSignaturesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.wipe(): Microsoft.graph.wipeRequestBuilder {
        return new Microsoft.graph.wipeRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** Path segment to use to build the URL for the current request builder  */
    private readonly pathSegment: string;
    /**
     * Instantiates a new ManagedDeviceRequestBuilder and sets the default values.
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
     * The list of managed devices.
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
     * The list of managed devices.
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
     * The list of managed devices.
     * @param body 
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInfo
     */
    public createPatchRequestInfo(body: ManagedDevice | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined) : RequestInfo {
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
     * The list of managed devices.
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
     * Gets an item from the MicrosoftGraph.deviceManagement.managedDevices.deviceCompliancePolicyStates collection
     * @param id Unique identifier of the item
     * @returns a DeviceCompliancePolicyStateRequestBuilder
     */
    public deviceCompliancePolicyStatesById(id: String) : DeviceCompliancePolicyStateRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new DeviceCompliancePolicyStateRequestBuilder(this.currentPath + this.pathSegment + "/deviceCompliancePolicyStates/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the MicrosoftGraph.deviceManagement.managedDevices.deviceConfigurationStates collection
     * @param id Unique identifier of the item
     * @returns a DeviceConfigurationStateRequestBuilder
     */
    public deviceConfigurationStatesById(id: String) : DeviceConfigurationStateRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new DeviceConfigurationStateRequestBuilder(this.currentPath + this.pathSegment + "/deviceConfigurationStates/" + id, this.httpCore, false);
    };
    /**
     * The list of managed devices.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ManagedDevice
     */
    public get(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<ManagedDevice | undefined> {
        const requestInfo = this.createGetRequestInfo(
            q, h, o
        );
        return this.httpCore?.sendAsync<ManagedDevice>(requestInfo, ManagedDevice, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * The list of managed devices.
     * @param body 
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: ManagedDevice | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInfo(
            body, h, o
        );
        return this.httpCore?.sendNoResponseContentAsync(requestInfo, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
}
