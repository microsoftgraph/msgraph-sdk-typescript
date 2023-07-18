import {createDeviceFromDiscriminatorValue} from '../models/createDeviceFromDiscriminatorValue';
import {deserializeIntoDevice} from '../models/deserializeIntoDevice';
import {Device} from '../models/device';
import {ODataError} from '../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../models/oDataErrors/serializeODataError';
import {serializeDevice} from '../models/serializeDevice';
import {DevicesWithDeviceIdRequestBuilderDeleteRequestConfiguration} from './devicesWithDeviceIdRequestBuilderDeleteRequestConfiguration';
import {DevicesWithDeviceIdRequestBuilderGetRequestConfiguration} from './devicesWithDeviceIdRequestBuilderGetRequestConfiguration';
import {DevicesWithDeviceIdRequestBuilderPatchRequestConfiguration} from './devicesWithDeviceIdRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the collection of device entities.
 */
export class DevicesWithDeviceIdRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new DevicesWithDeviceIdRequestBuilder and sets the default values.
     * @param deviceId Alternate key of device
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter, deviceId?: string | undefined) {
        super(pathParameters, requestAdapter, "{+baseurl}/devices(deviceId='{deviceId}'){?%24select,%24expand}");
        this.pathParameters["deviceId"] = deviceId
    };
    /**
     * Delete a registered device.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://docs.microsoft.com/graph/api/device-delete?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: DevicesWithDeviceIdRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Get the properties and relationships of a device object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Device
     * @see {@link https://docs.microsoft.com/graph/api/device-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: DevicesWithDeviceIdRequestBuilderGetRequestConfiguration | undefined) : Promise<Device | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<Device>(requestInfo, createDeviceFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the properties of a registered device. Only certain properties of a device can be updated through approved Mobile Device Managment (MDM) apps.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Device
     * @see {@link https://docs.microsoft.com/graph/api/device-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: Device | undefined, requestConfiguration?: DevicesWithDeviceIdRequestBuilderPatchRequestConfiguration | undefined) : Promise<Device | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<Device>(requestInfo, createDeviceFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete a registered device.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: DevicesWithDeviceIdRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Get the properties and relationships of a device object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: DevicesWithDeviceIdRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the properties of a registered device. Only certain properties of a device can be updated through approved Mobile Device Managment (MDM) apps.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: Device | undefined, requestConfiguration?: DevicesWithDeviceIdRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeDevice);
        return requestInfo;
    };
}
