import { createWorkbookFunctionResultFromDiscriminatorValue } from '../../../../../../../models/createWorkbookFunctionResultFromDiscriminatorValue';
import { deserializeIntoWorkbookFunctionResult } from '../../../../../../../models/deserializeIntoWorkbookFunctionResult';
import { type ODataError } from '../../../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../../../../models/oDataErrors/serializeODataError';
import { serializeWorkbookFunctionResult } from '../../../../../../../models/serializeWorkbookFunctionResult';
import { type WorkbookFunctionResult } from '../../../../../../../models/workbookFunctionResult';
import { deserializeIntoFisherPostRequestBody } from './deserializeIntoFisherPostRequestBody';
import { type FisherPostRequestBody } from './fisherPostRequestBody';
import { type FisherRequestBuilderPostRequestConfiguration } from './fisherRequestBuilderPostRequestConfiguration';
import { serializeFisherPostRequestBody } from './serializeFisherPostRequestBody';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the fisher method.
 */
export class FisherRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new FisherRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/functions/fisher");
    };
    /**
     * Invoke action fisher
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WorkbookFunctionResult
     */
    public post(body: FisherPostRequestBody, requestConfiguration?: FisherRequestBuilderPostRequestConfiguration | undefined) : Promise<WorkbookFunctionResult | undefined> {
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
     * Invoke action fisher
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: FisherPostRequestBody, requestConfiguration?: FisherRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeFisherPostRequestBody);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a fisherRequestBuilder
     */
    public withUrl(rawUrl: string) : FisherRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new FisherRequestBuilder(rawUrl, this.requestAdapter);
    };
}
