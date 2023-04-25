import {ManagedDeviceMobileAppConfigurationDeviceStatus, ManagedDeviceMobileAppConfigurationDeviceStatusCollectionResponse} from '../../../../models/';
import {createManagedDeviceMobileAppConfigurationDeviceStatusCollectionResponseFromDiscriminatorValue} from '../../../../models/createManagedDeviceMobileAppConfigurationDeviceStatusCollectionResponseFromDiscriminatorValue';
import {createManagedDeviceMobileAppConfigurationDeviceStatusFromDiscriminatorValue} from '../../../../models/createManagedDeviceMobileAppConfigurationDeviceStatusFromDiscriminatorValue';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {DeviceStatusesRequestBuilderGetRequestConfiguration} from './deviceStatusesRequestBuilderGetRequestConfiguration';
import {DeviceStatusesRequestBuilderPostRequestConfiguration} from './deviceStatusesRequestBuilderPostRequestConfiguration';
import {ManagedDeviceMobileAppConfigurationDeviceStatusItemRequestBuilder} from './item/managedDeviceMobileAppConfigurationDeviceStatusItemRequestBuilder';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the deviceStatuses property of the microsoft.graph.managedDeviceMobileAppConfiguration entity.
 */
export class DeviceStatusesRequestBuilder extends BaseRequestBuilder {
    /** Provides operations to count the resources in the collection. */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the deviceStatuses property of the microsoft.graph.managedDeviceMobileAppConfiguration entity.
     * @param managedDeviceMobileAppConfigurationDeviceStatusId Unique identifier of the item
     * @returns a ManagedDeviceMobileAppConfigurationDeviceStatusItemRequestBuilder
     */
    public byManagedDeviceMobileAppConfigurationDeviceStatusId(managedDeviceMobileAppConfigurationDeviceStatusId: string) : ManagedDeviceMobileAppConfigurationDeviceStatusItemRequestBuilder {
        if(!managedDeviceMobileAppConfigurationDeviceStatusId) throw new Error("managedDeviceMobileAppConfigurationDeviceStatusId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["managedDeviceMobileAppConfigurationDeviceStatus%2Did"] = managedDeviceMobileAppConfigurationDeviceStatusId
        return new ManagedDeviceMobileAppConfigurationDeviceStatusItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new DeviceStatusesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration%2Did}/deviceStatuses{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * List of ManagedDeviceMobileAppConfigurationDeviceStatus.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ManagedDeviceMobileAppConfigurationDeviceStatusCollectionResponse
     */
    public get(requestConfiguration?: DeviceStatusesRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<ManagedDeviceMobileAppConfigurationDeviceStatusCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<ManagedDeviceMobileAppConfigurationDeviceStatusCollectionResponse>(requestInfo, createManagedDeviceMobileAppConfigurationDeviceStatusCollectionResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create new navigation property to deviceStatuses for deviceAppManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ManagedDeviceMobileAppConfigurationDeviceStatus
     */
    public post(body: ManagedDeviceMobileAppConfigurationDeviceStatus | undefined, requestConfiguration?: DeviceStatusesRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<ManagedDeviceMobileAppConfigurationDeviceStatus | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<ManagedDeviceMobileAppConfigurationDeviceStatus>(requestInfo, createManagedDeviceMobileAppConfigurationDeviceStatusFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * List of ManagedDeviceMobileAppConfigurationDeviceStatus.
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
     * Create new navigation property to deviceStatuses for deviceAppManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: ManagedDeviceMobileAppConfigurationDeviceStatus | undefined, requestConfiguration?: DeviceStatusesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        return requestInfo;
    };
}
