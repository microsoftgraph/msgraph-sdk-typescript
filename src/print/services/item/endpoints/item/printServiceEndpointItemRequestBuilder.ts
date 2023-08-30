import {createPrintServiceEndpointFromDiscriminatorValue} from '../../../../../models/createPrintServiceEndpointFromDiscriminatorValue';
import {deserializeIntoPrintServiceEndpoint} from '../../../../../models/deserializeIntoPrintServiceEndpoint';
import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../models/oDataErrors/serializeODataError';
import type {PrintServiceEndpoint} from '../../../../../models/printServiceEndpoint';
import {serializePrintServiceEndpoint} from '../../../../../models/serializePrintServiceEndpoint';
import {PrintServiceEndpointItemRequestBuilderDeleteRequestConfiguration} from './printServiceEndpointItemRequestBuilderDeleteRequestConfiguration';
import {PrintServiceEndpointItemRequestBuilderGetRequestConfiguration} from './printServiceEndpointItemRequestBuilderGetRequestConfiguration';
import {PrintServiceEndpointItemRequestBuilderPatchRequestConfiguration} from './printServiceEndpointItemRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the endpoints property of the microsoft.graph.printService entity.
 */
export class PrintServiceEndpointItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new PrintServiceEndpointItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/print/services/{printService%2Did}/endpoints/{printServiceEndpoint%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property endpoints for print
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: PrintServiceEndpointItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Retrieve the properties and relationships of a print service endpoint.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of PrintServiceEndpoint
     * @see {@link https://learn.microsoft.com/graph/api/printserviceendpoint-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: PrintServiceEndpointItemRequestBuilderGetRequestConfiguration | undefined) : Promise<PrintServiceEndpoint | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<PrintServiceEndpoint>(requestInfo, createPrintServiceEndpointFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property endpoints in print
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of PrintServiceEndpoint
     */
    public patch(body: PrintServiceEndpoint, requestConfiguration?: PrintServiceEndpointItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<PrintServiceEndpoint | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<PrintServiceEndpoint>(requestInfo, createPrintServiceEndpointFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property endpoints for print
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: PrintServiceEndpointItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Retrieve the properties and relationships of a print service endpoint.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: PrintServiceEndpointItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property endpoints in print
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: PrintServiceEndpoint, requestConfiguration?: PrintServiceEndpointItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializePrintServiceEndpoint);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a PrintServiceEndpointItemRequestBuilder
     */
    public withUrl(rawUrl: string) : PrintServiceEndpointItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new PrintServiceEndpointItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
