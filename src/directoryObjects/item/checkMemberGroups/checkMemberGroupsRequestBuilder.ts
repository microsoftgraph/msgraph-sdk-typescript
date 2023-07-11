import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {CheckMemberGroupsPostRequestBody} from './checkMemberGroupsPostRequestBody';
import {CheckMemberGroupsRequestBuilderPostRequestConfiguration} from './checkMemberGroupsRequestBuilderPostRequestConfiguration';
import {CheckMemberGroupsResponse} from './checkMemberGroupsResponse';
import {createCheckMemberGroupsResponseFromDiscriminatorValue} from './createCheckMemberGroupsResponseFromDiscriminatorValue';
import {deserializeIntoCheckMemberGroupsPostRequestBody} from './deserializeIntoCheckMemberGroupsPostRequestBody';
import {deserializeIntoCheckMemberGroupsResponse} from './deserializeIntoCheckMemberGroupsResponse';
import {serializeCheckMemberGroupsPostRequestBody} from './serializeCheckMemberGroupsPostRequestBody';
import {serializeCheckMemberGroupsResponse} from './serializeCheckMemberGroupsResponse';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the checkMemberGroups method.
 */
export class CheckMemberGroupsRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new CheckMemberGroupsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/directoryObjects/{directoryObject%2Did}/checkMemberGroups");
    };
    /**
     * Check for membership in a specified list of group IDs, and return from that list those groups (identified by IDs) of which the specified user, group, service principal, organizational contact, device, or directory object is a member. This function is transitive. You can check up to a maximum of 20 groups per request. This function supports all groups provisioned in Azure AD. Because Microsoft 365 groups cannot contain other groups, membership in a Microsoft 365 group is always direct.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of CheckMemberGroupsResponse
     * @see {@link https://docs.microsoft.com/graph/api/directoryobject-checkmembergroups?view=graph-rest-1.0|Find more info here}
     */
    public post(body: CheckMemberGroupsPostRequestBody | undefined, requestConfiguration?: CheckMemberGroupsRequestBuilderPostRequestConfiguration | undefined) : Promise<CheckMemberGroupsResponse | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<CheckMemberGroupsResponse>(requestInfo, createCheckMemberGroupsResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Check for membership in a specified list of group IDs, and return from that list those groups (identified by IDs) of which the specified user, group, service principal, organizational contact, device, or directory object is a member. This function is transitive. You can check up to a maximum of 20 groups per request. This function supports all groups provisioned in Azure AD. Because Microsoft 365 groups cannot contain other groups, membership in a Microsoft 365 group is always direct.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: CheckMemberGroupsPostRequestBody | undefined, requestConfiguration?: CheckMemberGroupsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeCheckMemberGroupsPostRequestBody);
        return requestInfo;
    };
}
