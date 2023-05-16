import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {deserializeIntoSetUserPreferredPresencePostRequestBody} from './deserializeIntoSetUserPreferredPresencePostRequestBody';
import {serializeSetUserPreferredPresencePostRequestBody} from './serializeSetUserPreferredPresencePostRequestBody';
import {SetUserPreferredPresencePostRequestBody} from './setUserPreferredPresencePostRequestBody';
import {SetUserPreferredPresenceRequestBuilderPostRequestConfiguration} from './setUserPreferredPresenceRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the setUserPreferredPresence method.
 */
export class SetUserPreferredPresenceRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new SetUserPreferredPresenceRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/users/{user%2Did}/presence/setUserPreferredPresence");
    };
    /**
     * Set the preferred availability and activity status for a user. If the preferred presence of a user is set, the user's presence shows as the preferred status. Preferred presence takes effect only when at least one presence session exists for the user. Otherwise, the user's presence shows as `Offline`. A presence session is created as a result of a successful setPresence operation, or if the user is signed in on a Microsoft Teams client. For more details, see presence sessions and time-out and expiration.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @see {@link https://docs.microsoft.com/graph/api/presence-setuserpreferredpresence?view=graph-rest-1.0|Find more info here}
     */
    public post(body: SetUserPreferredPresencePostRequestBody | undefined, requestConfiguration?: SetUserPreferredPresenceRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
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
     * Set the preferred availability and activity status for a user. If the preferred presence of a user is set, the user's presence shows as the preferred status. Preferred presence takes effect only when at least one presence session exists for the user. Otherwise, the user's presence shows as `Offline`. A presence session is created as a result of a successful setPresence operation, or if the user is signed in on a Microsoft Teams client. For more details, see presence sessions and time-out and expiration.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: SetUserPreferredPresencePostRequestBody | undefined, requestConfiguration?: SetUserPreferredPresenceRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.POST;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeSetUserPreferredPresencePostRequestBody);
        return requestInfo;
    };
}
