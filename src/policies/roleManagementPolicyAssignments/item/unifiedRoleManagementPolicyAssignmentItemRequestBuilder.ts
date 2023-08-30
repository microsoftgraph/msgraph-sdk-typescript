import {createUnifiedRoleManagementPolicyAssignmentFromDiscriminatorValue} from '../../../models/createUnifiedRoleManagementPolicyAssignmentFromDiscriminatorValue';
import {deserializeIntoUnifiedRoleManagementPolicyAssignment} from '../../../models/deserializeIntoUnifiedRoleManagementPolicyAssignment';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {serializeUnifiedRoleManagementPolicyAssignment} from '../../../models/serializeUnifiedRoleManagementPolicyAssignment';
import type {UnifiedRoleManagementPolicyAssignment} from '../../../models/unifiedRoleManagementPolicyAssignment';
import {PolicyRequestBuilder} from './policy/policyRequestBuilder';
import {UnifiedRoleManagementPolicyAssignmentItemRequestBuilderDeleteRequestConfiguration} from './unifiedRoleManagementPolicyAssignmentItemRequestBuilderDeleteRequestConfiguration';
import {UnifiedRoleManagementPolicyAssignmentItemRequestBuilderGetRequestConfiguration} from './unifiedRoleManagementPolicyAssignmentItemRequestBuilderGetRequestConfiguration';
import {UnifiedRoleManagementPolicyAssignmentItemRequestBuilderPatchRequestConfiguration} from './unifiedRoleManagementPolicyAssignmentItemRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the roleManagementPolicyAssignments property of the microsoft.graph.policyRoot entity.
 */
export class UnifiedRoleManagementPolicyAssignmentItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the policy property of the microsoft.graph.unifiedRoleManagementPolicyAssignment entity.
     */
    public get policy(): PolicyRequestBuilder {
        return new PolicyRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new UnifiedRoleManagementPolicyAssignmentItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/policies/roleManagementPolicyAssignments/{unifiedRoleManagementPolicyAssignment%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property roleManagementPolicyAssignments for policies
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: UnifiedRoleManagementPolicyAssignmentItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
        const requestInfo = this.toDeleteRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendNoResponseContentAsync(requestInfo, errorMapping);
    };
    /**
     * Get the details of a role management policy assignment including the policy and rules associated with the Azure AD role.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UnifiedRoleManagementPolicyAssignment
     * @see {@link https://learn.microsoft.com/graph/api/unifiedrolemanagementpolicyassignment-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: UnifiedRoleManagementPolicyAssignmentItemRequestBuilderGetRequestConfiguration | undefined) : Promise<UnifiedRoleManagementPolicyAssignment | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UnifiedRoleManagementPolicyAssignment>(requestInfo, createUnifiedRoleManagementPolicyAssignmentFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property roleManagementPolicyAssignments in policies
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UnifiedRoleManagementPolicyAssignment
     */
    public patch(body: UnifiedRoleManagementPolicyAssignment, requestConfiguration?: UnifiedRoleManagementPolicyAssignmentItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<UnifiedRoleManagementPolicyAssignment | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UnifiedRoleManagementPolicyAssignment>(requestInfo, createUnifiedRoleManagementPolicyAssignmentFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property roleManagementPolicyAssignments for policies
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: UnifiedRoleManagementPolicyAssignmentItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.DELETE;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * Get the details of a role management policy assignment including the policy and rules associated with the Azure AD role.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: UnifiedRoleManagementPolicyAssignmentItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property roleManagementPolicyAssignments in policies
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: UnifiedRoleManagementPolicyAssignment, requestConfiguration?: UnifiedRoleManagementPolicyAssignmentItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeUnifiedRoleManagementPolicyAssignment);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a UnifiedRoleManagementPolicyAssignmentItemRequestBuilder
     */
    public withUrl(rawUrl: string) : UnifiedRoleManagementPolicyAssignmentItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new UnifiedRoleManagementPolicyAssignmentItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
