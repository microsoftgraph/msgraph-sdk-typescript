import {PolicyRoot} from '../models/';
import {createPolicyRootFromDiscriminatorValue} from '../models/createPolicyRootFromDiscriminatorValue';
import {ODataError} from '../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {ActivityBasedTimeoutPoliciesRequestBuilder} from './activityBasedTimeoutPolicies/activityBasedTimeoutPoliciesRequestBuilder';
import {ActivityBasedTimeoutPolicyItemRequestBuilder} from './activityBasedTimeoutPolicies/item/activityBasedTimeoutPolicyItemRequestBuilder';
import {AdminConsentRequestPolicyRequestBuilder} from './adminConsentRequestPolicy/adminConsentRequestPolicyRequestBuilder';
import {AuthenticationFlowsPolicyRequestBuilder} from './authenticationFlowsPolicy/authenticationFlowsPolicyRequestBuilder';
import {AuthenticationMethodsPolicyRequestBuilder} from './authenticationMethodsPolicy/authenticationMethodsPolicyRequestBuilder';
import {AuthorizationPolicyRequestBuilder} from './authorizationPolicy/authorizationPolicyRequestBuilder';
import {ClaimsMappingPoliciesRequestBuilder} from './claimsMappingPolicies/claimsMappingPoliciesRequestBuilder';
import {ClaimsMappingPolicyItemRequestBuilder} from './claimsMappingPolicies/item/claimsMappingPolicyItemRequestBuilder';
import {ConditionalAccessPoliciesRequestBuilder} from './conditionalAccessPolicies/conditionalAccessPoliciesRequestBuilder';
import {ConditionalAccessPolicyItemRequestBuilder} from './conditionalAccessPolicies/item/conditionalAccessPolicyItemRequestBuilder';
import {FeatureRolloutPoliciesRequestBuilder} from './featureRolloutPolicies/featureRolloutPoliciesRequestBuilder';
import {FeatureRolloutPolicyItemRequestBuilder} from './featureRolloutPolicies/item/featureRolloutPolicyItemRequestBuilder';
import {HomeRealmDiscoveryPoliciesRequestBuilder} from './homeRealmDiscoveryPolicies/homeRealmDiscoveryPoliciesRequestBuilder';
import {HomeRealmDiscoveryPolicyItemRequestBuilder} from './homeRealmDiscoveryPolicies/item/homeRealmDiscoveryPolicyItemRequestBuilder';
import {IdentitySecurityDefaultsEnforcementPolicyRequestBuilder} from './identitySecurityDefaultsEnforcementPolicy/identitySecurityDefaultsEnforcementPolicyRequestBuilder';
import {PermissionGrantPolicyItemRequestBuilder} from './permissionGrantPolicies/item/permissionGrantPolicyItemRequestBuilder';
import {PermissionGrantPoliciesRequestBuilder} from './permissionGrantPolicies/permissionGrantPoliciesRequestBuilder';
import {PoliciesRequestBuilderGetRequestConfiguration} from './policiesRequestBuilderGetRequestConfiguration';
import {PoliciesRequestBuilderPatchRequestConfiguration} from './policiesRequestBuilderPatchRequestConfiguration';
import {UnifiedRoleManagementPolicyItemRequestBuilder} from './roleManagementPolicies/item/unifiedRoleManagementPolicyItemRequestBuilder';
import {RoleManagementPoliciesRequestBuilder} from './roleManagementPolicies/roleManagementPoliciesRequestBuilder';
import {UnifiedRoleManagementPolicyAssignmentItemRequestBuilder} from './roleManagementPolicyAssignments/item/unifiedRoleManagementPolicyAssignmentItemRequestBuilder';
import {RoleManagementPolicyAssignmentsRequestBuilder} from './roleManagementPolicyAssignments/roleManagementPolicyAssignmentsRequestBuilder';
import {TokenIssuancePolicyItemRequestBuilder} from './tokenIssuancePolicies/item/tokenIssuancePolicyItemRequestBuilder';
import {TokenIssuancePoliciesRequestBuilder} from './tokenIssuancePolicies/tokenIssuancePoliciesRequestBuilder';
import {TokenLifetimePolicyItemRequestBuilder} from './tokenLifetimePolicies/item/tokenLifetimePolicyItemRequestBuilder';
import {TokenLifetimePoliciesRequestBuilder} from './tokenLifetimePolicies/tokenLifetimePoliciesRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the policyRoot singleton. */
export class PoliciesRequestBuilder {
    /** The activityBasedTimeoutPolicies property */
    public get activityBasedTimeoutPolicies(): ActivityBasedTimeoutPoliciesRequestBuilder {
        return new ActivityBasedTimeoutPoliciesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The adminConsentRequestPolicy property */
    public get adminConsentRequestPolicy(): AdminConsentRequestPolicyRequestBuilder {
        return new AdminConsentRequestPolicyRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The authenticationFlowsPolicy property */
    public get authenticationFlowsPolicy(): AuthenticationFlowsPolicyRequestBuilder {
        return new AuthenticationFlowsPolicyRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The authenticationMethodsPolicy property */
    public get authenticationMethodsPolicy(): AuthenticationMethodsPolicyRequestBuilder {
        return new AuthenticationMethodsPolicyRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The authorizationPolicy property */
    public get authorizationPolicy(): AuthorizationPolicyRequestBuilder {
        return new AuthorizationPolicyRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The claimsMappingPolicies property */
    public get claimsMappingPolicies(): ClaimsMappingPoliciesRequestBuilder {
        return new ClaimsMappingPoliciesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The conditionalAccessPolicies property */
    public get conditionalAccessPolicies(): ConditionalAccessPoliciesRequestBuilder {
        return new ConditionalAccessPoliciesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The featureRolloutPolicies property */
    public get featureRolloutPolicies(): FeatureRolloutPoliciesRequestBuilder {
        return new FeatureRolloutPoliciesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The homeRealmDiscoveryPolicies property */
    public get homeRealmDiscoveryPolicies(): HomeRealmDiscoveryPoliciesRequestBuilder {
        return new HomeRealmDiscoveryPoliciesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The identitySecurityDefaultsEnforcementPolicy property */
    public get identitySecurityDefaultsEnforcementPolicy(): IdentitySecurityDefaultsEnforcementPolicyRequestBuilder {
        return new IdentitySecurityDefaultsEnforcementPolicyRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** The permissionGrantPolicies property */
    public get permissionGrantPolicies(): PermissionGrantPoliciesRequestBuilder {
        return new PermissionGrantPoliciesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** The roleManagementPolicies property */
    public get roleManagementPolicies(): RoleManagementPoliciesRequestBuilder {
        return new RoleManagementPoliciesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The roleManagementPolicyAssignments property */
    public get roleManagementPolicyAssignments(): RoleManagementPolicyAssignmentsRequestBuilder {
        return new RoleManagementPolicyAssignmentsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The tokenIssuancePolicies property */
    public get tokenIssuancePolicies(): TokenIssuancePoliciesRequestBuilder {
        return new TokenIssuancePoliciesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The tokenLifetimePolicies property */
    public get tokenLifetimePolicies(): TokenLifetimePoliciesRequestBuilder {
        return new TokenLifetimePoliciesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.policies.activityBasedTimeoutPolicies.item collection
     * @param id Unique identifier of the item
     * @returns a activityBasedTimeoutPolicyItemRequestBuilder
     */
    public activityBasedTimeoutPoliciesById(id: string) : ActivityBasedTimeoutPolicyItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["activityBasedTimeoutPolicy%2Did"] = id
        return new ActivityBasedTimeoutPolicyItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.policies.claimsMappingPolicies.item collection
     * @param id Unique identifier of the item
     * @returns a claimsMappingPolicyItemRequestBuilder
     */
    public claimsMappingPoliciesById(id: string) : ClaimsMappingPolicyItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["claimsMappingPolicy%2Did"] = id
        return new ClaimsMappingPolicyItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.policies.conditionalAccessPolicies.item collection
     * @param id Unique identifier of the item
     * @returns a conditionalAccessPolicyItemRequestBuilder
     */
    public conditionalAccessPoliciesById(id: string) : ConditionalAccessPolicyItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["conditionalAccessPolicy%2Did"] = id
        return new ConditionalAccessPolicyItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new PoliciesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/policies{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Get policies
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: PoliciesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        requestInfo.headers["Accept"] = "application/json";
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.setQueryStringParametersFromRawObject(requestConfiguration.queryParameters);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * Update policies
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: PolicyRoot | undefined, requestConfiguration?: PoliciesRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        return requestInfo;
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.policies.featureRolloutPolicies.item collection
     * @param id Unique identifier of the item
     * @returns a featureRolloutPolicyItemRequestBuilder
     */
    public featureRolloutPoliciesById(id: string) : FeatureRolloutPolicyItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["featureRolloutPolicy%2Did"] = id
        return new FeatureRolloutPolicyItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Get policies
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of PolicyRoot
     */
    public get(requestConfiguration?: PoliciesRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<PolicyRoot | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<PolicyRoot>(requestInfo, createPolicyRootFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.policies.homeRealmDiscoveryPolicies.item collection
     * @param id Unique identifier of the item
     * @returns a homeRealmDiscoveryPolicyItemRequestBuilder
     */
    public homeRealmDiscoveryPoliciesById(id: string) : HomeRealmDiscoveryPolicyItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["homeRealmDiscoveryPolicy%2Did"] = id
        return new HomeRealmDiscoveryPolicyItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Update policies
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: PolicyRoot | undefined, requestConfiguration?: PoliciesRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
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
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.policies.permissionGrantPolicies.item collection
     * @param id Unique identifier of the item
     * @returns a permissionGrantPolicyItemRequestBuilder
     */
    public permissionGrantPoliciesById(id: string) : PermissionGrantPolicyItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["permissionGrantPolicy%2Did"] = id
        return new PermissionGrantPolicyItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.policies.roleManagementPolicies.item collection
     * @param id Unique identifier of the item
     * @returns a unifiedRoleManagementPolicyItemRequestBuilder
     */
    public roleManagementPoliciesById(id: string) : UnifiedRoleManagementPolicyItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["unifiedRoleManagementPolicy%2Did"] = id
        return new UnifiedRoleManagementPolicyItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.policies.roleManagementPolicyAssignments.item collection
     * @param id Unique identifier of the item
     * @returns a unifiedRoleManagementPolicyAssignmentItemRequestBuilder
     */
    public roleManagementPolicyAssignmentsById(id: string) : UnifiedRoleManagementPolicyAssignmentItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["unifiedRoleManagementPolicyAssignment%2Did"] = id
        return new UnifiedRoleManagementPolicyAssignmentItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.policies.tokenIssuancePolicies.item collection
     * @param id Unique identifier of the item
     * @returns a tokenIssuancePolicyItemRequestBuilder
     */
    public tokenIssuancePoliciesById(id: string) : TokenIssuancePolicyItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["tokenIssuancePolicy%2Did"] = id
        return new TokenIssuancePolicyItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.policies.tokenLifetimePolicies.item collection
     * @param id Unique identifier of the item
     * @returns a tokenLifetimePolicyItemRequestBuilder
     */
    public tokenLifetimePoliciesById(id: string) : TokenLifetimePolicyItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["tokenLifetimePolicy%2Did"] = id
        return new TokenLifetimePolicyItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
}
