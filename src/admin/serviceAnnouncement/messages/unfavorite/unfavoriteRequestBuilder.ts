import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {createUnfavoriteResponseFromDiscriminatorValue} from './createUnfavoriteResponseFromDiscriminatorValue';
import {deserializeIntoUnfavoritePostRequestBody} from './deserializeIntoUnfavoritePostRequestBody';
import {deserializeIntoUnfavoriteResponse} from './deserializeIntoUnfavoriteResponse';
import {serializeUnfavoritePostRequestBody} from './serializeUnfavoritePostRequestBody';
import {serializeUnfavoriteResponse} from './serializeUnfavoriteResponse';
import type {UnfavoritePostRequestBody} from './unfavoritePostRequestBody';
import {UnfavoriteRequestBuilderPostRequestConfiguration} from './unfavoriteRequestBuilderPostRequestConfiguration';
import type {UnfavoriteResponse} from './unfavoriteResponse';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the unfavorite method.
 */
export class UnfavoriteRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new UnfavoriteRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/admin/serviceAnnouncement/messages/unfavorite");
    };
    /**
     * Remove the favorite status of serviceUpdateMessages for the signed in user.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UnfavoriteResponse
     * @see {@link https://learn.microsoft.com/graph/api/serviceupdatemessage-unfavorite?view=graph-rest-1.0|Find more info here}
     */
    public post(body: UnfavoritePostRequestBody, requestConfiguration?: UnfavoriteRequestBuilderPostRequestConfiguration | undefined) : Promise<UnfavoriteResponse | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UnfavoriteResponse>(requestInfo, createUnfavoriteResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Remove the favorite status of serviceUpdateMessages for the signed in user.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: UnfavoritePostRequestBody, requestConfiguration?: UnfavoriteRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeUnfavoritePostRequestBody);
        return requestInfo;
    };
}
