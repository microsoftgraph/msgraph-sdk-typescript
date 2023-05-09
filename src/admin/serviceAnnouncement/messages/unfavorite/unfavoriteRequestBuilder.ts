import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {createUnfavoriteResponseFromDiscriminatorValue} from './createUnfavoriteResponseFromDiscriminatorValue';
import {deserializeIntoUnfavoritePostRequestBody} from './deserializeIntoUnfavoritePostRequestBody';
import {deserializeIntoUnfavoriteResponse} from './deserializeIntoUnfavoriteResponse';
import {serializeUnfavoritePostRequestBody} from './serializeUnfavoritePostRequestBody';
import {serializeUnfavoriteResponse} from './serializeUnfavoriteResponse';
import {UnfavoritePostRequestBody} from './unfavoritePostRequestBody';
import {UnfavoriteRequestBuilderPostRequestConfiguration} from './unfavoriteRequestBuilderPostRequestConfiguration';
import {UnfavoriteResponse} from './unfavoriteResponse';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

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
     * Invoke action unfavorite
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of UnfavoriteResponse
     */
    public post(body: UnfavoritePostRequestBody | undefined, requestConfiguration?: UnfavoriteRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<UnfavoriteResponse | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<UnfavoriteResponse>(requestInfo, createUnfavoriteResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Invoke action unfavorite
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: UnfavoritePostRequestBody | undefined, requestConfiguration?: UnfavoriteRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeUnfavoritePostRequestBody);
        return requestInfo;
    };
}
