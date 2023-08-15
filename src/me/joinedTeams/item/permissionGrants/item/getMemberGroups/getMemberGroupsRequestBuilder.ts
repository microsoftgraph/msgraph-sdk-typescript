import {ODataError} from '../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../models/oDataErrors/serializeODataError';
import {createGetMemberGroupsResponseFromDiscriminatorValue} from './createGetMemberGroupsResponseFromDiscriminatorValue';
import {deserializeIntoGetMemberGroupsPostRequestBody} from './deserializeIntoGetMemberGroupsPostRequestBody';
import {deserializeIntoGetMemberGroupsResponse} from './deserializeIntoGetMemberGroupsResponse';
import type {GetMemberGroupsPostRequestBody} from './getMemberGroupsPostRequestBody';
import {GetMemberGroupsRequestBuilderPostRequestConfiguration} from './getMemberGroupsRequestBuilderPostRequestConfiguration';
import type {GetMemberGroupsResponse} from './getMemberGroupsResponse';
import {serializeGetMemberGroupsPostRequestBody} from './serializeGetMemberGroupsPostRequestBody';
import {serializeGetMemberGroupsResponse} from './serializeGetMemberGroupsResponse';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';

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
        super(pathParameters, requestAdapter, "{+baseurl}/me/joinedTeams/{team%2Did}/permissionGrants/{resourceSpecificPermissionGrant%2Did}/getMemberGroups");
    };
    /**
     * Return all the group IDs for the groups that the specified user, group, service principal, organizational contact, device, or directory object is a member of. This function is transitive.
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
     * Return all the group IDs for the groups that the specified user, group, service principal, organizational contact, device, or directory object is a member of. This function is transitive.
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
}
