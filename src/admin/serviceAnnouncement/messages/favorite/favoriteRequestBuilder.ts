import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {createFavoriteResponseFromDiscriminatorValue} from './createFavoriteResponseFromDiscriminatorValue';
import {deserializeIntoFavoritePostRequestBody} from './deserializeIntoFavoritePostRequestBody';
import {deserializeIntoFavoriteResponse} from './deserializeIntoFavoriteResponse';
import {FavoritePostRequestBody} from './favoritePostRequestBody';
import {FavoriteRequestBuilderPostRequestConfiguration} from './favoriteRequestBuilderPostRequestConfiguration';
import {FavoriteResponse} from './favoriteResponse';
import {serializeFavoritePostRequestBody} from './serializeFavoritePostRequestBody';
import {serializeFavoriteResponse} from './serializeFavoriteResponse';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the favorite method.
 */
export class FavoriteRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new FavoriteRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/admin/serviceAnnouncement/messages/favorite");
    };
    /**
     * Change the status of a list of serviceUpdateMessages to favorite for the signed in user.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of FavoriteResponse
     * @see {@link https://docs.microsoft.com/graph/api/serviceupdatemessage-favorite?view=graph-rest-1.0|Find more info here}
     */
    public post(body: FavoritePostRequestBody | undefined, requestConfiguration?: FavoriteRequestBuilderPostRequestConfiguration | undefined) : Promise<FavoriteResponse | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<FavoriteResponse>(requestInfo, createFavoriteResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Change the status of a list of serviceUpdateMessages to favorite for the signed in user.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: FavoritePostRequestBody | undefined, requestConfiguration?: FavoriteRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeFavoritePostRequestBody);
        return requestInfo;
    };
}
