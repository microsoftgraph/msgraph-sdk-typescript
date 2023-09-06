import { type ODataError } from '../../../../../../../../../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../../../../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../../../../../../../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../../../../../../../../../../models/oDataErrors/serializeODataError';
import { type ApplyTopPercentFilterPostRequestBody } from './applyTopPercentFilterPostRequestBody';
import { type ApplyTopPercentFilterRequestBuilderPostRequestConfiguration } from './applyTopPercentFilterRequestBuilderPostRequestConfiguration';
import { deserializeIntoApplyTopPercentFilterPostRequestBody } from './deserializeIntoApplyTopPercentFilterPostRequestBody';
import { serializeApplyTopPercentFilterPostRequestBody } from './serializeApplyTopPercentFilterPostRequestBody';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the applyTopPercentFilter method.
 */
export class ApplyTopPercentFilterRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new ApplyTopPercentFilterRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/worksheets/{workbookWorksheet%2Did}/tables/{workbookTable%2Did}/columns/{workbookTableColumn%2Did}/filter/applyTopPercentFilter");
    };
    /**
     * Invoke action applyTopPercentFilter
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public post(body: ApplyTopPercentFilterPostRequestBody, requestConfiguration?: ApplyTopPercentFilterRequestBuilderPostRequestConfiguration | undefined) : Promise<void> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendNoResponseContentAsync(requestInfo, errorMapping);
    };
    /**
     * Invoke action applyTopPercentFilter
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: ApplyTopPercentFilterPostRequestBody, requestConfiguration?: ApplyTopPercentFilterRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.POST;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeApplyTopPercentFilterPostRequestBody);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a applyTopPercentFilterRequestBuilder
     */
    public withUrl(rawUrl: string) : ApplyTopPercentFilterRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new ApplyTopPercentFilterRequestBuilder(rawUrl, this.requestAdapter);
    };
}
