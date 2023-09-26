import { type SharedDriveItemCollectionResponse } from '../models/';
import { type ODataError } from '../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../models/oDataErrors/oDataError';
import { createSharedDriveItemFromDiscriminatorValue, deserializeIntoSharedDriveItem, serializeSharedDriveItem, type SharedDriveItem } from '../models/sharedDriveItem';
import { createSharedDriveItemCollectionResponseFromDiscriminatorValue } from '../models/sharedDriveItemCollectionResponse';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { SharedDriveItemItemRequestBuilder } from './item/sharedDriveItemItemRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface SharesRequestBuilderGetQueryParameters {
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
export interface SharesRequestBuilderGetRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
    /**
     * Request query parameters
     */
    queryParameters?: SharesRequestBuilderGetQueryParameters;
}
export interface SharesRequestBuilderPostRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
}
/**
 * Provides operations to manage the collection of sharedDriveItem entities.
 */
export class SharesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the collection of sharedDriveItem entities.
     * @param sharedDriveItemId The unique identifier of sharedDriveItem
     * @returns a SharedDriveItemItemRequestBuilder
     */
    public bySharedDriveItemId(sharedDriveItemId: string) : SharedDriveItemItemRequestBuilder {
        if(!sharedDriveItemId) throw new Error("sharedDriveItemId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["sharedDriveItem%2Did"] = sharedDriveItemId
        return new SharedDriveItemItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new SharesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/shares{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Access a shared DriveItem or a collection of shared items by using a shareId or sharing URL. To use a sharing URL with this API, your app needs to transform the URL into a sharing token.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of SharedDriveItemCollectionResponse
     */
    public get(requestConfiguration?: SharesRequestBuilderGetRequestConfiguration | undefined) : Promise<SharedDriveItemCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<SharedDriveItemCollectionResponse>(requestInfo, createSharedDriveItemCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Add new entity to shares
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of SharedDriveItem
     */
    public post(body: SharedDriveItem, requestConfiguration?: SharesRequestBuilderPostRequestConfiguration | undefined) : Promise<SharedDriveItem | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<SharedDriveItem>(requestInfo, createSharedDriveItemFromDiscriminatorValue, errorMapping);
    };
    /**
     * Access a shared DriveItem or a collection of shared items by using a shareId or sharing URL. To use a sharing URL with this API, your app needs to transform the URL into a sharing token.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: SharesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Add new entity to shares
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: SharedDriveItem, requestConfiguration?: SharesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeSharedDriveItem);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a sharesRequestBuilder
     */
    public withUrl(rawUrl: string) : SharesRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new SharesRequestBuilder(rawUrl, this.requestAdapter);
    };
}
