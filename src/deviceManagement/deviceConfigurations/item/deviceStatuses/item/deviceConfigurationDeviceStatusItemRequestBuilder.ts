import {createDeviceConfigurationDeviceStatusFromDiscriminatorValue} from '../../../../../models/createDeviceConfigurationDeviceStatusFromDiscriminatorValue';
import {deserializeIntoDeviceConfigurationDeviceStatus} from '../../../../../models/deserializeIntoDeviceConfigurationDeviceStatus';
import {DeviceConfigurationDeviceStatus} from '../../../../../models/deviceConfigurationDeviceStatus';
import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../models/oDataErrors/serializeODataError';
import {serializeDeviceConfigurationDeviceStatus} from '../../../../../models/serializeDeviceConfigurationDeviceStatus';
import {DeviceConfigurationDeviceStatusItemRequestBuilderDeleteRequestConfiguration} from './deviceConfigurationDeviceStatusItemRequestBuilderDeleteRequestConfiguration';
import {DeviceConfigurationDeviceStatusItemRequestBuilderGetRequestConfiguration} from './deviceConfigurationDeviceStatusItemRequestBuilderGetRequestConfiguration';
import {DeviceConfigurationDeviceStatusItemRequestBuilderPatchRequestConfiguration} from './deviceConfigurationDeviceStatusItemRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the deviceStatuses property of the microsoft.graph.deviceConfiguration entity.
 */
export class DeviceConfigurationDeviceStatusItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new DeviceConfigurationDeviceStatusItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/deviceConfigurations/{deviceConfiguration%2Did}/deviceStatuses/{deviceConfigurationDeviceStatus%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property deviceStatuses for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: DeviceConfigurationDeviceStatusItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Device configuration installation status by device.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DeviceConfigurationDeviceStatus
     */
    public get(requestConfiguration?: DeviceConfigurationDeviceStatusItemRequestBuilderGetRequestConfiguration | undefined) : Promise<DeviceConfigurationDeviceStatus | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DeviceConfigurationDeviceStatus>(requestInfo, createDeviceConfigurationDeviceStatusFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property deviceStatuses in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DeviceConfigurationDeviceStatus
     */
    public patch(body: DeviceConfigurationDeviceStatus | undefined, requestConfiguration?: DeviceConfigurationDeviceStatusItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<DeviceConfigurationDeviceStatus | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DeviceConfigurationDeviceStatus>(requestInfo, createDeviceConfigurationDeviceStatusFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property deviceStatuses for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: DeviceConfigurationDeviceStatusItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Device configuration installation status by device.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: DeviceConfigurationDeviceStatusItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property deviceStatuses in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: DeviceConfigurationDeviceStatus | undefined, requestConfiguration?: DeviceConfigurationDeviceStatusItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeDeviceConfigurationDeviceStatus);
        return requestInfo;
    };
}
