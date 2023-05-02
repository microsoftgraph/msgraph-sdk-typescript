import {DeviceConfigurationDeviceStatusCollectionResponse} from '../../../../models/';
import {createDeviceConfigurationDeviceStatusCollectionResponseFromDiscriminatorValue} from '../../../../models/createDeviceConfigurationDeviceStatusCollectionResponseFromDiscriminatorValue';
import {createDeviceConfigurationDeviceStatusFromDiscriminatorValue} from '../../../../models/createDeviceConfigurationDeviceStatusFromDiscriminatorValue';
import {deserializeIntoDeviceConfigurationDeviceStatus} from '../../../../models/deserializeIntoDeviceConfigurationDeviceStatus';
import {DeviceConfigurationDeviceStatus} from '../../../../models/deviceConfigurationDeviceStatus';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {serializeDeviceConfigurationDeviceStatus} from '../../../../models/serializeDeviceConfigurationDeviceStatus';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {DeviceStatusesRequestBuilderGetRequestConfiguration} from './deviceStatusesRequestBuilderGetRequestConfiguration';
import {DeviceStatusesRequestBuilderPostRequestConfiguration} from './deviceStatusesRequestBuilderPostRequestConfiguration';
import {DeviceConfigurationDeviceStatusItemRequestBuilder} from './item/deviceConfigurationDeviceStatusItemRequestBuilder';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the deviceStatuses property of the microsoft.graph.deviceConfiguration entity.
 */
export class DeviceStatusesRequestBuilder extends BaseRequestBuilder {
    /** Provides operations to count the resources in the collection. */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the deviceStatuses property of the microsoft.graph.deviceConfiguration entity.
     * @param deviceConfigurationDeviceStatusId Unique identifier of the item
     * @returns a DeviceConfigurationDeviceStatusItemRequestBuilder
     */
    public byDeviceConfigurationDeviceStatusId(deviceConfigurationDeviceStatusId: string) : DeviceConfigurationDeviceStatusItemRequestBuilder {
        if(!deviceConfigurationDeviceStatusId) throw new Error("deviceConfigurationDeviceStatusId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["deviceConfigurationDeviceStatus%2Did"] = deviceConfigurationDeviceStatusId
        return new DeviceConfigurationDeviceStatusItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new DeviceStatusesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/deviceConfigurations/{deviceConfiguration%2Did}/deviceStatuses{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Device configuration installation status by device.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of DeviceConfigurationDeviceStatusCollectionResponse
     */
    public get(requestConfiguration?: DeviceStatusesRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<DeviceConfigurationDeviceStatusCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<DeviceConfigurationDeviceStatusCollectionResponse>(requestInfo, createDeviceConfigurationDeviceStatusCollectionResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create new navigation property to deviceStatuses for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of DeviceConfigurationDeviceStatus
     */
    public post(body: DeviceConfigurationDeviceStatus | undefined, requestConfiguration?: DeviceStatusesRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<DeviceConfigurationDeviceStatus | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<DeviceConfigurationDeviceStatus>(requestInfo, createDeviceConfigurationDeviceStatusFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Device configuration installation status by device.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: DeviceStatusesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to deviceStatuses for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: DeviceConfigurationDeviceStatus | undefined, requestConfiguration?: DeviceStatusesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.POST;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeDeviceConfigurationDeviceStatus);
        return requestInfo;
    };
}
