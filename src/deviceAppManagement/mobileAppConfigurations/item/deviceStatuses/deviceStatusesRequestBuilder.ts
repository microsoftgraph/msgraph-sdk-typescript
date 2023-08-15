import {ManagedDeviceMobileAppConfigurationDeviceStatusCollectionResponse} from '../../../../models/';
import {createManagedDeviceMobileAppConfigurationDeviceStatusCollectionResponseFromDiscriminatorValue} from '../../../../models/createManagedDeviceMobileAppConfigurationDeviceStatusCollectionResponseFromDiscriminatorValue';
import {createManagedDeviceMobileAppConfigurationDeviceStatusFromDiscriminatorValue} from '../../../../models/createManagedDeviceMobileAppConfigurationDeviceStatusFromDiscriminatorValue';
import {deserializeIntoManagedDeviceMobileAppConfigurationDeviceStatus} from '../../../../models/deserializeIntoManagedDeviceMobileAppConfigurationDeviceStatus';
import type {ManagedDeviceMobileAppConfigurationDeviceStatus} from '../../../../models/managedDeviceMobileAppConfigurationDeviceStatus';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {serializeManagedDeviceMobileAppConfigurationDeviceStatus} from '../../../../models/serializeManagedDeviceMobileAppConfigurationDeviceStatus';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {DeviceStatusesRequestBuilderGetRequestConfiguration} from './deviceStatusesRequestBuilderGetRequestConfiguration';
import {DeviceStatusesRequestBuilderPostRequestConfiguration} from './deviceStatusesRequestBuilderPostRequestConfiguration';
import {ManagedDeviceMobileAppConfigurationDeviceStatusItemRequestBuilder} from './item/managedDeviceMobileAppConfigurationDeviceStatusItemRequestBuilder';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the deviceStatuses property of the microsoft.graph.managedDeviceMobileAppConfiguration entity.
 */
export class DeviceStatusesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the deviceStatuses property of the microsoft.graph.managedDeviceMobileAppConfiguration entity.
     * @param managedDeviceMobileAppConfigurationDeviceStatusId The unique identifier of managedDeviceMobileAppConfigurationDeviceStatus
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
     * List properties and relationships of the managedDeviceMobileAppConfigurationDeviceStatus objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ManagedDeviceMobileAppConfigurationDeviceStatusCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/intune-apps-manageddevicemobileappconfigurationdevicestatus-list?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: DeviceStatusesRequestBuilderGetRequestConfiguration | undefined) : Promise<ManagedDeviceMobileAppConfigurationDeviceStatusCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ManagedDeviceMobileAppConfigurationDeviceStatusCollectionResponse>(requestInfo, createManagedDeviceMobileAppConfigurationDeviceStatusCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new managedDeviceMobileAppConfigurationDeviceStatus object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ManagedDeviceMobileAppConfigurationDeviceStatus
     * @see {@link https://learn.microsoft.com/graph/api/intune-apps-manageddevicemobileappconfigurationdevicestatus-create?view=graph-rest-1.0|Find more info here}
     */
    public post(body: ManagedDeviceMobileAppConfigurationDeviceStatus, requestConfiguration?: DeviceStatusesRequestBuilderPostRequestConfiguration | undefined) : Promise<ManagedDeviceMobileAppConfigurationDeviceStatus | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ManagedDeviceMobileAppConfigurationDeviceStatus>(requestInfo, createManagedDeviceMobileAppConfigurationDeviceStatusFromDiscriminatorValue, errorMapping);
    };
    /**
     * List properties and relationships of the managedDeviceMobileAppConfigurationDeviceStatus objects.
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
     * Create a new managedDeviceMobileAppConfigurationDeviceStatus object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: ManagedDeviceMobileAppConfigurationDeviceStatus, requestConfiguration?: DeviceStatusesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeManagedDeviceMobileAppConfigurationDeviceStatus);
        return requestInfo;
    };
}
