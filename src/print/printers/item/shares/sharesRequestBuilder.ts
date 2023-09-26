import { type PrinterShareCollectionResponse } from '../../../../models/';
import { type ODataError } from '../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../../models/oDataErrors/oDataError';
import { createPrinterShareCollectionResponseFromDiscriminatorValue } from '../../../../models/printerShareCollectionResponse';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { PrinterShareItemRequestBuilder } from './item/printerShareItemRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface SharesRequestBuilderGetQueryParameters {
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
export interface SharesRequestBuilderGetRequestConfiguration {
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
    queryParameters?: SharesRequestBuilderGetQueryParameters;
}
/**
 * Provides operations to manage the shares property of the microsoft.graph.printer entity.
 */
export class SharesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the shares property of the microsoft.graph.printer entity.
     * @param printerShareId The unique identifier of printerShare
     * @returns a PrinterShareItemRequestBuilder
     */
    public byPrinterShareId(printerShareId: string) : PrinterShareItemRequestBuilder {
        if(!printerShareId) throw new Error("printerShareId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["printerShare%2Did"] = printerShareId
        return new PrinterShareItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new SharesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/print/printers/{printer%2Did}/shares{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Retrieve a list of printer shares associated with the printer.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of PrinterShareCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/printer-list-shares?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: SharesRequestBuilderGetRequestConfiguration | undefined) : Promise<PrinterShareCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<PrinterShareCollectionResponse>(requestInfo, createPrinterShareCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Retrieve a list of printer shares associated with the printer.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: SharesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * @returns a sharesRequestBuilder
     */
    public withUrl(rawUrl: string) : SharesRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new SharesRequestBuilder(rawUrl, this.requestAdapter);
    };
}
