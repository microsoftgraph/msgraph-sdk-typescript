/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createThumbnailSetCollectionResponseFromDiscriminatorValue, createThumbnailSetFromDiscriminatorValue, serializeThumbnailSet, type ThumbnailSet, type ThumbnailSetCollectionResponse } from '@microsoft/msgraph-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/index.js';
// @ts-ignore
import { ThumbnailSetItemRequestBuilderRequestsMetadata, type ThumbnailSetItemRequestBuilder } from './item/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the thumbnails property of the microsoft.graph.driveItem entity.
 */
export interface ThumbnailsRequestBuilder extends BaseRequestBuilder<ThumbnailsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the thumbnails property of the microsoft.graph.driveItem entity.
     * @param thumbnailSetId The unique identifier of thumbnailSet
     * @returns {ThumbnailSetItemRequestBuilder}
     */
     byThumbnailSetId(thumbnailSetId: string) : ThumbnailSetItemRequestBuilder;
    /**
     * Collection of thumbnailSet objects associated with the item. For more information, see getting thumbnails. Read-only. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ThumbnailSetCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<ThumbnailsRequestBuilderGetQueryParameters> | undefined) : Promise<ThumbnailSetCollectionResponse | undefined>;
    /**
     * Create new navigation property to thumbnails for drives
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ThumbnailSet>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: ThumbnailSet, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ThumbnailSet | undefined>;
    /**
     * Collection of thumbnailSet objects associated with the item. For more information, see getting thumbnails. Read-only. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<ThumbnailsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to thumbnails for drives
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: ThumbnailSet, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Collection of thumbnailSet objects associated with the item. For more information, see getting thumbnails. Read-only. Nullable.
 */
export interface ThumbnailsRequestBuilderGetQueryParameters {
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
export const ThumbnailsRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/thumbnails{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const ThumbnailsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const ThumbnailsRequestBuilderNavigationMetadata: Record<Exclude<keyof ThumbnailsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byThumbnailSetId: {
        requestsMetadata: ThumbnailSetItemRequestBuilderRequestsMetadata,
        pathParametersMappings: ["thumbnailSet%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const ThumbnailsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: ThumbnailsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createThumbnailSetCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: ThumbnailsRequestBuilderGetQueryParametersMapper,
    },
    post: {
        uriTemplate: ThumbnailsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createThumbnailSetFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeThumbnailSet,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
