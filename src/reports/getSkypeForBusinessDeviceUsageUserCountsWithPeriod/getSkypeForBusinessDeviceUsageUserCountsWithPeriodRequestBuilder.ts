import { type ODataError } from '../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../models/oDataErrors/oDataError';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface GetSkypeForBusinessDeviceUsageUserCountsWithPeriodRequestBuilderGetRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
}
/**
 * Provides operations to call the getSkypeForBusinessDeviceUsageUserCounts method.
 */
export class GetSkypeForBusinessDeviceUsageUserCountsWithPeriodRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new GetSkypeForBusinessDeviceUsageUserCountsWithPeriodRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param period Usage: period='{period}'
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter, period?: string | undefined) {
        super(pathParameters, requestAdapter, "{+baseurl}/reports/getSkypeForBusinessDeviceUsageUserCounts(period='{period}')");
        this.pathParameters["period"] = period
    };
    /**
     * Invoke function getSkypeForBusinessDeviceUsageUserCounts
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ArrayBuffer
     */
    public get(requestConfiguration?: GetSkypeForBusinessDeviceUsageUserCountsWithPeriodRequestBuilderGetRequestConfiguration | undefined) : Promise<ArrayBuffer | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendPrimitiveAsync<ArrayBuffer>(requestInfo, "ArrayBuffer", errorMapping);
    };
    /**
     * Invoke function getSkypeForBusinessDeviceUsageUserCounts
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: GetSkypeForBusinessDeviceUsageUserCountsWithPeriodRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a getSkypeForBusinessDeviceUsageUserCountsWithPeriodRequestBuilder
     */
    public withUrl(rawUrl: string) : GetSkypeForBusinessDeviceUsageUserCountsWithPeriodRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new GetSkypeForBusinessDeviceUsageUserCountsWithPeriodRequestBuilder(rawUrl, this.requestAdapter);
    };
}
