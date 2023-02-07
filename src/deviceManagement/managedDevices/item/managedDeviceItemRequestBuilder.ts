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
import {MicrosoftGraphBypassActivationLockRequestBuilder} from './microsoftGraphBypassActivationLock/microsoftGraphBypassActivationLockRequestBuilder';
import {MicrosoftGraphCleanWindowsDeviceRequestBuilder} from './microsoftGraphCleanWindowsDevice/microsoftGraphCleanWindowsDeviceRequestBuilder';
import {MicrosoftGraphDeleteUserFromSharedAppleDeviceRequestBuilder} from './microsoftGraphDeleteUserFromSharedAppleDevice/microsoftGraphDeleteUserFromSharedAppleDeviceRequestBuilder';
import {MicrosoftGraphDisableLostModeRequestBuilder} from './microsoftGraphDisableLostMode/microsoftGraphDisableLostModeRequestBuilder';
import {MicrosoftGraphLocateDeviceRequestBuilder} from './microsoftGraphLocateDevice/microsoftGraphLocateDeviceRequestBuilder';
import {MicrosoftGraphLogoutSharedAppleDeviceActiveUserRequestBuilder} from './microsoftGraphLogoutSharedAppleDeviceActiveUser/microsoftGraphLogoutSharedAppleDeviceActiveUserRequestBuilder';
import {MicrosoftGraphRebootNowRequestBuilder} from './microsoftGraphRebootNow/microsoftGraphRebootNowRequestBuilder';
import {MicrosoftGraphRecoverPasscodeRequestBuilder} from './microsoftGraphRecoverPasscode/microsoftGraphRecoverPasscodeRequestBuilder';
import {MicrosoftGraphRemoteLockRequestBuilder} from './microsoftGraphRemoteLock/microsoftGraphRemoteLockRequestBuilder';
import {MicrosoftGraphRequestRemoteAssistanceRequestBuilder} from './microsoftGraphRequestRemoteAssistance/microsoftGraphRequestRemoteAssistanceRequestBuilder';
import {MicrosoftGraphResetPasscodeRequestBuilder} from './microsoftGraphResetPasscode/microsoftGraphResetPasscodeRequestBuilder';
import {MicrosoftGraphRetireRequestBuilder} from './microsoftGraphRetire/microsoftGraphRetireRequestBuilder';
import {MicrosoftGraphShutDownRequestBuilder} from './microsoftGraphShutDown/microsoftGraphShutDownRequestBuilder';
import {MicrosoftGraphSyncDeviceRequestBuilder} from './microsoftGraphSyncDevice/microsoftGraphSyncDeviceRequestBuilder';
import {MicrosoftGraphUpdateWindowsDeviceAccountRequestBuilder} from './microsoftGraphUpdateWindowsDeviceAccount/microsoftGraphUpdateWindowsDeviceAccountRequestBuilder';
import {MicrosoftGraphWindowsDefenderScanRequestBuilder} from './microsoftGraphWindowsDefenderScan/microsoftGraphWindowsDefenderScanRequestBuilder';
import {MicrosoftGraphWindowsDefenderUpdateSignaturesRequestBuilder} from './microsoftGraphWindowsDefenderUpdateSignatures/microsoftGraphWindowsDefenderUpdateSignaturesRequestBuilder';
import {MicrosoftGraphWipeRequestBuilder} from './microsoftGraphWipe/microsoftGraphWipeRequestBuilder';
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
    public get microsoftGraphBypassActivationLock(): MicrosoftGraphBypassActivationLockRequestBuilder {
        return new MicrosoftGraphBypassActivationLockRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the cleanWindowsDevice method. */
    public get microsoftGraphCleanWindowsDevice(): MicrosoftGraphCleanWindowsDeviceRequestBuilder {
        return new MicrosoftGraphCleanWindowsDeviceRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the deleteUserFromSharedAppleDevice method. */
    public get microsoftGraphDeleteUserFromSharedAppleDevice(): MicrosoftGraphDeleteUserFromSharedAppleDeviceRequestBuilder {
        return new MicrosoftGraphDeleteUserFromSharedAppleDeviceRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the disableLostMode method. */
    public get microsoftGraphDisableLostMode(): MicrosoftGraphDisableLostModeRequestBuilder {
        return new MicrosoftGraphDisableLostModeRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the locateDevice method. */
    public get microsoftGraphLocateDevice(): MicrosoftGraphLocateDeviceRequestBuilder {
        return new MicrosoftGraphLocateDeviceRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the logoutSharedAppleDeviceActiveUser method. */
    public get microsoftGraphLogoutSharedAppleDeviceActiveUser(): MicrosoftGraphLogoutSharedAppleDeviceActiveUserRequestBuilder {
        return new MicrosoftGraphLogoutSharedAppleDeviceActiveUserRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the rebootNow method. */
    public get microsoftGraphRebootNow(): MicrosoftGraphRebootNowRequestBuilder {
        return new MicrosoftGraphRebootNowRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the recoverPasscode method. */
    public get microsoftGraphRecoverPasscode(): MicrosoftGraphRecoverPasscodeRequestBuilder {
        return new MicrosoftGraphRecoverPasscodeRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the remoteLock method. */
    public get microsoftGraphRemoteLock(): MicrosoftGraphRemoteLockRequestBuilder {
        return new MicrosoftGraphRemoteLockRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the requestRemoteAssistance method. */
    public get microsoftGraphRequestRemoteAssistance(): MicrosoftGraphRequestRemoteAssistanceRequestBuilder {
        return new MicrosoftGraphRequestRemoteAssistanceRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the resetPasscode method. */
    public get microsoftGraphResetPasscode(): MicrosoftGraphResetPasscodeRequestBuilder {
        return new MicrosoftGraphResetPasscodeRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the retire method. */
    public get microsoftGraphRetire(): MicrosoftGraphRetireRequestBuilder {
        return new MicrosoftGraphRetireRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the shutDown method. */
    public get microsoftGraphShutDown(): MicrosoftGraphShutDownRequestBuilder {
        return new MicrosoftGraphShutDownRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the syncDevice method. */
    public get microsoftGraphSyncDevice(): MicrosoftGraphSyncDeviceRequestBuilder {
        return new MicrosoftGraphSyncDeviceRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the updateWindowsDeviceAccount method. */
    public get microsoftGraphUpdateWindowsDeviceAccount(): MicrosoftGraphUpdateWindowsDeviceAccountRequestBuilder {
        return new MicrosoftGraphUpdateWindowsDeviceAccountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the windowsDefenderScan method. */
    public get microsoftGraphWindowsDefenderScan(): MicrosoftGraphWindowsDefenderScanRequestBuilder {
        return new MicrosoftGraphWindowsDefenderScanRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the windowsDefenderUpdateSignatures method. */
    public get microsoftGraphWindowsDefenderUpdateSignatures(): MicrosoftGraphWindowsDefenderUpdateSignaturesRequestBuilder {
        return new MicrosoftGraphWindowsDefenderUpdateSignaturesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the wipe method. */
    public get microsoftGraphWipe(): MicrosoftGraphWipeRequestBuilder {
        return new MicrosoftGraphWipeRequestBuilder(this.pathParameters, this.requestAdapter);
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
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/deviceManagement/managedDevices/{managedDevice%2Did}{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
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
