import {createDeviceComplianceDeviceOverviewFromDiscriminatorValue} from '../../../../models/createDeviceComplianceDeviceOverviewFromDiscriminatorValue';
import {deserializeIntoDeviceComplianceDeviceOverview} from '../../../../models/deserializeIntoDeviceComplianceDeviceOverview';
import type {DeviceComplianceDeviceOverview} from '../../../../models/deviceComplianceDeviceOverview';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {serializeDeviceComplianceDeviceOverview} from '../../../../models/serializeDeviceComplianceDeviceOverview';
import {DeviceStatusOverviewRequestBuilderDeleteRequestConfiguration} from './deviceStatusOverviewRequestBuilderDeleteRequestConfiguration';
import {DeviceStatusOverviewRequestBuilderGetRequestConfiguration} from './deviceStatusOverviewRequestBuilderGetRequestConfiguration';
import {DeviceStatusOverviewRequestBuilderPatchRequestConfiguration} from './deviceStatusOverviewRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the deviceStatusOverview property of the microsoft.graph.deviceCompliancePolicy entity.
 */
export class DeviceStatusOverviewRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new DeviceStatusOverviewRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy%2Did}/deviceStatusOverview{?%24select,%24expand}");
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
     * Read properties and relationships of the deviceComplianceDeviceOverview object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DeviceComplianceDeviceOverview
     * @see {@link https://learn.microsoft.com/graph/api/intune-deviceconfig-devicecompliancedeviceoverview-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: DeviceStatusOverviewRequestBuilderGetRequestConfiguration | undefined) : Promise<DeviceComplianceDeviceOverview | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DeviceComplianceDeviceOverview>(requestInfo, createDeviceComplianceDeviceOverviewFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the properties of a deviceComplianceDeviceOverview object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DeviceComplianceDeviceOverview
     * @see {@link https://learn.microsoft.com/graph/api/intune-deviceconfig-devicecompliancedeviceoverview-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: DeviceComplianceDeviceOverview | undefined, requestConfiguration?: DeviceStatusOverviewRequestBuilderPatchRequestConfiguration | undefined) : Promise<DeviceComplianceDeviceOverview | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DeviceComplianceDeviceOverview>(requestInfo, createDeviceComplianceDeviceOverviewFromDiscriminatorValue, errorMapping);
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
     * Read properties and relationships of the deviceComplianceDeviceOverview object.
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
     * Update the properties of a deviceComplianceDeviceOverview object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: DeviceComplianceDeviceOverview | undefined, requestConfiguration?: DeviceStatusOverviewRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeDeviceComplianceDeviceOverview);
        return requestInfo;
    };
}
