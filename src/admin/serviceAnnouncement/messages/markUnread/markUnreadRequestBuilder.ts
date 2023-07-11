import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {createMarkUnreadResponseFromDiscriminatorValue} from './createMarkUnreadResponseFromDiscriminatorValue';
import {deserializeIntoMarkUnreadPostRequestBody} from './deserializeIntoMarkUnreadPostRequestBody';
import {deserializeIntoMarkUnreadResponse} from './deserializeIntoMarkUnreadResponse';
import {MarkUnreadPostRequestBody} from './markUnreadPostRequestBody';
import {MarkUnreadRequestBuilderPostRequestConfiguration} from './markUnreadRequestBuilderPostRequestConfiguration';
import {MarkUnreadResponse} from './markUnreadResponse';
import {serializeMarkUnreadPostRequestBody} from './serializeMarkUnreadPostRequestBody';
import {serializeMarkUnreadResponse} from './serializeMarkUnreadResponse';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the markUnread method.
 */
export class MarkUnreadRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new MarkUnreadRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/admin/serviceAnnouncement/messages/markUnread");
    };
    /**
     * Mark a list of serviceUpdateMessages as **unread** for the signed in user.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of MarkUnreadResponse
     * @see {@link https://docs.microsoft.com/graph/api/serviceupdatemessage-markunread?view=graph-rest-1.0|Find more info here}
     */
    public post(body: MarkUnreadPostRequestBody | undefined, requestConfiguration?: MarkUnreadRequestBuilderPostRequestConfiguration | undefined) : Promise<MarkUnreadResponse | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<MarkUnreadResponse>(requestInfo, createMarkUnreadResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Mark a list of serviceUpdateMessages as **unread** for the signed in user.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: MarkUnreadPostRequestBody | undefined, requestConfiguration?: MarkUnreadRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeMarkUnreadPostRequestBody);
        return requestInfo;
    };
}
