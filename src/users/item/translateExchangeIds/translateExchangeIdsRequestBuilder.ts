import { type ODataError } from '../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../models/oDataErrors/oDataError';
import { deserializeIntoTranslateExchangeIdsPostRequestBody, serializeTranslateExchangeIdsPostRequestBody, type TranslateExchangeIdsPostRequestBody } from './translateExchangeIdsPostRequestBody';
import { createTranslateExchangeIdsResponseFromDiscriminatorValue, deserializeIntoTranslateExchangeIdsResponse, serializeTranslateExchangeIdsResponse, type TranslateExchangeIdsResponse } from './translateExchangeIdsResponse';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface TranslateExchangeIdsRequestBuilderPostRequestConfiguration {
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
 * Provides operations to call the translateExchangeIds method.
 */
export class TranslateExchangeIdsRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new TranslateExchangeIdsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/users/{user%2Did}/translateExchangeIds");
    };
    /**
     * Translate identifiers of Outlook-related resources between formats.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of TranslateExchangeIdsResponse
     * @see {@link https://learn.microsoft.com/graph/api/user-translateexchangeids?view=graph-rest-1.0|Find more info here}
     */
    public post(body: TranslateExchangeIdsPostRequestBody, requestConfiguration?: TranslateExchangeIdsRequestBuilderPostRequestConfiguration | undefined) : Promise<TranslateExchangeIdsResponse | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<TranslateExchangeIdsResponse>(requestInfo, createTranslateExchangeIdsResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Translate identifiers of Outlook-related resources between formats.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: TranslateExchangeIdsPostRequestBody, requestConfiguration?: TranslateExchangeIdsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeTranslateExchangeIdsPostRequestBody);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a translateExchangeIdsRequestBuilder
     */
    public withUrl(rawUrl: string) : TranslateExchangeIdsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new TranslateExchangeIdsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
