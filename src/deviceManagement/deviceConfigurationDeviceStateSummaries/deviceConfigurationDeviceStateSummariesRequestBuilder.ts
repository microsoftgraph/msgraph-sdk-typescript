import { createDeviceConfigurationDeviceStateSummaryFromDiscriminatorValue } from '../../models/createDeviceConfigurationDeviceStateSummaryFromDiscriminatorValue';
import { deserializeIntoDeviceConfigurationDeviceStateSummary } from '../../models/deserializeIntoDeviceConfigurationDeviceStateSummary';
import { type DeviceConfigurationDeviceStateSummary } from '../../models/deviceConfigurationDeviceStateSummary';
import { type ODataError } from '../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../models/oDataErrors/serializeODataError';
import { serializeDeviceConfigurationDeviceStateSummary } from '../../models/serializeDeviceConfigurationDeviceStateSummary';
import { type DeviceConfigurationDeviceStateSummariesRequestBuilderDeleteRequestConfiguration } from './deviceConfigurationDeviceStateSummariesRequestBuilderDeleteRequestConfiguration';
import { type DeviceConfigurationDeviceStateSummariesRequestBuilderGetRequestConfiguration } from './deviceConfigurationDeviceStateSummariesRequestBuilderGetRequestConfiguration';
import { type DeviceConfigurationDeviceStateSummariesRequestBuilderPatchRequestConfiguration } from './deviceConfigurationDeviceStateSummariesRequestBuilderPatchRequestConfiguration';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the deviceConfigurationDeviceStateSummaries property of the microsoft.graph.deviceManagement entity.
 */
export class DeviceConfigurationDeviceStateSummariesRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new DeviceConfigurationDeviceStateSummariesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/deviceConfigurationDeviceStateSummaries{?%24select,%24expand}");
    };
    /**
     * Delete navigation property deviceConfigurationDeviceStateSummaries for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: DeviceConfigurationDeviceStateSummariesRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Read properties and relationships of the deviceConfigurationDeviceStateSummary object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DeviceConfigurationDeviceStateSummary
     * @see {@link https://learn.microsoft.com/graph/api/intune-deviceconfig-deviceconfigurationdevicestatesummary-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: DeviceConfigurationDeviceStateSummariesRequestBuilderGetRequestConfiguration | undefined) : Promise<DeviceConfigurationDeviceStateSummary | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DeviceConfigurationDeviceStateSummary>(requestInfo, createDeviceConfigurationDeviceStateSummaryFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the properties of a deviceConfigurationDeviceStateSummary object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DeviceConfigurationDeviceStateSummary
     * @see {@link https://learn.microsoft.com/graph/api/intune-deviceconfig-deviceconfigurationdevicestatesummary-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: DeviceConfigurationDeviceStateSummary, requestConfiguration?: DeviceConfigurationDeviceStateSummariesRequestBuilderPatchRequestConfiguration | undefined) : Promise<DeviceConfigurationDeviceStateSummary | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DeviceConfigurationDeviceStateSummary>(requestInfo, createDeviceConfigurationDeviceStateSummaryFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property deviceConfigurationDeviceStateSummaries for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: DeviceConfigurationDeviceStateSummariesRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Read properties and relationships of the deviceConfigurationDeviceStateSummary object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: DeviceConfigurationDeviceStateSummariesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the properties of a deviceConfigurationDeviceStateSummary object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: DeviceConfigurationDeviceStateSummary, requestConfiguration?: DeviceConfigurationDeviceStateSummariesRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeDeviceConfigurationDeviceStateSummary);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a deviceConfigurationDeviceStateSummariesRequestBuilder
     */
    public withUrl(rawUrl: string) : DeviceConfigurationDeviceStateSummariesRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new DeviceConfigurationDeviceStateSummariesRequestBuilder(rawUrl, this.requestAdapter);
    };
}
