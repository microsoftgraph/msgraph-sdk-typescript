import {PrintOperationCollectionResponse} from '../../models/';
import {createPrintOperationCollectionResponseFromDiscriminatorValue} from '../../models/createPrintOperationCollectionResponseFromDiscriminatorValue';
import {createPrintOperationFromDiscriminatorValue} from '../../models/createPrintOperationFromDiscriminatorValue';
import {deserializeIntoPrintOperation} from '../../models/deserializeIntoPrintOperation';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import type {PrintOperation} from '../../models/printOperation';
import {serializePrintOperation} from '../../models/serializePrintOperation';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {PrintOperationItemRequestBuilder} from './item/printOperationItemRequestBuilder';
import {OperationsRequestBuilderGetRequestConfiguration} from './operationsRequestBuilderGetRequestConfiguration';
import {OperationsRequestBuilderPostRequestConfiguration} from './operationsRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the operations property of the microsoft.graph.print entity.
 */
export class OperationsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the operations property of the microsoft.graph.print entity.
     * @param printOperationId The unique identifier of printOperation
     * @returns a PrintOperationItemRequestBuilder
     */
    public byPrintOperationId(printOperationId: string) : PrintOperationItemRequestBuilder {
        if(!printOperationId) throw new Error("printOperationId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["printOperation%2Did"] = printOperationId
        return new PrintOperationItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new OperationsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/print/operations{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Retrieve the properties and relationships of a printOperation object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of PrintOperationCollectionResponse
     */
    public get(requestConfiguration?: OperationsRequestBuilderGetRequestConfiguration | undefined) : Promise<PrintOperationCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<PrintOperationCollectionResponse>(requestInfo, createPrintOperationCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to operations for print
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of PrintOperation
     */
    public post(body: PrintOperation, requestConfiguration?: OperationsRequestBuilderPostRequestConfiguration | undefined) : Promise<PrintOperation | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<PrintOperation>(requestInfo, createPrintOperationFromDiscriminatorValue, errorMapping);
    };
    /**
     * Retrieve the properties and relationships of a printOperation object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: OperationsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to operations for print
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: PrintOperation, requestConfiguration?: OperationsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializePrintOperation);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a operationsRequestBuilder
     */
    public withUrl(rawUrl: string) : OperationsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new OperationsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
