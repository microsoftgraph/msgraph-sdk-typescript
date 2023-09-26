import { type ODataError } from '../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../../../models/oDataErrors/oDataError';
import { createPrintJobFromDiscriminatorValue, deserializeIntoPrintJob, serializePrintJob, type PrintJob } from '../../../../../models/printJob';
import { AbortRequestBuilder } from './abort/abortRequestBuilder';
import { CancelRequestBuilder } from './cancel/cancelRequestBuilder';
import { DocumentsRequestBuilder } from './documents/documentsRequestBuilder';
import { RedirectRequestBuilder } from './redirect/redirectRequestBuilder';
import { StartRequestBuilder } from './start/startRequestBuilder';
import { TasksRequestBuilder } from './tasks/tasksRequestBuilder';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface PrintJobItemRequestBuilderDeleteRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
}
export interface PrintJobItemRequestBuilderGetQueryParameters {
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Select properties to be returned
     */
    select?: string[];
}
export interface PrintJobItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: PrintJobItemRequestBuilderGetQueryParameters;
}
export interface PrintJobItemRequestBuilderPatchRequestConfiguration {
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
export class PrintJobItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to call the abort method.
     */
    public get abort(): AbortRequestBuilder {
        return new AbortRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the cancel method.
     */
    public get cancel(): CancelRequestBuilder {
        return new CancelRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the documents property of the microsoft.graph.printJob entity.
     */
    public get documents(): DocumentsRequestBuilder {
        return new DocumentsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the redirect method.
     */
    public get redirect(): RedirectRequestBuilder {
        return new RedirectRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the start method.
     */
    public get start(): StartRequestBuilder {
        return new StartRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the tasks property of the microsoft.graph.printJob entity.
     */
    public get tasks(): TasksRequestBuilder {
        return new TasksRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new PrintJobItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/print/printers/{printer%2Did}/jobs/{printJob%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property jobs for print
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: PrintJobItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * The list of jobs that are queued for printing by the printer/printerShare.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of PrintJob
     */
    public get(requestConfiguration?: PrintJobItemRequestBuilderGetRequestConfiguration | undefined) : Promise<PrintJob | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<PrintJob>(requestInfo, createPrintJobFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property jobs in print
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of PrintJob
     */
    public patch(body: PrintJob, requestConfiguration?: PrintJobItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<PrintJob | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<PrintJob>(requestInfo, createPrintJobFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property jobs for print
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: PrintJobItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * The list of jobs that are queued for printing by the printer/printerShare.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: PrintJobItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property jobs in print
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: PrintJob, requestConfiguration?: PrintJobItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializePrintJob);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a PrintJobItemRequestBuilder
     */
    public withUrl(rawUrl: string) : PrintJobItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new PrintJobItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
