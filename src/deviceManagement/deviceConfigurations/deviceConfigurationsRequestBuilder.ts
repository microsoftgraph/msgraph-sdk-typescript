import { type DeviceConfigurationCollectionResponse } from '../../models/';
import { createDeviceConfigurationCollectionResponseFromDiscriminatorValue } from '../../models/createDeviceConfigurationCollectionResponseFromDiscriminatorValue';
import { createDeviceConfigurationFromDiscriminatorValue } from '../../models/createDeviceConfigurationFromDiscriminatorValue';
import { deserializeIntoDeviceConfiguration } from '../../models/deserializeIntoDeviceConfiguration';
import { type DeviceConfiguration } from '../../models/deviceConfiguration';
import { type ODataError } from '../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../models/oDataErrors/serializeODataError';
import { serializeDeviceConfiguration } from '../../models/serializeDeviceConfiguration';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { type DeviceConfigurationsRequestBuilderGetRequestConfiguration } from './deviceConfigurationsRequestBuilderGetRequestConfiguration';
import { type DeviceConfigurationsRequestBuilderPostRequestConfiguration } from './deviceConfigurationsRequestBuilderPostRequestConfiguration';
import { DeviceConfigurationItemRequestBuilder } from './item/deviceConfigurationItemRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the deviceConfigurations property of the microsoft.graph.deviceManagement entity.
 */
export class DeviceConfigurationsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the deviceConfigurations property of the microsoft.graph.deviceManagement entity.
     * @param deviceConfigurationId The unique identifier of deviceConfiguration
     * @returns a DeviceConfigurationItemRequestBuilder
     */
    public byDeviceConfigurationId(deviceConfigurationId: string) : DeviceConfigurationItemRequestBuilder {
        if(!deviceConfigurationId) throw new Error("deviceConfigurationId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["deviceConfiguration%2Did"] = deviceConfigurationId
        return new DeviceConfigurationItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new DeviceConfigurationsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/deviceConfigurations{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * List properties and relationships of the windows10EndpointProtectionConfiguration objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DeviceConfigurationCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/intune-deviceconfig-windows10endpointprotectionconfiguration-list?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: DeviceConfigurationsRequestBuilderGetRequestConfiguration | undefined) : Promise<DeviceConfigurationCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DeviceConfigurationCollectionResponse>(requestInfo, createDeviceConfigurationCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new macOSCustomConfiguration object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DeviceConfiguration
     * @see {@link https://learn.microsoft.com/graph/api/intune-deviceconfig-macoscustomconfiguration-create?view=graph-rest-1.0|Find more info here}
     */
    public post(body: DeviceConfiguration, requestConfiguration?: DeviceConfigurationsRequestBuilderPostRequestConfiguration | undefined) : Promise<DeviceConfiguration | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DeviceConfiguration>(requestInfo, createDeviceConfigurationFromDiscriminatorValue, errorMapping);
    };
    /**
     * List properties and relationships of the windows10EndpointProtectionConfiguration objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: DeviceConfigurationsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new macOSCustomConfiguration object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: DeviceConfiguration, requestConfiguration?: DeviceConfigurationsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeDeviceConfiguration);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a deviceConfigurationsRequestBuilder
     */
    public withUrl(rawUrl: string) : DeviceConfigurationsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new DeviceConfigurationsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
