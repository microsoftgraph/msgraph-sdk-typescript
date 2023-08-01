import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../models/oDataErrors/serializeODataError';
import {deserializeIntoMarkChatUnreadForUserPostRequestBody} from './deserializeIntoMarkChatUnreadForUserPostRequestBody';
import type {MarkChatUnreadForUserPostRequestBody} from './markChatUnreadForUserPostRequestBody';
import {MarkChatUnreadForUserRequestBuilderPostRequestConfiguration} from './markChatUnreadForUserRequestBuilderPostRequestConfiguration';
import {serializeMarkChatUnreadForUserPostRequestBody} from './serializeMarkChatUnreadForUserPostRequestBody';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the markChatUnreadForUser method.
 */
export class MarkChatUnreadForUserRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new MarkChatUnreadForUserRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/users/{user%2Did}/chats/{chat%2Did}/markChatUnreadForUser");
    };
    /**
     * Mark a chat as unread for a user.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/chat-markchatunreadforuser?view=graph-rest-1.0|Find more info here}
     */
    public post(body: MarkChatUnreadForUserPostRequestBody | undefined, requestConfiguration?: MarkChatUnreadForUserRequestBuilderPostRequestConfiguration | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
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
     * Mark a chat as unread for a user.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: MarkChatUnreadForUserPostRequestBody | undefined, requestConfiguration?: MarkChatUnreadForUserRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.POST;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeMarkChatUnreadForUserPostRequestBody);
        return requestInfo;
    };
}
