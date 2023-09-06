import { type Report } from '../../models/';
import { createReportFromDiscriminatorValue } from '../../models/createReportFromDiscriminatorValue';
import { type ODataError } from '../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../models/oDataErrors/serializeODataError';
import { type ManagedDeviceEnrollmentTopFailuresWithPeriodRequestBuilderGetRequestConfiguration } from './managedDeviceEnrollmentTopFailuresWithPeriodRequestBuilderGetRequestConfiguration';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the managedDeviceEnrollmentTopFailures method.
 */
export class ManagedDeviceEnrollmentTopFailuresWithPeriodRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new ManagedDeviceEnrollmentTopFailuresWithPeriodRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param period Usage: period='{period}'
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter, period?: string | undefined) {
        super(pathParameters, requestAdapter, "{+baseurl}/reports/managedDeviceEnrollmentTopFailures(period='{period}')");
        this.pathParameters["period"] = period
    };
    /**
     * Invoke function managedDeviceEnrollmentTopFailures
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Report
     */
    public get(requestConfiguration?: ManagedDeviceEnrollmentTopFailuresWithPeriodRequestBuilderGetRequestConfiguration | undefined) : Promise<Report | undefined> {
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
     * Invoke function managedDeviceEnrollmentTopFailures
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ManagedDeviceEnrollmentTopFailuresWithPeriodRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * @returns a managedDeviceEnrollmentTopFailuresWithPeriodRequestBuilder
     */
    public withUrl(rawUrl: string) : ManagedDeviceEnrollmentTopFailuresWithPeriodRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new ManagedDeviceEnrollmentTopFailuresWithPeriodRequestBuilder(rawUrl, this.requestAdapter);
    };
}
