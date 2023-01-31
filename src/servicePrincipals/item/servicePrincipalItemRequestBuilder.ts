import {ServicePrincipal} from '../../models/';
import {createServicePrincipalFromDiscriminatorValue} from '../../models/createServicePrincipalFromDiscriminatorValue';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {AppRoleAssignedToRequestBuilder} from './appRoleAssignedTo/appRoleAssignedToRequestBuilder';
import {AppRoleAssignmentItemRequestBuilder as I93168b8558556722da9cecc35d7553892e9e7c2bde1e1fb43b3db6857cf15658} from './appRoleAssignedTo/item/appRoleAssignmentItemRequestBuilder';
import {AppRoleAssignmentsRequestBuilder} from './appRoleAssignments/appRoleAssignmentsRequestBuilder';
import {AppRoleAssignmentItemRequestBuilder as I0f96074f1bfce1552adeec4df64587124a7f4fef296a83e3a7d09766250b6d14} from './appRoleAssignments/item/appRoleAssignmentItemRequestBuilder';
import {ClaimsMappingPoliciesRequestBuilder} from './claimsMappingPolicies/claimsMappingPoliciesRequestBuilder';
import {ClaimsMappingPolicyItemRequestBuilder} from './claimsMappingPolicies/item/claimsMappingPolicyItemRequestBuilder';
import {CreatedObjectsRequestBuilder} from './createdObjects/createdObjectsRequestBuilder';
import {DirectoryObjectItemRequestBuilder as Idd5bcd509e8fa4de83b0ab51581c31faee151d3fe6ef9edcf927694965d73a2c} from './createdObjects/item/directoryObjectItemRequestBuilder';
import {DelegatedPermissionClassificationsRequestBuilder} from './delegatedPermissionClassifications/delegatedPermissionClassificationsRequestBuilder';
import {DelegatedPermissionClassificationItemRequestBuilder} from './delegatedPermissionClassifications/item/delegatedPermissionClassificationItemRequestBuilder';
import {EndpointsRequestBuilder} from './endpoints/endpointsRequestBuilder';
import {EndpointItemRequestBuilder} from './endpoints/item/endpointItemRequestBuilder';
import {FederatedIdentityCredentialsRequestBuilder} from './federatedIdentityCredentials/federatedIdentityCredentialsRequestBuilder';
import {FederatedIdentityCredentialItemRequestBuilder} from './federatedIdentityCredentials/item/federatedIdentityCredentialItemRequestBuilder';
import {HomeRealmDiscoveryPoliciesRequestBuilder} from './homeRealmDiscoveryPolicies/homeRealmDiscoveryPoliciesRequestBuilder';
import {HomeRealmDiscoveryPolicyItemRequestBuilder} from './homeRealmDiscoveryPolicies/item/homeRealmDiscoveryPolicyItemRequestBuilder';
import {DirectoryObjectItemRequestBuilder as If04f7937796df91a9e5b988ef3bf59350050b50c9239bd5559c64c4c55486c2a} from './memberOf/item/directoryObjectItemRequestBuilder';
import {MemberOfRequestBuilder} from './memberOf/memberOfRequestBuilder';
import {AddKeyRequestBuilder} from './microsoftGraphAddKey/addKeyRequestBuilder';
import {AddPasswordRequestBuilder} from './microsoftGraphAddPassword/addPasswordRequestBuilder';
import {AddTokenSigningCertificateRequestBuilder} from './microsoftGraphAddTokenSigningCertificate/addTokenSigningCertificateRequestBuilder';
import {CheckMemberGroupsRequestBuilder} from './microsoftGraphCheckMemberGroups/checkMemberGroupsRequestBuilder';
import {CheckMemberObjectsRequestBuilder} from './microsoftGraphCheckMemberObjects/checkMemberObjectsRequestBuilder';
import {GetMemberGroupsRequestBuilder} from './microsoftGraphGetMemberGroups/getMemberGroupsRequestBuilder';
import {GetMemberObjectsRequestBuilder} from './microsoftGraphGetMemberObjects/getMemberObjectsRequestBuilder';
import {RemoveKeyRequestBuilder} from './microsoftGraphRemoveKey/removeKeyRequestBuilder';
import {RemovePasswordRequestBuilder} from './microsoftGraphRemovePassword/removePasswordRequestBuilder';
import {RestoreRequestBuilder} from './microsoftGraphRestore/restoreRequestBuilder';
import {OAuth2PermissionGrantItemRequestBuilder} from './oauth2PermissionGrants/item/oAuth2PermissionGrantItemRequestBuilder';
import {Oauth2PermissionGrantsRequestBuilder} from './oauth2PermissionGrants/oauth2PermissionGrantsRequestBuilder';
import {DirectoryObjectItemRequestBuilder as Ia867b6ae3f11225ff7b901f1fce150f9e21290a6d6c449c35e70db3ddcd52411} from './ownedObjects/item/directoryObjectItemRequestBuilder';
import {OwnedObjectsRequestBuilder} from './ownedObjects/ownedObjectsRequestBuilder';
import {DirectoryObjectItemRequestBuilder as I0835d8d8ef8d42e8d6c78b47f39ee556ddd6a1be84094c5c876147cb74186e0f} from './owners/item/directoryObjectItemRequestBuilder';
import {OwnersRequestBuilder} from './owners/ownersRequestBuilder';
import {ServicePrincipalItemRequestBuilderDeleteRequestConfiguration} from './servicePrincipalItemRequestBuilderDeleteRequestConfiguration';
import {ServicePrincipalItemRequestBuilderGetRequestConfiguration} from './servicePrincipalItemRequestBuilderGetRequestConfiguration';
import {ServicePrincipalItemRequestBuilderPatchRequestConfiguration} from './servicePrincipalItemRequestBuilderPatchRequestConfiguration';
import {TokenIssuancePolicyItemRequestBuilder} from './tokenIssuancePolicies/item/tokenIssuancePolicyItemRequestBuilder';
import {TokenIssuancePoliciesRequestBuilder} from './tokenIssuancePolicies/tokenIssuancePoliciesRequestBuilder';
import {TokenLifetimePolicyItemRequestBuilder} from './tokenLifetimePolicies/item/tokenLifetimePolicyItemRequestBuilder';
import {TokenLifetimePoliciesRequestBuilder} from './tokenLifetimePolicies/tokenLifetimePoliciesRequestBuilder';
import {DirectoryObjectItemRequestBuilder as Ib912ed8d8ac5765b62081ae40c470fcf950149a603500b416773d4e060862120} from './transitiveMemberOf/item/directoryObjectItemRequestBuilder';
import {TransitiveMemberOfRequestBuilder} from './transitiveMemberOf/transitiveMemberOfRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the collection of servicePrincipal entities.
 */
export class ServicePrincipalItemRequestBuilder {
    /** Provides operations to manage the appRoleAssignedTo property of the microsoft.graph.servicePrincipal entity. */
    public get appRoleAssignedTo(): AppRoleAssignedToRequestBuilder {
        return new AppRoleAssignedToRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the appRoleAssignments property of the microsoft.graph.servicePrincipal entity. */
    public get appRoleAssignments(): AppRoleAssignmentsRequestBuilder {
        return new AppRoleAssignmentsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the claimsMappingPolicies property of the microsoft.graph.servicePrincipal entity. */
    public get claimsMappingPolicies(): ClaimsMappingPoliciesRequestBuilder {
        return new ClaimsMappingPoliciesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the createdObjects property of the microsoft.graph.servicePrincipal entity. */
    public get createdObjects(): CreatedObjectsRequestBuilder {
        return new CreatedObjectsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the delegatedPermissionClassifications property of the microsoft.graph.servicePrincipal entity. */
    public get delegatedPermissionClassifications(): DelegatedPermissionClassificationsRequestBuilder {
        return new DelegatedPermissionClassificationsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the endpoints property of the microsoft.graph.servicePrincipal entity. */
    public get endpoints(): EndpointsRequestBuilder {
        return new EndpointsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the federatedIdentityCredentials property of the microsoft.graph.servicePrincipal entity. */
    public get federatedIdentityCredentials(): FederatedIdentityCredentialsRequestBuilder {
        return new FederatedIdentityCredentialsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the homeRealmDiscoveryPolicies property of the microsoft.graph.servicePrincipal entity. */
    public get homeRealmDiscoveryPolicies(): HomeRealmDiscoveryPoliciesRequestBuilder {
        return new HomeRealmDiscoveryPoliciesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the memberOf property of the microsoft.graph.servicePrincipal entity. */
    public get memberOf(): MemberOfRequestBuilder {
        return new MemberOfRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the addKey method. */
    public get microsoftGraphAddKey(): AddKeyRequestBuilder {
        return new AddKeyRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the addPassword method. */
    public get microsoftGraphAddPassword(): AddPasswordRequestBuilder {
        return new AddPasswordRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the addTokenSigningCertificate method. */
    public get microsoftGraphAddTokenSigningCertificate(): AddTokenSigningCertificateRequestBuilder {
        return new AddTokenSigningCertificateRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the checkMemberGroups method. */
    public get microsoftGraphCheckMemberGroups(): CheckMemberGroupsRequestBuilder {
        return new CheckMemberGroupsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the checkMemberObjects method. */
    public get microsoftGraphCheckMemberObjects(): CheckMemberObjectsRequestBuilder {
        return new CheckMemberObjectsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the getMemberGroups method. */
    public get microsoftGraphGetMemberGroups(): GetMemberGroupsRequestBuilder {
        return new GetMemberGroupsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the getMemberObjects method. */
    public get microsoftGraphGetMemberObjects(): GetMemberObjectsRequestBuilder {
        return new GetMemberObjectsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the removeKey method. */
    public get microsoftGraphRemoveKey(): RemoveKeyRequestBuilder {
        return new RemoveKeyRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the removePassword method. */
    public get microsoftGraphRemovePassword(): RemovePasswordRequestBuilder {
        return new RemovePasswordRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the restore method. */
    public get microsoftGraphRestore(): RestoreRequestBuilder {
        return new RestoreRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the oauth2PermissionGrants property of the microsoft.graph.servicePrincipal entity. */
    public get oauth2PermissionGrants(): Oauth2PermissionGrantsRequestBuilder {
        return new Oauth2PermissionGrantsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the ownedObjects property of the microsoft.graph.servicePrincipal entity. */
    public get ownedObjects(): OwnedObjectsRequestBuilder {
        return new OwnedObjectsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the owners property of the microsoft.graph.servicePrincipal entity. */
    public get owners(): OwnersRequestBuilder {
        return new OwnersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private requestAdapter: RequestAdapter;
    /** Provides operations to manage the tokenIssuancePolicies property of the microsoft.graph.servicePrincipal entity. */
    public get tokenIssuancePolicies(): TokenIssuancePoliciesRequestBuilder {
        return new TokenIssuancePoliciesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the tokenLifetimePolicies property of the microsoft.graph.servicePrincipal entity. */
    public get tokenLifetimePolicies(): TokenLifetimePoliciesRequestBuilder {
        return new TokenLifetimePoliciesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the transitiveMemberOf property of the microsoft.graph.servicePrincipal entity. */
    public get transitiveMemberOf(): TransitiveMemberOfRequestBuilder {
        return new TransitiveMemberOfRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder */
    private urlTemplate: string;
    /**
     * Provides operations to manage the appRoleAssignedTo property of the microsoft.graph.servicePrincipal entity.
     * @param id Unique identifier of the item
     * @returns a AppRoleAssignmentItemRequestBuilder
     */
    public appRoleAssignedToById(id: string) : I93168b8558556722da9cecc35d7553892e9e7c2bde1e1fb43b3db6857cf15658 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["appRoleAssignment%2Did"] = id
        return new I93168b8558556722da9cecc35d7553892e9e7c2bde1e1fb43b3db6857cf15658(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the appRoleAssignments property of the microsoft.graph.servicePrincipal entity.
     * @param id Unique identifier of the item
     * @returns a AppRoleAssignmentItemRequestBuilder
     */
    public appRoleAssignmentsById(id: string) : I0f96074f1bfce1552adeec4df64587124a7f4fef296a83e3a7d09766250b6d14 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["appRoleAssignment%2Did"] = id
        return new I0f96074f1bfce1552adeec4df64587124a7f4fef296a83e3a7d09766250b6d14(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.servicePrincipals.item.claimsMappingPolicies.item collection
     * @param id Unique identifier of the item
     * @returns a ClaimsMappingPolicyItemRequestBuilder
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
     * @param servicePrincipalId key: id of servicePrincipal
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter, servicePrincipalId?: string | undefined) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/servicePrincipals/{servicePrincipal%2Did}{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        urlTplParams["servicePrincipal%2Did"] = servicePrincipalId
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Provides operations to manage the createdObjects property of the microsoft.graph.servicePrincipal entity.
     * @param id Unique identifier of the item
     * @returns a DirectoryObjectItemRequestBuilder
     */
    public createdObjectsById(id: string) : Idd5bcd509e8fa4de83b0ab51581c31faee151d3fe6ef9edcf927694965d73a2c {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["directoryObject%2Did"] = id
        return new Idd5bcd509e8fa4de83b0ab51581c31faee151d3fe6ef9edcf927694965d73a2c(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the delegatedPermissionClassifications property of the microsoft.graph.servicePrincipal entity.
     * @param id Unique identifier of the item
     * @returns a DelegatedPermissionClassificationItemRequestBuilder
     */
    public delegatedPermissionClassificationsById(id: string) : DelegatedPermissionClassificationItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["delegatedPermissionClassification%2Did"] = id
        return new DelegatedPermissionClassificationItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Delete a servicePrincipal object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @see {@link https://docs.microsoft.com/graph/api/serviceprincipal-delete?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: ServicePrincipalItemRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
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
     * Provides operations to manage the endpoints property of the microsoft.graph.servicePrincipal entity.
     * @param id Unique identifier of the item
     * @returns a EndpointItemRequestBuilder
     */
    public endpointsById(id: string) : EndpointItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["endpoint%2Did"] = id
        return new EndpointItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the federatedIdentityCredentials property of the microsoft.graph.servicePrincipal entity.
     * @param id Unique identifier of the item
     * @returns a FederatedIdentityCredentialItemRequestBuilder
     */
    public federatedIdentityCredentialsById(id: string) : FederatedIdentityCredentialItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["federatedIdentityCredential%2Did"] = id
        return new FederatedIdentityCredentialItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Retrieve the properties and relationships of a servicePrincipal object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ServicePrincipal
     * @see {@link https://docs.microsoft.com/graph/api/serviceprincipal-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: ServicePrincipalItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<ServicePrincipal | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<ServicePrincipal>(requestInfo, createServicePrincipalFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.servicePrincipals.item.homeRealmDiscoveryPolicies.item collection
     * @param id Unique identifier of the item
     * @returns a HomeRealmDiscoveryPolicyItemRequestBuilder
     */
    public homeRealmDiscoveryPoliciesById(id: string) : HomeRealmDiscoveryPolicyItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["homeRealmDiscoveryPolicy%2Did"] = id
        return new HomeRealmDiscoveryPolicyItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the memberOf property of the microsoft.graph.servicePrincipal entity.
     * @param id Unique identifier of the item
     * @returns a DirectoryObjectItemRequestBuilder
     */
    public memberOfById(id: string) : If04f7937796df91a9e5b988ef3bf59350050b50c9239bd5559c64c4c55486c2a {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["directoryObject%2Did"] = id
        return new If04f7937796df91a9e5b988ef3bf59350050b50c9239bd5559c64c4c55486c2a(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the oauth2PermissionGrants property of the microsoft.graph.servicePrincipal entity.
     * @param id Unique identifier of the item
     * @returns a OAuth2PermissionGrantItemRequestBuilder
     */
    public oauth2PermissionGrantsById(id: string) : OAuth2PermissionGrantItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["oAuth2PermissionGrant%2Did"] = id
        return new OAuth2PermissionGrantItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the ownedObjects property of the microsoft.graph.servicePrincipal entity.
     * @param id Unique identifier of the item
     * @returns a DirectoryObjectItemRequestBuilder
     */
    public ownedObjectsById(id: string) : Ia867b6ae3f11225ff7b901f1fce150f9e21290a6d6c449c35e70db3ddcd52411 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["directoryObject%2Did"] = id
        return new Ia867b6ae3f11225ff7b901f1fce150f9e21290a6d6c449c35e70db3ddcd52411(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.servicePrincipals.item.owners.item collection
     * @param id Unique identifier of the item
     * @returns a DirectoryObjectItemRequestBuilder
     */
    public ownersById(id: string) : I0835d8d8ef8d42e8d6c78b47f39ee556ddd6a1be84094c5c876147cb74186e0f {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["directoryObject%2Did"] = id
        return new I0835d8d8ef8d42e8d6c78b47f39ee556ddd6a1be84094c5c876147cb74186e0f(urlTplParams, this.requestAdapter);
    };
    /**
     * Update entity in servicePrincipals
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ServicePrincipal
     */
    public patch(body: ServicePrincipal | undefined, requestConfiguration?: ServicePrincipalItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<ServicePrincipal | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<ServicePrincipal>(requestInfo, createServicePrincipalFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Delete a servicePrincipal object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: ServicePrincipalItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Retrieve the properties and relationships of a servicePrincipal object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ServicePrincipalItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Provides operations to manage the tokenIssuancePolicies property of the microsoft.graph.servicePrincipal entity.
     * @param id Unique identifier of the item
     * @returns a TokenIssuancePolicyItemRequestBuilder
     */
    public tokenIssuancePoliciesById(id: string) : TokenIssuancePolicyItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["tokenIssuancePolicy%2Did"] = id
        return new TokenIssuancePolicyItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the tokenLifetimePolicies property of the microsoft.graph.servicePrincipal entity.
     * @param id Unique identifier of the item
     * @returns a TokenLifetimePolicyItemRequestBuilder
     */
    public tokenLifetimePoliciesById(id: string) : TokenLifetimePolicyItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["tokenLifetimePolicy%2Did"] = id
        return new TokenLifetimePolicyItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Update entity in servicePrincipals
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: ServicePrincipal | undefined, requestConfiguration?: ServicePrincipalItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
    /**
     * Provides operations to manage the transitiveMemberOf property of the microsoft.graph.servicePrincipal entity.
     * @param id Unique identifier of the item
     * @returns a DirectoryObjectItemRequestBuilder
     */
    public transitiveMemberOfById(id: string) : Ib912ed8d8ac5765b62081ae40c470fcf950149a603500b416773d4e060862120 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["directoryObject%2Did"] = id
        return new Ib912ed8d8ac5765b62081ae40c470fcf950149a603500b416773d4e060862120(urlTplParams, this.requestAdapter);
    };
}
