import {createWindowsAutopilotDeviceIdentityFromDiscriminatorValue} from '../../../models/createWindowsAutopilotDeviceIdentityFromDiscriminatorValue';
import {deserializeIntoWindowsAutopilotDeviceIdentity} from '../../../models/deserializeIntoWindowsAutopilotDeviceIdentity';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {serializeWindowsAutopilotDeviceIdentity} from '../../../models/serializeWindowsAutopilotDeviceIdentity';
import {WindowsAutopilotDeviceIdentity} from '../../../models/windowsAutopilotDeviceIdentity';
import {AssignUserToDeviceRequestBuilder} from './assignUserToDevice/assignUserToDeviceRequestBuilder';
import {UnassignUserFromDeviceRequestBuilder} from './unassignUserFromDevice/unassignUserFromDeviceRequestBuilder';
import {UpdateDevicePropertiesRequestBuilder} from './updateDeviceProperties/updateDevicePropertiesRequestBuilder';
import {WindowsAutopilotDeviceIdentityItemRequestBuilderDeleteRequestConfiguration} from './windowsAutopilotDeviceIdentityItemRequestBuilderDeleteRequestConfiguration';
import {WindowsAutopilotDeviceIdentityItemRequestBuilderGetRequestConfiguration} from './windowsAutopilotDeviceIdentityItemRequestBuilderGetRequestConfiguration';
import {WindowsAutopilotDeviceIdentityItemRequestBuilderPatchRequestConfiguration} from './windowsAutopilotDeviceIdentityItemRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the windowsAutopilotDeviceIdentities property of the microsoft.graph.deviceManagement entity.
 */
export class WindowsAutopilotDeviceIdentityItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to call the assignUserToDevice method.
     */
    public get assignUserToDevice(): AssignUserToDeviceRequestBuilder {
        return new AssignUserToDeviceRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the unassignUserFromDevice method.
     */
    public get unassignUserFromDevice(): UnassignUserFromDeviceRequestBuilder {
        return new UnassignUserFromDeviceRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the updateDeviceProperties method.
     */
    public get updateDeviceProperties(): UpdateDevicePropertiesRequestBuilder {
        return new UpdateDevicePropertiesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new WindowsAutopilotDeviceIdentityItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property windowsAutopilotDeviceIdentities for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: WindowsAutopilotDeviceIdentityItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
        const requestInfo = this.toDeleteRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendNoResponseContentAsync(requestInfo, errorMapping);
    };
    /**
     * The Windows autopilot device identities contained collection.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WindowsAutopilotDeviceIdentity
     */
    public get(requestConfiguration?: WindowsAutopilotDeviceIdentityItemRequestBuilderGetRequestConfiguration | undefined) : Promise<WindowsAutopilotDeviceIdentity | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<WindowsAutopilotDeviceIdentity>(requestInfo, createWindowsAutopilotDeviceIdentityFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property windowsAutopilotDeviceIdentities in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WindowsAutopilotDeviceIdentity
     */
    public patch(body: WindowsAutopilotDeviceIdentity | undefined, requestConfiguration?: WindowsAutopilotDeviceIdentityItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<WindowsAutopilotDeviceIdentity | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<WindowsAutopilotDeviceIdentity>(requestInfo, createWindowsAutopilotDeviceIdentityFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property windowsAutopilotDeviceIdentities for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: WindowsAutopilotDeviceIdentityItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * The Windows autopilot device identities contained collection.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: WindowsAutopilotDeviceIdentityItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property windowsAutopilotDeviceIdentities in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: WindowsAutopilotDeviceIdentity | undefined, requestConfiguration?: WindowsAutopilotDeviceIdentityItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeWindowsAutopilotDeviceIdentity);
        return requestInfo;
    };
}
