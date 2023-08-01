import {createPrintUsageByPrinterFromDiscriminatorValue} from '../../../models/createPrintUsageByPrinterFromDiscriminatorValue';
import {deserializeIntoPrintUsageByPrinter} from '../../../models/deserializeIntoPrintUsageByPrinter';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import type {PrintUsageByPrinter} from '../../../models/printUsageByPrinter';
import {serializePrintUsageByPrinter} from '../../../models/serializePrintUsageByPrinter';
import {PrintUsageByPrinterItemRequestBuilderDeleteRequestConfiguration} from './printUsageByPrinterItemRequestBuilderDeleteRequestConfiguration';
import {PrintUsageByPrinterItemRequestBuilderGetRequestConfiguration} from './printUsageByPrinterItemRequestBuilderGetRequestConfiguration';
import {PrintUsageByPrinterItemRequestBuilderPatchRequestConfiguration} from './printUsageByPrinterItemRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the monthlyPrintUsageByPrinter property of the microsoft.graph.reportRoot entity.
 */
export class PrintUsageByPrinterItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new PrintUsageByPrinterItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/reports/monthlyPrintUsageByPrinter/{printUsageByPrinter%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property monthlyPrintUsageByPrinter for reports
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: PrintUsageByPrinterItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Retrieve a list of monthly print usage summaries, grouped by printer.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of PrintUsageByPrinter
     */
    public get(requestConfiguration?: PrintUsageByPrinterItemRequestBuilderGetRequestConfiguration | undefined) : Promise<PrintUsageByPrinter | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<PrintUsageByPrinter>(requestInfo, createPrintUsageByPrinterFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property monthlyPrintUsageByPrinter in reports
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of PrintUsageByPrinter
     */
    public patch(body: PrintUsageByPrinter | undefined, requestConfiguration?: PrintUsageByPrinterItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<PrintUsageByPrinter | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<PrintUsageByPrinter>(requestInfo, createPrintUsageByPrinterFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property monthlyPrintUsageByPrinter for reports
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: PrintUsageByPrinterItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Retrieve a list of monthly print usage summaries, grouped by printer.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: PrintUsageByPrinterItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property monthlyPrintUsageByPrinter in reports
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: PrintUsageByPrinter | undefined, requestConfiguration?: PrintUsageByPrinterItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializePrintUsageByPrinter);
        return requestInfo;
    };
}
