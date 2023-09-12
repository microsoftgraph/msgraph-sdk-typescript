import { type ODataError } from '../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../models/oDataErrors/serializeODataError';
import { type ArticleCollectionResponse } from '../../../models/security/';
import { type Article } from '../../../models/security/article';
import { createArticleCollectionResponseFromDiscriminatorValue } from '../../../models/security/createArticleCollectionResponseFromDiscriminatorValue';
import { createArticleFromDiscriminatorValue } from '../../../models/security/createArticleFromDiscriminatorValue';
import { deserializeIntoArticle } from '../../../models/security/deserializeIntoArticle';
import { serializeArticle } from '../../../models/security/serializeArticle';
import { type ArticlesRequestBuilderGetRequestConfiguration } from './articlesRequestBuilderGetRequestConfiguration';
import { type ArticlesRequestBuilderPostRequestConfiguration } from './articlesRequestBuilderPostRequestConfiguration';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { ArticleItemRequestBuilder } from './item/articleItemRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the articles property of the microsoft.graph.security.threatIntelligence entity.
 */
export class ArticlesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the articles property of the microsoft.graph.security.threatIntelligence entity.
     * @param articleId The unique identifier of article
     * @returns a ArticleItemRequestBuilder
     */
    public byArticleId(articleId: string) : ArticleItemRequestBuilder {
        if(!articleId) throw new Error("articleId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["article%2Did"] = articleId
        return new ArticleItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new ArticlesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/security/threatIntelligence/articles{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get a list of article objects, including their properties and relationships.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ArticleCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/security-article-list?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: ArticlesRequestBuilderGetRequestConfiguration | undefined) : Promise<ArticleCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ArticleCollectionResponse>(requestInfo, createArticleCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to articles for security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Article
     */
    public post(body: Article, requestConfiguration?: ArticlesRequestBuilderPostRequestConfiguration | undefined) : Promise<Article | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<Article>(requestInfo, createArticleFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get a list of article objects, including their properties and relationships.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ArticlesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to articles for security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: Article, requestConfiguration?: ArticlesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeArticle);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a articlesRequestBuilder
     */
    public withUrl(rawUrl: string) : ArticlesRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new ArticlesRequestBuilder(rawUrl, this.requestAdapter);
    };
}
