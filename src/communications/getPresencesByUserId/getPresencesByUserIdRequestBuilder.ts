import { type ODataError } from '../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../models/oDataErrors/oDataError';
import { deserializeIntoGetPresencesByUserIdPostRequestBody, serializeGetPresencesByUserIdPostRequestBody, type GetPresencesByUserIdPostRequestBody } from './getPresencesByUserIdPostRequestBody';
import { createGetPresencesByUserIdResponseFromDiscriminatorValue, deserializeIntoGetPresencesByUserIdResponse, serializeGetPresencesByUserIdResponse, type GetPresencesByUserIdResponse } from './getPresencesByUserIdResponse';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface GetPresencesByUserIdRequestBuilderPostRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
}
/**
 * Provides operations to call the getPresencesByUserId method.
 */
export class GetPresencesByUserIdRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new GetPresencesByUserIdRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/communications/getPresencesByUserId");
    };
    /**
     * Get the presence information for multiple users.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of GetPresencesByUserIdResponse
     * @see {@link https://learn.microsoft.com/graph/api/cloudcommunications-getpresencesbyuserid?view=graph-rest-1.0|Find more info here}
     */
    public post(body: GetPresencesByUserIdPostRequestBody, requestConfiguration?: GetPresencesByUserIdRequestBuilderPostRequestConfiguration | undefined) : Promise<GetPresencesByUserIdResponse | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<GetPresencesByUserIdResponse>(requestInfo, createGetPresencesByUserIdResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get the presence information for multiple users.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: GetPresencesByUserIdPostRequestBody, requestConfiguration?: GetPresencesByUserIdRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeGetPresencesByUserIdPostRequestBody);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a getPresencesByUserIdRequestBuilder
     */
    public withUrl(rawUrl: string) : GetPresencesByUserIdRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new GetPresencesByUserIdRequestBuilder(rawUrl, this.requestAdapter);
    };
}
