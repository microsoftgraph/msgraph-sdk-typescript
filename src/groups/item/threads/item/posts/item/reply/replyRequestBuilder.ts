import { type ODataError } from '../../../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../../../../models/oDataErrors/serializeODataError';
import { deserializeIntoReplyPostRequestBody } from './deserializeIntoReplyPostRequestBody';
import { type ReplyPostRequestBody } from './replyPostRequestBody';
import { type ReplyRequestBuilderPostRequestConfiguration } from './replyRequestBuilderPostRequestConfiguration';
import { serializeReplyPostRequestBody } from './serializeReplyPostRequestBody';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the reply method.
 */
export class ReplyRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new ReplyRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/groups/{group%2Did}/threads/{conversationThread%2Did}/posts/{post%2Did}/reply");
    };
    /**
     * Reply to a post and add a new post to the specified thread in a group conversation.  You can specify both the parent conversation and thread in the request, or, you can specify just the parent thread without the parent conversation.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/post-reply?view=graph-rest-1.0|Find more info here}
     */
    public post(body: ReplyPostRequestBody, requestConfiguration?: ReplyRequestBuilderPostRequestConfiguration | undefined) : Promise<void> {
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
     * Reply to a post and add a new post to the specified thread in a group conversation.  You can specify both the parent conversation and thread in the request, or, you can specify just the parent thread without the parent conversation.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: ReplyPostRequestBody, requestConfiguration?: ReplyRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.POST;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeReplyPostRequestBody);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a replyRequestBuilder
     */
    public withUrl(rawUrl: string) : ReplyRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new ReplyRequestBuilder(rawUrl, this.requestAdapter);
    };
}
