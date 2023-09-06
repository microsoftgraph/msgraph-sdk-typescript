import { type PrintDocumentCollectionResponse } from '../../../../../../models/';
import { createPrintDocumentCollectionResponseFromDiscriminatorValue } from '../../../../../../models/createPrintDocumentCollectionResponseFromDiscriminatorValue';
import { createPrintDocumentFromDiscriminatorValue } from '../../../../../../models/createPrintDocumentFromDiscriminatorValue';
import { deserializeIntoPrintDocument } from '../../../../../../models/deserializeIntoPrintDocument';
import { type ODataError } from '../../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../../../models/oDataErrors/serializeODataError';
import { type PrintDocument } from '../../../../../../models/printDocument';
import { serializePrintDocument } from '../../../../../../models/serializePrintDocument';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { type DocumentsRequestBuilderGetRequestConfiguration } from './documentsRequestBuilderGetRequestConfiguration';
import { type DocumentsRequestBuilderPostRequestConfiguration } from './documentsRequestBuilderPostRequestConfiguration';
import { PrintDocumentItemRequestBuilder } from './item/printDocumentItemRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the documents property of the microsoft.graph.printJob entity.
 */
export class DocumentsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the documents property of the microsoft.graph.printJob entity.
     * @param printDocumentId The unique identifier of printDocument
     * @returns a PrintDocumentItemRequestBuilder
     */
    public byPrintDocumentId(printDocumentId: string) : PrintDocumentItemRequestBuilder {
        if(!printDocumentId) throw new Error("printDocumentId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["printDocument%2Did"] = printDocumentId
        return new PrintDocumentItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new DocumentsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/print/printers/{printer%2Did}/jobs/{printJob%2Did}/documents{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get documents from print
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of PrintDocumentCollectionResponse
     */
    public get(requestConfiguration?: DocumentsRequestBuilderGetRequestConfiguration | undefined) : Promise<PrintDocumentCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<PrintDocumentCollectionResponse>(requestInfo, createPrintDocumentCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to documents for print
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of PrintDocument
     */
    public post(body: PrintDocument, requestConfiguration?: DocumentsRequestBuilderPostRequestConfiguration | undefined) : Promise<PrintDocument | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<PrintDocument>(requestInfo, createPrintDocumentFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get documents from print
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: DocumentsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to documents for print
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: PrintDocument, requestConfiguration?: DocumentsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializePrintDocument);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a documentsRequestBuilder
     */
    public withUrl(rawUrl: string) : DocumentsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new DocumentsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
