import {ServicePrincipal} from '../../models/microsoft/graph/servicePrincipal';
import {AddKeyRequestBuilder} from './addKey/addKeyRequestBuilder';
import {AddPasswordRequestBuilder} from './addPassword/addPasswordRequestBuilder';
import {AppRoleAssignedToRequestBuilder} from './appRoleAssignedTo/appRoleAssignedToRequestBuilder';
import {AppRoleAssignmentRequestBuilder as i0487607368d78204831074f45486ea9c2990ab918d9c5412922dbf3c929783dd} from './appRoleAssignedTo/item/appRoleAssignmentRequestBuilder';
import {AppRoleAssignmentsRequestBuilder} from './appRoleAssignments/appRoleAssignmentsRequestBuilder';
import {AppRoleAssignmentRequestBuilder as i2a53245acaa8ee8d438b903aa670810569cad80cc12794b12463cd278664b399} from './appRoleAssignments/item/appRoleAssignmentRequestBuilder';
import {CheckMemberGroupsRequestBuilder} from './checkMemberGroups/checkMemberGroupsRequestBuilder';
import {CheckMemberObjectsRequestBuilder} from './checkMemberObjects/checkMemberObjectsRequestBuilder';
import {ClaimsMappingPoliciesRequestBuilder} from './claimsMappingPolicies/claimsMappingPoliciesRequestBuilder';
import {CreatedObjectsRequestBuilder} from './createdObjects/createdObjectsRequestBuilder';
import {DelegatedPermissionClassificationsRequestBuilder} from './delegatedPermissionClassifications/delegatedPermissionClassificationsRequestBuilder';
import {DelegatedPermissionClassificationRequestBuilder} from './delegatedPermissionClassifications/item/delegatedPermissionClassificationRequestBuilder';
import {EndpointsRequestBuilder} from './endpoints/endpointsRequestBuilder';
import {EndpointRequestBuilder} from './endpoints/item/endpointRequestBuilder';
import {GetMemberGroupsRequestBuilder} from './getMemberGroups/getMemberGroupsRequestBuilder';
import {GetMemberObjectsRequestBuilder} from './getMemberObjects/getMemberObjectsRequestBuilder';
import {HomeRealmDiscoveryPoliciesRequestBuilder} from './homeRealmDiscoveryPolicies/homeRealmDiscoveryPoliciesRequestBuilder';
import {MemberOfRequestBuilder} from './memberOf/memberOfRequestBuilder';
import {Oauth2PermissionGrantsRequestBuilder} from './oauth2PermissionGrants/oauth2PermissionGrantsRequestBuilder';
import {OwnedObjectsRequestBuilder} from './ownedObjects/ownedObjectsRequestBuilder';
import {OwnersRequestBuilder} from './owners/ownersRequestBuilder';
import {RemoveKeyRequestBuilder} from './removeKey/removeKeyRequestBuilder';
import {RemovePasswordRequestBuilder} from './removePassword/removePasswordRequestBuilder';
import {RestoreRequestBuilder} from './restore/restoreRequestBuilder';
import {TokenIssuancePoliciesRequestBuilder} from './tokenIssuancePolicies/tokenIssuancePoliciesRequestBuilder';
import {TokenLifetimePoliciesRequestBuilder} from './tokenLifetimePolicies/tokenLifetimePoliciesRequestBuilder';
import {TransitiveMemberOfRequestBuilder} from './transitiveMemberOf/transitiveMemberOfRequestBuilder';
import {HttpCore, HttpMethod, RequestInformation, ResponseHandler, MiddlewareOption} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /servicePrincipals/{servicePrincipal-id}  */
export class ServicePrincipalRequestBuilder {
    public get addKey(): AddKeyRequestBuilder {
        return new AddKeyRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get addPassword(): AddPasswordRequestBuilder {
        return new AddPasswordRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get appRoleAssignedTo(): AppRoleAssignedToRequestBuilder {
        return new AppRoleAssignedToRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get appRoleAssignments(): AppRoleAssignmentsRequestBuilder {
        return new AppRoleAssignmentsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get checkMemberGroups(): CheckMemberGroupsRequestBuilder {
        return new CheckMemberGroupsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get checkMemberObjects(): CheckMemberObjectsRequestBuilder {
        return new CheckMemberObjectsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
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
    public get getMemberGroups(): GetMemberGroupsRequestBuilder {
        return new GetMemberGroupsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get getMemberObjects(): GetMemberObjectsRequestBuilder {
        return new GetMemberObjectsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
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
    public get removeKey(): RemoveKeyRequestBuilder {
        return new RemoveKeyRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get removePassword(): RemovePasswordRequestBuilder {
        return new RemovePasswordRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get restore(): RestoreRequestBuilder {
        return new RestoreRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
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
     * Gets an item from the graphtypescriptv4.utilities.servicePrincipals.item.appRoleAssignedTo.item collection
     * @param id Unique identifier of the item
     * @returns a appRoleAssignmentRequestBuilder
     */
    public appRoleAssignedToById(id: String) : i0487607368d78204831074f45486ea9c2990ab918d9c5412922dbf3c929783dd {
        if(!id) throw new Error("id cannot be undefined");
        return new i0487607368d78204831074f45486ea9c2990ab918d9c5412922dbf3c929783dd(this.currentPath + this.pathSegment + "/appRoleAssignedTo/" + id, this.httpCore, false);
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.servicePrincipals.item.appRoleAssignments.item collection
     * @param id Unique identifier of the item
     * @returns a appRoleAssignmentRequestBuilder
     */
    public appRoleAssignmentsById(id: String) : i2a53245acaa8ee8d438b903aa670810569cad80cc12794b12463cd278664b399 {
        if(!id) throw new Error("id cannot be undefined");
        return new i2a53245acaa8ee8d438b903aa670810569cad80cc12794b12463cd278664b399(this.currentPath + this.pathSegment + "/appRoleAssignments/" + id, this.httpCore, false);
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
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(h?: object | undefined, o?: MiddlewareOption[] | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
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
     * @returns a RequestInformation
     */
    public createGetRequestInformation(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
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
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: ServicePrincipal | undefined, h?: object | undefined, o?: MiddlewareOption[] | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.setUri(this.currentPath, this.pathSegment, this.isRawUrl);
        requestInfo.httpMethod = HttpMethod.PATCH;
        h && requestInfo.setHeadersFromRawObject(h);
        requestInfo.setContentFromParsable(this.httpCore, "application/json", body);
        o && requestInfo.addMiddlewareOptions(...o);
        return requestInfo;
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.servicePrincipals.item.delegatedPermissionClassifications.item collection
     * @param id Unique identifier of the item
     * @returns a delegatedPermissionClassificationRequestBuilder
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
        const requestInfo = this.createDeleteRequestInformation(
            h, o
        );
        return this.httpCore?.sendNoResponseContentAsync(requestInfo, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the graphtypescriptv4.utilities.servicePrincipals.item.endpoints.item collection
     * @param id Unique identifier of the item
     * @returns a endpointRequestBuilder
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
        const requestInfo = this.createGetRequestInformation(
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
        const requestInfo = this.createPatchRequestInformation(
            body, h, o
        );
        return this.httpCore?.sendNoResponseContentAsync(requestInfo, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
}
