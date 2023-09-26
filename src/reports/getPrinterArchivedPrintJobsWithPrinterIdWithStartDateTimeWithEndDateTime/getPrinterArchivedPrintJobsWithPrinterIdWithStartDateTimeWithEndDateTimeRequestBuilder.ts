import { type ODataError } from '../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../models/oDataErrors/oDataError';
import { createGetPrinterArchivedPrintJobsWithPrinterIdWithStartDateTimeWithEndDateTimeResponseFromDiscriminatorValue } from './getPrinterArchivedPrintJobsWithPrinterIdWithStartDateTimeWithEndDateTimeResponse';
import { type GetPrinterArchivedPrintJobsWithPrinterIdWithStartDateTimeWithEndDateTimeResponse } from './index';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface GetPrinterArchivedPrintJobsWithPrinterIdWithStartDateTimeWithEndDateTimeRequestBuilderGetQueryParameters {
    /**
     * Include count of items
     */
    count?: boolean;
    /**
     * Filter items by property values
     */
    filter?: string;
    /**
     * Search items by search phrases
     */
    search?: string;
    /**
     * Skip the first n items
     */
    skip?: number;
    /**
     * Show only the first n items
     */
    top?: number;
}
export interface GetPrinterArchivedPrintJobsWithPrinterIdWithStartDateTimeWithEndDateTimeRequestBuilderGetRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
    /**
     * Request query parameters
     */
    queryParameters?: GetPrinterArchivedPrintJobsWithPrinterIdWithStartDateTimeWithEndDateTimeRequestBuilderGetQueryParameters;
}
/**
 * Provides operations to call the getPrinterArchivedPrintJobs method.
 */
export class GetPrinterArchivedPrintJobsWithPrinterIdWithStartDateTimeWithEndDateTimeRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new GetPrinterArchivedPrintJobsWithPrinterIdWithStartDateTimeWithEndDateTimeRequestBuilder and sets the default values.
     * @param endDateTime Usage: endDateTime={endDateTime}
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param printerId Usage: printerId='{printerId}'
     * @param requestAdapter The request adapter to use to execute the requests.
     * @param startDateTime Usage: startDateTime={startDateTime}
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter, endDateTime?: Date | undefined, printerId?: string | undefined, startDateTime?: Date | undefined) {
        super(pathParameters, requestAdapter, "{+baseurl}/reports/getPrinterArchivedPrintJobs(printerId='{printerId}',startDateTime={startDateTime},endDateTime={endDateTime}){?%24top,%24skip,%24search,%24filter,%24count}");
        this.pathParameters["endDateTime"] = endDateTime
        this.pathParameters["printerId"] = printerId
        this.pathParameters["startDateTime"] = startDateTime
    };
    /**
     * Invoke function getPrinterArchivedPrintJobs
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of GetPrinterArchivedPrintJobsWithPrinterIdWithStartDateTimeWithEndDateTimeResponse
     */
    public get(requestConfiguration?: GetPrinterArchivedPrintJobsWithPrinterIdWithStartDateTimeWithEndDateTimeRequestBuilderGetRequestConfiguration | undefined) : Promise<GetPrinterArchivedPrintJobsWithPrinterIdWithStartDateTimeWithEndDateTimeResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<GetPrinterArchivedPrintJobsWithPrinterIdWithStartDateTimeWithEndDateTimeResponse>(requestInfo, createGetPrinterArchivedPrintJobsWithPrinterIdWithStartDateTimeWithEndDateTimeResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Invoke function getPrinterArchivedPrintJobs
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: GetPrinterArchivedPrintJobsWithPrinterIdWithStartDateTimeWithEndDateTimeRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a getPrinterArchivedPrintJobsWithPrinterIdWithStartDateTimeWithEndDateTimeRequestBuilder
     */
    public withUrl(rawUrl: string) : GetPrinterArchivedPrintJobsWithPrinterIdWithStartDateTimeWithEndDateTimeRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new GetPrinterArchivedPrintJobsWithPrinterIdWithStartDateTimeWithEndDateTimeRequestBuilder(rawUrl, this.requestAdapter);
    };
}
