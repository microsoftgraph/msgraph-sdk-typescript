import {DeviceConfigurationStateCollectionResponse} from '../../../../models/';
import {createDeviceConfigurationStateCollectionResponseFromDiscriminatorValue} from '../../../../models/createDeviceConfigurationStateCollectionResponseFromDiscriminatorValue';
import {createDeviceConfigurationStateFromDiscriminatorValue} from '../../../../models/createDeviceConfigurationStateFromDiscriminatorValue';
import {deserializeIntoDeviceConfigurationState} from '../../../../models/deserializeIntoDeviceConfigurationState';
import {DeviceConfigurationState} from '../../../../models/deviceConfigurationState';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {serializeDeviceConfigurationState} from '../../../../models/serializeDeviceConfigurationState';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {DeviceConfigurationStatesRequestBuilderGetRequestConfiguration} from './deviceConfigurationStatesRequestBuilderGetRequestConfiguration';
import {DeviceConfigurationStatesRequestBuilderPostRequestConfiguration} from './deviceConfigurationStatesRequestBuilderPostRequestConfiguration';
import {DeviceConfigurationStateItemRequestBuilder} from './item/deviceConfigurationStateItemRequestBuilder';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the deviceConfigurationStates property of the microsoft.graph.managedDevice entity.
 */
export class DeviceConfigurationStatesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the deviceConfigurationStates property of the microsoft.graph.managedDevice entity.
     * @param deviceConfigurationStateId Unique identifier of the item
     * @returns a DeviceConfigurationStateItemRequestBuilder
     */
    public byDeviceConfigurationStateId(deviceConfigurationStateId: string) : DeviceConfigurationStateItemRequestBuilder {
        if(!deviceConfigurationStateId) throw new Error("deviceConfigurationStateId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["deviceConfigurationState%2Did"] = deviceConfigurationStateId
        return new DeviceConfigurationStateItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new DeviceConfigurationStatesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/me/managedDevices/{managedDevice%2Did}/deviceConfigurationStates{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Device configuration states for this device.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DeviceConfigurationStateCollectionResponse
     */
    public get(requestConfiguration?: DeviceConfigurationStatesRequestBuilderGetRequestConfiguration | undefined) : Promise<DeviceConfigurationStateCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DeviceConfigurationStateCollectionResponse>(requestInfo, createDeviceConfigurationStateCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to deviceConfigurationStates for me
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DeviceConfigurationState
     */
    public post(body: DeviceConfigurationState | undefined, requestConfiguration?: DeviceConfigurationStatesRequestBuilderPostRequestConfiguration | undefined) : Promise<DeviceConfigurationState | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DeviceConfigurationState>(requestInfo, createDeviceConfigurationStateFromDiscriminatorValue, errorMapping);
    };
    /**
     * Device configuration states for this device.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: DeviceConfigurationStatesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to deviceConfigurationStates for me
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: DeviceConfigurationState | undefined, requestConfiguration?: DeviceConfigurationStatesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeDeviceConfigurationState);
        return requestInfo;
    };
}
