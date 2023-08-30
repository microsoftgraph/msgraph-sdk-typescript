import {createDeviceConfigurationDeviceOverviewFromDiscriminatorValue} from '../../../../models/createDeviceConfigurationDeviceOverviewFromDiscriminatorValue';
import {deserializeIntoDeviceConfigurationDeviceOverview} from '../../../../models/deserializeIntoDeviceConfigurationDeviceOverview';
import type {DeviceConfigurationDeviceOverview} from '../../../../models/deviceConfigurationDeviceOverview';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {serializeDeviceConfigurationDeviceOverview} from '../../../../models/serializeDeviceConfigurationDeviceOverview';
import {DeviceStatusOverviewRequestBuilderDeleteRequestConfiguration} from './deviceStatusOverviewRequestBuilderDeleteRequestConfiguration';
import {DeviceStatusOverviewRequestBuilderGetRequestConfiguration} from './deviceStatusOverviewRequestBuilderGetRequestConfiguration';
import {DeviceStatusOverviewRequestBuilderPatchRequestConfiguration} from './deviceStatusOverviewRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the deviceStatusOverview property of the microsoft.graph.deviceConfiguration entity.
 */
export class DeviceStatusOverviewRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new DeviceStatusOverviewRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/deviceConfigurations/{deviceConfiguration%2Did}/deviceStatusOverview{?%24select,%24expand}");
    };
    /**
     * Delete navigation property deviceStatusOverview for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: DeviceStatusOverviewRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Read properties and relationships of the deviceConfigurationDeviceOverview object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DeviceConfigurationDeviceOverview
     * @see {@link https://learn.microsoft.com/graph/api/intune-deviceconfig-deviceconfigurationdeviceoverview-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: DeviceStatusOverviewRequestBuilderGetRequestConfiguration | undefined) : Promise<DeviceConfigurationDeviceOverview | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DeviceConfigurationDeviceOverview>(requestInfo, createDeviceConfigurationDeviceOverviewFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the properties of a deviceConfigurationDeviceOverview object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DeviceConfigurationDeviceOverview
     * @see {@link https://learn.microsoft.com/graph/api/intune-deviceconfig-deviceconfigurationdeviceoverview-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: DeviceConfigurationDeviceOverview, requestConfiguration?: DeviceStatusOverviewRequestBuilderPatchRequestConfiguration | undefined) : Promise<DeviceConfigurationDeviceOverview | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DeviceConfigurationDeviceOverview>(requestInfo, createDeviceConfigurationDeviceOverviewFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property deviceStatusOverview for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: DeviceStatusOverviewRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Read properties and relationships of the deviceConfigurationDeviceOverview object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: DeviceStatusOverviewRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the properties of a deviceConfigurationDeviceOverview object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: DeviceConfigurationDeviceOverview, requestConfiguration?: DeviceStatusOverviewRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeDeviceConfigurationDeviceOverview);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a deviceStatusOverviewRequestBuilder
     */
    public withUrl(rawUrl: string) : DeviceStatusOverviewRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new DeviceStatusOverviewRequestBuilder(rawUrl, this.requestAdapter);
    };
}
