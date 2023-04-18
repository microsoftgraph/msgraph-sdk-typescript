import {ManagedDevice} from '../../../models/';
import {createManagedDeviceFromDiscriminatorValue} from '../../../models/createManagedDeviceFromDiscriminatorValue';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {BypassActivationLockRequestBuilder} from './bypassActivationLock/bypassActivationLockRequestBuilder';
import {CleanWindowsDeviceRequestBuilder} from './cleanWindowsDevice/cleanWindowsDeviceRequestBuilder';
import {DeleteUserFromSharedAppleDeviceRequestBuilder} from './deleteUserFromSharedAppleDevice/deleteUserFromSharedAppleDeviceRequestBuilder';
import {DeviceCategoryRequestBuilder} from './deviceCategory/deviceCategoryRequestBuilder';
import {DeviceCompliancePolicyStatesRequestBuilder} from './deviceCompliancePolicyStates/deviceCompliancePolicyStatesRequestBuilder';
import {DeviceConfigurationStatesRequestBuilder} from './deviceConfigurationStates/deviceConfigurationStatesRequestBuilder';
import {DisableLostModeRequestBuilder} from './disableLostMode/disableLostModeRequestBuilder';
import {LocateDeviceRequestBuilder} from './locateDevice/locateDeviceRequestBuilder';
import {LogoutSharedAppleDeviceActiveUserRequestBuilder} from './logoutSharedAppleDeviceActiveUser/logoutSharedAppleDeviceActiveUserRequestBuilder';
import {ManagedDeviceItemRequestBuilderDeleteRequestConfiguration} from './managedDeviceItemRequestBuilderDeleteRequestConfiguration';
import {ManagedDeviceItemRequestBuilderGetRequestConfiguration} from './managedDeviceItemRequestBuilderGetRequestConfiguration';
import {ManagedDeviceItemRequestBuilderPatchRequestConfiguration} from './managedDeviceItemRequestBuilderPatchRequestConfiguration';
import {RebootNowRequestBuilder} from './rebootNow/rebootNowRequestBuilder';
import {RecoverPasscodeRequestBuilder} from './recoverPasscode/recoverPasscodeRequestBuilder';
import {RemoteLockRequestBuilder} from './remoteLock/remoteLockRequestBuilder';
import {RequestRemoteAssistanceRequestBuilder} from './requestRemoteAssistance/requestRemoteAssistanceRequestBuilder';
import {ResetPasscodeRequestBuilder} from './resetPasscode/resetPasscodeRequestBuilder';
import {RetireRequestBuilder} from './retire/retireRequestBuilder';
import {ShutDownRequestBuilder} from './shutDown/shutDownRequestBuilder';
import {SyncDeviceRequestBuilder} from './syncDevice/syncDeviceRequestBuilder';
import {UpdateWindowsDeviceAccountRequestBuilder} from './updateWindowsDeviceAccount/updateWindowsDeviceAccountRequestBuilder';
import {UsersRequestBuilder} from './users/usersRequestBuilder';
import {WindowsDefenderScanRequestBuilder} from './windowsDefenderScan/windowsDefenderScanRequestBuilder';
import {WindowsDefenderUpdateSignaturesRequestBuilder} from './windowsDefenderUpdateSignatures/windowsDefenderUpdateSignaturesRequestBuilder';
import {WipeRequestBuilder} from './wipe/wipeRequestBuilder';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the managedDevices property of the microsoft.graph.deviceManagement entity.
 */
export class ManagedDeviceItemRequestBuilder extends BaseRequestBuilder {
    /** Provides operations to call the bypassActivationLock method. */
    public get bypassActivationLock(): BypassActivationLockRequestBuilder {
        return new BypassActivationLockRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the cleanWindowsDevice method. */
    public get cleanWindowsDevice(): CleanWindowsDeviceRequestBuilder {
        return new CleanWindowsDeviceRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the deleteUserFromSharedAppleDevice method. */
    public get deleteUserFromSharedAppleDevice(): DeleteUserFromSharedAppleDeviceRequestBuilder {
        return new DeleteUserFromSharedAppleDeviceRequestBuilder(this.pathParameters, this.requestAdapter);
    }
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
    /** Provides operations to call the disableLostMode method. */
    public get disableLostMode(): DisableLostModeRequestBuilder {
        return new DisableLostModeRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the locateDevice method. */
    public get locateDevice(): LocateDeviceRequestBuilder {
        return new LocateDeviceRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the logoutSharedAppleDeviceActiveUser method. */
    public get logoutSharedAppleDeviceActiveUser(): LogoutSharedAppleDeviceActiveUserRequestBuilder {
        return new LogoutSharedAppleDeviceActiveUserRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the rebootNow method. */
    public get rebootNow(): RebootNowRequestBuilder {
        return new RebootNowRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the recoverPasscode method. */
    public get recoverPasscode(): RecoverPasscodeRequestBuilder {
        return new RecoverPasscodeRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the remoteLock method. */
    public get remoteLock(): RemoteLockRequestBuilder {
        return new RemoteLockRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the requestRemoteAssistance method. */
    public get requestRemoteAssistance(): RequestRemoteAssistanceRequestBuilder {
        return new RequestRemoteAssistanceRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the resetPasscode method. */
    public get resetPasscode(): ResetPasscodeRequestBuilder {
        return new ResetPasscodeRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the retire method. */
    public get retire(): RetireRequestBuilder {
        return new RetireRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the shutDown method. */
    public get shutDown(): ShutDownRequestBuilder {
        return new ShutDownRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the syncDevice method. */
    public get syncDevice(): SyncDeviceRequestBuilder {
        return new SyncDeviceRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the updateWindowsDeviceAccount method. */
    public get updateWindowsDeviceAccount(): UpdateWindowsDeviceAccountRequestBuilder {
        return new UpdateWindowsDeviceAccountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the users property of the microsoft.graph.managedDevice entity. */
    public get users(): UsersRequestBuilder {
        return new UsersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the windowsDefenderScan method. */
    public get windowsDefenderScan(): WindowsDefenderScanRequestBuilder {
        return new WindowsDefenderScanRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the windowsDefenderUpdateSignatures method. */
    public get windowsDefenderUpdateSignatures(): WindowsDefenderUpdateSignaturesRequestBuilder {
        return new WindowsDefenderUpdateSignaturesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the wipe method. */
    public get wipe(): WipeRequestBuilder {
        return new WipeRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new ManagedDeviceItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/managedDevices/{managedDevice%2Did}{?%24select,%24expand}");
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
     * @param body The request body
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
     * @param body The request body
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
