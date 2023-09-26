import { type ODataError } from '../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../models/oDataErrors/oDataError';
import { deserializeIntoQueryPostRequestBody, serializeQueryPostRequestBody, type QueryPostRequestBody } from './queryPostRequestBody';
import { createQueryResponseFromDiscriminatorValue, deserializeIntoQueryResponse, serializeQueryResponse, type QueryResponse } from './queryResponse';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface QueryRequestBuilderPostRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
}
/**
 * Provides operations to call the query method.
 */
export class QueryRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new QueryRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/search/query");
    };
    /**
     * Runs the query specified in the request body. Search results are provided in the response.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of QueryResponse
     * @see {@link https://learn.microsoft.com/graph/api/search-query?view=graph-rest-1.0|Find more info here}
     */
    public post(body: QueryPostRequestBody, requestConfiguration?: QueryRequestBuilderPostRequestConfiguration | undefined) : Promise<QueryResponse | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<QueryResponse>(requestInfo, createQueryResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Runs the query specified in the request body. Search results are provided in the response.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: QueryPostRequestBody, requestConfiguration?: QueryRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeQueryPostRequestBody);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a queryRequestBuilder
     */
    public withUrl(rawUrl: string) : QueryRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new QueryRequestBuilder(rawUrl, this.requestAdapter);
    };
}
