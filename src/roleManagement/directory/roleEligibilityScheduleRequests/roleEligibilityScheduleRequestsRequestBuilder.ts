import { type UnifiedRoleEligibilityScheduleRequestCollectionResponse } from '../../../models/';
import { createUnifiedRoleEligibilityScheduleRequestCollectionResponseFromDiscriminatorValue } from '../../../models/createUnifiedRoleEligibilityScheduleRequestCollectionResponseFromDiscriminatorValue';
import { createUnifiedRoleEligibilityScheduleRequestFromDiscriminatorValue } from '../../../models/createUnifiedRoleEligibilityScheduleRequestFromDiscriminatorValue';
import { deserializeIntoUnifiedRoleEligibilityScheduleRequest } from '../../../models/deserializeIntoUnifiedRoleEligibilityScheduleRequest';
import { type ODataError } from '../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../models/oDataErrors/serializeODataError';
import { serializeUnifiedRoleEligibilityScheduleRequest } from '../../../models/serializeUnifiedRoleEligibilityScheduleRequest';
import { type UnifiedRoleEligibilityScheduleRequest } from '../../../models/unifiedRoleEligibilityScheduleRequest';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { FilterByCurrentUserWithOnRequestBuilder } from './filterByCurrentUserWithOn/filterByCurrentUserWithOnRequestBuilder';
import { UnifiedRoleEligibilityScheduleRequestItemRequestBuilder } from './item/unifiedRoleEligibilityScheduleRequestItemRequestBuilder';
import { type RoleEligibilityScheduleRequestsRequestBuilderGetRequestConfiguration } from './roleEligibilityScheduleRequestsRequestBuilderGetRequestConfiguration';
import { type RoleEligibilityScheduleRequestsRequestBuilderPostRequestConfiguration } from './roleEligibilityScheduleRequestsRequestBuilderPostRequestConfiguration';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the roleEligibilityScheduleRequests property of the microsoft.graph.rbacApplication entity.
 */
export class RoleEligibilityScheduleRequestsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the roleEligibilityScheduleRequests property of the microsoft.graph.rbacApplication entity.
     * @param unifiedRoleEligibilityScheduleRequestId The unique identifier of unifiedRoleEligibilityScheduleRequest
     * @returns a UnifiedRoleEligibilityScheduleRequestItemRequestBuilder
     */
    public byUnifiedRoleEligibilityScheduleRequestId(unifiedRoleEligibilityScheduleRequestId: string) : UnifiedRoleEligibilityScheduleRequestItemRequestBuilder {
        if(!unifiedRoleEligibilityScheduleRequestId) throw new Error("unifiedRoleEligibilityScheduleRequestId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["unifiedRoleEligibilityScheduleRequest%2Did"] = unifiedRoleEligibilityScheduleRequestId
        return new UnifiedRoleEligibilityScheduleRequestItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new RoleEligibilityScheduleRequestsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/roleManagement/directory/roleEligibilityScheduleRequests{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
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
     * In PIM, retrieve the requests for role eligibilities for principals made through the unifiedRoleEligibilityScheduleRequest object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UnifiedRoleEligibilityScheduleRequestCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/rbacapplication-list-roleeligibilityschedulerequests?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: RoleEligibilityScheduleRequestsRequestBuilderGetRequestConfiguration | undefined) : Promise<UnifiedRoleEligibilityScheduleRequestCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UnifiedRoleEligibilityScheduleRequestCollectionResponse>(requestInfo, createUnifiedRoleEligibilityScheduleRequestCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * In PIM, request for a role eligibility for a principal through the unifiedRoleEligibilityScheduleRequest object. This operation allows both admins and eligible users to add, revoke, or extend eligible assignments.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UnifiedRoleEligibilityScheduleRequest
     * @see {@link https://learn.microsoft.com/graph/api/rbacapplication-post-roleeligibilityschedulerequests?view=graph-rest-1.0|Find more info here}
     */
    public post(body: UnifiedRoleEligibilityScheduleRequest, requestConfiguration?: RoleEligibilityScheduleRequestsRequestBuilderPostRequestConfiguration | undefined) : Promise<UnifiedRoleEligibilityScheduleRequest | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UnifiedRoleEligibilityScheduleRequest>(requestInfo, createUnifiedRoleEligibilityScheduleRequestFromDiscriminatorValue, errorMapping);
    };
    /**
     * In PIM, retrieve the requests for role eligibilities for principals made through the unifiedRoleEligibilityScheduleRequest object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: RoleEligibilityScheduleRequestsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * In PIM, request for a role eligibility for a principal through the unifiedRoleEligibilityScheduleRequest object. This operation allows both admins and eligible users to add, revoke, or extend eligible assignments.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: UnifiedRoleEligibilityScheduleRequest, requestConfiguration?: RoleEligibilityScheduleRequestsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeUnifiedRoleEligibilityScheduleRequest);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a roleEligibilityScheduleRequestsRequestBuilder
     */
    public withUrl(rawUrl: string) : RoleEligibilityScheduleRequestsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new RoleEligibilityScheduleRequestsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
