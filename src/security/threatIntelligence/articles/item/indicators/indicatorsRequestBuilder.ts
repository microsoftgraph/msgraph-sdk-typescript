import { type ODataError } from '../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../../../models/oDataErrors/oDataError';
import { type ArticleIndicatorCollectionResponse } from '../../../../../models/security/';
import { createArticleIndicatorCollectionResponseFromDiscriminatorValue } from '../../../../../models/security/articleIndicatorCollectionResponse';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { ArticleIndicatorItemRequestBuilder } from './item/articleIndicatorItemRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface IndicatorsRequestBuilderGetQueryParameters {
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
export interface IndicatorsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: IndicatorsRequestBuilderGetQueryParameters;
}
/**
 * Provides operations to manage the indicators property of the microsoft.graph.security.article entity.
 */
export class IndicatorsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the indicators property of the microsoft.graph.security.article entity.
     * @param articleIndicatorId The unique identifier of articleIndicator
     * @returns a ArticleIndicatorItemRequestBuilder
     */
    public byArticleIndicatorId(articleIndicatorId: string) : ArticleIndicatorItemRequestBuilder {
        if(!articleIndicatorId) throw new Error("articleIndicatorId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["articleIndicator%2Did"] = articleIndicatorId
        return new ArticleIndicatorItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new IndicatorsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/security/threatIntelligence/articles/{article%2Did}/indicators{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get a list of articleIndicator objects that represent indicators of threat or compromise related to the contents of an article. This API is supported in the following national cloud deployments.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ArticleIndicatorCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/security-article-list-indicators?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: IndicatorsRequestBuilderGetRequestConfiguration | undefined) : Promise<ArticleIndicatorCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ArticleIndicatorCollectionResponse>(requestInfo, createArticleIndicatorCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get a list of articleIndicator objects that represent indicators of threat or compromise related to the contents of an article. This API is supported in the following national cloud deployments.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: IndicatorsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a indicatorsRequestBuilder
     */
    public withUrl(rawUrl: string) : IndicatorsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new IndicatorsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
