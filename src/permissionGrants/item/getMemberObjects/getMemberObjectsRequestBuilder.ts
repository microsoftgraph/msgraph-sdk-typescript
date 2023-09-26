import { type ODataError } from '../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../models/oDataErrors/oDataError';
import { deserializeIntoGetMemberObjectsPostRequestBody, serializeGetMemberObjectsPostRequestBody, type GetMemberObjectsPostRequestBody } from './getMemberObjectsPostRequestBody';
import { createGetMemberObjectsResponseFromDiscriminatorValue, deserializeIntoGetMemberObjectsResponse, serializeGetMemberObjectsResponse, type GetMemberObjectsResponse } from './getMemberObjectsResponse';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface GetMemberObjectsRequestBuilderPostRequestConfiguration {
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
 * Provides operations to call the getMemberObjects method.
 */
export class GetMemberObjectsRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new GetMemberObjectsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/permissionGrants/{resourceSpecificPermissionGrant%2Did}/getMemberObjects");
    };
    /**
     * Return all IDs for the groups, administrative units, and directory roles that a user, group, service principal, organizational contact, device, or directory object is a member of. This function is transitive. Note: Only users and role-enabled groups can be members of directory roles.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of GetMemberObjectsResponse
     * @see {@link https://learn.microsoft.com/graph/api/directoryobject-getmemberobjects?view=graph-rest-1.0|Find more info here}
     */
    public post(body: GetMemberObjectsPostRequestBody, requestConfiguration?: GetMemberObjectsRequestBuilderPostRequestConfiguration | undefined) : Promise<GetMemberObjectsResponse | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<GetMemberObjectsResponse>(requestInfo, createGetMemberObjectsResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Return all IDs for the groups, administrative units, and directory roles that a user, group, service principal, organizational contact, device, or directory object is a member of. This function is transitive. Note: Only users and role-enabled groups can be members of directory roles.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: GetMemberObjectsPostRequestBody, requestConfiguration?: GetMemberObjectsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeGetMemberObjectsPostRequestBody);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a getMemberObjectsRequestBuilder
     */
    public withUrl(rawUrl: string) : GetMemberObjectsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new GetMemberObjectsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
