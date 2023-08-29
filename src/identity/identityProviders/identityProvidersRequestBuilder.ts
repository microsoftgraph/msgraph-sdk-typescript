import {IdentityProviderBaseCollectionResponse} from '../../models/';
import {createIdentityProviderBaseCollectionResponseFromDiscriminatorValue} from '../../models/createIdentityProviderBaseCollectionResponseFromDiscriminatorValue';
import {createIdentityProviderBaseFromDiscriminatorValue} from '../../models/createIdentityProviderBaseFromDiscriminatorValue';
import {deserializeIntoIdentityProviderBase} from '../../models/deserializeIntoIdentityProviderBase';
import type {IdentityProviderBase} from '../../models/identityProviderBase';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import {serializeIdentityProviderBase} from '../../models/serializeIdentityProviderBase';
import {AvailableProviderTypesRequestBuilder} from './availableProviderTypes/availableProviderTypesRequestBuilder';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {IdentityProvidersRequestBuilderGetRequestConfiguration} from './identityProvidersRequestBuilderGetRequestConfiguration';
import {IdentityProvidersRequestBuilderPostRequestConfiguration} from './identityProvidersRequestBuilderPostRequestConfiguration';
import {IdentityProviderBaseItemRequestBuilder} from './item/identityProviderBaseItemRequestBuilder';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the identityProviders property of the microsoft.graph.identityContainer entity.
 */
export class IdentityProvidersRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to call the availableProviderTypes method.
     */
    public get availableProviderTypes(): AvailableProviderTypesRequestBuilder {
        return new AvailableProviderTypesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the identityProviders property of the microsoft.graph.identityContainer entity.
     * @param identityProviderBaseId The unique identifier of identityProviderBase
     * @returns a IdentityProviderBaseItemRequestBuilder
     */
    public byIdentityProviderBaseId(identityProviderBaseId: string) : IdentityProviderBaseItemRequestBuilder {
        if(!identityProviderBaseId) throw new Error("identityProviderBaseId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["identityProviderBase%2Did"] = identityProviderBaseId
        return new IdentityProviderBaseItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new IdentityProvidersRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identity/identityProviders{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get a collection of identity provider resources that are configured for a tenant, and that are derived from identityProviderBase. For an Azure AD tenant, the providers can be socialIdentityProviders or builtinIdentityProviders objects. For an Azure AD B2C, the providers can be socialIdentityProvider, or appleManagedIdentityProvider objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of IdentityProviderBaseCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/identitycontainer-list-identityproviders?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: IdentityProvidersRequestBuilderGetRequestConfiguration | undefined) : Promise<IdentityProviderBaseCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<IdentityProviderBaseCollectionResponse>(requestInfo, createIdentityProviderBaseCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create an identity provider object that is of the type specified in the request body. Among the types of providers derived from identityProviderBase, you can currently create a socialIdentityProvider resource in Azure AD. In Azure AD B2C, this operation can currently create a socialIdentityProvider, or an appleManagedIdentityProvider resource.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of IdentityProviderBase
     * @see {@link https://learn.microsoft.com/graph/api/identitycontainer-post-identityproviders?view=graph-rest-1.0|Find more info here}
     */
    public post(body: IdentityProviderBase, requestConfiguration?: IdentityProvidersRequestBuilderPostRequestConfiguration | undefined) : Promise<IdentityProviderBase | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<IdentityProviderBase>(requestInfo, createIdentityProviderBaseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get a collection of identity provider resources that are configured for a tenant, and that are derived from identityProviderBase. For an Azure AD tenant, the providers can be socialIdentityProviders or builtinIdentityProviders objects. For an Azure AD B2C, the providers can be socialIdentityProvider, or appleManagedIdentityProvider objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: IdentityProvidersRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create an identity provider object that is of the type specified in the request body. Among the types of providers derived from identityProviderBase, you can currently create a socialIdentityProvider resource in Azure AD. In Azure AD B2C, this operation can currently create a socialIdentityProvider, or an appleManagedIdentityProvider resource.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: IdentityProviderBase, requestConfiguration?: IdentityProvidersRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeIdentityProviderBase);
        return requestInfo;
    };
}
