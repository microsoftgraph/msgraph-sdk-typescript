import {DeviceEnrollmentConfigurationCollectionResponse} from '../../models/';
import {createDeviceEnrollmentConfigurationCollectionResponseFromDiscriminatorValue} from '../../models/createDeviceEnrollmentConfigurationCollectionResponseFromDiscriminatorValue';
import {createDeviceEnrollmentConfigurationFromDiscriminatorValue} from '../../models/createDeviceEnrollmentConfigurationFromDiscriminatorValue';
import {deserializeIntoDeviceEnrollmentConfiguration} from '../../models/deserializeIntoDeviceEnrollmentConfiguration';
import {DeviceEnrollmentConfiguration} from '../../models/deviceEnrollmentConfiguration';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import {serializeDeviceEnrollmentConfiguration} from '../../models/serializeDeviceEnrollmentConfiguration';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {DeviceEnrollmentConfigurationsRequestBuilderGetRequestConfiguration} from './deviceEnrollmentConfigurationsRequestBuilderGetRequestConfiguration';
import {DeviceEnrollmentConfigurationsRequestBuilderPostRequestConfiguration} from './deviceEnrollmentConfigurationsRequestBuilderPostRequestConfiguration';
import {DeviceEnrollmentConfigurationItemRequestBuilder} from './item/deviceEnrollmentConfigurationItemRequestBuilder';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the deviceEnrollmentConfigurations property of the microsoft.graph.deviceManagement entity.
 */
export class DeviceEnrollmentConfigurationsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the deviceEnrollmentConfigurations property of the microsoft.graph.deviceManagement entity.
     * @param deviceEnrollmentConfigurationId Unique identifier of the item
     * @returns a DeviceEnrollmentConfigurationItemRequestBuilder
     */
    public byDeviceEnrollmentConfigurationId(deviceEnrollmentConfigurationId: string) : DeviceEnrollmentConfigurationItemRequestBuilder {
        if(!deviceEnrollmentConfigurationId) throw new Error("deviceEnrollmentConfigurationId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["deviceEnrollmentConfiguration%2Did"] = deviceEnrollmentConfigurationId
        return new DeviceEnrollmentConfigurationItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new DeviceEnrollmentConfigurationsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/deviceEnrollmentConfigurations{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * The list of device enrollment configurations
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DeviceEnrollmentConfigurationCollectionResponse
     */
    public get(requestConfiguration?: DeviceEnrollmentConfigurationsRequestBuilderGetRequestConfiguration | undefined) : Promise<DeviceEnrollmentConfigurationCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DeviceEnrollmentConfigurationCollectionResponse>(requestInfo, createDeviceEnrollmentConfigurationCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to deviceEnrollmentConfigurations for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DeviceEnrollmentConfiguration
     */
    public post(body: DeviceEnrollmentConfiguration | undefined, requestConfiguration?: DeviceEnrollmentConfigurationsRequestBuilderPostRequestConfiguration | undefined) : Promise<DeviceEnrollmentConfiguration | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DeviceEnrollmentConfiguration>(requestInfo, createDeviceEnrollmentConfigurationFromDiscriminatorValue, errorMapping);
    };
    /**
     * The list of device enrollment configurations
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: DeviceEnrollmentConfigurationsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to deviceEnrollmentConfigurations for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: DeviceEnrollmentConfiguration | undefined, requestConfiguration?: DeviceEnrollmentConfigurationsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeDeviceEnrollmentConfiguration);
        return requestInfo;
    };
}
