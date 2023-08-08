import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import {createGetMailTipsResponseFromDiscriminatorValue} from './createGetMailTipsResponseFromDiscriminatorValue';
import {deserializeIntoGetMailTipsPostRequestBody} from './deserializeIntoGetMailTipsPostRequestBody';
import {deserializeIntoGetMailTipsResponse} from './deserializeIntoGetMailTipsResponse';
import type {GetMailTipsPostRequestBody} from './getMailTipsPostRequestBody';
import {GetMailTipsRequestBuilderPostRequestConfiguration} from './getMailTipsRequestBuilderPostRequestConfiguration';
import type {GetMailTipsResponse} from './getMailTipsResponse';
import {serializeGetMailTipsPostRequestBody} from './serializeGetMailTipsPostRequestBody';
import {serializeGetMailTipsResponse} from './serializeGetMailTipsResponse';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the getMailTips method.
 */
export class GetMailTipsRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new GetMailTipsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/me/getMailTips");
    };
    /**
     * Get the MailTips of one or more recipients as available to the signed-in user. Note that by making a POST call to the getMailTips action, you can request specific types of MailTips to be returned for more than one recipient at one time. The requested MailTips are returned in a mailTips collection.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of GetMailTipsResponse
     * @see {@link https://learn.microsoft.com/graph/api/user-getmailtips?view=graph-rest-1.0|Find more info here}
     */
    public post(body: GetMailTipsPostRequestBody, requestConfiguration?: GetMailTipsRequestBuilderPostRequestConfiguration | undefined) : Promise<GetMailTipsResponse | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<GetMailTipsResponse>(requestInfo, createGetMailTipsResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get the MailTips of one or more recipients as available to the signed-in user. Note that by making a POST call to the getMailTips action, you can request specific types of MailTips to be returned for more than one recipient at one time. The requested MailTips are returned in a mailTips collection.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: GetMailTipsPostRequestBody, requestConfiguration?: GetMailTipsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeGetMailTipsPostRequestBody);
        return requestInfo;
    };
}
