import {DeviceManagementExportJobCollectionResponse} from '../../../models/';
import {createDeviceManagementExportJobCollectionResponseFromDiscriminatorValue} from '../../../models/createDeviceManagementExportJobCollectionResponseFromDiscriminatorValue';
import {createDeviceManagementExportJobFromDiscriminatorValue} from '../../../models/createDeviceManagementExportJobFromDiscriminatorValue';
import {deserializeIntoDeviceManagementExportJob} from '../../../models/deserializeIntoDeviceManagementExportJob';
import {DeviceManagementExportJob} from '../../../models/deviceManagementExportJob';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {serializeDeviceManagementExportJob} from '../../../models/serializeDeviceManagementExportJob';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {ExportJobsRequestBuilderGetRequestConfiguration} from './exportJobsRequestBuilderGetRequestConfiguration';
import {ExportJobsRequestBuilderPostRequestConfiguration} from './exportJobsRequestBuilderPostRequestConfiguration';
import {DeviceManagementExportJobItemRequestBuilder} from './item/deviceManagementExportJobItemRequestBuilder';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the exportJobs property of the microsoft.graph.deviceManagementReports entity.
 */
export class ExportJobsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the exportJobs property of the microsoft.graph.deviceManagementReports entity.
     * @param deviceManagementExportJobId Unique identifier of the item
     * @returns a DeviceManagementExportJobItemRequestBuilder
     */
    public byDeviceManagementExportJobId(deviceManagementExportJobId: string) : DeviceManagementExportJobItemRequestBuilder {
        if(!deviceManagementExportJobId) throw new Error("deviceManagementExportJobId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["deviceManagementExportJob%2Did"] = deviceManagementExportJobId
        return new DeviceManagementExportJobItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new ExportJobsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/reports/exportJobs{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Entity representing a job to export a report
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DeviceManagementExportJobCollectionResponse
     */
    public get(requestConfiguration?: ExportJobsRequestBuilderGetRequestConfiguration | undefined) : Promise<DeviceManagementExportJobCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DeviceManagementExportJobCollectionResponse>(requestInfo, createDeviceManagementExportJobCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to exportJobs for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DeviceManagementExportJob
     */
    public post(body: DeviceManagementExportJob | undefined, requestConfiguration?: ExportJobsRequestBuilderPostRequestConfiguration | undefined) : Promise<DeviceManagementExportJob | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DeviceManagementExportJob>(requestInfo, createDeviceManagementExportJobFromDiscriminatorValue, errorMapping);
    };
    /**
     * Entity representing a job to export a report
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ExportJobsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to exportJobs for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: DeviceManagementExportJob | undefined, requestConfiguration?: ExportJobsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeDeviceManagementExportJob);
        return requestInfo;
    };
}
