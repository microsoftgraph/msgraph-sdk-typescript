import { createPrintConnectorFromDiscriminatorValue } from '../../../models/createPrintConnectorFromDiscriminatorValue';
import { deserializeIntoPrintConnector } from '../../../models/deserializeIntoPrintConnector';
import { type ODataError } from '../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../models/oDataErrors/serializeODataError';
import { type PrintConnector } from '../../../models/printConnector';
import { serializePrintConnector } from '../../../models/serializePrintConnector';
import { type PrintConnectorItemRequestBuilderDeleteRequestConfiguration } from './printConnectorItemRequestBuilderDeleteRequestConfiguration';
import { type PrintConnectorItemRequestBuilderGetRequestConfiguration } from './printConnectorItemRequestBuilderGetRequestConfiguration';
import { type PrintConnectorItemRequestBuilderPatchRequestConfiguration } from './printConnectorItemRequestBuilderPatchRequestConfiguration';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the connectors property of the microsoft.graph.print entity.
 */
export class PrintConnectorItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new PrintConnectorItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/print/connectors/{printConnector%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete (unregister) a printConnector.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/printconnector-delete?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: PrintConnectorItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Retrieve the properties and relationships of a printConnector object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of PrintConnector
     * @see {@link https://learn.microsoft.com/graph/api/printconnector-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: PrintConnectorItemRequestBuilderGetRequestConfiguration | undefined) : Promise<PrintConnector | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<PrintConnector>(requestInfo, createPrintConnectorFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the properties of a printConnector object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of PrintConnector
     * @see {@link https://learn.microsoft.com/graph/api/printconnector-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: PrintConnector, requestConfiguration?: PrintConnectorItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<PrintConnector | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<PrintConnector>(requestInfo, createPrintConnectorFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete (unregister) a printConnector.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: PrintConnectorItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Retrieve the properties and relationships of a printConnector object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: PrintConnectorItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the properties of a printConnector object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: PrintConnector, requestConfiguration?: PrintConnectorItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializePrintConnector);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a PrintConnectorItemRequestBuilder
     */
    public withUrl(rawUrl: string) : PrintConnectorItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new PrintConnectorItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
