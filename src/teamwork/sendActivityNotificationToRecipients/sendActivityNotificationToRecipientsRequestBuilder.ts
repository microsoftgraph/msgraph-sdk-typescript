import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import {deserializeIntoSendActivityNotificationToRecipientsPostRequestBody} from './deserializeIntoSendActivityNotificationToRecipientsPostRequestBody';
import {SendActivityNotificationToRecipientsPostRequestBody} from './sendActivityNotificationToRecipientsPostRequestBody';
import {SendActivityNotificationToRecipientsRequestBuilderPostRequestConfiguration} from './sendActivityNotificationToRecipientsRequestBuilderPostRequestConfiguration';
import {serializeSendActivityNotificationToRecipientsPostRequestBody} from './serializeSendActivityNotificationToRecipientsPostRequestBody';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

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
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @see {@link https://docs.microsoft.com/graph/api/teamwork-sendactivitynotificationtorecipients?view=graph-rest-1.0|Find more info here}
     */
    public post(body: SendActivityNotificationToRecipientsPostRequestBody | undefined, requestConfiguration?: SendActivityNotificationToRecipientsRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Send activity feed notifications to multiple users, in bulk.  For more details about sending notifications and the requirements for doing so, seesending Teams activity notifications.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: SendActivityNotificationToRecipientsPostRequestBody | undefined, requestConfiguration?: SendActivityNotificationToRecipientsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.POST;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeSendActivityNotificationToRecipientsPostRequestBody);
        return requestInfo;
    };
}
