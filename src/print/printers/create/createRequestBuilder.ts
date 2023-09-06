import { type ODataError } from '../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../models/oDataErrors/serializeODataError';
import { type CreatePostRequestBody } from './createPostRequestBody';
import { type CreateRequestBuilderPostRequestConfiguration } from './createRequestBuilderPostRequestConfiguration';
import { deserializeIntoCreatePostRequestBody } from './deserializeIntoCreatePostRequestBody';
import { serializeCreatePostRequestBody } from './serializeCreatePostRequestBody';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the create method.
 */
export class CreateRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new CreateRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/print/printers/create");
    };
    /**
     * Create (register) a printer with the Universal Print service. This is a long-running operation and as such, it returns a printerCreateOperation that can be used to track and verify the registration of the printer. For help creating the required Certificate Signing Request (CSR) for creating printer, see the CSR generation code sample.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/printer-create?view=graph-rest-1.0|Find more info here}
     */
    public post(body: CreatePostRequestBody, requestConfiguration?: CreateRequestBuilderPostRequestConfiguration | undefined) : Promise<void> {
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
     * Create (register) a printer with the Universal Print service. This is a long-running operation and as such, it returns a printerCreateOperation that can be used to track and verify the registration of the printer. For help creating the required Certificate Signing Request (CSR) for creating printer, see the CSR generation code sample.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: CreatePostRequestBody, requestConfiguration?: CreateRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.POST;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeCreatePostRequestBody);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a createRequestBuilder
     */
    public withUrl(rawUrl: string) : CreateRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new CreateRequestBuilder(rawUrl, this.requestAdapter);
    };
}
