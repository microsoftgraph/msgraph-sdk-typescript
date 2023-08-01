import {createDeviceCompliancePolicyDeviceStateSummaryFromDiscriminatorValue} from '../../models/createDeviceCompliancePolicyDeviceStateSummaryFromDiscriminatorValue';
import {deserializeIntoDeviceCompliancePolicyDeviceStateSummary} from '../../models/deserializeIntoDeviceCompliancePolicyDeviceStateSummary';
import type {DeviceCompliancePolicyDeviceStateSummary} from '../../models/deviceCompliancePolicyDeviceStateSummary';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import {serializeDeviceCompliancePolicyDeviceStateSummary} from '../../models/serializeDeviceCompliancePolicyDeviceStateSummary';
import {DeviceCompliancePolicyDeviceStateSummaryRequestBuilderDeleteRequestConfiguration} from './deviceCompliancePolicyDeviceStateSummaryRequestBuilderDeleteRequestConfiguration';
import {DeviceCompliancePolicyDeviceStateSummaryRequestBuilderGetRequestConfiguration} from './deviceCompliancePolicyDeviceStateSummaryRequestBuilderGetRequestConfiguration';
import {DeviceCompliancePolicyDeviceStateSummaryRequestBuilderPatchRequestConfiguration} from './deviceCompliancePolicyDeviceStateSummaryRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the deviceCompliancePolicyDeviceStateSummary property of the microsoft.graph.deviceManagement entity.
 */
export class DeviceCompliancePolicyDeviceStateSummaryRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new DeviceCompliancePolicyDeviceStateSummaryRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/deviceCompliancePolicyDeviceStateSummary{?%24select,%24expand}");
    };
    /**
     * Delete navigation property deviceCompliancePolicyDeviceStateSummary for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: DeviceCompliancePolicyDeviceStateSummaryRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Read properties and relationships of the deviceCompliancePolicyDeviceStateSummary object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DeviceCompliancePolicyDeviceStateSummary
     * @see {@link https://learn.microsoft.com/graph/api/intune-deviceconfig-devicecompliancepolicydevicestatesummary-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: DeviceCompliancePolicyDeviceStateSummaryRequestBuilderGetRequestConfiguration | undefined) : Promise<DeviceCompliancePolicyDeviceStateSummary | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DeviceCompliancePolicyDeviceStateSummary>(requestInfo, createDeviceCompliancePolicyDeviceStateSummaryFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the properties of a deviceCompliancePolicyDeviceStateSummary object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DeviceCompliancePolicyDeviceStateSummary
     * @see {@link https://learn.microsoft.com/graph/api/intune-deviceconfig-devicecompliancepolicydevicestatesummary-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: DeviceCompliancePolicyDeviceStateSummary | undefined, requestConfiguration?: DeviceCompliancePolicyDeviceStateSummaryRequestBuilderPatchRequestConfiguration | undefined) : Promise<DeviceCompliancePolicyDeviceStateSummary | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DeviceCompliancePolicyDeviceStateSummary>(requestInfo, createDeviceCompliancePolicyDeviceStateSummaryFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property deviceCompliancePolicyDeviceStateSummary for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: DeviceCompliancePolicyDeviceStateSummaryRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Read properties and relationships of the deviceCompliancePolicyDeviceStateSummary object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: DeviceCompliancePolicyDeviceStateSummaryRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the properties of a deviceCompliancePolicyDeviceStateSummary object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: DeviceCompliancePolicyDeviceStateSummary | undefined, requestConfiguration?: DeviceCompliancePolicyDeviceStateSummaryRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeDeviceCompliancePolicyDeviceStateSummary);
        return requestInfo;
    };
}
