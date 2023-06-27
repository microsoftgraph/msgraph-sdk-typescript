import {DeviceInstallStateCollectionResponse} from '../../../../models/';
import {createDeviceInstallStateCollectionResponseFromDiscriminatorValue} from '../../../../models/createDeviceInstallStateCollectionResponseFromDiscriminatorValue';
import {createDeviceInstallStateFromDiscriminatorValue} from '../../../../models/createDeviceInstallStateFromDiscriminatorValue';
import {deserializeIntoDeviceInstallState} from '../../../../models/deserializeIntoDeviceInstallState';
import {DeviceInstallState} from '../../../../models/deviceInstallState';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {serializeDeviceInstallState} from '../../../../models/serializeDeviceInstallState';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {DeviceStatesRequestBuilderGetRequestConfiguration} from './deviceStatesRequestBuilderGetRequestConfiguration';
import {DeviceStatesRequestBuilderPostRequestConfiguration} from './deviceStatesRequestBuilderPostRequestConfiguration';
import {DeviceInstallStateItemRequestBuilder} from './item/deviceInstallStateItemRequestBuilder';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the deviceStates property of the microsoft.graph.managedEBook entity.
 */
export class DeviceStatesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the deviceStates property of the microsoft.graph.managedEBook entity.
     * @param deviceInstallStateId Unique identifier of the item
     * @returns a DeviceInstallStateItemRequestBuilder
     */
    public byDeviceInstallStateId(deviceInstallStateId: string) : DeviceInstallStateItemRequestBuilder {
        if(!deviceInstallStateId) throw new Error("deviceInstallStateId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["deviceInstallState%2Did"] = deviceInstallStateId
        return new DeviceInstallStateItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new DeviceStatesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceAppManagement/managedEBooks/{managedEBook%2Did}/deviceStates{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * List properties and relationships of the deviceInstallState objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of DeviceInstallStateCollectionResponse
     * @see {@link https://docs.microsoft.com/graph/api/intune-books-deviceinstallstate-list?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: DeviceStatesRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<DeviceInstallStateCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<DeviceInstallStateCollectionResponse>(requestInfo, createDeviceInstallStateCollectionResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create a new deviceInstallState object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of DeviceInstallState
     * @see {@link https://docs.microsoft.com/graph/api/intune-books-deviceinstallstate-create?view=graph-rest-1.0|Find more info here}
     */
    public post(body: DeviceInstallState | undefined, requestConfiguration?: DeviceStatesRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<DeviceInstallState | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<DeviceInstallState>(requestInfo, createDeviceInstallStateFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * List properties and relationships of the deviceInstallState objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: DeviceStatesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new deviceInstallState object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: DeviceInstallState | undefined, requestConfiguration?: DeviceStatesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeDeviceInstallState);
        return requestInfo;
    };
}
