import { type Report } from '../../models/';
import { createReportFromDiscriminatorValue } from '../../models/createReportFromDiscriminatorValue';
import { type ODataError } from '../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../models/oDataErrors/serializeODataError';
import { type DeviceConfigurationUserActivityRequestBuilderGetRequestConfiguration } from './deviceConfigurationUserActivityRequestBuilderGetRequestConfiguration';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the deviceConfigurationUserActivity method.
 */
export class DeviceConfigurationUserActivityRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new DeviceConfigurationUserActivityRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/reports/deviceConfigurationUserActivity()");
    };
    /**
     * Metadata for the device configuration user activity report
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Report
     */
    public get(requestConfiguration?: DeviceConfigurationUserActivityRequestBuilderGetRequestConfiguration | undefined) : Promise<Report | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<Report>(requestInfo, createReportFromDiscriminatorValue, errorMapping);
    };
    /**
     * Metadata for the device configuration user activity report
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: DeviceConfigurationUserActivityRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a deviceConfigurationUserActivityRequestBuilder
     */
    public withUrl(rawUrl: string) : DeviceConfigurationUserActivityRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new DeviceConfigurationUserActivityRequestBuilder(rawUrl, this.requestAdapter);
    };
}
