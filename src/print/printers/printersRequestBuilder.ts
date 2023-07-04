import {PrinterCollectionResponse} from '../../models/';
import {createPrinterCollectionResponseFromDiscriminatorValue} from '../../models/createPrinterCollectionResponseFromDiscriminatorValue';
import {createPrinterFromDiscriminatorValue} from '../../models/createPrinterFromDiscriminatorValue';
import {deserializeIntoPrinter} from '../../models/deserializeIntoPrinter';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import {Printer} from '../../models/printer';
import {serializePrinter} from '../../models/serializePrinter';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {CreateRequestBuilder} from './create/createRequestBuilder';
import {PrinterItemRequestBuilder} from './item/printerItemRequestBuilder';
import {PrintersRequestBuilderGetRequestConfiguration} from './printersRequestBuilderGetRequestConfiguration';
import {PrintersRequestBuilderPostRequestConfiguration} from './printersRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the printers property of the microsoft.graph.print entity.
 */
export class PrintersRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the create method.
     */
    public get create(): CreateRequestBuilder {
        return new CreateRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the printers property of the microsoft.graph.print entity.
     * @param printerId Unique identifier of the item
     * @returns a PrinterItemRequestBuilder
     */
    public byPrinterId(printerId: string) : PrinterItemRequestBuilder {
        if(!printerId) throw new Error("printerId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["printer%2Did"] = printerId
        return new PrinterItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new PrintersRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/print/printers{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Retrieve the list of **printers** that are registered in the tenant.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of PrinterCollectionResponse
     * @see {@link https://docs.microsoft.com/graph/api/print-list-printers?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: PrintersRequestBuilderGetRequestConfiguration | undefined) : Promise<PrinterCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<PrinterCollectionResponse>(requestInfo, createPrinterCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to printers for print
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Printer
     */
    public post(body: Printer | undefined, requestConfiguration?: PrintersRequestBuilderPostRequestConfiguration | undefined) : Promise<Printer | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<Printer>(requestInfo, createPrinterFromDiscriminatorValue, errorMapping);
    };
    /**
     * Retrieve the list of **printers** that are registered in the tenant.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: PrintersRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to printers for print
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: Printer | undefined, requestConfiguration?: PrintersRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializePrinter);
        return requestInfo;
    };
}
