import {PrinterShare} from '../../../../../models/';
import {createPrinterShareFromDiscriminatorValue} from '../../../../../models/createPrinterShareFromDiscriminatorValue';
import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../models/oDataErrors/serializeODataError';
import {PrinterShareItemRequestBuilderGetRequestConfiguration} from './printerShareItemRequestBuilderGetRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the shares property of the microsoft.graph.printer entity.
 */
export class PrinterShareItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new PrinterShareItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/print/printers/{printer%2Did}/shares/{printerShare%2Did}{?%24select,%24expand}");
    };
    /**
     * The list of printerShares that are associated with the printer. Currently, only one printerShare can be associated with the printer. Read-only. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of PrinterShare
     */
    public get(requestConfiguration?: PrinterShareItemRequestBuilderGetRequestConfiguration | undefined) : Promise<PrinterShare | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<PrinterShare>(requestInfo, createPrinterShareFromDiscriminatorValue, errorMapping);
    };
    /**
     * The list of printerShares that are associated with the printer. Currently, only one printerShare can be associated with the printer. Read-only. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: PrinterShareItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * @returns a PrinterShareItemRequestBuilder
     */
    public withUrl(rawUrl: string) : PrinterShareItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new PrinterShareItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
