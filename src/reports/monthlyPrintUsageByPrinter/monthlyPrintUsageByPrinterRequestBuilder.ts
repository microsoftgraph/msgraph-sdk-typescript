import {PrintUsageByPrinterCollectionResponse} from '../../models/';
import {createPrintUsageByPrinterCollectionResponseFromDiscriminatorValue} from '../../models/createPrintUsageByPrinterCollectionResponseFromDiscriminatorValue';
import {createPrintUsageByPrinterFromDiscriminatorValue} from '../../models/createPrintUsageByPrinterFromDiscriminatorValue';
import {deserializeIntoPrintUsageByPrinter} from '../../models/deserializeIntoPrintUsageByPrinter';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import {PrintUsageByPrinter} from '../../models/printUsageByPrinter';
import {serializePrintUsageByPrinter} from '../../models/serializePrintUsageByPrinter';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {PrintUsageByPrinterItemRequestBuilder} from './item/printUsageByPrinterItemRequestBuilder';
import {MonthlyPrintUsageByPrinterRequestBuilderGetRequestConfiguration} from './monthlyPrintUsageByPrinterRequestBuilderGetRequestConfiguration';
import {MonthlyPrintUsageByPrinterRequestBuilderPostRequestConfiguration} from './monthlyPrintUsageByPrinterRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the monthlyPrintUsageByPrinter property of the microsoft.graph.reportRoot entity.
 */
export class MonthlyPrintUsageByPrinterRequestBuilder extends BaseRequestBuilder {
    /** Provides operations to count the resources in the collection. */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the monthlyPrintUsageByPrinter property of the microsoft.graph.reportRoot entity.
     * @param printUsageByPrinterId Unique identifier of the item
     * @returns a PrintUsageByPrinterItemRequestBuilder
     */
    public byPrintUsageByPrinterId(printUsageByPrinterId: string) : PrintUsageByPrinterItemRequestBuilder {
        if(!printUsageByPrinterId) throw new Error("printUsageByPrinterId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["printUsageByPrinter%2Did"] = printUsageByPrinterId
        return new PrintUsageByPrinterItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new MonthlyPrintUsageByPrinterRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/reports/monthlyPrintUsageByPrinter{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Retrieve a list of monthly print usage summaries, grouped by printer.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of PrintUsageByPrinterCollectionResponse
     * @see {@link https://docs.microsoft.com/graph/api/reportroot-list-monthlyprintusagebyprinter?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: MonthlyPrintUsageByPrinterRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<PrintUsageByPrinterCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<PrintUsageByPrinterCollectionResponse>(requestInfo, createPrintUsageByPrinterCollectionResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create new navigation property to monthlyPrintUsageByPrinter for reports
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of PrintUsageByPrinter
     */
    public post(body: PrintUsageByPrinter | undefined, requestConfiguration?: MonthlyPrintUsageByPrinterRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<PrintUsageByPrinter | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<PrintUsageByPrinter>(requestInfo, createPrintUsageByPrinterFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Retrieve a list of monthly print usage summaries, grouped by printer.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: MonthlyPrintUsageByPrinterRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to monthlyPrintUsageByPrinter for reports
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: PrintUsageByPrinter | undefined, requestConfiguration?: MonthlyPrintUsageByPrinterRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializePrintUsageByPrinter);
        return requestInfo;
    };
}
