import { createDeviceComplianceDeviceStatusFromDiscriminatorValue } from '../../../../../models/createDeviceComplianceDeviceStatusFromDiscriminatorValue';
import { deserializeIntoDeviceComplianceDeviceStatus } from '../../../../../models/deserializeIntoDeviceComplianceDeviceStatus';
import { type DeviceComplianceDeviceStatus } from '../../../../../models/deviceComplianceDeviceStatus';
import { type ODataError } from '../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../../models/oDataErrors/serializeODataError';
import { serializeDeviceComplianceDeviceStatus } from '../../../../../models/serializeDeviceComplianceDeviceStatus';
import { type DeviceComplianceDeviceStatusItemRequestBuilderDeleteRequestConfiguration } from './deviceComplianceDeviceStatusItemRequestBuilderDeleteRequestConfiguration';
import { type DeviceComplianceDeviceStatusItemRequestBuilderGetRequestConfiguration } from './deviceComplianceDeviceStatusItemRequestBuilderGetRequestConfiguration';
import { type DeviceComplianceDeviceStatusItemRequestBuilderPatchRequestConfiguration } from './deviceComplianceDeviceStatusItemRequestBuilderPatchRequestConfiguration';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the deviceStatuses property of the microsoft.graph.deviceCompliancePolicy entity.
 */
export class DeviceComplianceDeviceStatusItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new DeviceComplianceDeviceStatusItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy%2Did}/deviceStatuses/{deviceComplianceDeviceStatus%2Did}{?%24select,%24expand}");
    };
    /**
     * Deletes a deviceComplianceDeviceStatus.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/intune-deviceconfig-devicecompliancedevicestatus-delete?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: DeviceComplianceDeviceStatusItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Read properties and relationships of the deviceComplianceDeviceStatus object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DeviceComplianceDeviceStatus
     * @see {@link https://learn.microsoft.com/graph/api/intune-deviceconfig-devicecompliancedevicestatus-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: DeviceComplianceDeviceStatusItemRequestBuilderGetRequestConfiguration | undefined) : Promise<DeviceComplianceDeviceStatus | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DeviceComplianceDeviceStatus>(requestInfo, createDeviceComplianceDeviceStatusFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the properties of a deviceComplianceDeviceStatus object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DeviceComplianceDeviceStatus
     * @see {@link https://learn.microsoft.com/graph/api/intune-deviceconfig-devicecompliancedevicestatus-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: DeviceComplianceDeviceStatus, requestConfiguration?: DeviceComplianceDeviceStatusItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<DeviceComplianceDeviceStatus | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DeviceComplianceDeviceStatus>(requestInfo, createDeviceComplianceDeviceStatusFromDiscriminatorValue, errorMapping);
    };
    /**
     * Deletes a deviceComplianceDeviceStatus.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: DeviceComplianceDeviceStatusItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Read properties and relationships of the deviceComplianceDeviceStatus object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: DeviceComplianceDeviceStatusItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the properties of a deviceComplianceDeviceStatus object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: DeviceComplianceDeviceStatus, requestConfiguration?: DeviceComplianceDeviceStatusItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeDeviceComplianceDeviceStatus);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a DeviceComplianceDeviceStatusItemRequestBuilder
     */
    public withUrl(rawUrl: string) : DeviceComplianceDeviceStatusItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new DeviceComplianceDeviceStatusItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
