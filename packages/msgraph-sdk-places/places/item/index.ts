/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createPlaceFromDiscriminatorValue, serializePlace, type Place } from '@microsoft/msgraph-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { GraphRoomRequestBuilderRequestsMetadata, type GraphRoomRequestBuilder } from './graphRoom/index.js';
// @ts-ignore
import { GraphRoomListRequestBuilderNavigationMetadata, GraphRoomListRequestBuilderRequestsMetadata, type GraphRoomListRequestBuilder } from './graphRoomList/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the collection of place entities.
 */
export interface PlaceItemRequestBuilder extends BaseRequestBuilder<PlaceItemRequestBuilder> {
    /**
     * Casts the previous resource to room.
     */
    get graphRoom(): GraphRoomRequestBuilder;
    /**
     * Casts the previous resource to roomList.
     */
    get graphRoomList(): GraphRoomListRequestBuilder;
    /**
     * Delete entity from places
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Update the properties of place object, which can be a room or roomList. You can identify the room or roomList by specifying the id or emailAddress property.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<Place>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/place-update?view=graph-rest-1.0|Find more info here}
     */
     patch(body: Place, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<Place | undefined>;
    /**
     * Delete entity from places
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Update the properties of place object, which can be a room or roomList. You can identify the room or roomList by specifying the id or emailAddress property.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: Place, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Uri template for the request builder.
 */
export const PlaceItemRequestBuilderUriTemplate = "{+baseurl}/places/{place%2Did}";
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const PlaceItemRequestBuilderNavigationMetadata: Record<Exclude<keyof PlaceItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    graphRoom: {
        requestsMetadata: GraphRoomRequestBuilderRequestsMetadata,
    },
    graphRoomList: {
        requestsMetadata: GraphRoomListRequestBuilderRequestsMetadata,
        navigationMetadata: GraphRoomListRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const PlaceItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: PlaceItemRequestBuilderUriTemplate,
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    patch: {
        uriTemplate: PlaceItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createPlaceFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializePlace,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
