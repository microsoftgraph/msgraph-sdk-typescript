import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {createMarkReadResponseFromDiscriminatorValue} from './createMarkReadResponseFromDiscriminatorValue';
import {deserializeIntoMarkReadPostRequestBody} from './deserializeIntoMarkReadPostRequestBody';
import {deserializeIntoMarkReadResponse} from './deserializeIntoMarkReadResponse';
import type {MarkReadPostRequestBody} from './markReadPostRequestBody';
import {MarkReadRequestBuilderPostRequestConfiguration} from './markReadRequestBuilderPostRequestConfiguration';
import type {MarkReadResponse} from './markReadResponse';
import {serializeMarkReadPostRequestBody} from './serializeMarkReadPostRequestBody';
import {serializeMarkReadResponse} from './serializeMarkReadResponse';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the markRead method.
 */
export class MarkReadRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new MarkReadRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/admin/serviceAnnouncement/messages/markRead");
    };
    /**
     * Mark a list of serviceUpdateMessages as read for the signed in user.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of MarkReadResponse
     * @see {@link https://learn.microsoft.com/graph/api/serviceupdatemessage-markread?view=graph-rest-1.0|Find more info here}
     */
    public post(body: MarkReadPostRequestBody, requestConfiguration?: MarkReadRequestBuilderPostRequestConfiguration | undefined) : Promise<MarkReadResponse | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<MarkReadResponse>(requestInfo, createMarkReadResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Mark a list of serviceUpdateMessages as read for the signed in user.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: MarkReadPostRequestBody, requestConfiguration?: MarkReadRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeMarkReadPostRequestBody);
        return requestInfo;
    };
}
