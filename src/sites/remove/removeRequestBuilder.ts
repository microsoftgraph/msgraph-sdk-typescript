import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import {createRemoveResponseFromDiscriminatorValue} from './createRemoveResponseFromDiscriminatorValue';
import {deserializeIntoRemovePostRequestBody} from './deserializeIntoRemovePostRequestBody';
import {deserializeIntoRemoveResponse} from './deserializeIntoRemoveResponse';
import type {RemovePostRequestBody} from './removePostRequestBody';
import {RemoveRequestBuilderPostRequestConfiguration} from './removeRequestBuilderPostRequestConfiguration';
import type {RemoveResponse} from './removeResponse';
import {serializeRemovePostRequestBody} from './serializeRemovePostRequestBody';
import {serializeRemoveResponse} from './serializeRemoveResponse';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the remove method.
 */
export class RemoveRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new RemoveRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/sites/remove");
    };
    /**
     * Unfollow a user's site or multiple sites.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of RemoveResponse
     * @see {@link https://learn.microsoft.com/graph/api/site-unfollow?view=graph-rest-1.0|Find more info here}
     */
    public post(body: RemovePostRequestBody, requestConfiguration?: RemoveRequestBuilderPostRequestConfiguration | undefined) : Promise<RemoveResponse | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<RemoveResponse>(requestInfo, createRemoveResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Unfollow a user's site or multiple sites.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: RemovePostRequestBody, requestConfiguration?: RemoveRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeRemovePostRequestBody);
        return requestInfo;
    };
}
