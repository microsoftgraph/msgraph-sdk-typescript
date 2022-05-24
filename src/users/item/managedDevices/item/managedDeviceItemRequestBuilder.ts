import {ManagedDeviceImpl} from '../../../../models/';
import {createManagedDeviceFromDiscriminatorValue} from '../../../../models/createManagedDeviceFromDiscriminatorValue';
import {ManagedDevice} from '../../../../models/managedDevice';
import {ODataErrorImpl} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {BypassActivationLockRequestBuilder} from './bypassActivationLock/bypassActivationLockRequestBuilder';
import {CleanWindowsDeviceRequestBuilder} from './cleanWindowsDevice/cleanWindowsDeviceRequestBuilder';
import {DeleteUserFromSharedAppleDeviceRequestBuilder} from './deleteUserFromSharedAppleDevice/deleteUserFromSharedAppleDeviceRequestBuilder';
import {DeviceCategoryRequestBuilder} from './deviceCategory/deviceCategoryRequestBuilder';
import {DeviceCompliancePolicyStatesRequestBuilder} from './deviceCompliancePolicyStates/deviceCompliancePolicyStatesRequestBuilder';
import {DeviceCompliancePolicyStateItemRequestBuilder} from './deviceCompliancePolicyStates/item/deviceCompliancePolicyStateItemRequestBuilder';
import {DeviceConfigurationStatesRequestBuilder} from './deviceConfigurationStates/deviceConfigurationStatesRequestBuilder';
import {DeviceConfigurationStateItemRequestBuilder} from './deviceConfigurationStates/item/deviceConfigurationStateItemRequestBuilder';
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
import {WindowsDefenderScanRequestBuilder} from './windowsDefenderScan/windowsDefenderScanRequestBuilder';
import {WindowsDefenderUpdateSignaturesRequestBuilder} from './windowsDefenderUpdateSignatures/windowsDefenderUpdateSignaturesRequestBuilder';
import {WipeRequestBuilder} from './wipe/wipeRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the managedDevices property of the microsoft.graph.user entity. */
export class ManagedDeviceItemRequestBuilder {
    /** The bypassActivationLock property */
    public get bypassActivationLock(): BypassActivationLockRequestBuilder {
        return new BypassActivationLockRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The cleanWindowsDevice property */
    public get cleanWindowsDevice(): CleanWindowsDeviceRequestBuilder {
        return new CleanWindowsDeviceRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The deleteUserFromSharedAppleDevice property */
    public get deleteUserFromSharedAppleDevice(): DeleteUserFromSharedAppleDeviceRequestBuilder {
        return new DeleteUserFromSharedAppleDeviceRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The deviceCategory property */
    public get deviceCategory(): DeviceCategoryRequestBuilder {
        return new DeviceCategoryRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The deviceCompliancePolicyStates property */
    public get deviceCompliancePolicyStates(): DeviceCompliancePolicyStatesRequestBuilder {
        return new DeviceCompliancePolicyStatesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The deviceConfigurationStates property */
    public get deviceConfigurationStates(): DeviceConfigurationStatesRequestBuilder {
        return new DeviceConfigurationStatesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The disableLostMode property */
    public get disableLostMode(): DisableLostModeRequestBuilder {
        return new DisableLostModeRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The locateDevice property */
    public get locateDevice(): LocateDeviceRequestBuilder {
        return new LocateDeviceRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The logoutSharedAppleDeviceActiveUser property */
    public get logoutSharedAppleDeviceActiveUser(): LogoutSharedAppleDeviceActiveUserRequestBuilder {
        return new LogoutSharedAppleDeviceActiveUserRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** The rebootNow property */
    public get rebootNow(): RebootNowRequestBuilder {
        return new RebootNowRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The recoverPasscode property */
    public get recoverPasscode(): RecoverPasscodeRequestBuilder {
        return new RecoverPasscodeRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The remoteLock property */
    public get remoteLock(): RemoteLockRequestBuilder {
        return new RemoteLockRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** The requestRemoteAssistance property */
    public get requestRemoteAssistance(): RequestRemoteAssistanceRequestBuilder {
        return new RequestRemoteAssistanceRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The resetPasscode property */
    public get resetPasscode(): ResetPasscodeRequestBuilder {
        return new ResetPasscodeRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The retire property */
    public get retire(): RetireRequestBuilder {
        return new RetireRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The shutDown property */
    public get shutDown(): ShutDownRequestBuilder {
        return new ShutDownRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The syncDevice property */
    public get syncDevice(): SyncDeviceRequestBuilder {
        return new SyncDeviceRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The updateWindowsDeviceAccount property */
    public get updateWindowsDeviceAccount(): UpdateWindowsDeviceAccountRequestBuilder {
        return new UpdateWindowsDeviceAccountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /** The windowsDefenderScan property */
    public get windowsDefenderScan(): WindowsDefenderScanRequestBuilder {
        return new WindowsDefenderScanRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The windowsDefenderUpdateSignatures property */
    public get windowsDefenderUpdateSignatures(): WindowsDefenderUpdateSignaturesRequestBuilder {
        return new WindowsDefenderUpdateSignaturesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The wipe property */
    public get wipe(): WipeRequestBuilder {
        return new WipeRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new ManagedDeviceItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/users/{user%2Did}/managedDevices/{managedDevice%2Did}{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete navigation property managedDevices for users
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(requestConfiguration?: ManagedDeviceItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * The managed devices associated with the user.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: ManagedDeviceItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property managedDevices in users
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: ManagedDevice | undefined, requestConfiguration?: ManagedDeviceItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        const parsableBody = new ManagedDeviceImpl(body)
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", parsableBody);
        return requestInfo;
    };
    /**
     * Delete navigation property managedDevices for users
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: ManagedDeviceItemRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
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
     * Gets an item from the MicrosoftGraph.users.item.managedDevices.item.deviceCompliancePolicyStates.item collection
     * @param id Unique identifier of the item
     * @returns a deviceCompliancePolicyStateItemRequestBuilder
     */
    public deviceCompliancePolicyStatesById(id: string) : DeviceCompliancePolicyStateItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["deviceCompliancePolicyState%2Did"] = id
        return new DeviceCompliancePolicyStateItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.users.item.managedDevices.item.deviceConfigurationStates.item collection
     * @param id Unique identifier of the item
     * @returns a deviceConfigurationStateItemRequestBuilder
     */
    public deviceConfigurationStatesById(id: string) : DeviceConfigurationStateItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["deviceConfigurationState%2Did"] = id
        return new DeviceConfigurationStateItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * The managed devices associated with the user.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ManagedDevice
     */
    public get(requestConfiguration?: ManagedDeviceItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<ManagedDeviceImpl | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<ManagedDeviceImpl>(requestInfo, createManagedDeviceFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Update the navigation property managedDevices in users
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: ManagedDevice | undefined, requestConfiguration?: ManagedDeviceItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
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
}
