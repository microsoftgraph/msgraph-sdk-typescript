import {UnifiedRoleAssignmentScheduleRequestCollectionResponse} from '../../../models/';
import {createUnifiedRoleAssignmentScheduleRequestCollectionResponseFromDiscriminatorValue} from '../../../models/createUnifiedRoleAssignmentScheduleRequestCollectionResponseFromDiscriminatorValue';
import {createUnifiedRoleAssignmentScheduleRequestFromDiscriminatorValue} from '../../../models/createUnifiedRoleAssignmentScheduleRequestFromDiscriminatorValue';
import {deserializeIntoUnifiedRoleAssignmentScheduleRequest} from '../../../models/deserializeIntoUnifiedRoleAssignmentScheduleRequest';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {serializeUnifiedRoleAssignmentScheduleRequest} from '../../../models/serializeUnifiedRoleAssignmentScheduleRequest';
import type {UnifiedRoleAssignmentScheduleRequest} from '../../../models/unifiedRoleAssignmentScheduleRequest';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {FilterByCurrentUserWithOnRequestBuilder} from './filterByCurrentUserWithOn/filterByCurrentUserWithOnRequestBuilder';
import {UnifiedRoleAssignmentScheduleRequestItemRequestBuilder} from './item/unifiedRoleAssignmentScheduleRequestItemRequestBuilder';
import {RoleAssignmentScheduleRequestsRequestBuilderGetRequestConfiguration} from './roleAssignmentScheduleRequestsRequestBuilderGetRequestConfiguration';
import {RoleAssignmentScheduleRequestsRequestBuilderPostRequestConfiguration} from './roleAssignmentScheduleRequestsRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, getPathParameters} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the roleAssignmentScheduleRequests property of the microsoft.graph.rbacApplication entity.
 */
export class RoleAssignmentScheduleRequestsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the roleAssignmentScheduleRequests property of the microsoft.graph.rbacApplication entity.
     * @param unifiedRoleAssignmentScheduleRequestId Unique identifier of the item
     * @returns a UnifiedRoleAssignmentScheduleRequestItemRequestBuilder
     */
    public byUnifiedRoleAssignmentScheduleRequestId(unifiedRoleAssignmentScheduleRequestId: string) : UnifiedRoleAssignmentScheduleRequestItemRequestBuilder {
        if(!unifiedRoleAssignmentScheduleRequestId) throw new Error("unifiedRoleAssignmentScheduleRequestId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["unifiedRoleAssignmentScheduleRequest%2Did"] = unifiedRoleAssignmentScheduleRequestId
        return new UnifiedRoleAssignmentScheduleRequestItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new RoleAssignmentScheduleRequestsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/roleManagement/entitlementManagement/roleAssignmentScheduleRequests{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Provides operations to call the filterByCurrentUser method.
     * @param on Usage: on='{on}'
     * @returns a filterByCurrentUserWithOnRequestBuilder
     */
    public filterByCurrentUserWithOn(on: string | undefined) : FilterByCurrentUserWithOnRequestBuilder {
        if(!on) throw new Error("on cannot be undefined");
        return new FilterByCurrentUserWithOnRequestBuilder(this.pathParameters, this.requestAdapter, on);
    };
    /**
     * Retrieve the requests for active role assignments to principals. The active assignments include those made through assignments and activation requests, and directly through the role assignments API. The role assignments can be permanently active with or without an expiry date, or temporarily active after user activation of eligible assignments.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UnifiedRoleAssignmentScheduleRequestCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/rbacapplication-list-roleassignmentschedulerequests?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: RoleAssignmentScheduleRequestsRequestBuilderGetRequestConfiguration | undefined) : Promise<UnifiedRoleAssignmentScheduleRequestCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UnifiedRoleAssignmentScheduleRequestCollectionResponse>(requestInfo, createUnifiedRoleAssignmentScheduleRequestCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * In PIM, carry out the following operations through the unifiedRoleAssignmentScheduleRequest object:+ Request active and persistent role assignments for a principal, with or without expiry dates.+ Activate, deactivate, extend, or renew an eligible role assignment for a principal. To call this API to update, renew, and extend assignments for yourself, you must have multi-factor authentication (MFA) enforced, and running the query in a session in which they were challenged for MFA. See Enable per-user Azure AD Multi-Factor Authentication to secure sign-in events.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UnifiedRoleAssignmentScheduleRequest
     * @see {@link https://learn.microsoft.com/graph/api/rbacapplication-post-roleassignmentschedulerequests?view=graph-rest-1.0|Find more info here}
     */
    public post(body: UnifiedRoleAssignmentScheduleRequest | undefined, requestConfiguration?: RoleAssignmentScheduleRequestsRequestBuilderPostRequestConfiguration | undefined) : Promise<UnifiedRoleAssignmentScheduleRequest | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UnifiedRoleAssignmentScheduleRequest>(requestInfo, createUnifiedRoleAssignmentScheduleRequestFromDiscriminatorValue, errorMapping);
    };
    /**
     * Retrieve the requests for active role assignments to principals. The active assignments include those made through assignments and activation requests, and directly through the role assignments API. The role assignments can be permanently active with or without an expiry date, or temporarily active after user activation of eligible assignments.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: RoleAssignmentScheduleRequestsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.setQueryStringParametersFromRawObject(requestConfiguration.queryParameters);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * In PIM, carry out the following operations through the unifiedRoleAssignmentScheduleRequest object:+ Request active and persistent role assignments for a principal, with or without expiry dates.+ Activate, deactivate, extend, or renew an eligible role assignment for a principal. To call this API to update, renew, and extend assignments for yourself, you must have multi-factor authentication (MFA) enforced, and running the query in a session in which they were challenged for MFA. See Enable per-user Azure AD Multi-Factor Authentication to secure sign-in events.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: UnifiedRoleAssignmentScheduleRequest | undefined, requestConfiguration?: RoleAssignmentScheduleRequestsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeUnifiedRoleAssignmentScheduleRequest);
        return requestInfo;
    };
}
