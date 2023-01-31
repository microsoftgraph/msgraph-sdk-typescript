import {Application} from '../../models/';
import {createApplicationFromDiscriminatorValue} from '../../models/createApplicationFromDiscriminatorValue';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {ApplicationItemRequestBuilderDeleteRequestConfiguration} from './applicationItemRequestBuilderDeleteRequestConfiguration';
import {ApplicationItemRequestBuilderGetRequestConfiguration} from './applicationItemRequestBuilderGetRequestConfiguration';
import {ApplicationItemRequestBuilderPatchRequestConfiguration} from './applicationItemRequestBuilderPatchRequestConfiguration';
import {CreatedOnBehalfOfRequestBuilder} from './createdOnBehalfOf/createdOnBehalfOfRequestBuilder';
import {ExtensionPropertiesRequestBuilder} from './extensionProperties/extensionPropertiesRequestBuilder';
import {ExtensionPropertyItemRequestBuilder} from './extensionProperties/item/extensionPropertyItemRequestBuilder';
import {FederatedIdentityCredentialsRequestBuilder} from './federatedIdentityCredentials/federatedIdentityCredentialsRequestBuilder';
import {FederatedIdentityCredentialItemRequestBuilder} from './federatedIdentityCredentials/item/federatedIdentityCredentialItemRequestBuilder';
import {HomeRealmDiscoveryPoliciesRequestBuilder} from './homeRealmDiscoveryPolicies/homeRealmDiscoveryPoliciesRequestBuilder';
import {HomeRealmDiscoveryPolicyItemRequestBuilder} from './homeRealmDiscoveryPolicies/item/homeRealmDiscoveryPolicyItemRequestBuilder';
import {LogoRequestBuilder} from './logo/logoRequestBuilder';
import {AddKeyRequestBuilder} from './microsoftGraphAddKey/addKeyRequestBuilder';
import {AddPasswordRequestBuilder} from './microsoftGraphAddPassword/addPasswordRequestBuilder';
import {CheckMemberGroupsRequestBuilder} from './microsoftGraphCheckMemberGroups/checkMemberGroupsRequestBuilder';
import {CheckMemberObjectsRequestBuilder} from './microsoftGraphCheckMemberObjects/checkMemberObjectsRequestBuilder';
import {GetMemberGroupsRequestBuilder} from './microsoftGraphGetMemberGroups/getMemberGroupsRequestBuilder';
import {GetMemberObjectsRequestBuilder} from './microsoftGraphGetMemberObjects/getMemberObjectsRequestBuilder';
import {RemoveKeyRequestBuilder} from './microsoftGraphRemoveKey/removeKeyRequestBuilder';
import {RemovePasswordRequestBuilder} from './microsoftGraphRemovePassword/removePasswordRequestBuilder';
import {RestoreRequestBuilder} from './microsoftGraphRestore/restoreRequestBuilder';
import {SetVerifiedPublisherRequestBuilder} from './microsoftGraphSetVerifiedPublisher/setVerifiedPublisherRequestBuilder';
import {UnsetVerifiedPublisherRequestBuilder} from './microsoftGraphUnsetVerifiedPublisher/unsetVerifiedPublisherRequestBuilder';
import {DirectoryObjectItemRequestBuilder} from './owners/item/directoryObjectItemRequestBuilder';
import {OwnersRequestBuilder} from './owners/ownersRequestBuilder';
import {TokenIssuancePolicyItemRequestBuilder} from './tokenIssuancePolicies/item/tokenIssuancePolicyItemRequestBuilder';
import {TokenIssuancePoliciesRequestBuilder} from './tokenIssuancePolicies/tokenIssuancePoliciesRequestBuilder';
import {TokenLifetimePolicyItemRequestBuilder} from './tokenLifetimePolicies/item/tokenLifetimePolicyItemRequestBuilder';
import {TokenLifetimePoliciesRequestBuilder} from './tokenLifetimePolicies/tokenLifetimePoliciesRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the collection of application entities.
 */
export class ApplicationItemRequestBuilder {
    /** Provides operations to manage the createdOnBehalfOf property of the microsoft.graph.application entity. */
    public get createdOnBehalfOf(): CreatedOnBehalfOfRequestBuilder {
        return new CreatedOnBehalfOfRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the extensionProperties property of the microsoft.graph.application entity. */
    public get extensionProperties(): ExtensionPropertiesRequestBuilder {
        return new ExtensionPropertiesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the federatedIdentityCredentials property of the microsoft.graph.application entity. */
    public get federatedIdentityCredentials(): FederatedIdentityCredentialsRequestBuilder {
        return new FederatedIdentityCredentialsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the homeRealmDiscoveryPolicies property of the microsoft.graph.application entity. */
    public get homeRealmDiscoveryPolicies(): HomeRealmDiscoveryPoliciesRequestBuilder {
        return new HomeRealmDiscoveryPoliciesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the media for the application entity. */
    public get logo(): LogoRequestBuilder {
        return new LogoRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the addKey method. */
    public get microsoftGraphAddKey(): AddKeyRequestBuilder {
        return new AddKeyRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the addPassword method. */
    public get microsoftGraphAddPassword(): AddPasswordRequestBuilder {
        return new AddPasswordRequestBuilder(this.pathParameters, this.requestAdapter);
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
    /** Provides operations to call the setVerifiedPublisher method. */
    public get microsoftGraphSetVerifiedPublisher(): SetVerifiedPublisherRequestBuilder {
        return new SetVerifiedPublisherRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the unsetVerifiedPublisher method. */
    public get microsoftGraphUnsetVerifiedPublisher(): UnsetVerifiedPublisherRequestBuilder {
        return new UnsetVerifiedPublisherRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the owners property of the microsoft.graph.application entity. */
    public get owners(): OwnersRequestBuilder {
        return new OwnersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private requestAdapter: RequestAdapter;
    /** Provides operations to manage the tokenIssuancePolicies property of the microsoft.graph.application entity. */
    public get tokenIssuancePolicies(): TokenIssuancePoliciesRequestBuilder {
        return new TokenIssuancePoliciesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the tokenLifetimePolicies property of the microsoft.graph.application entity. */
    public get tokenLifetimePolicies(): TokenLifetimePoliciesRequestBuilder {
        return new TokenLifetimePoliciesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder */
    private urlTemplate: string;
    /**
     * Instantiates a new ApplicationItemRequestBuilder and sets the default values.
     * @param applicationId key: id of application
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter, applicationId?: string | undefined) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/applications/{application%2Did}{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        urlTplParams["application%2Did"] = applicationId
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete an application object. When deleted, apps are moved to a temporary container and can be restored within 30 days. After that time, they are permanently deleted.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @see {@link https://docs.microsoft.com/graph/api/application-delete?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: ApplicationItemRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
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
     * Provides operations to manage the extensionProperties property of the microsoft.graph.application entity.
     * @param id Unique identifier of the item
     * @returns a ExtensionPropertyItemRequestBuilder
     */
    public extensionPropertiesById(id: string) : ExtensionPropertyItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["extensionProperty%2Did"] = id
        return new ExtensionPropertyItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the federatedIdentityCredentials property of the microsoft.graph.application entity.
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
     * Get the properties and relationships of an application object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Application
     * @see {@link https://docs.microsoft.com/graph/api/application-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: ApplicationItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Application | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<Application>(requestInfo, createApplicationFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Provides operations to manage the homeRealmDiscoveryPolicies property of the microsoft.graph.application entity.
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
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.applications.item.owners.item collection
     * @param id Unique identifier of the item
     * @returns a DirectoryObjectItemRequestBuilder
     */
    public ownersById(id: string) : DirectoryObjectItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["directoryObject%2Did"] = id
        return new DirectoryObjectItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Update the properties of an application object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Application
     * @see {@link https://docs.microsoft.com/graph/api/application-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: Application | undefined, requestConfiguration?: ApplicationItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Application | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<Application>(requestInfo, createApplicationFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Delete an application object. When deleted, apps are moved to a temporary container and can be restored within 30 days. After that time, they are permanently deleted.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: ApplicationItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Get the properties and relationships of an application object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ApplicationItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.applications.item.tokenIssuancePolicies.item collection
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
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.applications.item.tokenLifetimePolicies.item collection
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
     * Update the properties of an application object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: Application | undefined, requestConfiguration?: ApplicationItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
