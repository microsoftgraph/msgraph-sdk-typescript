import { createDeviceManagementExportJobFromDiscriminatorValue } from '../../../../models/createDeviceManagementExportJobFromDiscriminatorValue';
import { deserializeIntoDeviceManagementExportJob } from '../../../../models/deserializeIntoDeviceManagementExportJob';
import { type DeviceManagementExportJob } from '../../../../models/deviceManagementExportJob';
import { type ODataError } from '../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../models/oDataErrors/serializeODataError';
import { serializeDeviceManagementExportJob } from '../../../../models/serializeDeviceManagementExportJob';
import { type DeviceManagementExportJobItemRequestBuilderDeleteRequestConfiguration } from './deviceManagementExportJobItemRequestBuilderDeleteRequestConfiguration';
import { type DeviceManagementExportJobItemRequestBuilderGetRequestConfiguration } from './deviceManagementExportJobItemRequestBuilderGetRequestConfiguration';
import { type DeviceManagementExportJobItemRequestBuilderPatchRequestConfiguration } from './deviceManagementExportJobItemRequestBuilderPatchRequestConfiguration';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the exportJobs property of the microsoft.graph.deviceManagementReports entity.
 */
export class DeviceManagementExportJobItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new DeviceManagementExportJobItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/reports/exportJobs/{deviceManagementExportJob%2Did}{?%24select,%24expand}");
    };
    /**
     * Deletes a deviceManagementExportJob.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/intune-reporting-devicemanagementexportjob-delete?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: DeviceManagementExportJobItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Read properties and relationships of the deviceManagementExportJob object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DeviceManagementExportJob
     * @see {@link https://learn.microsoft.com/graph/api/intune-reporting-devicemanagementexportjob-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: DeviceManagementExportJobItemRequestBuilderGetRequestConfiguration | undefined) : Promise<DeviceManagementExportJob | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DeviceManagementExportJob>(requestInfo, createDeviceManagementExportJobFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the properties of a deviceManagementExportJob object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DeviceManagementExportJob
     * @see {@link https://learn.microsoft.com/graph/api/intune-reporting-devicemanagementexportjob-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: DeviceManagementExportJob, requestConfiguration?: DeviceManagementExportJobItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<DeviceManagementExportJob | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DeviceManagementExportJob>(requestInfo, createDeviceManagementExportJobFromDiscriminatorValue, errorMapping);
    };
    /**
     * Deletes a deviceManagementExportJob.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: DeviceManagementExportJobItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Read properties and relationships of the deviceManagementExportJob object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: DeviceManagementExportJobItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the properties of a deviceManagementExportJob object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: DeviceManagementExportJob, requestConfiguration?: DeviceManagementExportJobItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeDeviceManagementExportJob);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a DeviceManagementExportJobItemRequestBuilder
     */
    public withUrl(rawUrl: string) : DeviceManagementExportJobItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new DeviceManagementExportJobItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
