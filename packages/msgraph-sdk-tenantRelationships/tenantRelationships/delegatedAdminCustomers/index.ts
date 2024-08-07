/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createDelegatedAdminCustomerCollectionResponseFromDiscriminatorValue, createDelegatedAdminCustomerFromDiscriminatorValue, serializeDelegatedAdminCustomer, type DelegatedAdminCustomer, type DelegatedAdminCustomerCollectionResponse } from '@microsoft/msgraph-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/index.js';
// @ts-ignore
import { DelegatedAdminCustomerItemRequestBuilderNavigationMetadata, DelegatedAdminCustomerItemRequestBuilderRequestsMetadata, type DelegatedAdminCustomerItemRequestBuilder } from './item/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the delegatedAdminCustomers property of the microsoft.graph.tenantRelationship entity.
 */
export interface DelegatedAdminCustomersRequestBuilder extends BaseRequestBuilder<DelegatedAdminCustomersRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the delegatedAdminCustomers property of the microsoft.graph.tenantRelationship entity.
     * @param delegatedAdminCustomerId The unique identifier of delegatedAdminCustomer
     * @returns {DelegatedAdminCustomerItemRequestBuilder}
     */
     byDelegatedAdminCustomerId(delegatedAdminCustomerId: string) : DelegatedAdminCustomerItemRequestBuilder;
    /**
     * Get a list of the delegatedAdminCustomer objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<DelegatedAdminCustomerCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/tenantrelationship-list-delegatedadmincustomers?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<DelegatedAdminCustomersRequestBuilderGetQueryParameters> | undefined) : Promise<DelegatedAdminCustomerCollectionResponse | undefined>;
    /**
     * Create new navigation property to delegatedAdminCustomers for tenantRelationships
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<DelegatedAdminCustomer>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: DelegatedAdminCustomer, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<DelegatedAdminCustomer | undefined>;
    /**
     * Get a list of the delegatedAdminCustomer objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<DelegatedAdminCustomersRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to delegatedAdminCustomers for tenantRelationships
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: DelegatedAdminCustomer, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get a list of the delegatedAdminCustomer objects and their properties.
 */
export interface DelegatedAdminCustomersRequestBuilderGetQueryParameters {
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
export const DelegatedAdminCustomersRequestBuilderUriTemplate = "{+baseurl}/tenantRelationships/delegatedAdminCustomers{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const DelegatedAdminCustomersRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const DelegatedAdminCustomersRequestBuilderNavigationMetadata: Record<Exclude<keyof DelegatedAdminCustomersRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byDelegatedAdminCustomerId: {
        requestsMetadata: DelegatedAdminCustomerItemRequestBuilderRequestsMetadata,
        navigationMetadata: DelegatedAdminCustomerItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["delegatedAdminCustomer%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const DelegatedAdminCustomersRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: DelegatedAdminCustomersRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createDelegatedAdminCustomerCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: DelegatedAdminCustomersRequestBuilderGetQueryParametersMapper,
    },
    post: {
        uriTemplate: DelegatedAdminCustomersRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createDelegatedAdminCustomerFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeDelegatedAdminCustomer,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
