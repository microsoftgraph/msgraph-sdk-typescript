import {CountRequestBuilder} from './count/countRequestBuilder';
import {GraphRoomRequestBuilder} from './graphRoom/graphRoomRequestBuilder';
import {GraphRoomListRequestBuilder} from './graphRoomList/graphRoomListRequestBuilder';
import {PlaceItemRequestBuilder} from './item/placeItemRequestBuilder';
import {BaseRequestBuilder, RequestAdapter, getPathParameters} from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /places
 */
export class PlacesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
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
     * Provides operations to manage the collection of place entities.
     * @param placeId Unique identifier of the item
     * @returns a PlaceItemRequestBuilder
     */
    public byPlaceId(placeId: string) : PlaceItemRequestBuilder {
        if(!placeId) throw new Error("placeId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["place%2Did"] = placeId
        return new PlaceItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new PlacesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/places");
    };
}
