import { type PrintServiceEndpointCollectionResponse } from '../../../../models/';
import { createPrintServiceEndpointCollectionResponseFromDiscriminatorValue } from '../../../../models/createPrintServiceEndpointCollectionResponseFromDiscriminatorValue';
import { createPrintServiceEndpointFromDiscriminatorValue } from '../../../../models/createPrintServiceEndpointFromDiscriminatorValue';
import { deserializeIntoPrintServiceEndpoint } from '../../../../models/deserializeIntoPrintServiceEndpoint';
import { type ODataError } from '../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../models/oDataErrors/serializeODataError';
import { type PrintServiceEndpoint } from '../../../../models/printServiceEndpoint';
import { serializePrintServiceEndpoint } from '../../../../models/serializePrintServiceEndpoint';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { type EndpointsRequestBuilderGetRequestConfiguration } from './endpointsRequestBuilderGetRequestConfiguration';
import { type EndpointsRequestBuilderPostRequestConfiguration } from './endpointsRequestBuilderPostRequestConfiguration';
import { PrintServiceEndpointItemRequestBuilder } from './item/printServiceEndpointItemRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the endpoints property of the microsoft.graph.printService entity.
 */
export class EndpointsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the endpoints property of the microsoft.graph.printService entity.
     * @param printServiceEndpointId The unique identifier of printServiceEndpoint
     * @returns a PrintServiceEndpointItemRequestBuilder
     */
    public byPrintServiceEndpointId(printServiceEndpointId: string) : PrintServiceEndpointItemRequestBuilder {
        if(!printServiceEndpointId) throw new Error("printServiceEndpointId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["printServiceEndpoint%2Did"] = printServiceEndpointId
        return new PrintServiceEndpointItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new EndpointsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/print/services/{printService%2Did}/endpoints{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Retrieve a list of endpoints exposed by a print service.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of PrintServiceEndpointCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/printservice-list-endpoints?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: EndpointsRequestBuilderGetRequestConfiguration | undefined) : Promise<PrintServiceEndpointCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<PrintServiceEndpointCollectionResponse>(requestInfo, createPrintServiceEndpointCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to endpoints for print
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of PrintServiceEndpoint
     */
    public post(body: PrintServiceEndpoint, requestConfiguration?: EndpointsRequestBuilderPostRequestConfiguration | undefined) : Promise<PrintServiceEndpoint | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<PrintServiceEndpoint>(requestInfo, createPrintServiceEndpointFromDiscriminatorValue, errorMapping);
    };
    /**
     * Retrieve a list of endpoints exposed by a print service.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: EndpointsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to endpoints for print
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: PrintServiceEndpoint, requestConfiguration?: EndpointsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializePrintServiceEndpoint);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a endpointsRequestBuilder
     */
    public withUrl(rawUrl: string) : EndpointsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new EndpointsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
