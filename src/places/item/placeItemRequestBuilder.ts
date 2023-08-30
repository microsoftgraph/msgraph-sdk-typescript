import {createPlaceFromDiscriminatorValue} from '../../models/createPlaceFromDiscriminatorValue';
import {deserializeIntoPlace} from '../../models/deserializeIntoPlace';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import type {Place} from '../../models/place';
import {serializePlace} from '../../models/serializePlace';
import {GraphRoomRequestBuilder} from './graphRoom/graphRoomRequestBuilder';
import {GraphRoomListRequestBuilder} from './graphRoomList/graphRoomListRequestBuilder';
import {PlaceItemRequestBuilderDeleteRequestConfiguration} from './placeItemRequestBuilderDeleteRequestConfiguration';
import {PlaceItemRequestBuilderPatchRequestConfiguration} from './placeItemRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the collection of place entities.
 */
export class PlaceItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Casts the previous resource to room.
     */
    public get graphRoom(): GraphRoomRequestBuilder {
        return new GraphRoomRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Casts the previous resource to roomList.
     */
    public get graphRoomList(): GraphRoomListRequestBuilder {
        return new GraphRoomListRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new PlaceItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/places/{place%2Did}");
    };
    /**
     * Delete entity from places
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: PlaceItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
        const requestInfo = this.toDeleteRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendNoResponseContentAsync(requestInfo, errorMapping);
    };
    /**
     * Update the properties of place object, which can be a room or roomList. You can identify the room or roomList by specifying the id or emailAddress property.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Place
     * @see {@link https://learn.microsoft.com/graph/api/place-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: Place, requestConfiguration?: PlaceItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<Place | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<Place>(requestInfo, createPlaceFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete entity from places
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: PlaceItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Update the properties of place object, which can be a room or roomList. You can identify the room or roomList by specifying the id or emailAddress property.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: Place, requestConfiguration?: PlaceItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializePlace);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a PlaceItemRequestBuilder
     */
    public withUrl(rawUrl: string) : PlaceItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new PlaceItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
