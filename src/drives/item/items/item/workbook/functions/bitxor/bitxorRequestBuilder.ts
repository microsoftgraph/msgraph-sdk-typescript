import { type ODataError } from '../../../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../../../../../models/oDataErrors/oDataError';
import { createWorkbookFunctionResultFromDiscriminatorValue, deserializeIntoWorkbookFunctionResult, serializeWorkbookFunctionResult, type WorkbookFunctionResult } from '../../../../../../../models/workbookFunctionResult';
import { deserializeIntoBitxorPostRequestBody, serializeBitxorPostRequestBody, type BitxorPostRequestBody } from './bitxorPostRequestBody';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface BitxorRequestBuilderPostRequestConfiguration {
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
 * Provides operations to call the bitxor method.
 */
export class BitxorRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new BitxorRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/functions/bitxor");
    };
    /**
     * Invoke action bitxor
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WorkbookFunctionResult
     */
    public post(body: BitxorPostRequestBody, requestConfiguration?: BitxorRequestBuilderPostRequestConfiguration | undefined) : Promise<WorkbookFunctionResult | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<WorkbookFunctionResult>(requestInfo, createWorkbookFunctionResultFromDiscriminatorValue, errorMapping);
    };
    /**
     * Invoke action bitxor
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: BitxorPostRequestBody, requestConfiguration?: BitxorRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeBitxorPostRequestBody);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a bitxorRequestBuilder
     */
    public withUrl(rawUrl: string) : BitxorRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new BitxorRequestBuilder(rawUrl, this.requestAdapter);
    };
}
