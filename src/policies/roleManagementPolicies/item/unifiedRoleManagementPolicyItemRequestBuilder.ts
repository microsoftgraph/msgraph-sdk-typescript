import {UnifiedRoleManagementPolicyImpl} from '../../../models/';
import {createUnifiedRoleManagementPolicyFromDiscriminatorValue} from '../../../models/createUnifiedRoleManagementPolicyFromDiscriminatorValue';
import {ODataErrorImpl} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {UnifiedRoleManagementPolicy} from '../../../models/unifiedRoleManagementPolicy';
import {EffectiveRulesRequestBuilder} from './effectiveRules/effectiveRulesRequestBuilder';
import {UnifiedRoleManagementPolicyRuleItemRequestBuilder as ia903ab73bbb020238a677619a7cd9f549acabe28c93f299fe5dfcbed6c61ca54} from './effectiveRules/item/unifiedRoleManagementPolicyRuleItemRequestBuilder';
import {UnifiedRoleManagementPolicyRuleItemRequestBuilder as i596d7869117d1be6d9b9de4f9cbb8dfb117db4762c7189856165170e7c929fb4} from './rules/item/unifiedRoleManagementPolicyRuleItemRequestBuilder';
import {RulesRequestBuilder} from './rules/rulesRequestBuilder';
import {UnifiedRoleManagementPolicyItemRequestBuilderDeleteRequestConfiguration} from './unifiedRoleManagementPolicyItemRequestBuilderDeleteRequestConfiguration';
import {UnifiedRoleManagementPolicyItemRequestBuilderGetRequestConfiguration} from './unifiedRoleManagementPolicyItemRequestBuilderGetRequestConfiguration';
import {UnifiedRoleManagementPolicyItemRequestBuilderPatchRequestConfiguration} from './unifiedRoleManagementPolicyItemRequestBuilderPatchRequestConfiguration';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the roleManagementPolicies property of the microsoft.graph.policyRoot entity. */
export class UnifiedRoleManagementPolicyItemRequestBuilder {
    /** The effectiveRules property */
    public get effectiveRules(): EffectiveRulesRequestBuilder {
        return new EffectiveRulesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** The rules property */
    public get rules(): RulesRequestBuilder {
        return new RulesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /**
     * Instantiates a new UnifiedRoleManagementPolicyItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/policies/roleManagementPolicies/{unifiedRoleManagementPolicy%2Did}{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete navigation property roleManagementPolicies for policies
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(requestConfiguration?: UnifiedRoleManagementPolicyItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Represents the role management policies.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: UnifiedRoleManagementPolicyItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.setQueryStringParametersFromRawObject(requestConfiguration.queryParameters);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * Update the navigation property roleManagementPolicies in policies
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: UnifiedRoleManagementPolicy | undefined, requestConfiguration?: UnifiedRoleManagementPolicyItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        const parsableBody = new UnifiedRoleManagementPolicyImpl(body)
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", parsableBody);
        return requestInfo;
    };
    /**
     * Delete navigation property roleManagementPolicies for policies
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: UnifiedRoleManagementPolicyItemRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the MicrosoftGraph.policies.roleManagementPolicies.item.effectiveRules.item collection
     * @param id Unique identifier of the item
     * @returns a unifiedRoleManagementPolicyRuleItemRequestBuilder
     */
    public effectiveRulesById(id: string) : ia903ab73bbb020238a677619a7cd9f549acabe28c93f299fe5dfcbed6c61ca54 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["unifiedRoleManagementPolicyRule%2Did"] = id
        return new ia903ab73bbb020238a677619a7cd9f549acabe28c93f299fe5dfcbed6c61ca54(urlTplParams, this.requestAdapter);
    };
    /**
     * Represents the role management policies.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of UnifiedRoleManagementPolicy
     */
    public get(requestConfiguration?: UnifiedRoleManagementPolicyItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<UnifiedRoleManagementPolicyImpl | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<UnifiedRoleManagementPolicyImpl>(requestInfo, createUnifiedRoleManagementPolicyFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Update the navigation property roleManagementPolicies in policies
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: UnifiedRoleManagementPolicy | undefined, requestConfiguration?: UnifiedRoleManagementPolicyItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the MicrosoftGraph.policies.roleManagementPolicies.item.rules.item collection
     * @param id Unique identifier of the item
     * @returns a unifiedRoleManagementPolicyRuleItemRequestBuilder
     */
    public rulesById(id: string) : i596d7869117d1be6d9b9de4f9cbb8dfb117db4762c7189856165170e7c929fb4 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["unifiedRoleManagementPolicyRule%2Did"] = id
        return new i596d7869117d1be6d9b9de4f9cbb8dfb117db4762c7189856165170e7c929fb4(urlTplParams, this.requestAdapter);
    };
}
