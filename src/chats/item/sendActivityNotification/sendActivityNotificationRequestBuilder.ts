import { type ODataError } from '../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../models/oDataErrors/serializeODataError';
import { deserializeIntoSendActivityNotificationPostRequestBody } from './deserializeIntoSendActivityNotificationPostRequestBody';
import { type SendActivityNotificationPostRequestBody } from './sendActivityNotificationPostRequestBody';
import { type SendActivityNotificationRequestBuilderPostRequestConfiguration } from './sendActivityNotificationRequestBuilderPostRequestConfiguration';
import { serializeSendActivityNotificationPostRequestBody } from './serializeSendActivityNotificationPostRequestBody';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the sendActivityNotification method.
 */
export class SendActivityNotificationRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new SendActivityNotificationRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/chats/{chat%2Did}/sendActivityNotification");
    };
    /**
     * Send an activity feed notification in scope of a chat. For more details about sending notifications and the requirements for doing so, see sending Teams activity notifications.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/chat-sendactivitynotification?view=graph-rest-1.0|Find more info here}
     */
    public post(body: SendActivityNotificationPostRequestBody, requestConfiguration?: SendActivityNotificationRequestBuilderPostRequestConfiguration | undefined) : Promise<void> {
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
     * Send an activity feed notification in scope of a chat. For more details about sending notifications and the requirements for doing so, see sending Teams activity notifications.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: SendActivityNotificationPostRequestBody, requestConfiguration?: SendActivityNotificationRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.POST;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeSendActivityNotificationPostRequestBody);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a sendActivityNotificationRequestBuilder
     */
    public withUrl(rawUrl: string) : SendActivityNotificationRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new SendActivityNotificationRequestBuilder(rawUrl, this.requestAdapter);
    };
}
