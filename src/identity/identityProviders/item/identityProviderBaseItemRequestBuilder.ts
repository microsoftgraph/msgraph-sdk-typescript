import {createIdentityProviderBaseFromDiscriminatorValue} from '../../../models/createIdentityProviderBaseFromDiscriminatorValue';
import {deserializeIntoIdentityProviderBase} from '../../../models/deserializeIntoIdentityProviderBase';
import {IdentityProviderBase} from '../../../models/identityProviderBase';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {serializeIdentityProviderBase} from '../../../models/serializeIdentityProviderBase';
import {IdentityProviderBaseItemRequestBuilderDeleteRequestConfiguration} from './identityProviderBaseItemRequestBuilderDeleteRequestConfiguration';
import {IdentityProviderBaseItemRequestBuilderGetRequestConfiguration} from './identityProviderBaseItemRequestBuilderGetRequestConfiguration';
import {IdentityProviderBaseItemRequestBuilderPatchRequestConfiguration} from './identityProviderBaseItemRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the identityProviders property of the microsoft.graph.identityContainer entity.
 */
export class IdentityProviderBaseItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new IdentityProviderBaseItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identity/identityProviders/{identityProviderBase%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete an identity provider resource that is of the type specified by the **id** in the request. Among the types of providers derived from identityProviderBase, you can currently delete a socialIdentityProvider resource in Azure AD. In Azure AD B2C, this operation can currently delete a socialIdentityProvider, or an appleManagedIdentityProvider resource.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @see {@link https://docs.microsoft.com/graph/api/identityproviderbase-delete?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: IdentityProviderBaseItemRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.toDeleteRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Get the properties and relationships of the specified identity provider configured in the tenant. Among the types of providers derived from identityProviderBase, you can currently get a socialIdentityProvider or a builtinIdentityProvider resource in Azure AD. In Azure AD B2C, this operation can currently get a socialIdentityProvider, or an appleManagedIdentityProvider resource.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of IdentityProviderBase
     * @see {@link https://docs.microsoft.com/graph/api/identityproviderbase-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: IdentityProviderBaseItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<IdentityProviderBase | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<IdentityProviderBase>(requestInfo, createIdentityProviderBaseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Update the properties of the specified identity provider configured in the tenant. Among the types of providers derived from identityProviderBase, you can currently update a socialIdentityProvider resource in Azure AD. In Azure AD B2C, this operation can currently update a socialIdentityProvider, or an appleManagedIdentityProvider resource.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of IdentityProviderBase
     * @see {@link https://docs.microsoft.com/graph/api/identityproviderbase-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: IdentityProviderBase | undefined, requestConfiguration?: IdentityProviderBaseItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<IdentityProviderBase | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<IdentityProviderBase>(requestInfo, createIdentityProviderBaseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Delete an identity provider resource that is of the type specified by the **id** in the request. Among the types of providers derived from identityProviderBase, you can currently delete a socialIdentityProvider resource in Azure AD. In Azure AD B2C, this operation can currently delete a socialIdentityProvider, or an appleManagedIdentityProvider resource.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: IdentityProviderBaseItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Get the properties and relationships of the specified identity provider configured in the tenant. Among the types of providers derived from identityProviderBase, you can currently get a socialIdentityProvider or a builtinIdentityProvider resource in Azure AD. In Azure AD B2C, this operation can currently get a socialIdentityProvider, or an appleManagedIdentityProvider resource.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: IdentityProviderBaseItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the properties of the specified identity provider configured in the tenant. Among the types of providers derived from identityProviderBase, you can currently update a socialIdentityProvider resource in Azure AD. In Azure AD B2C, this operation can currently update a socialIdentityProvider, or an appleManagedIdentityProvider resource.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: IdentityProviderBase | undefined, requestConfiguration?: IdentityProviderBaseItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeIdentityProviderBase);
        return requestInfo;
    };
}
