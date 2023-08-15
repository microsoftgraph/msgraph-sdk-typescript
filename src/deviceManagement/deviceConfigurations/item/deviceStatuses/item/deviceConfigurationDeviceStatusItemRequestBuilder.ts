import {createDeviceConfigurationDeviceStatusFromDiscriminatorValue} from '../../../../../models/createDeviceConfigurationDeviceStatusFromDiscriminatorValue';
import {deserializeIntoDeviceConfigurationDeviceStatus} from '../../../../../models/deserializeIntoDeviceConfigurationDeviceStatus';
import type {DeviceConfigurationDeviceStatus} from '../../../../../models/deviceConfigurationDeviceStatus';
import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../models/oDataErrors/serializeODataError';
import {serializeDeviceConfigurationDeviceStatus} from '../../../../../models/serializeDeviceConfigurationDeviceStatus';
import {DeviceConfigurationDeviceStatusItemRequestBuilderDeleteRequestConfiguration} from './deviceConfigurationDeviceStatusItemRequestBuilderDeleteRequestConfiguration';
import {DeviceConfigurationDeviceStatusItemRequestBuilderGetRequestConfiguration} from './deviceConfigurationDeviceStatusItemRequestBuilderGetRequestConfiguration';
import {DeviceConfigurationDeviceStatusItemRequestBuilderPatchRequestConfiguration} from './deviceConfigurationDeviceStatusItemRequestBuilderPatchRequestConfiguration';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';

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
     * Deletes a deviceConfigurationDeviceStatus.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/intune-deviceconfig-deviceconfigurationdevicestatus-delete?view=graph-rest-1.0|Find more info here}
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
     * Read properties and relationships of the deviceConfigurationDeviceStatus object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DeviceConfigurationDeviceStatus
     * @see {@link https://learn.microsoft.com/graph/api/intune-deviceconfig-deviceconfigurationdevicestatus-get?view=graph-rest-1.0|Find more info here}
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
     * Update the properties of a deviceConfigurationDeviceStatus object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DeviceConfigurationDeviceStatus
     * @see {@link https://learn.microsoft.com/graph/api/intune-deviceconfig-deviceconfigurationdevicestatus-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: DeviceConfigurationDeviceStatus, requestConfiguration?: DeviceConfigurationDeviceStatusItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<DeviceConfigurationDeviceStatus | undefined> {
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
     * Deletes a deviceConfigurationDeviceStatus.
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
     * Read properties and relationships of the deviceConfigurationDeviceStatus object.
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
     * Update the properties of a deviceConfigurationDeviceStatus object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: DeviceConfigurationDeviceStatus, requestConfiguration?: DeviceConfigurationDeviceStatusItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeDeviceConfigurationDeviceStatus);
        return requestInfo;
    };
}
