import { type ODataError } from '../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../models/oDataErrors/serializeODataError';
import { createGetMemberGroupsResponseFromDiscriminatorValue } from './createGetMemberGroupsResponseFromDiscriminatorValue';
import { deserializeIntoGetMemberGroupsPostRequestBody } from './deserializeIntoGetMemberGroupsPostRequestBody';
import { deserializeIntoGetMemberGroupsResponse } from './deserializeIntoGetMemberGroupsResponse';
import { type GetMemberGroupsPostRequestBody } from './getMemberGroupsPostRequestBody';
import { type GetMemberGroupsRequestBuilderPostRequestConfiguration } from './getMemberGroupsRequestBuilderPostRequestConfiguration';
import { type GetMemberGroupsResponse } from './getMemberGroupsResponse';
import { serializeGetMemberGroupsPostRequestBody } from './serializeGetMemberGroupsPostRequestBody';
import { serializeGetMemberGroupsResponse } from './serializeGetMemberGroupsResponse';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the getMemberGroups method.
 */
export class GetMemberGroupsRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new GetMemberGroupsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/contracts/{contract%2Did}/getMemberGroups");
    };
    /**
     * Return all the group IDs for the groups that the specified user, group, service principal, organizational contact, device, or directory object is a member of. This function is transitive. This API returns up to 11,000 group IDs. If more than 11,000 results are available, it returns a 400 Bad Request error with the Directory_ResultSizeLimitExceeded error code. As a workaround, use the List group transitive memberOf API.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of GetMemberGroupsResponse
     * @see {@link https://learn.microsoft.com/graph/api/directoryobject-getmembergroups?view=graph-rest-1.0|Find more info here}
     */
    public post(body: GetMemberGroupsPostRequestBody, requestConfiguration?: GetMemberGroupsRequestBuilderPostRequestConfiguration | undefined) : Promise<GetMemberGroupsResponse | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<GetMemberGroupsResponse>(requestInfo, createGetMemberGroupsResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Return all the group IDs for the groups that the specified user, group, service principal, organizational contact, device, or directory object is a member of. This function is transitive. This API returns up to 11,000 group IDs. If more than 11,000 results are available, it returns a 400 Bad Request error with the Directory_ResultSizeLimitExceeded error code. As a workaround, use the List group transitive memberOf API.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: GetMemberGroupsPostRequestBody, requestConfiguration?: GetMemberGroupsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeGetMemberGroupsPostRequestBody);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a getMemberGroupsRequestBuilder
     */
    public withUrl(rawUrl: string) : GetMemberGroupsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new GetMemberGroupsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
