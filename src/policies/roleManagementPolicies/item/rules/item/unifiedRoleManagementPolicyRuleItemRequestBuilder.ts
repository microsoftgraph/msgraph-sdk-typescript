import { createUnifiedRoleManagementPolicyRuleFromDiscriminatorValue } from '../../../../../models/createUnifiedRoleManagementPolicyRuleFromDiscriminatorValue';
import { deserializeIntoUnifiedRoleManagementPolicyRule } from '../../../../../models/deserializeIntoUnifiedRoleManagementPolicyRule';
import { type ODataError } from '../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../../models/oDataErrors/serializeODataError';
import { serializeUnifiedRoleManagementPolicyRule } from '../../../../../models/serializeUnifiedRoleManagementPolicyRule';
import { type UnifiedRoleManagementPolicyRule } from '../../../../../models/unifiedRoleManagementPolicyRule';
import { type UnifiedRoleManagementPolicyRuleItemRequestBuilderDeleteRequestConfiguration } from './unifiedRoleManagementPolicyRuleItemRequestBuilderDeleteRequestConfiguration';
import { type UnifiedRoleManagementPolicyRuleItemRequestBuilderGetRequestConfiguration } from './unifiedRoleManagementPolicyRuleItemRequestBuilderGetRequestConfiguration';
import { type UnifiedRoleManagementPolicyRuleItemRequestBuilderPatchRequestConfiguration } from './unifiedRoleManagementPolicyRuleItemRequestBuilderPatchRequestConfiguration';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the rules property of the microsoft.graph.unifiedRoleManagementPolicy entity.
 */
export class UnifiedRoleManagementPolicyRuleItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new UnifiedRoleManagementPolicyRuleItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/policies/roleManagementPolicies/{unifiedRoleManagementPolicy%2Did}/rules/{unifiedRoleManagementPolicyRule%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property rules for policies
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: UnifiedRoleManagementPolicyRuleItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Retrieve a rule or settings defined for a role management policy. The rule can be one of the following types that are derived from the unifiedRoleManagementPolicyRule object:+ unifiedRoleManagementPolicyApprovalRule+ unifiedRoleManagementPolicyAuthenticationContextRule+ unifiedRoleManagementPolicyEnablementRule+ unifiedRoleManagementPolicyExpirationRule+ unifiedRoleManagementPolicyNotificationRule
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UnifiedRoleManagementPolicyRule
     * @see {@link https://learn.microsoft.com/graph/api/unifiedrolemanagementpolicyrule-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: UnifiedRoleManagementPolicyRuleItemRequestBuilderGetRequestConfiguration | undefined) : Promise<UnifiedRoleManagementPolicyRule | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UnifiedRoleManagementPolicyRule>(requestInfo, createUnifiedRoleManagementPolicyRuleFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update a rule defined for a role management policy. The rule can be one of the following types that are derived from the unifiedRoleManagementPolicyRule object: For more information about rules for Azure AD roles and examples of updating rules, see the following articles:
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UnifiedRoleManagementPolicyRule
     * @see {@link https://learn.microsoft.com/graph/api/unifiedrolemanagementpolicyrule-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: UnifiedRoleManagementPolicyRule, requestConfiguration?: UnifiedRoleManagementPolicyRuleItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<UnifiedRoleManagementPolicyRule | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UnifiedRoleManagementPolicyRule>(requestInfo, createUnifiedRoleManagementPolicyRuleFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property rules for policies
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: UnifiedRoleManagementPolicyRuleItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Retrieve a rule or settings defined for a role management policy. The rule can be one of the following types that are derived from the unifiedRoleManagementPolicyRule object:+ unifiedRoleManagementPolicyApprovalRule+ unifiedRoleManagementPolicyAuthenticationContextRule+ unifiedRoleManagementPolicyEnablementRule+ unifiedRoleManagementPolicyExpirationRule+ unifiedRoleManagementPolicyNotificationRule
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: UnifiedRoleManagementPolicyRuleItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update a rule defined for a role management policy. The rule can be one of the following types that are derived from the unifiedRoleManagementPolicyRule object: For more information about rules for Azure AD roles and examples of updating rules, see the following articles:
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: UnifiedRoleManagementPolicyRule, requestConfiguration?: UnifiedRoleManagementPolicyRuleItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeUnifiedRoleManagementPolicyRule);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a UnifiedRoleManagementPolicyRuleItemRequestBuilder
     */
    public withUrl(rawUrl: string) : UnifiedRoleManagementPolicyRuleItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new UnifiedRoleManagementPolicyRuleItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
