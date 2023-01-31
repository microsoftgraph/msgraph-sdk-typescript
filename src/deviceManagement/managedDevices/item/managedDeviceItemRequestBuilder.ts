import {ManagedDevice} from '../../../models/';
import {createManagedDeviceFromDiscriminatorValue} from '../../../models/createManagedDeviceFromDiscriminatorValue';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {DeviceCategoryRequestBuilder} from './deviceCategory/deviceCategoryRequestBuilder';
import {DeviceCompliancePolicyStatesRequestBuilder} from './deviceCompliancePolicyStates/deviceCompliancePolicyStatesRequestBuilder';
import {DeviceCompliancePolicyStateItemRequestBuilder} from './deviceCompliancePolicyStates/item/deviceCompliancePolicyStateItemRequestBuilder';
import {DeviceConfigurationStatesRequestBuilder} from './deviceConfigurationStates/deviceConfigurationStatesRequestBuilder';
import {DeviceConfigurationStateItemRequestBuilder} from './deviceConfigurationStates/item/deviceConfigurationStateItemRequestBuilder';
import {ManagedDeviceItemRequestBuilderDeleteRequestConfiguration} from './managedDeviceItemRequestBuilderDeleteRequestConfiguration';
import {ManagedDeviceItemRequestBuilderGetRequestConfiguration} from './managedDeviceItemRequestBuilderGetRequestConfiguration';
import {ManagedDeviceItemRequestBuilderPatchRequestConfiguration} from './managedDeviceItemRequestBuilderPatchRequestConfiguration';
import {BypassActivationLockRequestBuilder} from './microsoftGraphBypassActivationLock/bypassActivationLockRequestBuilder';
import {CleanWindowsDeviceRequestBuilder} from './microsoftGraphCleanWindowsDevice/cleanWindowsDeviceRequestBuilder';
import {DeleteUserFromSharedAppleDeviceRequestBuilder} from './microsoftGraphDeleteUserFromSharedAppleDevice/deleteUserFromSharedAppleDeviceRequestBuilder';
import {DisableLostModeRequestBuilder} from './microsoftGraphDisableLostMode/disableLostModeRequestBuilder';
import {LocateDeviceRequestBuilder} from './microsoftGraphLocateDevice/locateDeviceRequestBuilder';
import {LogoutSharedAppleDeviceActiveUserRequestBuilder} from './microsoftGraphLogoutSharedAppleDeviceActiveUser/logoutSharedAppleDeviceActiveUserRequestBuilder';
import {RebootNowRequestBuilder} from './microsoftGraphRebootNow/rebootNowRequestBuilder';
import {RecoverPasscodeRequestBuilder} from './microsoftGraphRecoverPasscode/recoverPasscodeRequestBuilder';
import {RemoteLockRequestBuilder} from './microsoftGraphRemoteLock/remoteLockRequestBuilder';
import {RequestRemoteAssistanceRequestBuilder} from './microsoftGraphRequestRemoteAssistance/requestRemoteAssistanceRequestBuilder';
import {ResetPasscodeRequestBuilder} from './microsoftGraphResetPasscode/resetPasscodeRequestBuilder';
import {RetireRequestBuilder} from './microsoftGraphRetire/retireRequestBuilder';
import {ShutDownRequestBuilder} from './microsoftGraphShutDown/shutDownRequestBuilder';
import {SyncDeviceRequestBuilder} from './microsoftGraphSyncDevice/syncDeviceRequestBuilder';
import {UpdateWindowsDeviceAccountRequestBuilder} from './microsoftGraphUpdateWindowsDeviceAccount/updateWindowsDeviceAccountRequestBuilder';
import {WindowsDefenderScanRequestBuilder} from './microsoftGraphWindowsDefenderScan/windowsDefenderScanRequestBuilder';
import {WindowsDefenderUpdateSignaturesRequestBuilder} from './microsoftGraphWindowsDefenderUpdateSignatures/windowsDefenderUpdateSignaturesRequestBuilder';
import {WipeRequestBuilder} from './microsoftGraphWipe/wipeRequestBuilder';
import {UsersRequestBuilder} from './users/usersRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the managedDevices property of the microsoft.graph.deviceManagement entity.
 */
export class ManagedDeviceItemRequestBuilder {
    /** Provides operations to manage the deviceCategory property of the microsoft.graph.managedDevice entity. */
    public get deviceCategory(): DeviceCategoryRequestBuilder {
        return new DeviceCategoryRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the deviceCompliancePolicyStates property of the microsoft.graph.managedDevice entity. */
    public get deviceCompliancePolicyStates(): DeviceCompliancePolicyStatesRequestBuilder {
        return new DeviceCompliancePolicyStatesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the deviceConfigurationStates property of the microsoft.graph.managedDevice entity. */
    public get deviceConfigurationStates(): DeviceConfigurationStatesRequestBuilder {
        return new DeviceConfigurationStatesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the bypassActivationLock method. */
    public get microsoftGraphBypassActivationLock(): BypassActivationLockRequestBuilder {
        return new BypassActivationLockRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the cleanWindowsDevice method. */
    public get microsoftGraphCleanWindowsDevice(): CleanWindowsDeviceRequestBuilder {
        return new CleanWindowsDeviceRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the deleteUserFromSharedAppleDevice method. */
    public get microsoftGraphDeleteUserFromSharedAppleDevice(): DeleteUserFromSharedAppleDeviceRequestBuilder {
        return new DeleteUserFromSharedAppleDeviceRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the disableLostMode method. */
    public get microsoftGraphDisableLostMode(): DisableLostModeRequestBuilder {
        return new DisableLostModeRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the locateDevice method. */
    public get microsoftGraphLocateDevice(): LocateDeviceRequestBuilder {
        return new LocateDeviceRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the logoutSharedAppleDeviceActiveUser method. */
    public get microsoftGraphLogoutSharedAppleDeviceActiveUser(): LogoutSharedAppleDeviceActiveUserRequestBuilder {
        return new LogoutSharedAppleDeviceActiveUserRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the rebootNow method. */
    public get microsoftGraphRebootNow(): RebootNowRequestBuilder {
        return new RebootNowRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the recoverPasscode method. */
    public get microsoftGraphRecoverPasscode(): RecoverPasscodeRequestBuilder {
        return new RecoverPasscodeRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the remoteLock method. */
    public get microsoftGraphRemoteLock(): RemoteLockRequestBuilder {
        return new RemoteLockRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the requestRemoteAssistance method. */
    public get microsoftGraphRequestRemoteAssistance(): RequestRemoteAssistanceRequestBuilder {
        return new RequestRemoteAssistanceRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the resetPasscode method. */
    public get microsoftGraphResetPasscode(): ResetPasscodeRequestBuilder {
        return new ResetPasscodeRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the retire method. */
    public get microsoftGraphRetire(): RetireRequestBuilder {
        return new RetireRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the shutDown method. */
    public get microsoftGraphShutDown(): ShutDownRequestBuilder {
        return new ShutDownRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the syncDevice method. */
    public get microsoftGraphSyncDevice(): SyncDeviceRequestBuilder {
        return new SyncDeviceRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the updateWindowsDeviceAccount method. */
    public get microsoftGraphUpdateWindowsDeviceAccount(): UpdateWindowsDeviceAccountRequestBuilder {
        return new UpdateWindowsDeviceAccountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the windowsDefenderScan method. */
    public get microsoftGraphWindowsDefenderScan(): WindowsDefenderScanRequestBuilder {
        return new WindowsDefenderScanRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the windowsDefenderUpdateSignatures method. */
    public get microsoftGraphWindowsDefenderUpdateSignatures(): WindowsDefenderUpdateSignaturesRequestBuilder {
        return new WindowsDefenderUpdateSignaturesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the wipe method. */
    public get microsoftGraphWipe(): WipeRequestBuilder {
        return new WipeRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder */
    private urlTemplate: string;
    /** Provides operations to manage the users property of the microsoft.graph.managedDevice entity. */
    public get users(): UsersRequestBuilder {
        return new UsersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new ManagedDeviceItemRequestBuilder and sets the default values.
     * @param managedDeviceId key: id of managedDevice
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter, managedDeviceId?: string | undefined) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/deviceManagement/managedDevices/{managedDevice%2Did}{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        urlTplParams["managedDevice%2Did"] = managedDeviceId
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete navigation property managedDevices for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: ManagedDeviceItemRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.toDeleteRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Provides operations to manage the deviceCompliancePolicyStates property of the microsoft.graph.managedDevice entity.
     * @param id Unique identifier of the item
     * @returns a DeviceCompliancePolicyStateItemRequestBuilder
     */
    public deviceCompliancePolicyStatesById(id: string) : DeviceCompliancePolicyStateItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["deviceCompliancePolicyState%2Did"] = id
        return new DeviceCompliancePolicyStateItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the deviceConfigurationStates property of the microsoft.graph.managedDevice entity.
     * @param id Unique identifier of the item
     * @returns a DeviceConfigurationStateItemRequestBuilder
     */
    public deviceConfigurationStatesById(id: string) : DeviceConfigurationStateItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["deviceConfigurationState%2Did"] = id
        return new DeviceConfigurationStateItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * The list of managed devices.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ManagedDevice
     */
    public get(requestConfiguration?: ManagedDeviceItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<ManagedDevice | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<ManagedDevice>(requestInfo, createManagedDeviceFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Update the navigation property managedDevices in deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ManagedDevice
     */
    public patch(body: ManagedDevice | undefined, requestConfiguration?: ManagedDeviceItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<ManagedDevice | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<ManagedDevice>(requestInfo, createManagedDeviceFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Delete navigation property managedDevices for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: ManagedDeviceItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * The list of managed devices.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ManagedDeviceItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property managedDevices in deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: ManagedDevice | undefined, requestConfiguration?: ManagedDeviceItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        return requestInfo;
    };
}
