import { type ODataError } from '../../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../../../models/oDataErrors/serializeODataError';
import { type CheckMemberObjectsPostRequestBody } from './checkMemberObjectsPostRequestBody';
import { type CheckMemberObjectsRequestBuilderPostRequestConfiguration } from './checkMemberObjectsRequestBuilderPostRequestConfiguration';
import { type CheckMemberObjectsResponse } from './checkMemberObjectsResponse';
import { createCheckMemberObjectsResponseFromDiscriminatorValue } from './createCheckMemberObjectsResponseFromDiscriminatorValue';
import { deserializeIntoCheckMemberObjectsPostRequestBody } from './deserializeIntoCheckMemberObjectsPostRequestBody';
import { deserializeIntoCheckMemberObjectsResponse } from './deserializeIntoCheckMemberObjectsResponse';
import { serializeCheckMemberObjectsPostRequestBody } from './serializeCheckMemberObjectsPostRequestBody';
import { serializeCheckMemberObjectsResponse } from './serializeCheckMemberObjectsResponse';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the checkMemberObjects method.
 */
export class CheckMemberObjectsRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new CheckMemberObjectsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/groups/{group%2Did}/team/permissionGrants/{resourceSpecificPermissionGrant%2Did}/checkMemberObjects");
    };
    /**
     * Invoke action checkMemberObjects
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of CheckMemberObjectsResponse
     */
    public post(body: CheckMemberObjectsPostRequestBody, requestConfiguration?: CheckMemberObjectsRequestBuilderPostRequestConfiguration | undefined) : Promise<CheckMemberObjectsResponse | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<CheckMemberObjectsResponse>(requestInfo, createCheckMemberObjectsResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Invoke action checkMemberObjects
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: CheckMemberObjectsPostRequestBody, requestConfiguration?: CheckMemberObjectsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeCheckMemberObjectsPostRequestBody);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a checkMemberObjectsRequestBuilder
     */
    public withUrl(rawUrl: string) : CheckMemberObjectsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new CheckMemberObjectsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
