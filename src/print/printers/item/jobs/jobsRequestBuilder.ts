import { type PrintJobCollectionResponse } from '../../../../models/';
import { type ODataError } from '../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../../models/oDataErrors/oDataError';
import { createPrintJobFromDiscriminatorValue, deserializeIntoPrintJob, serializePrintJob, type PrintJob } from '../../../../models/printJob';
import { createPrintJobCollectionResponseFromDiscriminatorValue } from '../../../../models/printJobCollectionResponse';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { PrintJobItemRequestBuilder } from './item/printJobItemRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface JobsRequestBuilderGetQueryParameters {
    /**
     * Include count of items
     */
    count?: boolean;
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Filter items by property values
     */
    filter?: string;
    /**
     * Order items by property values
     */
    orderby?: string[];
    /**
     * Search items by search phrases
     */
    search?: string;
    /**
     * Select properties to be returned
     */
    select?: string[];
    /**
     * Skip the first n items
     */
    skip?: number;
    /**
     * Show only the first n items
     */
    top?: number;
}
export interface JobsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: JobsRequestBuilderGetQueryParameters;
}
export interface JobsRequestBuilderPostRequestConfiguration {
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
 * Provides operations to manage the jobs property of the microsoft.graph.printerBase entity.
 */
export class JobsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the jobs property of the microsoft.graph.printerBase entity.
     * @param printJobId The unique identifier of printJob
     * @returns a PrintJobItemRequestBuilder
     */
    public byPrintJobId(printJobId: string) : PrintJobItemRequestBuilder {
        if(!printJobId) throw new Error("printJobId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["printJob%2Did"] = printJobId
        return new PrintJobItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new JobsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/print/printers/{printer%2Did}/jobs{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * The list of jobs that are queued for printing by the printer/printerShare.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of PrintJobCollectionResponse
     */
    public get(requestConfiguration?: JobsRequestBuilderGetRequestConfiguration | undefined) : Promise<PrintJobCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<PrintJobCollectionResponse>(requestInfo, createPrintJobCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to jobs for print
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of PrintJob
     */
    public post(body: PrintJob, requestConfiguration?: JobsRequestBuilderPostRequestConfiguration | undefined) : Promise<PrintJob | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<PrintJob>(requestInfo, createPrintJobFromDiscriminatorValue, errorMapping);
    };
    /**
     * The list of jobs that are queued for printing by the printer/printerShare.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: JobsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to jobs for print
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: PrintJob, requestConfiguration?: JobsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializePrintJob);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a jobsRequestBuilder
     */
    public withUrl(rawUrl: string) : JobsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new JobsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
