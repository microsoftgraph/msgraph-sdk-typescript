import {ServicePrincipalImpl} from '../../models/';
import {createServicePrincipalFromDiscriminatorValue} from '../../models/createServicePrincipalFromDiscriminatorValue';
import {ODataErrorImpl} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {ServicePrincipal} from '../../models/servicePrincipal';
import {AddKeyRequestBuilder} from './addKey/addKeyRequestBuilder';
import {AddPasswordRequestBuilder} from './addPassword/addPasswordRequestBuilder';
import {AddTokenSigningCertificateRequestBuilder} from './addTokenSigningCertificate/addTokenSigningCertificateRequestBuilder';
import {AppRoleAssignedToRequestBuilder} from './appRoleAssignedTo/appRoleAssignedToRequestBuilder';
import {AppRoleAssignmentItemRequestBuilder as i2ffe12ad48a6c37736bee492c2536b2eafa0ed5fb255205fd180ea0d5d60e027} from './appRoleAssignedTo/item/appRoleAssignmentItemRequestBuilder';
import {AppRoleAssignmentsRequestBuilder} from './appRoleAssignments/appRoleAssignmentsRequestBuilder';
import {AppRoleAssignmentItemRequestBuilder as i0eff7d9c1cf783747a709f2957d65be7ec32db1607d1463f4947661244f94bc2} from './appRoleAssignments/item/appRoleAssignmentItemRequestBuilder';
import {CheckMemberGroupsRequestBuilder} from './checkMemberGroups/checkMemberGroupsRequestBuilder';
import {CheckMemberObjectsRequestBuilder} from './checkMemberObjects/checkMemberObjectsRequestBuilder';
import {ClaimsMappingPoliciesRequestBuilder} from './claimsMappingPolicies/claimsMappingPoliciesRequestBuilder';
import {ClaimsMappingPolicyItemRequestBuilder} from './claimsMappingPolicies/item/claimsMappingPolicyItemRequestBuilder';
import {CreatedObjectsRequestBuilder} from './createdObjects/createdObjectsRequestBuilder';
import {DirectoryObjectItemRequestBuilder as id0f419ba2af0eea378feefad8f5b20198c7344f82ac59b6fd8fbafacb7581cc6} from './createdObjects/item/directoryObjectItemRequestBuilder';
import {DelegatedPermissionClassificationsRequestBuilder} from './delegatedPermissionClassifications/delegatedPermissionClassificationsRequestBuilder';
import {DelegatedPermissionClassificationItemRequestBuilder} from './delegatedPermissionClassifications/item/delegatedPermissionClassificationItemRequestBuilder';
import {EndpointsRequestBuilder} from './endpoints/endpointsRequestBuilder';
import {EndpointItemRequestBuilder} from './endpoints/item/endpointItemRequestBuilder';
import {GetMemberGroupsRequestBuilder} from './getMemberGroups/getMemberGroupsRequestBuilder';
import {GetMemberObjectsRequestBuilder} from './getMemberObjects/getMemberObjectsRequestBuilder';
import {HomeRealmDiscoveryPoliciesRequestBuilder} from './homeRealmDiscoveryPolicies/homeRealmDiscoveryPoliciesRequestBuilder';
import {HomeRealmDiscoveryPolicyItemRequestBuilder} from './homeRealmDiscoveryPolicies/item/homeRealmDiscoveryPolicyItemRequestBuilder';
import {DirectoryObjectItemRequestBuilder as ide012bfc3a7e4138ec4038d6d0c62cd6e73a1861415b3aae770644faa7815f53} from './memberOf/item/directoryObjectItemRequestBuilder';
import {MemberOfRequestBuilder} from './memberOf/memberOfRequestBuilder';
import {OAuth2PermissionGrantItemRequestBuilder} from './oauth2PermissionGrants/item/oAuth2PermissionGrantItemRequestBuilder';
import {Oauth2PermissionGrantsRequestBuilder} from './oauth2PermissionGrants/oauth2PermissionGrantsRequestBuilder';
import {DirectoryObjectItemRequestBuilder as id7348b2fc60ca717a88cf3d90bffbac33273833d2577a71eb0bb85acbdceb23c} from './ownedObjects/item/directoryObjectItemRequestBuilder';
import {OwnedObjectsRequestBuilder} from './ownedObjects/ownedObjectsRequestBuilder';
import {DirectoryObjectItemRequestBuilder as i9966bb709202f5d6bbde5c99f7c9562165ad440a5ae3d0e79c9517577de7fd48} from './owners/item/directoryObjectItemRequestBuilder';
import {OwnersRequestBuilder} from './owners/ownersRequestBuilder';
import {RemoveKeyRequestBuilder} from './removeKey/removeKeyRequestBuilder';
import {RemovePasswordRequestBuilder} from './removePassword/removePasswordRequestBuilder';
import {RestoreRequestBuilder} from './restore/restoreRequestBuilder';
import {ServicePrincipalItemRequestBuilderDeleteRequestConfiguration} from './servicePrincipalItemRequestBuilderDeleteRequestConfiguration';
import {ServicePrincipalItemRequestBuilderGetRequestConfiguration} from './servicePrincipalItemRequestBuilderGetRequestConfiguration';
import {ServicePrincipalItemRequestBuilderPatchRequestConfiguration} from './servicePrincipalItemRequestBuilderPatchRequestConfiguration';
import {TokenIssuancePolicyItemRequestBuilder} from './tokenIssuancePolicies/item/tokenIssuancePolicyItemRequestBuilder';
import {TokenIssuancePoliciesRequestBuilder} from './tokenIssuancePolicies/tokenIssuancePoliciesRequestBuilder';
import {TokenLifetimePolicyItemRequestBuilder} from './tokenLifetimePolicies/item/tokenLifetimePolicyItemRequestBuilder';
import {TokenLifetimePoliciesRequestBuilder} from './tokenLifetimePolicies/tokenLifetimePoliciesRequestBuilder';
import {DirectoryObjectItemRequestBuilder as i88b45eb3623578a3111d5566c71c0d4f55200b7bd5d6337931ef5aa7920492c3} from './transitiveMemberOf/item/directoryObjectItemRequestBuilder';
import {TransitiveMemberOfRequestBuilder} from './transitiveMemberOf/transitiveMemberOfRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of servicePrincipal entities. */
export class ServicePrincipalItemRequestBuilder {
    /** The addKey property */
    public get addKey(): AddKeyRequestBuilder {
        return new AddKeyRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The addPassword property */
    public get addPassword(): AddPasswordRequestBuilder {
        return new AddPasswordRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The addTokenSigningCertificate property */
    public get addTokenSigningCertificate(): AddTokenSigningCertificateRequestBuilder {
        return new AddTokenSigningCertificateRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The appRoleAssignedTo property */
    public get appRoleAssignedTo(): AppRoleAssignedToRequestBuilder {
        return new AppRoleAssignedToRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The appRoleAssignments property */
    public get appRoleAssignments(): AppRoleAssignmentsRequestBuilder {
        return new AppRoleAssignmentsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The checkMemberGroups property */
    public get checkMemberGroups(): CheckMemberGroupsRequestBuilder {
        return new CheckMemberGroupsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The checkMemberObjects property */
    public get checkMemberObjects(): CheckMemberObjectsRequestBuilder {
        return new CheckMemberObjectsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The claimsMappingPolicies property */
    public get claimsMappingPolicies(): ClaimsMappingPoliciesRequestBuilder {
        return new ClaimsMappingPoliciesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The createdObjects property */
    public get createdObjects(): CreatedObjectsRequestBuilder {
        return new CreatedObjectsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The delegatedPermissionClassifications property */
    public get delegatedPermissionClassifications(): DelegatedPermissionClassificationsRequestBuilder {
        return new DelegatedPermissionClassificationsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The endpoints property */
    public get endpoints(): EndpointsRequestBuilder {
        return new EndpointsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The getMemberGroups property */
    public get getMemberGroups(): GetMemberGroupsRequestBuilder {
        return new GetMemberGroupsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The getMemberObjects property */
    public get getMemberObjects(): GetMemberObjectsRequestBuilder {
        return new GetMemberObjectsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The homeRealmDiscoveryPolicies property */
    public get homeRealmDiscoveryPolicies(): HomeRealmDiscoveryPoliciesRequestBuilder {
        return new HomeRealmDiscoveryPoliciesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The memberOf property */
    public get memberOf(): MemberOfRequestBuilder {
        return new MemberOfRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The oauth2PermissionGrants property */
    public get oauth2PermissionGrants(): Oauth2PermissionGrantsRequestBuilder {
        return new Oauth2PermissionGrantsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The ownedObjects property */
    public get ownedObjects(): OwnedObjectsRequestBuilder {
        return new OwnedObjectsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The owners property */
    public get owners(): OwnersRequestBuilder {
        return new OwnersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** The removeKey property */
    public get removeKey(): RemoveKeyRequestBuilder {
        return new RemoveKeyRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The removePassword property */
    public get removePassword(): RemovePasswordRequestBuilder {
        return new RemovePasswordRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** The restore property */
    public get restore(): RestoreRequestBuilder {
        return new RestoreRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The tokenIssuancePolicies property */
    public get tokenIssuancePolicies(): TokenIssuancePoliciesRequestBuilder {
        return new TokenIssuancePoliciesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The tokenLifetimePolicies property */
    public get tokenLifetimePolicies(): TokenLifetimePoliciesRequestBuilder {
        return new TokenLifetimePoliciesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The transitiveMemberOf property */
    public get transitiveMemberOf(): TransitiveMemberOfRequestBuilder {
        return new TransitiveMemberOfRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /**
     * Gets an item from the MicrosoftGraph.servicePrincipals.item.appRoleAssignedTo.item collection
     * @param id Unique identifier of the item
     * @returns a appRoleAssignmentItemRequestBuilder
     */
    public appRoleAssignedToById(id: string) : i2ffe12ad48a6c37736bee492c2536b2eafa0ed5fb255205fd180ea0d5d60e027 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["appRoleAssignment%2Did"] = id
        return new i2ffe12ad48a6c37736bee492c2536b2eafa0ed5fb255205fd180ea0d5d60e027(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.servicePrincipals.item.appRoleAssignments.item collection
     * @param id Unique identifier of the item
     * @returns a appRoleAssignmentItemRequestBuilder
     */
    public appRoleAssignmentsById(id: string) : i0eff7d9c1cf783747a709f2957d65be7ec32db1607d1463f4947661244f94bc2 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["appRoleAssignment%2Did"] = id
        return new i0eff7d9c1cf783747a709f2957d65be7ec32db1607d1463f4947661244f94bc2(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.servicePrincipals.item.claimsMappingPolicies.item collection
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
     * Instantiates a new ServicePrincipalItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/servicePrincipals/{servicePrincipal%2Did}{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete a [servicePrincipal](../resources/serviceprincipal.md) object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(requestConfiguration?: ServicePrincipalItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Gets an item from the MicrosoftGraph.servicePrincipals.item.createdObjects.item collection
     * @param id Unique identifier of the item
     * @returns a directoryObjectItemRequestBuilder
     */
    public createdObjectsById(id: string) : id0f419ba2af0eea378feefad8f5b20198c7344f82ac59b6fd8fbafacb7581cc6 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["directoryObject%2Did"] = id
        return new id0f419ba2af0eea378feefad8f5b20198c7344f82ac59b6fd8fbafacb7581cc6(urlTplParams, this.requestAdapter);
    };
    /**
     * Retrieve the properties and relationships of a [servicePrincipal](../resources/serviceprincipal.md) object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: ServicePrincipalItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * This article provides examples of how to assign, update, or remove different types of custom security attributes for users and applications (service principals). Custom security attributes can be assigned or updated only through a `PATCH` operation in an [Update user](/graph/api/user-update?view=graph-rest-beta&preserve-view=true) or [Update servicePrincipal](/graph/api/serviceprincipal-update?view=graph-rest-beta&preserve-view=true) request.
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: ServicePrincipal | undefined, requestConfiguration?: ServicePrincipalItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        const parsableBody = new ServicePrincipalImpl(body)
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", parsableBody);
        return requestInfo;
    };
    /**
     * Gets an item from the MicrosoftGraph.servicePrincipals.item.delegatedPermissionClassifications.item collection
     * @param id Unique identifier of the item
     * @returns a delegatedPermissionClassificationItemRequestBuilder
     */
    public delegatedPermissionClassificationsById(id: string) : DelegatedPermissionClassificationItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["delegatedPermissionClassification%2Did"] = id
        return new DelegatedPermissionClassificationItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Delete a [servicePrincipal](../resources/serviceprincipal.md) object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: ServicePrincipalItemRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
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
     * Gets an item from the MicrosoftGraph.servicePrincipals.item.endpoints.item collection
     * @param id Unique identifier of the item
     * @returns a endpointItemRequestBuilder
     */
    public endpointsById(id: string) : EndpointItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["endpoint%2Did"] = id
        return new EndpointItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Retrieve the properties and relationships of a [servicePrincipal](../resources/serviceprincipal.md) object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ServicePrincipal
     */
    public get(requestConfiguration?: ServicePrincipalItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<ServicePrincipalImpl | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<ServicePrincipalImpl>(requestInfo, createServicePrincipalFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the MicrosoftGraph.servicePrincipals.item.homeRealmDiscoveryPolicies.item collection
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
     * Gets an item from the MicrosoftGraph.servicePrincipals.item.memberOf.item collection
     * @param id Unique identifier of the item
     * @returns a directoryObjectItemRequestBuilder
     */
    public memberOfById(id: string) : ide012bfc3a7e4138ec4038d6d0c62cd6e73a1861415b3aae770644faa7815f53 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["directoryObject%2Did"] = id
        return new ide012bfc3a7e4138ec4038d6d0c62cd6e73a1861415b3aae770644faa7815f53(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.servicePrincipals.item.oauth2PermissionGrants.item collection
     * @param id Unique identifier of the item
     * @returns a oAuth2PermissionGrantItemRequestBuilder
     */
    public oauth2PermissionGrantsById(id: string) : OAuth2PermissionGrantItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["oAuth2PermissionGrant%2Did"] = id
        return new OAuth2PermissionGrantItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.servicePrincipals.item.ownedObjects.item collection
     * @param id Unique identifier of the item
     * @returns a directoryObjectItemRequestBuilder
     */
    public ownedObjectsById(id: string) : id7348b2fc60ca717a88cf3d90bffbac33273833d2577a71eb0bb85acbdceb23c {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["directoryObject%2Did"] = id
        return new id7348b2fc60ca717a88cf3d90bffbac33273833d2577a71eb0bb85acbdceb23c(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.servicePrincipals.item.owners.item collection
     * @param id Unique identifier of the item
     * @returns a directoryObjectItemRequestBuilder
     */
    public ownersById(id: string) : i9966bb709202f5d6bbde5c99f7c9562165ad440a5ae3d0e79c9517577de7fd48 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["directoryObject%2Did"] = id
        return new i9966bb709202f5d6bbde5c99f7c9562165ad440a5ae3d0e79c9517577de7fd48(urlTplParams, this.requestAdapter);
    };
    /**
     * This article provides examples of how to assign, update, or remove different types of custom security attributes for users and applications (service principals). Custom security attributes can be assigned or updated only through a `PATCH` operation in an [Update user](/graph/api/user-update?view=graph-rest-beta&preserve-view=true) or [Update servicePrincipal](/graph/api/serviceprincipal-update?view=graph-rest-beta&preserve-view=true) request.
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: ServicePrincipal | undefined, requestConfiguration?: ServicePrincipalItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
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
     * Gets an item from the MicrosoftGraph.servicePrincipals.item.tokenIssuancePolicies.item collection
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
     * Gets an item from the MicrosoftGraph.servicePrincipals.item.tokenLifetimePolicies.item collection
     * @param id Unique identifier of the item
     * @returns a tokenLifetimePolicyItemRequestBuilder
     */
    public tokenLifetimePoliciesById(id: string) : TokenLifetimePolicyItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["tokenLifetimePolicy%2Did"] = id
        return new TokenLifetimePolicyItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.servicePrincipals.item.transitiveMemberOf.item collection
     * @param id Unique identifier of the item
     * @returns a directoryObjectItemRequestBuilder
     */
    public transitiveMemberOfById(id: string) : i88b45eb3623578a3111d5566c71c0d4f55200b7bd5d6337931ef5aa7920492c3 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["directoryObject%2Did"] = id
        return new i88b45eb3623578a3111d5566c71c0d4f55200b7bd5d6337931ef5aa7920492c3(urlTplParams, this.requestAdapter);
    };
}
