import { type UnifiedRoleAssignmentCollectionResponse } from '../../../models/';
import { createUnifiedRoleAssignmentCollectionResponseFromDiscriminatorValue } from '../../../models/createUnifiedRoleAssignmentCollectionResponseFromDiscriminatorValue';
import { createUnifiedRoleAssignmentFromDiscriminatorValue } from '../../../models/createUnifiedRoleAssignmentFromDiscriminatorValue';
import { deserializeIntoUnifiedRoleAssignment } from '../../../models/deserializeIntoUnifiedRoleAssignment';
import { type ODataError } from '../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../models/oDataErrors/serializeODataError';
import { serializeUnifiedRoleAssignment } from '../../../models/serializeUnifiedRoleAssignment';
import { type UnifiedRoleAssignment } from '../../../models/unifiedRoleAssignment';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { UnifiedRoleAssignmentItemRequestBuilder } from './item/unifiedRoleAssignmentItemRequestBuilder';
import { type RoleAssignmentsRequestBuilderGetRequestConfiguration } from './roleAssignmentsRequestBuilderGetRequestConfiguration';
import { type RoleAssignmentsRequestBuilderPostRequestConfiguration } from './roleAssignmentsRequestBuilderPostRequestConfiguration';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the roleAssignments property of the microsoft.graph.rbacApplication entity.
 */
export class RoleAssignmentsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the roleAssignments property of the microsoft.graph.rbacApplication entity.
     * @param unifiedRoleAssignmentId The unique identifier of unifiedRoleAssignment
     * @returns a UnifiedRoleAssignmentItemRequestBuilder
     */
    public byUnifiedRoleAssignmentId(unifiedRoleAssignmentId: string) : UnifiedRoleAssignmentItemRequestBuilder {
        if(!unifiedRoleAssignmentId) throw new Error("unifiedRoleAssignmentId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["unifiedRoleAssignment%2Did"] = unifiedRoleAssignmentId
        return new UnifiedRoleAssignmentItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new RoleAssignmentsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/roleManagement/entitlementManagement/roleAssignments{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get a list of unifiedRoleAssignment objects for the RBAC provider. The following RBAC providers are currently supported:- directory (Azure AD)- entitlement management (Azure AD)
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UnifiedRoleAssignmentCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/rbacapplication-list-roleassignments?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: RoleAssignmentsRequestBuilderGetRequestConfiguration | undefined) : Promise<UnifiedRoleAssignmentCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UnifiedRoleAssignmentCollectionResponse>(requestInfo, createUnifiedRoleAssignmentCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new unifiedRoleAssignment object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UnifiedRoleAssignment
     * @see {@link https://learn.microsoft.com/graph/api/rbacapplication-post-roleassignments?view=graph-rest-1.0|Find more info here}
     */
    public post(body: UnifiedRoleAssignment, requestConfiguration?: RoleAssignmentsRequestBuilderPostRequestConfiguration | undefined) : Promise<UnifiedRoleAssignment | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UnifiedRoleAssignment>(requestInfo, createUnifiedRoleAssignmentFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get a list of unifiedRoleAssignment objects for the RBAC provider. The following RBAC providers are currently supported:- directory (Azure AD)- entitlement management (Azure AD)
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: RoleAssignmentsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new unifiedRoleAssignment object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: UnifiedRoleAssignment, requestConfiguration?: RoleAssignmentsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeUnifiedRoleAssignment);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a roleAssignmentsRequestBuilder
     */
    public withUrl(rawUrl: string) : RoleAssignmentsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new RoleAssignmentsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
