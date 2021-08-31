import {ActivityBasedTimeoutPoliciesRequestBuilder} from './activityBasedTimeoutPolicies/activityBasedTimeoutPoliciesRequestBuilder';
import {ActivityBasedTimeoutPolicyRequestBuilder} from './activityBasedTimeoutPolicies/item/activityBasedTimeoutPolicyRequestBuilder';
import {AdminConsentRequestPolicyRequestBuilder} from './adminConsentRequestPolicy/adminConsentRequestPolicyRequestBuilder';
import {AuthenticationFlowsPolicyRequestBuilder} from './authenticationFlowsPolicy/authenticationFlowsPolicyRequestBuilder';
import {AuthenticationMethodsPolicyRequestBuilder} from './authenticationMethodsPolicy/authenticationMethodsPolicyRequestBuilder';
import {AuthorizationPolicyRequestBuilder} from './authorizationPolicy/authorizationPolicyRequestBuilder';
import {ClaimsMappingPoliciesRequestBuilder} from './claimsMappingPolicies/claimsMappingPoliciesRequestBuilder';
import {ClaimsMappingPolicyRequestBuilder} from './claimsMappingPolicies/item/claimsMappingPolicyRequestBuilder';
import {ConditionalAccessPoliciesRequestBuilder} from './conditionalAccessPolicies/conditionalAccessPoliciesRequestBuilder';
import {ConditionalAccessPolicyRequestBuilder} from './conditionalAccessPolicies/item/conditionalAccessPolicyRequestBuilder';
import {FeatureRolloutPoliciesRequestBuilder} from './featureRolloutPolicies/featureRolloutPoliciesRequestBuilder';
import {FeatureRolloutPolicyRequestBuilder} from './featureRolloutPolicies/item/featureRolloutPolicyRequestBuilder';
import {HomeRealmDiscoveryPoliciesRequestBuilder} from './homeRealmDiscoveryPolicies/homeRealmDiscoveryPoliciesRequestBuilder';
import {HomeRealmDiscoveryPolicyRequestBuilder} from './homeRealmDiscoveryPolicies/item/homeRealmDiscoveryPolicyRequestBuilder';
import {IdentitySecurityDefaultsEnforcementPolicyRequestBuilder} from './identitySecurityDefaultsEnforcementPolicy/identitySecurityDefaultsEnforcementPolicyRequestBuilder';
import {PermissionGrantPolicyRequestBuilder} from './permissionGrantPolicies/item/permissionGrantPolicyRequestBuilder';
import {PermissionGrantPoliciesRequestBuilder} from './permissionGrantPolicies/permissionGrantPoliciesRequestBuilder';
import {Policies} from './policies';
import {PolicyRoot} from './policyRoot';
import {TokenIssuancePolicyRequestBuilder} from './tokenIssuancePolicies/item/tokenIssuancePolicyRequestBuilder';
import {TokenIssuancePoliciesRequestBuilder} from './tokenIssuancePolicies/tokenIssuancePoliciesRequestBuilder';
import {TokenLifetimePolicyRequestBuilder} from './tokenLifetimePolicies/item/tokenLifetimePolicyRequestBuilder';
import {TokenLifetimePoliciesRequestBuilder} from './tokenLifetimePolicies/tokenLifetimePoliciesRequestBuilder';
import {HttpCore, HttpMethod, RequestInfo, ResponseHandler, MiddlewareOption} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /policies  */
export class PoliciesRequestBuilder {
    public get activityBasedTimeoutPolicies(): ActivityBasedTimeoutPoliciesRequestBuilder {
        return new ActivityBasedTimeoutPoliciesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get adminConsentRequestPolicy(): AdminConsentRequestPolicyRequestBuilder {
        return new AdminConsentRequestPolicyRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get authenticationFlowsPolicy(): AuthenticationFlowsPolicyRequestBuilder {
        return new AuthenticationFlowsPolicyRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get authenticationMethodsPolicy(): AuthenticationMethodsPolicyRequestBuilder {
        return new AuthenticationMethodsPolicyRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get authorizationPolicy(): AuthorizationPolicyRequestBuilder {
        return new AuthorizationPolicyRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get claimsMappingPolicies(): ClaimsMappingPoliciesRequestBuilder {
        return new ClaimsMappingPoliciesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get conditionalAccessPolicies(): ConditionalAccessPoliciesRequestBuilder {
        return new ConditionalAccessPoliciesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** Current path for the request  */
    private readonly currentPath: string;
    public get featureRolloutPolicies(): FeatureRolloutPoliciesRequestBuilder {
        return new FeatureRolloutPoliciesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get homeRealmDiscoveryPolicies(): HomeRealmDiscoveryPoliciesRequestBuilder {
        return new HomeRealmDiscoveryPoliciesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** The http core service to use to execute the requests.  */
    private readonly httpCore: HttpCore;
    public get identitySecurityDefaultsEnforcementPolicy(): IdentitySecurityDefaultsEnforcementPolicyRequestBuilder {
        return new IdentitySecurityDefaultsEnforcementPolicyRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** Whether the current path is a raw URL  */
    private readonly isRawUrl: boolean;
    /** Path segment to use to build the URL for the current request builder  */
    private readonly pathSegment: string;
    public get permissionGrantPolicies(): PermissionGrantPoliciesRequestBuilder {
        return new PermissionGrantPoliciesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get tokenIssuancePolicies(): TokenIssuancePoliciesRequestBuilder {
        return new TokenIssuancePoliciesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get tokenLifetimePolicies(): TokenLifetimePoliciesRequestBuilder {
        return new TokenLifetimePoliciesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /**
     * Gets an item from the MicrosoftGraph.policies.activityBasedTimeoutPolicies collection
     * @param id Unique identifier of the item
     * @returns a ActivityBasedTimeoutPolicyRequestBuilder
     */
    public activityBasedTimeoutPoliciesById(id: String) : ActivityBasedTimeoutPolicyRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new ActivityBasedTimeoutPolicyRequestBuilder(this.currentPath + this.pathSegment + "/activityBasedTimeoutPolicies/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the MicrosoftGraph.policies.claimsMappingPolicies collection
     * @param id Unique identifier of the item
     * @returns a ClaimsMappingPolicyRequestBuilder
     */
    public claimsMappingPoliciesById(id: String) : ClaimsMappingPolicyRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new ClaimsMappingPolicyRequestBuilder(this.currentPath + this.pathSegment + "/claimsMappingPolicies/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the MicrosoftGraph.policies.conditionalAccessPolicies collection
     * @param id Unique identifier of the item
     * @returns a ConditionalAccessPolicyRequestBuilder
     */
    public conditionalAccessPoliciesById(id: String) : ConditionalAccessPolicyRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new ConditionalAccessPolicyRequestBuilder(this.currentPath + this.pathSegment + "/conditionalAccessPolicies/" + id, this.httpCore, false);
    };
    /**
     * Instantiates a new PoliciesRequestBuilder and sets the default values.
     * @param currentPath Current path for the request
     * @param httpCore The http core service to use to execute the requests.
     * @param isRawUrl Whether the current path is a raw URL
     */
    public constructor(currentPath: string, httpCore: HttpCore, isRawUrl: boolean = true) {
        if(!currentPath) throw new Error("currentPath cannot be undefined");
        if(!httpCore) throw new Error("httpCore cannot be undefined");
        this.pathSegment = "/policies";
        this.httpCore = httpCore;
        this.currentPath = currentPath;
        this.isRawUrl = isRawUrl;
    };
    /**
     * Get policies
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @returns a RequestInfo
     */
    public createGetRequestInfo(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined) : RequestInfo {
        const requestInfo = new RequestInfo();
        requestInfo.setUri(this.currentPath, this.pathSegment, this.isRawUrl);
        requestInfo.httpMethod = HttpMethod.GET;
        h && requestInfo.setHeadersFromRawObject(h);
        q && requestInfo.setQueryStringParametersFromRawObject(q);
        o && requestInfo.addMiddlewareOptions(...o);
        return requestInfo;
    };
    /**
     * Update policies
     * @param body 
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInfo
     */
    public createPatchRequestInfo(body: Policies | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined) : RequestInfo {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInfo();
        requestInfo.setUri(this.currentPath, this.pathSegment, this.isRawUrl);
        requestInfo.httpMethod = HttpMethod.PATCH;
        h && requestInfo.setHeadersFromRawObject(h);
        requestInfo.setContentFromParsable(this.httpCore, "application/json", body);
        o && requestInfo.addMiddlewareOptions(...o);
        return requestInfo;
    };
    /**
     * Gets an item from the MicrosoftGraph.policies.featureRolloutPolicies collection
     * @param id Unique identifier of the item
     * @returns a FeatureRolloutPolicyRequestBuilder
     */
    public featureRolloutPoliciesById(id: String) : FeatureRolloutPolicyRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new FeatureRolloutPolicyRequestBuilder(this.currentPath + this.pathSegment + "/featureRolloutPolicies/" + id, this.httpCore, false);
    };
    /**
     * Get policies
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of PolicyRoot
     */
    public get(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<PolicyRoot | undefined> {
        const requestInfo = this.createGetRequestInfo(
            q, h, o
        );
        return this.httpCore?.sendAsync<PolicyRoot>(requestInfo, PolicyRoot, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the MicrosoftGraph.policies.homeRealmDiscoveryPolicies collection
     * @param id Unique identifier of the item
     * @returns a HomeRealmDiscoveryPolicyRequestBuilder
     */
    public homeRealmDiscoveryPoliciesById(id: String) : HomeRealmDiscoveryPolicyRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new HomeRealmDiscoveryPolicyRequestBuilder(this.currentPath + this.pathSegment + "/homeRealmDiscoveryPolicies/" + id, this.httpCore, false);
    };
    /**
     * Update policies
     * @param body 
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: Policies | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInfo(
            body, h, o
        );
        return this.httpCore?.sendNoResponseContentAsync(requestInfo, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the MicrosoftGraph.policies.permissionGrantPolicies collection
     * @param id Unique identifier of the item
     * @returns a PermissionGrantPolicyRequestBuilder
     */
    public permissionGrantPoliciesById(id: String) : PermissionGrantPolicyRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new PermissionGrantPolicyRequestBuilder(this.currentPath + this.pathSegment + "/permissionGrantPolicies/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the MicrosoftGraph.policies.tokenIssuancePolicies collection
     * @param id Unique identifier of the item
     * @returns a TokenIssuancePolicyRequestBuilder
     */
    public tokenIssuancePoliciesById(id: String) : TokenIssuancePolicyRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new TokenIssuancePolicyRequestBuilder(this.currentPath + this.pathSegment + "/tokenIssuancePolicies/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the MicrosoftGraph.policies.tokenLifetimePolicies collection
     * @param id Unique identifier of the item
     * @returns a TokenLifetimePolicyRequestBuilder
     */
    public tokenLifetimePoliciesById(id: String) : TokenLifetimePolicyRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new TokenLifetimePolicyRequestBuilder(this.currentPath + this.pathSegment + "/tokenLifetimePolicies/" + id, this.httpCore, false);
    };
}
