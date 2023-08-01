import {ThumbnailSetCollectionResponse} from '../../../../../models/';
import {createThumbnailSetCollectionResponseFromDiscriminatorValue} from '../../../../../models/createThumbnailSetCollectionResponseFromDiscriminatorValue';
import {createThumbnailSetFromDiscriminatorValue} from '../../../../../models/createThumbnailSetFromDiscriminatorValue';
import {deserializeIntoThumbnailSet} from '../../../../../models/deserializeIntoThumbnailSet';
import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../models/oDataErrors/serializeODataError';
import {serializeThumbnailSet} from '../../../../../models/serializeThumbnailSet';
import type {ThumbnailSet} from '../../../../../models/thumbnailSet';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {ThumbnailSetItemRequestBuilder} from './item/thumbnailSetItemRequestBuilder';
import {ThumbnailsRequestBuilderGetRequestConfiguration} from './thumbnailsRequestBuilderGetRequestConfiguration';
import {ThumbnailsRequestBuilderPostRequestConfiguration} from './thumbnailsRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, getPathParameters} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the thumbnails property of the microsoft.graph.driveItem entity.
 */
export class ThumbnailsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the thumbnails property of the microsoft.graph.driveItem entity.
     * @param thumbnailSetId Unique identifier of the item
     * @returns a ThumbnailSetItemRequestBuilder
     */
    public byThumbnailSetId(thumbnailSetId: string) : ThumbnailSetItemRequestBuilder {
        if(!thumbnailSetId) throw new Error("thumbnailSetId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["thumbnailSet%2Did"] = thumbnailSetId
        return new ThumbnailSetItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new ThumbnailsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/thumbnails{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Retrieve a collection of ThumbnailSet resources for a DriveItem resource. A DriveItem can be represented by zero or more ThumbnailSet resources.Each thumbnailSet can have one or more thumbnail objects, which are images that represent the item.For example, a thumbnailSet may include thumbnail objects, such as common ones including small, medium, or large. There are many ways to work with thumbnails on OneDrive.Here are the most common ones:
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ThumbnailSetCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/driveitem-list-thumbnails?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: ThumbnailsRequestBuilderGetRequestConfiguration | undefined) : Promise<ThumbnailSetCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ThumbnailSetCollectionResponse>(requestInfo, createThumbnailSetCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to thumbnails for drives
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ThumbnailSet
     */
    public post(body: ThumbnailSet | undefined, requestConfiguration?: ThumbnailsRequestBuilderPostRequestConfiguration | undefined) : Promise<ThumbnailSet | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ThumbnailSet>(requestInfo, createThumbnailSetFromDiscriminatorValue, errorMapping);
    };
    /**
     * Retrieve a collection of ThumbnailSet resources for a DriveItem resource. A DriveItem can be represented by zero or more ThumbnailSet resources.Each thumbnailSet can have one or more thumbnail objects, which are images that represent the item.For example, a thumbnailSet may include thumbnail objects, such as common ones including small, medium, or large. There are many ways to work with thumbnails on OneDrive.Here are the most common ones:
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ThumbnailsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to thumbnails for drives
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: ThumbnailSet | undefined, requestConfiguration?: ThumbnailsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeThumbnailSet);
        return requestInfo;
    };
}
