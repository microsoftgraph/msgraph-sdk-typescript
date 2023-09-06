import { type TrendingCollectionResponse } from '../../../models/';
import { createTrendingCollectionResponseFromDiscriminatorValue } from '../../../models/createTrendingCollectionResponseFromDiscriminatorValue';
import { createTrendingFromDiscriminatorValue } from '../../../models/createTrendingFromDiscriminatorValue';
import { deserializeIntoTrending } from '../../../models/deserializeIntoTrending';
import { type ODataError } from '../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../models/oDataErrors/serializeODataError';
import { serializeTrending } from '../../../models/serializeTrending';
import { type Trending } from '../../../models/trending';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { TrendingItemRequestBuilder } from './item/trendingItemRequestBuilder';
import { type TrendingRequestBuilderGetRequestConfiguration } from './trendingRequestBuilderGetRequestConfiguration';
import { type TrendingRequestBuilderPostRequestConfiguration } from './trendingRequestBuilderPostRequestConfiguration';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the trending property of the microsoft.graph.officeGraphInsights entity.
 */
export class TrendingRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the trending property of the microsoft.graph.officeGraphInsights entity.
     * @param trendingId The unique identifier of trending
     * @returns a TrendingItemRequestBuilder
     */
    public byTrendingId(trendingId: string) : TrendingItemRequestBuilder {
        if(!trendingId) throw new Error("trendingId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["trending%2Did"] = trendingId
        return new TrendingItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new TrendingRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/me/insights/trending{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Calculated insight that includes a list of documents trending around the user.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of TrendingCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/insights-list-trending?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: TrendingRequestBuilderGetRequestConfiguration | undefined) : Promise<TrendingCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<TrendingCollectionResponse>(requestInfo, createTrendingCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to trending for me
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Trending
     */
    public post(body: Trending, requestConfiguration?: TrendingRequestBuilderPostRequestConfiguration | undefined) : Promise<Trending | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<Trending>(requestInfo, createTrendingFromDiscriminatorValue, errorMapping);
    };
    /**
     * Calculated insight that includes a list of documents trending around the user.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: TrendingRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to trending for me
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: Trending, requestConfiguration?: TrendingRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeTrending);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a trendingRequestBuilder
     */
    public withUrl(rawUrl: string) : TrendingRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new TrendingRequestBuilder(rawUrl, this.requestAdapter);
    };
}
