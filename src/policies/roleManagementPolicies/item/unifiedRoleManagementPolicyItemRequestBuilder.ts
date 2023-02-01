import {UnifiedRoleManagementPolicy} from '../../../models/';
import {createUnifiedRoleManagementPolicyFromDiscriminatorValue} from '../../../models/createUnifiedRoleManagementPolicyFromDiscriminatorValue';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {EffectiveRulesRequestBuilder} from './effectiveRules/effectiveRulesRequestBuilder';
import {UnifiedRoleManagementPolicyRuleItemRequestBuilder as Ic6f793d374160642c2768dc2f8671aa9a06b7f3811c80234f6e9d5cc58f5a0ba} from './effectiveRules/item/unifiedRoleManagementPolicyRuleItemRequestBuilder';
import {UnifiedRoleManagementPolicyRuleItemRequestBuilder as I4ae2fbd1842d4f5f7e2d464a244d1228c38ab27331849285a85c0173edbf44da} from './rules/item/unifiedRoleManagementPolicyRuleItemRequestBuilder';
import {RulesRequestBuilder} from './rules/rulesRequestBuilder';
import {UnifiedRoleManagementPolicyItemRequestBuilderDeleteRequestConfiguration} from './unifiedRoleManagementPolicyItemRequestBuilderDeleteRequestConfiguration';
import {UnifiedRoleManagementPolicyItemRequestBuilderGetRequestConfiguration} from './unifiedRoleManagementPolicyItemRequestBuilderGetRequestConfiguration';
import {UnifiedRoleManagementPolicyItemRequestBuilderPatchRequestConfiguration} from './unifiedRoleManagementPolicyItemRequestBuilderPatchRequestConfiguration';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the roleManagementPolicies property of the microsoft.graph.policyRoot entity.
 */
export class UnifiedRoleManagementPolicyItemRequestBuilder {
    /** Provides operations to manage the effectiveRules property of the microsoft.graph.unifiedRoleManagementPolicy entity. */
    public get effectiveRules(): EffectiveRulesRequestBuilder {
        return new EffectiveRulesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private requestAdapter: RequestAdapter;
    /** Provides operations to manage the rules property of the microsoft.graph.unifiedRoleManagementPolicy entity. */
    public get rules(): RulesRequestBuilder {
        return new RulesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder */
    private urlTemplate: string;
    /**
     * Instantiates a new UnifiedRoleManagementPolicyItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     * @param unifiedRoleManagementPolicyId key: id of unifiedRoleManagementPolicy
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter, unifiedRoleManagementPolicyId?: string | undefined) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/policies/roleManagementPolicies/{unifiedRoleManagementPolicy%2Did}{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        urlTplParams["unifiedRoleManagementPolicy%2Did"] = unifiedRoleManagementPolicyId
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete navigation property roleManagementPolicies for policies
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: UnifiedRoleManagementPolicyItemRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.toDeleteRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Provides operations to manage the effectiveRules property of the microsoft.graph.unifiedRoleManagementPolicy entity.
     * @param id Unique identifier of the item
     * @returns a UnifiedRoleManagementPolicyRuleItemRequestBuilder
     */
    public effectiveRulesById(id: string) : Ic6f793d374160642c2768dc2f8671aa9a06b7f3811c80234f6e9d5cc58f5a0ba {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["unifiedRoleManagementPolicyRule%2Did"] = id
        return new Ic6f793d374160642c2768dc2f8671aa9a06b7f3811c80234f6e9d5cc58f5a0ba(urlTplParams, this.requestAdapter);
    };
    /**
     * Specifies the various policies associated with scopes and roles.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of UnifiedRoleManagementPolicy
     */
    public get(requestConfiguration?: UnifiedRoleManagementPolicyItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<UnifiedRoleManagementPolicy | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<UnifiedRoleManagementPolicy>(requestInfo, createUnifiedRoleManagementPolicyFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Update the navigation property roleManagementPolicies in policies
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of UnifiedRoleManagementPolicy
     */
    public patch(body: UnifiedRoleManagementPolicy | undefined, requestConfiguration?: UnifiedRoleManagementPolicyItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<UnifiedRoleManagementPolicy | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<UnifiedRoleManagementPolicy>(requestInfo, createUnifiedRoleManagementPolicyFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Provides operations to manage the rules property of the microsoft.graph.unifiedRoleManagementPolicy entity.
     * @param id Unique identifier of the item
     * @returns a UnifiedRoleManagementPolicyRuleItemRequestBuilder
     */
    public rulesById(id: string) : I4ae2fbd1842d4f5f7e2d464a244d1228c38ab27331849285a85c0173edbf44da {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["unifiedRoleManagementPolicyRule%2Did"] = id
        return new I4ae2fbd1842d4f5f7e2d464a244d1228c38ab27331849285a85c0173edbf44da(urlTplParams, this.requestAdapter);
    };
    /**
     * Delete navigation property roleManagementPolicies for policies
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: UnifiedRoleManagementPolicyItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Specifies the various policies associated with scopes and roles.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: UnifiedRoleManagementPolicyItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property roleManagementPolicies in policies
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: UnifiedRoleManagementPolicy | undefined, requestConfiguration?: UnifiedRoleManagementPolicyItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        return requestInfo;
    };
}
