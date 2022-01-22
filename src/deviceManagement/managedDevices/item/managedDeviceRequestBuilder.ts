import {ManagedDevice} from '../../../models/microsoft/graph/managedDevice';
import {BypassActivationLockRequestBuilder} from './bypassActivationLock/bypassActivationLockRequestBuilder';
import {CleanWindowsDeviceRequestBuilder} from './cleanWindowsDevice/cleanWindowsDeviceRequestBuilder';
import {DeleteUserFromSharedAppleDeviceRequestBuilder} from './deleteUserFromSharedAppleDevice/deleteUserFromSharedAppleDeviceRequestBuilder';
import {DeviceCategoryRequestBuilder} from './deviceCategory/deviceCategoryRequestBuilder';
import {DeviceCompliancePolicyStatesRequestBuilder} from './deviceCompliancePolicyStates/deviceCompliancePolicyStatesRequestBuilder';
import {DeviceCompliancePolicyStateRequestBuilder} from './deviceCompliancePolicyStates/item/deviceCompliancePolicyStateRequestBuilder';
import {DeviceConfigurationStatesRequestBuilder} from './deviceConfigurationStates/deviceConfigurationStatesRequestBuilder';
import {DeviceConfigurationStateRequestBuilder} from './deviceConfigurationStates/item/deviceConfigurationStateRequestBuilder';
import {DisableLostModeRequestBuilder} from './disableLostMode/disableLostModeRequestBuilder';
import {LocateDeviceRequestBuilder} from './locateDevice/locateDeviceRequestBuilder';
import {LogoutSharedAppleDeviceActiveUserRequestBuilder} from './logoutSharedAppleDeviceActiveUser/logoutSharedAppleDeviceActiveUserRequestBuilder';
import {RebootNowRequestBuilder} from './rebootNow/rebootNowRequestBuilder';
import {RecoverPasscodeRequestBuilder} from './recoverPasscode/recoverPasscodeRequestBuilder';
import {RemoteLockRequestBuilder} from './remoteLock/remoteLockRequestBuilder';
import {RequestRemoteAssistanceRequestBuilder} from './requestRemoteAssistance/requestRemoteAssistanceRequestBuilder';
import {ResetPasscodeRequestBuilder} from './resetPasscode/resetPasscodeRequestBuilder';
import {RetireRequestBuilder} from './retire/retireRequestBuilder';
import {ShutDownRequestBuilder} from './shutDown/shutDownRequestBuilder';
import {SyncDeviceRequestBuilder} from './syncDevice/syncDeviceRequestBuilder';
import {UpdateWindowsDeviceAccountRequestBuilder} from './updateWindowsDeviceAccount/updateWindowsDeviceAccountRequestBuilder';
import {WindowsDefenderScanRequestBuilder} from './windowsDefenderScan/windowsDefenderScanRequestBuilder';
import {WindowsDefenderUpdateSignaturesRequestBuilder} from './windowsDefenderUpdateSignatures/windowsDefenderUpdateSignaturesRequestBuilder';
import {WipeRequestBuilder} from './wipe/wipeRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /deviceManagement/managedDevices/{managedDevice-id}  */
export class ManagedDeviceRequestBuilder {
    public get bypassActivationLock(): BypassActivationLockRequestBuilder {
        return new BypassActivationLockRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get cleanWindowsDevice(): CleanWindowsDeviceRequestBuilder {
        return new CleanWindowsDeviceRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get deleteUserFromSharedAppleDevice(): DeleteUserFromSharedAppleDeviceRequestBuilder {
        return new DeleteUserFromSharedAppleDeviceRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get deviceCategory(): DeviceCategoryRequestBuilder {
        return new DeviceCategoryRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get deviceCompliancePolicyStates(): DeviceCompliancePolicyStatesRequestBuilder {
        return new DeviceCompliancePolicyStatesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get deviceConfigurationStates(): DeviceConfigurationStatesRequestBuilder {
        return new DeviceConfigurationStatesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get disableLostMode(): DisableLostModeRequestBuilder {
        return new DisableLostModeRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get locateDevice(): LocateDeviceRequestBuilder {
        return new LocateDeviceRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get logoutSharedAppleDeviceActiveUser(): LogoutSharedAppleDeviceActiveUserRequestBuilder {
        return new LogoutSharedAppleDeviceActiveUserRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request  */
    private readonly pathParameters: Map<string, unknown>;
    public get rebootNow(): RebootNowRequestBuilder {
        return new RebootNowRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get recoverPasscode(): RecoverPasscodeRequestBuilder {
        return new RecoverPasscodeRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get remoteLock(): RemoteLockRequestBuilder {
        return new RemoteLockRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The request adapter to use to execute the requests.  */
    private readonly requestAdapter: RequestAdapter;
    public get requestRemoteAssistance(): RequestRemoteAssistanceRequestBuilder {
        return new RequestRemoteAssistanceRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get resetPasscode(): ResetPasscodeRequestBuilder {
        return new ResetPasscodeRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get retire(): RetireRequestBuilder {
        return new RetireRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get shutDown(): ShutDownRequestBuilder {
        return new ShutDownRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get syncDevice(): SyncDeviceRequestBuilder {
        return new SyncDeviceRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get updateWindowsDeviceAccount(): UpdateWindowsDeviceAccountRequestBuilder {
        return new UpdateWindowsDeviceAccountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder  */
    private readonly urlTemplate: string;
    public get windowsDefenderScan(): WindowsDefenderScanRequestBuilder {
        return new WindowsDefenderScanRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get windowsDefenderUpdateSignatures(): WindowsDefenderUpdateSignaturesRequestBuilder {
        return new WindowsDefenderUpdateSignaturesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get wipe(): WipeRequestBuilder {
        return new WipeRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new ManagedDeviceRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Map<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/deviceManagement/managedDevices/{managedDevice_id}{?select,expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * The list of managed devices.
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
     * The list of managed devices.
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
     * The list of managed devices.
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: ManagedDevice | undefined, h?: object | undefined, o?: RequestOption[] | undefined) : RequestInformation {
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
     * The list of managed devices.
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
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.deviceManagement.managedDevices.item.deviceCompliancePolicyStates.item collection
     * @param id Unique identifier of the item
     * @returns a deviceCompliancePolicyStateRequestBuilder
     */
    public deviceCompliancePolicyStatesById(id: string) : DeviceCompliancePolicyStateRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        id && urlTplParams.set("deviceCompliancePolicyState_id", id);
        return new DeviceCompliancePolicyStateRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.deviceManagement.managedDevices.item.deviceConfigurationStates.item collection
     * @param id Unique identifier of the item
     * @returns a deviceConfigurationStateRequestBuilder
     */
    public deviceConfigurationStatesById(id: string) : DeviceConfigurationStateRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        id && urlTplParams.set("deviceConfigurationState_id", id);
        return new DeviceConfigurationStateRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * The list of managed devices.
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ManagedDevice
     */
    public get(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: object | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<ManagedDevice | undefined> {
        const requestInfo = this.createGetRequestInformation(
            q, h, o
        );
        return this.requestAdapter?.sendAsync<ManagedDevice>(requestInfo, ManagedDevice, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * The list of managed devices.
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: ManagedDevice | undefined, h?: object | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, h, o
        );
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
}
