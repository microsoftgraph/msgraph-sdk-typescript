import { createWorkbookFunctionResultFromDiscriminatorValue } from '../../../../../../../models/createWorkbookFunctionResultFromDiscriminatorValue';
import { deserializeIntoWorkbookFunctionResult } from '../../../../../../../models/deserializeIntoWorkbookFunctionResult';
import { type ODataError } from '../../../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../../../../models/oDataErrors/serializeODataError';
import { serializeWorkbookFunctionResult } from '../../../../../../../models/serializeWorkbookFunctionResult';
import { type WorkbookFunctionResult } from '../../../../../../../models/workbookFunctionResult';
import { deserializeIntoLargePostRequestBody } from './deserializeIntoLargePostRequestBody';
import { type LargePostRequestBody } from './largePostRequestBody';
import { type LargeRequestBuilderPostRequestConfiguration } from './largeRequestBuilderPostRequestConfiguration';
import { serializeLargePostRequestBody } from './serializeLargePostRequestBody';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the large method.
 */
export class LargeRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new LargeRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/functions/large");
    };
    /**
     * Invoke action large
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WorkbookFunctionResult
     */
    public post(body: LargePostRequestBody, requestConfiguration?: LargeRequestBuilderPostRequestConfiguration | undefined) : Promise<WorkbookFunctionResult | undefined> {
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
     * Invoke action large
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: LargePostRequestBody, requestConfiguration?: LargeRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeLargePostRequestBody);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a largeRequestBuilder
     */
    public withUrl(rawUrl: string) : LargeRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new LargeRequestBuilder(rawUrl, this.requestAdapter);
    };
}
