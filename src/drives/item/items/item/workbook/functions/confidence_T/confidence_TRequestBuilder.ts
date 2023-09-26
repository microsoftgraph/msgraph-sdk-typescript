import { type ODataError } from '../../../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../../../../../models/oDataErrors/oDataError';
import { createWorkbookFunctionResultFromDiscriminatorValue, deserializeIntoWorkbookFunctionResult, serializeWorkbookFunctionResult, type WorkbookFunctionResult } from '../../../../../../../models/workbookFunctionResult';
import { deserializeIntoConfidence_TPostRequestBody, serializeConfidence_TPostRequestBody, type Confidence_TPostRequestBody } from './confidence_TPostRequestBody';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface Confidence_TRequestBuilderPostRequestConfiguration {
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
 * Provides operations to call the confidence_T method.
 */
export class Confidence_TRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new Confidence_TRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/functions/confidence_T");
    };
    /**
     * Invoke action confidence_T
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WorkbookFunctionResult
     */
    public post(body: Confidence_TPostRequestBody, requestConfiguration?: Confidence_TRequestBuilderPostRequestConfiguration | undefined) : Promise<WorkbookFunctionResult | undefined> {
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
     * Invoke action confidence_T
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: Confidence_TPostRequestBody, requestConfiguration?: Confidence_TRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeConfidence_TPostRequestBody);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a confidence_TRequestBuilder
     */
    public withUrl(rawUrl: string) : Confidence_TRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new Confidence_TRequestBuilder(rawUrl, this.requestAdapter);
    };
}
