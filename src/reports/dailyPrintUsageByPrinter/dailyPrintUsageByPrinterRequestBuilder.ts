import {PrintUsageByPrinter, PrintUsageByPrinterCollectionResponse} from '../../models/';
import {createPrintUsageByPrinterCollectionResponseFromDiscriminatorValue} from '../../models/createPrintUsageByPrinterCollectionResponseFromDiscriminatorValue';
import {createPrintUsageByPrinterFromDiscriminatorValue} from '../../models/createPrintUsageByPrinterFromDiscriminatorValue';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {DailyPrintUsageByPrinterRequestBuilderGetRequestConfiguration} from './dailyPrintUsageByPrinterRequestBuilderGetRequestConfiguration';
import {DailyPrintUsageByPrinterRequestBuilderPostRequestConfiguration} from './dailyPrintUsageByPrinterRequestBuilderPostRequestConfiguration';
import {PrintUsageByPrinterItemRequestBuilder} from './item/printUsageByPrinterItemRequestBuilder';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the dailyPrintUsageByPrinter property of the microsoft.graph.reportRoot entity.
 */
export class DailyPrintUsageByPrinterRequestBuilder extends BaseRequestBuilder {
    /** Provides operations to count the resources in the collection. */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the dailyPrintUsageByPrinter property of the microsoft.graph.reportRoot entity.
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
     * Instantiates a new DailyPrintUsageByPrinterRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/reports/dailyPrintUsageByPrinter{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get dailyPrintUsageByPrinter from reports
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of PrintUsageByPrinterCollectionResponse
     */
    public get(requestConfiguration?: DailyPrintUsageByPrinterRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<PrintUsageByPrinterCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<PrintUsageByPrinterCollectionResponse>(requestInfo, createPrintUsageByPrinterCollectionResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create new navigation property to dailyPrintUsageByPrinter for reports
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of PrintUsageByPrinter
     */
    public post(body: PrintUsageByPrinter | undefined, requestConfiguration?: DailyPrintUsageByPrinterRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<PrintUsageByPrinter | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<PrintUsageByPrinter>(requestInfo, createPrintUsageByPrinterFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Get dailyPrintUsageByPrinter from reports
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
    public toPostRequestInformation(body: PrintUsageByPrinter | undefined, requestConfiguration?: DailyPrintUsageByPrinterRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        return requestInfo;
    };
}
