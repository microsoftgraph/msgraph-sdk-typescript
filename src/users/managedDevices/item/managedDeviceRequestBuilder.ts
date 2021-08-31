import {ManagedDevice} from '../../../managedDevice';
import {BypassActivationLockRequestBuilder} from '../bypassActivationLock/bypassActivationLockRequestBuilder';
import {CleanWindowsDeviceRequestBuilder} from '../cleanWindowsDevice/cleanWindowsDeviceRequestBuilder';
import {DeleteUserFromSharedAppleDeviceRequestBuilder} from '../deleteUserFromSharedAppleDevice/deleteUserFromSharedAppleDeviceRequestBuilder';
import {DeviceCategoryRequestBuilder} from '../deviceCategory/deviceCategoryRequestBuilder';
import {DeviceCompliancePolicyStatesRequestBuilder} from '../deviceCompliancePolicyStates/deviceCompliancePolicyStatesRequestBuilder';
import {DeviceCompliancePolicyStateRequestBuilder} from '../deviceCompliancePolicyStates/item/deviceCompliancePolicyStateRequestBuilder';
import {DeviceConfigurationStatesRequestBuilder} from '../deviceConfigurationStates/deviceConfigurationStatesRequestBuilder';
import {DeviceConfigurationStateRequestBuilder} from '../deviceConfigurationStates/item/deviceConfigurationStateRequestBuilder';
import {DisableLostModeRequestBuilder} from '../disableLostMode/disableLostModeRequestBuilder';
import {LocateDeviceRequestBuilder} from '../locateDevice/locateDeviceRequestBuilder';
import {LogoutSharedAppleDeviceActiveUserRequestBuilder} from '../logoutSharedAppleDeviceActiveUser/logoutSharedAppleDeviceActiveUserRequestBuilder';
import {RebootNowRequestBuilder} from '../rebootNow/rebootNowRequestBuilder';
import {RecoverPasscodeRequestBuilder} from '../recoverPasscode/recoverPasscodeRequestBuilder';
import {RemoteLockRequestBuilder} from '../remoteLock/remoteLockRequestBuilder';
import {RequestRemoteAssistanceRequestBuilder} from '../requestRemoteAssistance/requestRemoteAssistanceRequestBuilder';
import {ResetPasscodeRequestBuilder} from '../resetPasscode/resetPasscodeRequestBuilder';
import {RetireRequestBuilder} from '../retire/retireRequestBuilder';
import {ShutDownRequestBuilder} from '../shutDown/shutDownRequestBuilder';
import {SyncDeviceRequestBuilder} from '../syncDevice/syncDeviceRequestBuilder';
import {UpdateWindowsDeviceAccountRequestBuilder} from '../updateWindowsDeviceAccount/updateWindowsDeviceAccountRequestBuilder';
import {WindowsDefenderScanRequestBuilder} from '../windowsDefenderScan/windowsDefenderScanRequestBuilder';
import {WindowsDefenderUpdateSignaturesRequestBuilder} from '../windowsDefenderUpdateSignatures/windowsDefenderUpdateSignaturesRequestBuilder';
import {WipeRequestBuilder} from '../wipe/wipeRequestBuilder';
import {HttpCore, HttpMethod, RequestInformation, ResponseHandler, MiddlewareOption} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /users/{user-id}/managedDevices/{managedDevice-id}  */
export class ManagedDeviceRequestBuilder {
    public get bypassActivationLock(): BypassActivationLockRequestBuilder {
        return new BypassActivationLockRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get cleanWindowsDevice(): CleanWindowsDeviceRequestBuilder {
        return new CleanWindowsDeviceRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** Current path for the request  */
    private readonly currentPath: string;
    public get deleteUserFromSharedAppleDevice(): DeleteUserFromSharedAppleDeviceRequestBuilder {
        return new DeleteUserFromSharedAppleDeviceRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get deviceCategory(): DeviceCategoryRequestBuilder {
        return new DeviceCategoryRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get deviceCompliancePolicyStates(): DeviceCompliancePolicyStatesRequestBuilder {
        return new DeviceCompliancePolicyStatesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get deviceConfigurationStates(): DeviceConfigurationStatesRequestBuilder {
        return new DeviceConfigurationStatesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get disableLostMode(): DisableLostModeRequestBuilder {
        return new DisableLostModeRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** The http core service to use to execute the requests.  */
    private readonly httpCore: HttpCore;
    /** Whether the current path is a raw URL  */
    private readonly isRawUrl: boolean;
    public get locateDevice(): LocateDeviceRequestBuilder {
        return new LocateDeviceRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get logoutSharedAppleDeviceActiveUser(): LogoutSharedAppleDeviceActiveUserRequestBuilder {
        return new LogoutSharedAppleDeviceActiveUserRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** Path segment to use to build the URL for the current request builder  */
    private readonly pathSegment: string;
    public get rebootNow(): RebootNowRequestBuilder {
        return new RebootNowRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get recoverPasscode(): RecoverPasscodeRequestBuilder {
        return new RecoverPasscodeRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get remoteLock(): RemoteLockRequestBuilder {
        return new RemoteLockRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get requestRemoteAssistance(): RequestRemoteAssistanceRequestBuilder {
        return new RequestRemoteAssistanceRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get resetPasscode(): ResetPasscodeRequestBuilder {
        return new ResetPasscodeRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get retire(): RetireRequestBuilder {
        return new RetireRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get shutDown(): ShutDownRequestBuilder {
        return new ShutDownRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get syncDevice(): SyncDeviceRequestBuilder {
        return new SyncDeviceRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get updateWindowsDeviceAccount(): UpdateWindowsDeviceAccountRequestBuilder {
        return new UpdateWindowsDeviceAccountRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get windowsDefenderScan(): WindowsDefenderScanRequestBuilder {
        return new WindowsDefenderScanRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get windowsDefenderUpdateSignatures(): WindowsDefenderUpdateSignaturesRequestBuilder {
        return new WindowsDefenderUpdateSignaturesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get wipe(): WipeRequestBuilder {
        return new WipeRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
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
     * The managed devices associated with the user.
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
     * The managed devices associated with the user.
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
     * The managed devices associated with the user.
     * @param body 
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: ManagedDevice | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined) : RequestInformation {
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
     * The managed devices associated with the user.
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
     * Gets an item from the graphtypescriptv4.utilities.users.managedDevices.deviceCompliancePolicyStates collection
     * @param id Unique identifier of the item
     * @returns a DeviceCompliancePolicyStateRequestBuilder
     */
    public deviceCompliancePolicyStatesById(id: String) : DeviceCompliancePolicyStateRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new DeviceCompliancePolicyStateRequestBuilder(this.currentPath + this.pathSegment + "/deviceCompliancePolicyStates/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.users.managedDevices.deviceConfigurationStates collection
     * @param id Unique identifier of the item
     * @returns a DeviceConfigurationStateRequestBuilder
     */
    public deviceConfigurationStatesById(id: String) : DeviceConfigurationStateRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new DeviceConfigurationStateRequestBuilder(this.currentPath + this.pathSegment + "/deviceConfigurationStates/" + id, this.httpCore, false);
    };
    /**
     * The managed devices associated with the user.
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
        const requestInfo = this.createGetRequestInformation(
            q, h, o
        );
        return this.httpCore?.sendAsync<ManagedDevice>(requestInfo, ManagedDevice, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * The managed devices associated with the user.
     * @param body 
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: ManagedDevice | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, h, o
        );
        return this.httpCore?.sendNoResponseContentAsync(requestInfo, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
}
