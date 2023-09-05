import { createWindowsAutopilotDeviceIdentityFromDiscriminatorValue } from '../../../models/createWindowsAutopilotDeviceIdentityFromDiscriminatorValue';
import { deserializeIntoWindowsAutopilotDeviceIdentity } from '../../../models/deserializeIntoWindowsAutopilotDeviceIdentity';
import { type ODataError } from '../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../models/oDataErrors/serializeODataError';
import { serializeWindowsAutopilotDeviceIdentity } from '../../../models/serializeWindowsAutopilotDeviceIdentity';
import { type WindowsAutopilotDeviceIdentity } from '../../../models/windowsAutopilotDeviceIdentity';
import { AssignUserToDeviceRequestBuilder } from './assignUserToDevice/assignUserToDeviceRequestBuilder';
import { UnassignUserFromDeviceRequestBuilder } from './unassignUserFromDevice/unassignUserFromDeviceRequestBuilder';
import { UpdateDevicePropertiesRequestBuilder } from './updateDeviceProperties/updateDevicePropertiesRequestBuilder';
import { type WindowsAutopilotDeviceIdentityItemRequestBuilderDeleteRequestConfiguration } from './windowsAutopilotDeviceIdentityItemRequestBuilderDeleteRequestConfiguration';
import { type WindowsAutopilotDeviceIdentityItemRequestBuilderGetRequestConfiguration } from './windowsAutopilotDeviceIdentityItemRequestBuilderGetRequestConfiguration';
import { type WindowsAutopilotDeviceIdentityItemRequestBuilderPatchRequestConfiguration } from './windowsAutopilotDeviceIdentityItemRequestBuilderPatchRequestConfiguration';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

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
     * Deletes a windowsAutopilotDeviceIdentity.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/intune-enrollment-windowsautopilotdeviceidentity-delete?view=graph-rest-1.0|Find more info here}
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
     * Read properties and relationships of the windowsAutopilotDeviceIdentity object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WindowsAutopilotDeviceIdentity
     * @see {@link https://learn.microsoft.com/graph/api/intune-enrollment-windowsautopilotdeviceidentity-get?view=graph-rest-1.0|Find more info here}
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
    public patch(body: WindowsAutopilotDeviceIdentity, requestConfiguration?: WindowsAutopilotDeviceIdentityItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<WindowsAutopilotDeviceIdentity | undefined> {
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
     * Deletes a windowsAutopilotDeviceIdentity.
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
     * Read properties and relationships of the windowsAutopilotDeviceIdentity object.
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
    public toPatchRequestInformation(body: WindowsAutopilotDeviceIdentity, requestConfiguration?: WindowsAutopilotDeviceIdentityItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeWindowsAutopilotDeviceIdentity);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a WindowsAutopilotDeviceIdentityItemRequestBuilder
     */
    public withUrl(rawUrl: string) : WindowsAutopilotDeviceIdentityItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new WindowsAutopilotDeviceIdentityItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
