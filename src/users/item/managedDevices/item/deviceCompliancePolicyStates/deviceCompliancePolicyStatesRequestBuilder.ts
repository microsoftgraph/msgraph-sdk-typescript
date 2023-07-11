import {DeviceCompliancePolicyStateCollectionResponse} from '../../../../../models/';
import {createDeviceCompliancePolicyStateCollectionResponseFromDiscriminatorValue} from '../../../../../models/createDeviceCompliancePolicyStateCollectionResponseFromDiscriminatorValue';
import {createDeviceCompliancePolicyStateFromDiscriminatorValue} from '../../../../../models/createDeviceCompliancePolicyStateFromDiscriminatorValue';
import {deserializeIntoDeviceCompliancePolicyState} from '../../../../../models/deserializeIntoDeviceCompliancePolicyState';
import {DeviceCompliancePolicyState} from '../../../../../models/deviceCompliancePolicyState';
import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../models/oDataErrors/serializeODataError';
import {serializeDeviceCompliancePolicyState} from '../../../../../models/serializeDeviceCompliancePolicyState';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {DeviceCompliancePolicyStatesRequestBuilderGetRequestConfiguration} from './deviceCompliancePolicyStatesRequestBuilderGetRequestConfiguration';
import {DeviceCompliancePolicyStatesRequestBuilderPostRequestConfiguration} from './deviceCompliancePolicyStatesRequestBuilderPostRequestConfiguration';
import {DeviceCompliancePolicyStateItemRequestBuilder} from './item/deviceCompliancePolicyStateItemRequestBuilder';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the deviceCompliancePolicyStates property of the microsoft.graph.managedDevice entity.
 */
export class DeviceCompliancePolicyStatesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the deviceCompliancePolicyStates property of the microsoft.graph.managedDevice entity.
     * @param deviceCompliancePolicyStateId Unique identifier of the item
     * @returns a DeviceCompliancePolicyStateItemRequestBuilder
     */
    public byDeviceCompliancePolicyStateId(deviceCompliancePolicyStateId: string) : DeviceCompliancePolicyStateItemRequestBuilder {
        if(!deviceCompliancePolicyStateId) throw new Error("deviceCompliancePolicyStateId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["deviceCompliancePolicyState%2Did"] = deviceCompliancePolicyStateId
        return new DeviceCompliancePolicyStateItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new DeviceCompliancePolicyStatesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/users/{user%2Did}/managedDevices/{managedDevice%2Did}/deviceCompliancePolicyStates{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Device compliance policy states for this device.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DeviceCompliancePolicyStateCollectionResponse
     */
    public get(requestConfiguration?: DeviceCompliancePolicyStatesRequestBuilderGetRequestConfiguration | undefined) : Promise<DeviceCompliancePolicyStateCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DeviceCompliancePolicyStateCollectionResponse>(requestInfo, createDeviceCompliancePolicyStateCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to deviceCompliancePolicyStates for users
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DeviceCompliancePolicyState
     */
    public post(body: DeviceCompliancePolicyState | undefined, requestConfiguration?: DeviceCompliancePolicyStatesRequestBuilderPostRequestConfiguration | undefined) : Promise<DeviceCompliancePolicyState | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DeviceCompliancePolicyState>(requestInfo, createDeviceCompliancePolicyStateFromDiscriminatorValue, errorMapping);
    };
    /**
     * Device compliance policy states for this device.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: DeviceCompliancePolicyStatesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to deviceCompliancePolicyStates for users
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: DeviceCompliancePolicyState | undefined, requestConfiguration?: DeviceCompliancePolicyStatesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeDeviceCompliancePolicyState);
        return requestInfo;
    };
}
