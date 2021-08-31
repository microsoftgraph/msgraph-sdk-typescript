import {ServicePrincipal} from '../../servicePrincipal';
import {AppRoleAssignedToRequestBuilder} from '../appRoleAssignedTo/appRoleAssignedToRequestBuilder';
import {AppRoleAssignmentRequestBuilder} from '../appRoleAssignedTo/item/appRoleAssignmentRequestBuilder';
import {AppRoleAssignmentsRequestBuilder} from '../appRoleAssignments/appRoleAssignmentsRequestBuilder';
import {AppRoleAssignmentRequestBuilder} from '../appRoleAssignments/item/appRoleAssignmentRequestBuilder';
import {ClaimsMappingPoliciesRequestBuilder} from '../claimsMappingPolicies/claimsMappingPoliciesRequestBuilder';
import {CreatedObjectsRequestBuilder} from '../createdObjects/createdObjectsRequestBuilder';
import {DelegatedPermissionClassificationsRequestBuilder} from '../delegatedPermissionClassifications/delegatedPermissionClassificationsRequestBuilder';
import {DelegatedPermissionClassificationRequestBuilder} from '../delegatedPermissionClassifications/item/delegatedPermissionClassificationRequestBuilder';
import {EndpointsRequestBuilder} from '../endpoints/endpointsRequestBuilder';
import {EndpointRequestBuilder} from '../endpoints/item/endpointRequestBuilder';
import {HomeRealmDiscoveryPoliciesRequestBuilder} from '../homeRealmDiscoveryPolicies/homeRealmDiscoveryPoliciesRequestBuilder';
import {MemberOfRequestBuilder} from '../memberOf/memberOfRequestBuilder';
import {Microsoft.graph.addKeyRequestBuilder} from '../microsoft/graph/addKey/microsoft.graph.addKeyRequestBuilder';
import {Microsoft.graph.addPasswordRequestBuilder} from '../microsoft/graph/addPassword/microsoft.graph.addPasswordRequestBuilder';
import {Microsoft.graph.checkMemberGroupsRequestBuilder} from '../microsoft/graph/checkMemberGroups/microsoft.graph.checkMemberGroupsRequestBuilder';
import {Microsoft.graph.checkMemberObjectsRequestBuilder} from '../microsoft/graph/checkMemberObjects/microsoft.graph.checkMemberObjectsRequestBuilder';
import {Microsoft.graph.getMemberGroupsRequestBuilder} from '../microsoft/graph/getMemberGroups/microsoft.graph.getMemberGroupsRequestBuilder';
import {Microsoft.graph.getMemberObjectsRequestBuilder} from '../microsoft/graph/getMemberObjects/microsoft.graph.getMemberObjectsRequestBuilder';
import {Microsoft.graph.removeKeyRequestBuilder} from '../microsoft/graph/removeKey/microsoft.graph.removeKeyRequestBuilder';
import {Microsoft.graph.removePasswordRequestBuilder} from '../microsoft/graph/removePassword/microsoft.graph.removePasswordRequestBuilder';
import {Microsoft.graph.restoreRequestBuilder} from '../microsoft/graph/restore/microsoft.graph.restoreRequestBuilder';
import {Oauth2PermissionGrantsRequestBuilder} from '../oauth2PermissionGrants/oauth2PermissionGrantsRequestBuilder';
import {OwnedObjectsRequestBuilder} from '../ownedObjects/ownedObjectsRequestBuilder';
import {OwnersRequestBuilder} from '../owners/ownersRequestBuilder';
import {TokenIssuancePoliciesRequestBuilder} from '../tokenIssuancePolicies/tokenIssuancePoliciesRequestBuilder';
import {TokenLifetimePoliciesRequestBuilder} from '../tokenLifetimePolicies/tokenLifetimePoliciesRequestBuilder';
import {TransitiveMemberOfRequestBuilder} from '../transitiveMemberOf/transitiveMemberOfRequestBuilder';
import {HttpCore, HttpMethod, RequestInfo, ResponseHandler, MiddlewareOption} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /servicePrincipals/{servicePrincipal-id}  */
export class ServicePrincipalRequestBuilder {
    public get appRoleAssignedTo(): AppRoleAssignedToRequestBuilder {
        return new AppRoleAssignedToRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get appRoleAssignments(): AppRoleAssignmentsRequestBuilder {
        return new AppRoleAssignmentsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get claimsMappingPolicies(): ClaimsMappingPoliciesRequestBuilder {
        return new ClaimsMappingPoliciesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get createdObjects(): CreatedObjectsRequestBuilder {
        return new CreatedObjectsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** Current path for the request  */
    private readonly currentPath: string;
    public get delegatedPermissionClassifications(): DelegatedPermissionClassificationsRequestBuilder {
        return new DelegatedPermissionClassificationsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get endpoints(): EndpointsRequestBuilder {
        return new EndpointsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get homeRealmDiscoveryPolicies(): HomeRealmDiscoveryPoliciesRequestBuilder {
        return new HomeRealmDiscoveryPoliciesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** The http core service to use to execute the requests.  */
    private readonly httpCore: HttpCore;
    /** Whether the current path is a raw URL  */
    private readonly isRawUrl: boolean;
    public get memberOf(): MemberOfRequestBuilder {
        return new MemberOfRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.addKey(): Microsoft.graph.addKeyRequestBuilder {
        return new Microsoft.graph.addKeyRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.addPassword(): Microsoft.graph.addPasswordRequestBuilder {
        return new Microsoft.graph.addPasswordRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.checkMemberGroups(): Microsoft.graph.checkMemberGroupsRequestBuilder {
        return new Microsoft.graph.checkMemberGroupsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.checkMemberObjects(): Microsoft.graph.checkMemberObjectsRequestBuilder {
        return new Microsoft.graph.checkMemberObjectsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.getMemberGroups(): Microsoft.graph.getMemberGroupsRequestBuilder {
        return new Microsoft.graph.getMemberGroupsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.getMemberObjects(): Microsoft.graph.getMemberObjectsRequestBuilder {
        return new Microsoft.graph.getMemberObjectsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.removeKey(): Microsoft.graph.removeKeyRequestBuilder {
        return new Microsoft.graph.removeKeyRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.removePassword(): Microsoft.graph.removePasswordRequestBuilder {
        return new Microsoft.graph.removePasswordRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.restore(): Microsoft.graph.restoreRequestBuilder {
        return new Microsoft.graph.restoreRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get oauth2PermissionGrants(): Oauth2PermissionGrantsRequestBuilder {
        return new Oauth2PermissionGrantsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get ownedObjects(): OwnedObjectsRequestBuilder {
        return new OwnedObjectsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get owners(): OwnersRequestBuilder {
        return new OwnersRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** Path segment to use to build the URL for the current request builder  */
    private readonly pathSegment: string;
    public get tokenIssuancePolicies(): TokenIssuancePoliciesRequestBuilder {
        return new TokenIssuancePoliciesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get tokenLifetimePolicies(): TokenLifetimePoliciesRequestBuilder {
        return new TokenLifetimePoliciesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get transitiveMemberOf(): TransitiveMemberOfRequestBuilder {
        return new TransitiveMemberOfRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /**
     * Gets an item from the MicrosoftGraph.servicePrincipals.appRoleAssignedTo collection
     * @param id Unique identifier of the item
     * @returns a AppRoleAssignmentRequestBuilder
     */
    public appRoleAssignedToById(id: String) : AppRoleAssignmentRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new AppRoleAssignmentRequestBuilder(this.currentPath + this.pathSegment + "/appRoleAssignedTo/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the MicrosoftGraph.servicePrincipals.appRoleAssignments collection
     * @param id Unique identifier of the item
     * @returns a AppRoleAssignmentRequestBuilder
     */
    public appRoleAssignmentsById(id: String) : AppRoleAssignmentRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new AppRoleAssignmentRequestBuilder(this.currentPath + this.pathSegment + "/appRoleAssignments/" + id, this.httpCore, false);
    };
    /**
     * Instantiates a new ServicePrincipalRequestBuilder and sets the default values.
     * @param currentPath Current path for the request
     * @param httpCore The http core service to use to execute the requests.
     * @param isRawUrl Whether the current path is a raw URL
     */
    public constructor(currentPath: string, httpCore: HttpCore, isRawUrl: boolean = true) {
        if(!currentPath) throw new Error("currentPath cannot be undefined");
        if(!httpCore) throw new Error("httpCore cannot be undefined");
        this.pathSegment = "";
        this.httpCore = httpCore;
        this.currentPath = currentPath;
        this.isRawUrl = isRawUrl;
    };
    /**
     * Represents an Azure Active Directory object. The directoryObject type is the base type for many other directory entity types.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInfo
     */
    public createDeleteRequestInfo(h?: object | undefined, o?: MiddlewareOption[] | undefined) : RequestInfo {
        const requestInfo = new RequestInfo();
        requestInfo.setUri(this.currentPath, this.pathSegment, this.isRawUrl);
        requestInfo.httpMethod = HttpMethod.DELETE;
        h && requestInfo.setHeadersFromRawObject(h);
        o && requestInfo.addMiddlewareOptions(...o);
        return requestInfo;
    };
    /**
     * Represents an Azure Active Directory object. The directoryObject type is the base type for many other directory entity types.
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
     * Represents an Azure Active Directory object. The directoryObject type is the base type for many other directory entity types.
     * @param body 
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInfo
     */
    public createPatchRequestInfo(body: ServicePrincipal | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined) : RequestInfo {
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
     * Gets an item from the MicrosoftGraph.servicePrincipals.delegatedPermissionClassifications collection
     * @param id Unique identifier of the item
     * @returns a DelegatedPermissionClassificationRequestBuilder
     */
    public delegatedPermissionClassificationsById(id: String) : DelegatedPermissionClassificationRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new DelegatedPermissionClassificationRequestBuilder(this.currentPath + this.pathSegment + "/delegatedPermissionClassifications/" + id, this.httpCore, false);
    };
    /**
     * Represents an Azure Active Directory object. The directoryObject type is the base type for many other directory entity types.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInfo(
            h, o
        );
        return this.httpCore?.sendNoResponseContentAsync(requestInfo, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the MicrosoftGraph.servicePrincipals.endpoints collection
     * @param id Unique identifier of the item
     * @returns a EndpointRequestBuilder
     */
    public endpointsById(id: String) : EndpointRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        return new EndpointRequestBuilder(this.currentPath + this.pathSegment + "/endpoints/" + id, this.httpCore, false);
    };
    /**
     * Represents an Azure Active Directory object. The directoryObject type is the base type for many other directory entity types.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ServicePrincipal
     */
    public get(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<ServicePrincipal | undefined> {
        const requestInfo = this.createGetRequestInfo(
            q, h, o
        );
        return this.httpCore?.sendAsync<ServicePrincipal>(requestInfo, ServicePrincipal, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Represents an Azure Active Directory object. The directoryObject type is the base type for many other directory entity types.
     * @param body 
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: ServicePrincipal | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInfo(
            body, h, o
        );
        return this.httpCore?.sendNoResponseContentAsync(requestInfo, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
}
