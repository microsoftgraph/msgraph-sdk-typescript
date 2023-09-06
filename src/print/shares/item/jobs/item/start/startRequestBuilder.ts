import { type PrintJobStatus } from '../../../../../../models/';
import { createPrintJobStatusFromDiscriminatorValue } from '../../../../../../models/createPrintJobStatusFromDiscriminatorValue';
import { type ODataError } from '../../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../../../models/oDataErrors/serializeODataError';
import { type StartRequestBuilderPostRequestConfiguration } from './startRequestBuilderPostRequestConfiguration';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the start method.
 */
export class StartRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new StartRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/print/shares/{printerShare%2Did}/jobs/{printJob%2Did}/start");
    };
    /**
     * Submits the print job to the associated printer or printerShare. It will be printed after any existing pending jobs are completed, aborted, or canceled.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of PrintJobStatus
     * @see {@link https://learn.microsoft.com/graph/api/printjob-start?view=graph-rest-1.0|Find more info here}
     */
    public post(requestConfiguration?: StartRequestBuilderPostRequestConfiguration | undefined) : Promise<PrintJobStatus | undefined> {
        const requestInfo = this.toPostRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<PrintJobStatus>(requestInfo, createPrintJobStatusFromDiscriminatorValue, errorMapping);
    };
    /**
     * Submits the print job to the associated printer or printerShare. It will be printed after any existing pending jobs are completed, aborted, or canceled.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(requestConfiguration?: StartRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.POST;
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
     * @returns a startRequestBuilder
     */
    public withUrl(rawUrl: string) : StartRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new StartRequestBuilder(rawUrl, this.requestAdapter);
    };
}
