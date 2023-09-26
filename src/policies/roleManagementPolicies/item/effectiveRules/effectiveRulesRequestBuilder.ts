import { type UnifiedRoleManagementPolicyRuleCollectionResponse } from '../../../../models/';
import { type ODataError } from '../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../../models/oDataErrors/oDataError';
import { createUnifiedRoleManagementPolicyRuleFromDiscriminatorValue, deserializeIntoUnifiedRoleManagementPolicyRule, serializeUnifiedRoleManagementPolicyRule, type UnifiedRoleManagementPolicyRule } from '../../../../models/unifiedRoleManagementPolicyRule';
import { createUnifiedRoleManagementPolicyRuleCollectionResponseFromDiscriminatorValue } from '../../../../models/unifiedRoleManagementPolicyRuleCollectionResponse';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { UnifiedRoleManagementPolicyRuleItemRequestBuilder } from './item/unifiedRoleManagementPolicyRuleItemRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface EffectiveRulesRequestBuilderGetQueryParameters {
    /**
     * Include count of items
     */
    count?: boolean;
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Filter items by property values
     */
    filter?: string;
    /**
     * Order items by property values
     */
    orderby?: string[];
    /**
     * Search items by search phrases
     */
    search?: string;
    /**
     * Select properties to be returned
     */
    select?: string[];
    /**
     * Skip the first n items
     */
    skip?: number;
    /**
     * Show only the first n items
     */
    top?: number;
}
export interface EffectiveRulesRequestBuilderGetRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
    /**
     * Request query parameters
     */
    queryParameters?: EffectiveRulesRequestBuilderGetQueryParameters;
}
export interface EffectiveRulesRequestBuilderPostRequestConfiguration {
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
 * Provides operations to manage the effectiveRules property of the microsoft.graph.unifiedRoleManagementPolicy entity.
 */
export class EffectiveRulesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the effectiveRules property of the microsoft.graph.unifiedRoleManagementPolicy entity.
     * @param unifiedRoleManagementPolicyRuleId The unique identifier of unifiedRoleManagementPolicyRule
     * @returns a UnifiedRoleManagementPolicyRuleItemRequestBuilder
     */
    public byUnifiedRoleManagementPolicyRuleId(unifiedRoleManagementPolicyRuleId: string) : UnifiedRoleManagementPolicyRuleItemRequestBuilder {
        if(!unifiedRoleManagementPolicyRuleId) throw new Error("unifiedRoleManagementPolicyRuleId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["unifiedRoleManagementPolicyRule%2Did"] = unifiedRoleManagementPolicyRuleId
        return new UnifiedRoleManagementPolicyRuleItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new EffectiveRulesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/policies/roleManagementPolicies/{unifiedRoleManagementPolicy%2Did}/effectiveRules{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * The list of effective rules like approval rules and expiration rules evaluated based on inherited referenced rules. For example, if there is a tenant-wide policy to enforce enabling an approval rule, the effective rule will be to enable approval even if the policy has a rule to disable approval. Supports $expand.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UnifiedRoleManagementPolicyRuleCollectionResponse
     */
    public get(requestConfiguration?: EffectiveRulesRequestBuilderGetRequestConfiguration | undefined) : Promise<UnifiedRoleManagementPolicyRuleCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UnifiedRoleManagementPolicyRuleCollectionResponse>(requestInfo, createUnifiedRoleManagementPolicyRuleCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to effectiveRules for policies
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UnifiedRoleManagementPolicyRule
     */
    public post(body: UnifiedRoleManagementPolicyRule, requestConfiguration?: EffectiveRulesRequestBuilderPostRequestConfiguration | undefined) : Promise<UnifiedRoleManagementPolicyRule | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UnifiedRoleManagementPolicyRule>(requestInfo, createUnifiedRoleManagementPolicyRuleFromDiscriminatorValue, errorMapping);
    };
    /**
     * The list of effective rules like approval rules and expiration rules evaluated based on inherited referenced rules. For example, if there is a tenant-wide policy to enforce enabling an approval rule, the effective rule will be to enable approval even if the policy has a rule to disable approval. Supports $expand.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: EffectiveRulesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to effectiveRules for policies
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: UnifiedRoleManagementPolicyRule, requestConfiguration?: EffectiveRulesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeUnifiedRoleManagementPolicyRule);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a effectiveRulesRequestBuilder
     */
    public withUrl(rawUrl: string) : EffectiveRulesRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new EffectiveRulesRequestBuilder(rawUrl, this.requestAdapter);
    };
}
