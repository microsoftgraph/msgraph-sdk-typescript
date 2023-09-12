import { type PrintServiceCollectionResponse } from '../../models/';
import { createPrintServiceCollectionResponseFromDiscriminatorValue } from '../../models/createPrintServiceCollectionResponseFromDiscriminatorValue';
import { createPrintServiceFromDiscriminatorValue } from '../../models/createPrintServiceFromDiscriminatorValue';
import { deserializeIntoPrintService } from '../../models/deserializeIntoPrintService';
import { type ODataError } from '../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../models/oDataErrors/serializeODataError';
import { type PrintService } from '../../models/printService';
import { serializePrintService } from '../../models/serializePrintService';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { PrintServiceItemRequestBuilder } from './item/printServiceItemRequestBuilder';
import { type ServicesRequestBuilderGetRequestConfiguration } from './servicesRequestBuilderGetRequestConfiguration';
import { type ServicesRequestBuilderPostRequestConfiguration } from './servicesRequestBuilderPostRequestConfiguration';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the services property of the microsoft.graph.print entity.
 */
export class ServicesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the services property of the microsoft.graph.print entity.
     * @param printServiceId The unique identifier of printService
     * @returns a PrintServiceItemRequestBuilder
     */
    public byPrintServiceId(printServiceId: string) : PrintServiceItemRequestBuilder {
        if(!printServiceId) throw new Error("printServiceId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["printService%2Did"] = printServiceId
        return new PrintServiceItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new ServicesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/print/services{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Retrieve a list of printService objects that represent the services available to your tenant.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of PrintServiceCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/print-list-services?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: ServicesRequestBuilderGetRequestConfiguration | undefined) : Promise<PrintServiceCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<PrintServiceCollectionResponse>(requestInfo, createPrintServiceCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to services for print
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of PrintService
     */
    public post(body: PrintService, requestConfiguration?: ServicesRequestBuilderPostRequestConfiguration | undefined) : Promise<PrintService | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<PrintService>(requestInfo, createPrintServiceFromDiscriminatorValue, errorMapping);
    };
    /**
     * Retrieve a list of printService objects that represent the services available to your tenant.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ServicesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to services for print
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: PrintService, requestConfiguration?: ServicesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializePrintService);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a servicesRequestBuilder
     */
    public withUrl(rawUrl: string) : ServicesRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new ServicesRequestBuilder(rawUrl, this.requestAdapter);
    };
}
