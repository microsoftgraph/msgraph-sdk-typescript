import { type PrintUsageByPrinterCollectionResponse } from '../../models/';
import { createPrintUsageByPrinterCollectionResponseFromDiscriminatorValue } from '../../models/createPrintUsageByPrinterCollectionResponseFromDiscriminatorValue';
import { createPrintUsageByPrinterFromDiscriminatorValue } from '../../models/createPrintUsageByPrinterFromDiscriminatorValue';
import { deserializeIntoPrintUsageByPrinter } from '../../models/deserializeIntoPrintUsageByPrinter';
import { type ODataError } from '../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../models/oDataErrors/serializeODataError';
import { type PrintUsageByPrinter } from '../../models/printUsageByPrinter';
import { serializePrintUsageByPrinter } from '../../models/serializePrintUsageByPrinter';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { type DailyPrintUsageByPrinterRequestBuilderGetRequestConfiguration } from './dailyPrintUsageByPrinterRequestBuilderGetRequestConfiguration';
import { type DailyPrintUsageByPrinterRequestBuilderPostRequestConfiguration } from './dailyPrintUsageByPrinterRequestBuilderPostRequestConfiguration';
import { PrintUsageByPrinterItemRequestBuilder } from './item/printUsageByPrinterItemRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the dailyPrintUsageByPrinter property of the microsoft.graph.reportRoot entity.
 */
export class DailyPrintUsageByPrinterRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the dailyPrintUsageByPrinter property of the microsoft.graph.reportRoot entity.
     * @param printUsageByPrinterId The unique identifier of printUsageByPrinter
     * @returns a PrintUsageByPrinterItemRequestBuilder
     */
    public byPrintUsageByPrinterId(printUsageByPrinterId: string) : PrintUsageByPrinterItemRequestBuilder {
        if(!printUsageByPrinterId) throw new Error("printUsageByPrinterId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["printUsageByPrinter%2Did"] = printUsageByPrinterId
        return new PrintUsageByPrinterItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new DailyPrintUsageByPrinterRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/reports/dailyPrintUsageByPrinter{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Retrieve a list of daily print usage summaries, grouped by printer.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of PrintUsageByPrinterCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/reportroot-list-dailyprintusagebyprinter?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: DailyPrintUsageByPrinterRequestBuilderGetRequestConfiguration | undefined) : Promise<PrintUsageByPrinterCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<PrintUsageByPrinterCollectionResponse>(requestInfo, createPrintUsageByPrinterCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to dailyPrintUsageByPrinter for reports
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of PrintUsageByPrinter
     */
    public post(body: PrintUsageByPrinter, requestConfiguration?: DailyPrintUsageByPrinterRequestBuilderPostRequestConfiguration | undefined) : Promise<PrintUsageByPrinter | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<PrintUsageByPrinter>(requestInfo, createPrintUsageByPrinterFromDiscriminatorValue, errorMapping);
    };
    /**
     * Retrieve a list of daily print usage summaries, grouped by printer.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: DailyPrintUsageByPrinterRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to dailyPrintUsageByPrinter for reports
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: PrintUsageByPrinter, requestConfiguration?: DailyPrintUsageByPrinterRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializePrintUsageByPrinter);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a dailyPrintUsageByPrinterRequestBuilder
     */
    public withUrl(rawUrl: string) : DailyPrintUsageByPrinterRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new DailyPrintUsageByPrinterRequestBuilder(rawUrl, this.requestAdapter);
    };
}
