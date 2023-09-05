import { type ODataError } from '../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../models/oDataErrors/serializeODataError';
import { deserializeIntoDismissPostRequestBody } from './deserializeIntoDismissPostRequestBody';
import { type DismissPostRequestBody } from './dismissPostRequestBody';
import { type DismissRequestBuilderPostRequestConfiguration } from './dismissRequestBuilderPostRequestConfiguration';
import { serializeDismissPostRequestBody } from './serializeDismissPostRequestBody';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the dismiss method.
 */
export class DismissRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new DismissRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identityProtection/riskyUsers/dismiss");
    };
    /**
     * Dismiss the risk of one or more riskyUser objects. This action sets the targeted user's risk level to none.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/riskyuser-dismiss?view=graph-rest-1.0|Find more info here}
     */
    public post(body: DismissPostRequestBody, requestConfiguration?: DismissRequestBuilderPostRequestConfiguration | undefined) : Promise<void> {
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
     * Dismiss the risk of one or more riskyUser objects. This action sets the targeted user's risk level to none.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: DismissPostRequestBody, requestConfiguration?: DismissRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.POST;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeDismissPostRequestBody);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a dismissRequestBuilder
     */
    public withUrl(rawUrl: string) : DismissRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new DismissRequestBuilder(rawUrl, this.requestAdapter);
    };
}
