import { createDeviceConfigurationStateFromDiscriminatorValue } from '../../../../../models/createDeviceConfigurationStateFromDiscriminatorValue';
import { deserializeIntoDeviceConfigurationState } from '../../../../../models/deserializeIntoDeviceConfigurationState';
import { type DeviceConfigurationState } from '../../../../../models/deviceConfigurationState';
import { type ODataError } from '../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../../models/oDataErrors/serializeODataError';
import { serializeDeviceConfigurationState } from '../../../../../models/serializeDeviceConfigurationState';
import { type DeviceConfigurationStateItemRequestBuilderDeleteRequestConfiguration } from './deviceConfigurationStateItemRequestBuilderDeleteRequestConfiguration';
import { type DeviceConfigurationStateItemRequestBuilderGetRequestConfiguration } from './deviceConfigurationStateItemRequestBuilderGetRequestConfiguration';
import { type DeviceConfigurationStateItemRequestBuilderPatchRequestConfiguration } from './deviceConfigurationStateItemRequestBuilderPatchRequestConfiguration';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the deviceConfigurationStates property of the microsoft.graph.managedDevice entity.
 */
export class DeviceConfigurationStateItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new DeviceConfigurationStateItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/me/managedDevices/{managedDevice%2Did}/deviceConfigurationStates/{deviceConfigurationState%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property deviceConfigurationStates for me
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: DeviceConfigurationStateItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Device configuration states for this device.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DeviceConfigurationState
     */
    public get(requestConfiguration?: DeviceConfigurationStateItemRequestBuilderGetRequestConfiguration | undefined) : Promise<DeviceConfigurationState | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DeviceConfigurationState>(requestInfo, createDeviceConfigurationStateFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property deviceConfigurationStates in me
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DeviceConfigurationState
     */
    public patch(body: DeviceConfigurationState, requestConfiguration?: DeviceConfigurationStateItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<DeviceConfigurationState | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DeviceConfigurationState>(requestInfo, createDeviceConfigurationStateFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property deviceConfigurationStates for me
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: DeviceConfigurationStateItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Device configuration states for this device.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: DeviceConfigurationStateItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property deviceConfigurationStates in me
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: DeviceConfigurationState, requestConfiguration?: DeviceConfigurationStateItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeDeviceConfigurationState);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a DeviceConfigurationStateItemRequestBuilder
     */
    public withUrl(rawUrl: string) : DeviceConfigurationStateItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new DeviceConfigurationStateItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
