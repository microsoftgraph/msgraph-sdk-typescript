/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createIdentityProviderBaseCollectionResponseFromDiscriminatorValue, type IdentityProviderBaseCollectionResponse } from '@microsoft/msgraph-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/index.js';
// @ts-ignore
import { IdentityProviderBaseItemRequestBuilderNavigationMetadata, type IdentityProviderBaseItemRequestBuilder } from './item/index.js';
// @ts-ignore
import { RefRequestBuilderRequestsMetadata, type RefRequestBuilder } from './ref/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the userFlowIdentityProviders property of the microsoft.graph.b2xIdentityUserFlow entity.
 */
export interface UserFlowIdentityProvidersRequestBuilder extends BaseRequestBuilder<UserFlowIdentityProvidersRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the collection of identityContainer entities.
     */
    get ref(): RefRequestBuilder;
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.identity.b2xUserFlows.item.userFlowIdentityProviders.item collection
     * @param identityProviderBaseId The unique identifier of identityProviderBase
     * @returns {IdentityProviderBaseItemRequestBuilder}
     */
     byIdentityProviderBaseId(identityProviderBaseId: string) : IdentityProviderBaseItemRequestBuilder;
    /**
     * Get userFlowIdentityProviders from identity
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<IdentityProviderBaseCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<UserFlowIdentityProvidersRequestBuilderGetQueryParameters> | undefined) : Promise<IdentityProviderBaseCollectionResponse | undefined>;
    /**
     * Get userFlowIdentityProviders from identity
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<UserFlowIdentityProvidersRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * Get userFlowIdentityProviders from identity
 */
export interface UserFlowIdentityProvidersRequestBuilderGetQueryParameters {
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
/**
 * Uri template for the request builder.
 */
export const UserFlowIdentityProvidersRequestBuilderUriTemplate = "{+baseurl}/identity/b2xUserFlows/{b2xIdentityUserFlow%2Did}/userFlowIdentityProviders{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const UserFlowIdentityProvidersRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "count": "%24count",
    "expand": "%24expand",
    "filter": "%24filter",
    "orderby": "%24orderby",
    "search": "%24search",
    "select": "%24select",
    "skip": "%24skip",
    "top": "%24top",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const UserFlowIdentityProvidersRequestBuilderNavigationMetadata: Record<Exclude<keyof UserFlowIdentityProvidersRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byIdentityProviderBaseId: {
        navigationMetadata: IdentityProviderBaseItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["identityProviderBase%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
    ref: {
        requestsMetadata: RefRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const UserFlowIdentityProvidersRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: UserFlowIdentityProvidersRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createIdentityProviderBaseCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: UserFlowIdentityProvidersRequestBuilderGetQueryParametersMapper,
    },
};
/* tslint:enable */
/* eslint-enable */
