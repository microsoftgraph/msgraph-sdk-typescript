import {UnifiedRoleManagementPolicyRuleCollectionResponse} from '../../../../models/';
import {createUnifiedRoleManagementPolicyRuleCollectionResponseFromDiscriminatorValue} from '../../../../models/createUnifiedRoleManagementPolicyRuleCollectionResponseFromDiscriminatorValue';
import {createUnifiedRoleManagementPolicyRuleFromDiscriminatorValue} from '../../../../models/createUnifiedRoleManagementPolicyRuleFromDiscriminatorValue';
import {deserializeIntoUnifiedRoleManagementPolicyRule} from '../../../../models/deserializeIntoUnifiedRoleManagementPolicyRule';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {serializeUnifiedRoleManagementPolicyRule} from '../../../../models/serializeUnifiedRoleManagementPolicyRule';
import {UnifiedRoleManagementPolicyRule} from '../../../../models/unifiedRoleManagementPolicyRule';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {UnifiedRoleManagementPolicyRuleItemRequestBuilder} from './item/unifiedRoleManagementPolicyRuleItemRequestBuilder';
import {RulesRequestBuilderGetRequestConfiguration} from './rulesRequestBuilderGetRequestConfiguration';
import {RulesRequestBuilderPostRequestConfiguration} from './rulesRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the rules property of the microsoft.graph.unifiedRoleManagementPolicy entity.
 */
export class RulesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the rules property of the microsoft.graph.unifiedRoleManagementPolicy entity.
     * @param unifiedRoleManagementPolicyRuleId Unique identifier of the item
     * @returns a UnifiedRoleManagementPolicyRuleItemRequestBuilder
     */
    public byUnifiedRoleManagementPolicyRuleId(unifiedRoleManagementPolicyRuleId: string) : UnifiedRoleManagementPolicyRuleItemRequestBuilder {
        if(!unifiedRoleManagementPolicyRuleId) throw new Error("unifiedRoleManagementPolicyRuleId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["unifiedRoleManagementPolicyRule%2Did"] = unifiedRoleManagementPolicyRuleId
        return new UnifiedRoleManagementPolicyRuleItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new RulesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/policies/roleManagementPolicies/{unifiedRoleManagementPolicy%2Did}/rules{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get the rules or settings defined for a role management policy. The rules are a collection of following types that are derived from the unifiedRoleManagementPolicyRule object:+ unifiedRoleManagementPolicyApprovalRule+ unifiedRoleManagementPolicyAuthenticationContextRule+ unifiedRoleManagementPolicyEnablementRule+ unifiedRoleManagementPolicyExpirationRule+ unifiedRoleManagementPolicyNotificationRule
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UnifiedRoleManagementPolicyRuleCollectionResponse
     * @see {@link https://docs.microsoft.com/graph/api/unifiedrolemanagementpolicy-list-rules?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: RulesRequestBuilderGetRequestConfiguration | undefined) : Promise<UnifiedRoleManagementPolicyRuleCollectionResponse | undefined> {
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
     * Create new navigation property to rules for policies
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UnifiedRoleManagementPolicyRule
     */
    public post(body: UnifiedRoleManagementPolicyRule | undefined, requestConfiguration?: RulesRequestBuilderPostRequestConfiguration | undefined) : Promise<UnifiedRoleManagementPolicyRule | undefined> {
        if(!body) throw new Error("body cannot be undefined");
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
     * Get the rules or settings defined for a role management policy. The rules are a collection of following types that are derived from the unifiedRoleManagementPolicyRule object:+ unifiedRoleManagementPolicyApprovalRule+ unifiedRoleManagementPolicyAuthenticationContextRule+ unifiedRoleManagementPolicyEnablementRule+ unifiedRoleManagementPolicyExpirationRule+ unifiedRoleManagementPolicyNotificationRule
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: RulesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to rules for policies
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: UnifiedRoleManagementPolicyRule | undefined, requestConfiguration?: RulesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeUnifiedRoleManagementPolicyRule);
        return requestInfo;
    };
}
