import {DeviceComplianceSettingStateCollectionResponse} from '../../../../models/';
import {createDeviceComplianceSettingStateCollectionResponseFromDiscriminatorValue} from '../../../../models/createDeviceComplianceSettingStateCollectionResponseFromDiscriminatorValue';
import {createDeviceComplianceSettingStateFromDiscriminatorValue} from '../../../../models/createDeviceComplianceSettingStateFromDiscriminatorValue';
import {deserializeIntoDeviceComplianceSettingState} from '../../../../models/deserializeIntoDeviceComplianceSettingState';
import {DeviceComplianceSettingState} from '../../../../models/deviceComplianceSettingState';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {serializeDeviceComplianceSettingState} from '../../../../models/serializeDeviceComplianceSettingState';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {DeviceComplianceSettingStatesRequestBuilderGetRequestConfiguration} from './deviceComplianceSettingStatesRequestBuilderGetRequestConfiguration';
import {DeviceComplianceSettingStatesRequestBuilderPostRequestConfiguration} from './deviceComplianceSettingStatesRequestBuilderPostRequestConfiguration';
import {DeviceComplianceSettingStateItemRequestBuilder} from './item/deviceComplianceSettingStateItemRequestBuilder';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the deviceComplianceSettingStates property of the microsoft.graph.deviceCompliancePolicySettingStateSummary entity.
 */
export class DeviceComplianceSettingStatesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the deviceComplianceSettingStates property of the microsoft.graph.deviceCompliancePolicySettingStateSummary entity.
     * @param deviceComplianceSettingStateId Unique identifier of the item
     * @returns a DeviceComplianceSettingStateItemRequestBuilder
     */
    public byDeviceComplianceSettingStateId(deviceComplianceSettingStateId: string) : DeviceComplianceSettingStateItemRequestBuilder {
        if(!deviceComplianceSettingStateId) throw new Error("deviceComplianceSettingStateId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["deviceComplianceSettingState%2Did"] = deviceComplianceSettingStateId
        return new DeviceComplianceSettingStateItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new DeviceComplianceSettingStatesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary%2Did}/deviceComplianceSettingStates{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * List properties and relationships of the deviceComplianceSettingState objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of DeviceComplianceSettingStateCollectionResponse
     * @see {@link https://docs.microsoft.com/graph/api/intune-deviceconfig-devicecompliancesettingstate-list?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: DeviceComplianceSettingStatesRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<DeviceComplianceSettingStateCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<DeviceComplianceSettingStateCollectionResponse>(requestInfo, createDeviceComplianceSettingStateCollectionResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create a new deviceComplianceSettingState object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of DeviceComplianceSettingState
     * @see {@link https://docs.microsoft.com/graph/api/intune-deviceconfig-devicecompliancesettingstate-create?view=graph-rest-1.0|Find more info here}
     */
    public post(body: DeviceComplianceSettingState | undefined, requestConfiguration?: DeviceComplianceSettingStatesRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<DeviceComplianceSettingState | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<DeviceComplianceSettingState>(requestInfo, createDeviceComplianceSettingStateFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * List properties and relationships of the deviceComplianceSettingState objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: DeviceComplianceSettingStatesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new deviceComplianceSettingState object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: DeviceComplianceSettingState | undefined, requestConfiguration?: DeviceComplianceSettingStatesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeDeviceComplianceSettingState);
        return requestInfo;
    };
}
