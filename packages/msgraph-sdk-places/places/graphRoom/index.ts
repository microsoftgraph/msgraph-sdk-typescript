/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createRoomCollectionResponseFromDiscriminatorValue, type RoomCollectionResponse } from '@microsoft/msgraph-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Casts the previous resource to room.
 */
export interface GraphRoomRequestBuilder extends BaseRequestBuilder<GraphRoomRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Get a collection of the specified type of place objects defined in the tenant. For example, you can get all the rooms, all the room lists, or the rooms in a specific room list in the tenant. A place object can be one of the following types: Both room and roomList are derived from the place object. By default, this operation returns 100 places per page. Compared with the findRooms and findRoomLists functions, this operation returns a richer payload for rooms and room lists. See details for how they compare.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<RoomCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/place-list?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<GraphRoomRequestBuilderGetQueryParameters> | undefined) : Promise<RoomCollectionResponse | undefined>;
    /**
     * Get a collection of the specified type of place objects defined in the tenant. For example, you can get all the rooms, all the room lists, or the rooms in a specific room list in the tenant. A place object can be one of the following types: Both room and roomList are derived from the place object. By default, this operation returns 100 places per page. Compared with the findRooms and findRoomLists functions, this operation returns a richer payload for rooms and room lists. See details for how they compare.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<GraphRoomRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * Get a collection of the specified type of place objects defined in the tenant. For example, you can get all the rooms, all the room lists, or the rooms in a specific room list in the tenant. A place object can be one of the following types: Both room and roomList are derived from the place object. By default, this operation returns 100 places per page. Compared with the findRooms and findRoomLists functions, this operation returns a richer payload for rooms and room lists. See details for how they compare.
 */
export interface GraphRoomRequestBuilderGetQueryParameters {
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
export const GraphRoomRequestBuilderUriTemplate = "{+baseurl}/places/graph.room{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const GraphRoomRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const GraphRoomRequestBuilderNavigationMetadata: Record<Exclude<keyof GraphRoomRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const GraphRoomRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: GraphRoomRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createRoomCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: GraphRoomRequestBuilderGetQueryParametersMapper,
    },
};
/* tslint:enable */
/* eslint-enable */
