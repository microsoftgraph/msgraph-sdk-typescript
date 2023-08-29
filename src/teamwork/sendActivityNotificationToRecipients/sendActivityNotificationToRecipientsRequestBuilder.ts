import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import {deserializeIntoSendActivityNotificationToRecipientsPostRequestBody} from './deserializeIntoSendActivityNotificationToRecipientsPostRequestBody';
import type {SendActivityNotificationToRecipientsPostRequestBody} from './sendActivityNotificationToRecipientsPostRequestBody';
import {SendActivityNotificationToRecipientsRequestBuilderPostRequestConfiguration} from './sendActivityNotificationToRecipientsRequestBuilderPostRequestConfiguration';
import {serializeSendActivityNotificationToRecipientsPostRequestBody} from './serializeSendActivityNotificationToRecipientsPostRequestBody';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the sendActivityNotificationToRecipients method.
 */
export class SendActivityNotificationToRecipientsRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new SendActivityNotificationToRecipientsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/teamwork/sendActivityNotificationToRecipients");
    };
    /**
     * Send activity feed notifications to multiple users, in bulk.  For more details about sending notifications and the requirements for doing so, seesending Teams activity notifications.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/teamwork-sendactivitynotificationtorecipients?view=graph-rest-1.0|Find more info here}
     */
    public post(body: SendActivityNotificationToRecipientsPostRequestBody, requestConfiguration?: SendActivityNotificationToRecipientsRequestBuilderPostRequestConfiguration | undefined) : Promise<void> {
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
     * Send activity feed notifications to multiple users, in bulk.  For more details about sending notifications and the requirements for doing so, seesending Teams activity notifications.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: SendActivityNotificationToRecipientsPostRequestBody, requestConfiguration?: SendActivityNotificationToRecipientsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.POST;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeSendActivityNotificationToRecipientsPostRequestBody);
        return requestInfo;
    };
}
