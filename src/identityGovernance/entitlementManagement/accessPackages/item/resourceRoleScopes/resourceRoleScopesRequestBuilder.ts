import { type AccessPackageResourceRoleScopeCollectionResponse } from '../../../../../models/';
import { createAccessPackageResourceRoleScopeFromDiscriminatorValue, deserializeIntoAccessPackageResourceRoleScope, serializeAccessPackageResourceRoleScope, type AccessPackageResourceRoleScope } from '../../../../../models/accessPackageResourceRoleScope';
import { createAccessPackageResourceRoleScopeCollectionResponseFromDiscriminatorValue } from '../../../../../models/accessPackageResourceRoleScopeCollectionResponse';
import { type ODataError } from '../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../../../models/oDataErrors/oDataError';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { AccessPackageResourceRoleScopeItemRequestBuilder } from './item/accessPackageResourceRoleScopeItemRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface ResourceRoleScopesRequestBuilderGetQueryParameters {
    /**
     * Include count of items
     */
    count?: boolean;
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Filter items by property values
     */
    filter?: string;
    /**
     * Order items by property values
     */
    orderby?: string[];
    /**
     * Search items by search phrases
     */
    search?: string;
    /**
     * Select properties to be returned
     */
    select?: string[];
    /**
     * Skip the first n items
     */
    skip?: number;
    /**
     * Show only the first n items
     */
    top?: number;
}
export interface ResourceRoleScopesRequestBuilderGetRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
    /**
     * Request query parameters
     */
    queryParameters?: ResourceRoleScopesRequestBuilderGetQueryParameters;
}
export interface ResourceRoleScopesRequestBuilderPostRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
}
/**
 * Provides operations to manage the resourceRoleScopes property of the microsoft.graph.accessPackage entity.
 */
export class ResourceRoleScopesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the resourceRoleScopes property of the microsoft.graph.accessPackage entity.
     * @param accessPackageResourceRoleScopeId The unique identifier of accessPackageResourceRoleScope
     * @returns a AccessPackageResourceRoleScopeItemRequestBuilder
     */
    public byAccessPackageResourceRoleScopeId(accessPackageResourceRoleScopeId: string) : AccessPackageResourceRoleScopeItemRequestBuilder {
        if(!accessPackageResourceRoleScopeId) throw new Error("accessPackageResourceRoleScopeId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["accessPackageResourceRoleScope%2Did"] = accessPackageResourceRoleScopeId
        return new AccessPackageResourceRoleScopeItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new ResourceRoleScopesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identityGovernance/entitlementManagement/accessPackages/{accessPackage%2Did}/resourceRoleScopes{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * The resource roles and scopes in this access package.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AccessPackageResourceRoleScopeCollectionResponse
     */
    public get(requestConfiguration?: ResourceRoleScopesRequestBuilderGetRequestConfiguration | undefined) : Promise<AccessPackageResourceRoleScopeCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AccessPackageResourceRoleScopeCollectionResponse>(requestInfo, createAccessPackageResourceRoleScopeCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new accessPackageResourceRoleScope for adding a resource role to an access package. The access package resource, for a group, an app, or a SharePoint Online site, must already exist in the access package catalog, and the originId for the resource role retrieved from the list of the resource roles. Once you add the resource role scope to the access package, the user will receive this resource role through any current and future access package assignments. This API is supported in the following national cloud deployments.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AccessPackageResourceRoleScope
     * @see {@link https://learn.microsoft.com/graph/api/accesspackage-post-resourcerolescopes?view=graph-rest-1.0|Find more info here}
     */
    public post(body: AccessPackageResourceRoleScope, requestConfiguration?: ResourceRoleScopesRequestBuilderPostRequestConfiguration | undefined) : Promise<AccessPackageResourceRoleScope | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AccessPackageResourceRoleScope>(requestInfo, createAccessPackageResourceRoleScopeFromDiscriminatorValue, errorMapping);
    };
    /**
     * The resource roles and scopes in this access package.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ResourceRoleScopesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new accessPackageResourceRoleScope for adding a resource role to an access package. The access package resource, for a group, an app, or a SharePoint Online site, must already exist in the access package catalog, and the originId for the resource role retrieved from the list of the resource roles. Once you add the resource role scope to the access package, the user will receive this resource role through any current and future access package assignments. This API is supported in the following national cloud deployments.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: AccessPackageResourceRoleScope, requestConfiguration?: ResourceRoleScopesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeAccessPackageResourceRoleScope);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a resourceRoleScopesRequestBuilder
     */
    public withUrl(rawUrl: string) : ResourceRoleScopesRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new ResourceRoleScopesRequestBuilder(rawUrl, this.requestAdapter);
    };
}
