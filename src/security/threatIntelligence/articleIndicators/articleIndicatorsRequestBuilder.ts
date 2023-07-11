import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {ArticleIndicatorCollectionResponse} from '../../../models/security/';
import {ArticleIndicator} from '../../../models/security/articleIndicator';
import {createArticleIndicatorCollectionResponseFromDiscriminatorValue} from '../../../models/security/createArticleIndicatorCollectionResponseFromDiscriminatorValue';
import {createArticleIndicatorFromDiscriminatorValue} from '../../../models/security/createArticleIndicatorFromDiscriminatorValue';
import {deserializeIntoArticleIndicator} from '../../../models/security/deserializeIntoArticleIndicator';
import {serializeArticleIndicator} from '../../../models/security/serializeArticleIndicator';
import {ArticleIndicatorsRequestBuilderGetRequestConfiguration} from './articleIndicatorsRequestBuilderGetRequestConfiguration';
import {ArticleIndicatorsRequestBuilderPostRequestConfiguration} from './articleIndicatorsRequestBuilderPostRequestConfiguration';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {ArticleIndicatorItemRequestBuilder} from './item/articleIndicatorItemRequestBuilder';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the articleIndicators property of the microsoft.graph.security.threatIntelligence entity.
 */
export class ArticleIndicatorsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the articleIndicators property of the microsoft.graph.security.threatIntelligence entity.
     * @param articleIndicatorId Unique identifier of the item
     * @returns a ArticleIndicatorItemRequestBuilder
     */
    public byArticleIndicatorId(articleIndicatorId: string) : ArticleIndicatorItemRequestBuilder {
        if(!articleIndicatorId) throw new Error("articleIndicatorId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["articleIndicator%2Did"] = articleIndicatorId
        return new ArticleIndicatorItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new ArticleIndicatorsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/security/threatIntelligence/articleIndicators{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Read the properties and relationships of an articleIndicator object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ArticleIndicatorCollectionResponse
     */
    public get(requestConfiguration?: ArticleIndicatorsRequestBuilderGetRequestConfiguration | undefined) : Promise<ArticleIndicatorCollectionResponse | undefined> {
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
     * Create new navigation property to articleIndicators for security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ArticleIndicator
     */
    public post(body: ArticleIndicator | undefined, requestConfiguration?: ArticleIndicatorsRequestBuilderPostRequestConfiguration | undefined) : Promise<ArticleIndicator | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ArticleIndicator>(requestInfo, createArticleIndicatorFromDiscriminatorValue, errorMapping);
    };
    /**
     * Read the properties and relationships of an articleIndicator object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ArticleIndicatorsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to articleIndicators for security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: ArticleIndicator | undefined, requestConfiguration?: ArticleIndicatorsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeArticleIndicator);
        return requestInfo;
    };
}
