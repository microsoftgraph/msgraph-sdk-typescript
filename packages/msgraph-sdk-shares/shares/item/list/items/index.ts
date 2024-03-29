/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createListItemCollectionResponseFromDiscriminatorValue, createListItemFromDiscriminatorValue, serializeListItem, type ListItem, type ListItemCollectionResponse } from '@microsoft/msgraph-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/';
import { ListItemItemRequestBuilderNavigationMetadata, ListItemItemRequestBuilderRequestsMetadata, type ListItemItemRequestBuilder } from './item/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the items property of the microsoft.graph.list entity.
 */
export interface ItemsRequestBuilder extends BaseRequestBuilder<ItemsRequestBuilder> {
    /**
     * Provides operations to manage the items property of the microsoft.graph.list entity.
     * @param listItemId The unique identifier of listItem
     * @returns {ListItemItemRequestBuilder}
     */
     byListItemId(listItemId: string) : ListItemItemRequestBuilder;
    /**
     * Get the collection of [items][item] in a [list][].
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ListItemCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/listitem-list?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<ItemsRequestBuilderGetQueryParameters> | undefined) : Promise<ListItemCollectionResponse | undefined>;
    /**
     * Create a new [listItem][] in a [list][].
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ListItem>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/listitem-create?view=graph-rest-1.0|Find more info here}
     */
     post(body: ListItem, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ListItem | undefined>;
    /**
     * Get the collection of [items][item] in a [list][].
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<ItemsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create a new [listItem][] in a [list][].
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: ListItem, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get the collection of [items][item] in a [list][].
 */
export interface ItemsRequestBuilderGetQueryParameters {
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
export const ItemsRequestBuilderUriTemplate = "{+baseurl}/shares/{sharedDriveItem%2Did}/list/items{?%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const ItemsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const ItemsRequestBuilderNavigationMetadata: Record<Exclude<keyof ItemsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byListItemId: {
        requestsMetadata: ListItemItemRequestBuilderRequestsMetadata,
        navigationMetadata: ListItemItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["listItem%2Did"],
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const ItemsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: ItemsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createListItemCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: ItemsRequestBuilderGetQueryParametersMapper,
    },
    post: {
        uriTemplate: ItemsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createListItemFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeListItem,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
